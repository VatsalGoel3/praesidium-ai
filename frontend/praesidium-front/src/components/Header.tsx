import ModeToggle from "../components/mode-toggle";

export function Header() {
  return (
    <header className="flex items-center justify-between border-b px-4 py-2 bg-background">
      <h1 className="text-xl font-semibold">Dashboard</h1>
      <ModeToggle />
    </header>
  );
}