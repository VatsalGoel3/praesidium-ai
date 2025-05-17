import { useState, useEffect, useRef } from "react";
import axios from "axios";
import { toast } from "../hooks/use-toast";

export interface Alert {
  id: number;
  type: string;
  severity: string;
  summary: string;
}

export function useAlerts() {
  const [alerts, setAlerts] = useState<Alert[]>([]);
  const lastId = useRef<number>(0);

  useEffect(() => {
    const fetchAlerts = async () => {
      const { data } = await axios.get<Alert[]>("/api/alerts");
      const newest = data.filter((a) => a.id > lastId.current);
      if (newest.length) {
        toast({ title: "🔔 New Alert", description: newest[0].summary });
        lastId.current = Math.max(...data.map((a) => a.id));
      }
      setAlerts(data);
    };

    fetchAlerts();
    const id = setInterval(fetchAlerts, 5000);
    return () => clearInterval(id);
  }, []);

  return alerts;
}