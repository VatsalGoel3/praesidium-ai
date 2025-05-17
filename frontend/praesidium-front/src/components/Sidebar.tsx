import { ShieldCheck, Activity } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";

export function Sidebar() {
  const { pathname } = useLocation();
  const nav = [
    { to: "/", label: "Dashboard", icon: <Activity size={18} /> },
    { to: "/alerts", label: "Alerts", icon: <ShieldCheck size={18} /> },
  ];

  return (
    <aside className="w-56 shrink-0 border-r bg-card">
      <div className="px-4 py-6 text-lg font-semibold">PraesidiumAI</div>
      {nav.map(n => (
        <Link key={n.to} to={n.to}>
          <Button
            variant={pathname === n.to ? "secondary" : "ghost"}
            className="w-full justify-start gap-2 px-4"
          >
            {n.icon} {n.label}
          </Button>
        </Link>
      ))}
    </aside>
  );
}