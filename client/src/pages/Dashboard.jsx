import DashboardLayout from "../layouts/DashboardLayout";
import useAnalytics from "../hooks/useAnalytics";

import KPICards from "../components/analytics/KPICards";
import LowStockChart from "../components/analytics/LowStockChart";
import CategoryPieChart from "../components/analytics/CategoryPieChart";
import SkeletonCard from "../components/common/SkeletonCard";



const Dashboard = () => {
  const { analytics, loading } =
    useAnalytics();

  if (loading) {
  return (
    <DashboardLayout>
      <div className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <SkeletonCard />
          <SkeletonCard />
          <SkeletonCard />
        </div>

        <div className="bg-white rounded-xl h-96 animate-pulse"></div>
        <div className="bg-white rounded-xl h-96 animate-pulse"></div>
      </div>
    </DashboardLayout>
  );
}

  return (
    <DashboardLayout>
      <div className="max-w-7xl mx-auto space-y-8">

        <KPICards
          summary={analytics.summary}
        />

        <LowStockChart
          data={analytics.lowStockProducts}
        />

        <CategoryPieChart
          data={
            analytics.categoryDistribution
          }
        />

      </div>
    </DashboardLayout>
  );
};

export default Dashboard;