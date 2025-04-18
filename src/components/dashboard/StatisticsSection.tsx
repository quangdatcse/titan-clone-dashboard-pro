
import { DashboardMetricCard } from "./DashboardMetricCard";

export const StatisticsSection = () => {
  return (
    <section className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      <DashboardMetricCard
        title="Tổng số video"
        value="0"
        description="Cập nhật mới nhất"
      />
      <DashboardMetricCard
        title="Tổng lượt xem"
        value="0"
        description="Dựa trên video hiện có"
      />
      <DashboardMetricCard
        title="Video đang xử lý"
        value="-"
        description="Đang cập nhật"
      />
      <DashboardMetricCard
        title="Storyboards"
        value="-"
        description="Đang cập nhật"
      />
    </section>
  );
};
