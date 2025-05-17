import { useAlerts } from "../hooks/useAlerts";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../components/ui/table";
import { Severity } from "../components/Severity";

export default function AlertTable() {
  const alerts = useAlerts();

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Alerts</h1>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>ID</TableHead>
            <TableHead>Type</TableHead>
            <TableHead>Severity</TableHead>
            <TableHead>Summary</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {alerts.map((a) => (
            <TableRow key={a.id}>
              <TableCell>{a.id}</TableCell>
              <TableCell>{a.type}</TableCell>
              <TableCell><Severity level={a.severity as "low" | "medium" | "high"} /></TableCell>
              <TableCell>{a.summary}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}