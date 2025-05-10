import { useEffect, useState } from "react";
import axios from "axios";

interface Alert { id: number; type: string; severity: string; summary: string; }

export default function AlertTable() {
    const [alerts, setAlerts] = useState<Alert[]>([]);
    useEffect(() => {
        axios.get('/api/alerts').then(r => setAlerts(r.data));
    }, []);
    return (
        <div className="p-4">
          <h1 className="text-2xl font-bold mb-4">Alerts</h1>
          <table className="w-full border">
            <thead>
              <tr className="bg-gray-100">
                <th className="px-2 py-1">ID</th><th>Type</th><th>Severity</th><th>Summary</th>
              </tr>
            </thead>
            <tbody>
              {alerts.map(a => (
                <tr key={a.id} className="border-t">
                  <td className="px-2">{a.id}</td><td>{a.type}</td><td>{a.severity}</td><td>{a.summary}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
    );
}