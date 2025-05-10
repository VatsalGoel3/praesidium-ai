from fastapi import FastAPI, UploadFile, File, HTTPException
from sqlmodel import SQLModel, Field, Session, create_engine, select
from loguru import logger
from pathlib import Path
import yara
# from phishpedia_tinynet import predict_url

DATABASE_URL = "postgresql+psycopg://postgres:postgres@db:5432/praesidium"
engine = create_engine(DATABASE_URL, echo=False)

class Alert(SQLModel, table=True):
    id: int | None = Field(default=None, primary_key=True)
    type: str
    severity: str
    summary: str

app = FastAPI(title="PraesidiumAI API", version="0.1.0")

@app.on_event("startup")
def on_startup():
    SQLModel.metadata.create_all(engine)
    global YARA_RULES
    YARA_RULES = yara.compile(filepath="rules/windows_malware.yar")

@app.get("/health")
def health():
    return {"status": "ok"}

@app.post("/scan/file")
async def scan_file(upload: UploadFile = File(...)):
    tmp_path = Path("/tmp") / upload.filename
    with tmp_path.open("wb") as f:
        f.write(await upload.read())
    matches = YARA_RULES.match(str(tmp_path))
    alerts = []
    with Session(engine) as session:
        for m in matches:
            alert = Alert(type="malware", severity="high", summary=m.rule)
            session.add(alert)
            session.commit()
            session.refresh(alert)
            alerts.append(alert)
    return alerts

@app.get("/alerts")
def list_alerts():
    with Session(engine) as session:
        return session.exec(select(Alert)).all()