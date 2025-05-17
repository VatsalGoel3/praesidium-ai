import { Badge } from "@/components/ui/badge";

const color = {
  low: "bg-green-500 text-white",
  medium: "bg-yellow-500 text-black",
  high: "bg-red-500 text-white",
} as const;

export function Severity({ level }: { level: "low" | "medium" | "high" }) {
  return <Badge className={color[level]}>{level}</Badge>;
}
