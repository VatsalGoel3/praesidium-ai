import AlertTable from "../components/AlertTable";
import AlertTrendChart from "../components/AlertTrendChart";
import ErrorBoundary from "../components/ErrorBoundary";
import LoadingSpinner from "../components/LoadingSpinner";
import { Suspense } from "react";

export default function Dashboard() {
  return (
    <div className="space-y-6">
      <ErrorBoundary fallback={<div>Failed to load dashboard.</div>}>
        <Suspense fallback={<LoadingSpinner />}>
          <AlertTrendChart />
          <AlertTable />
        </Suspense>
      </ErrorBoundary>
    </div>
  );
}