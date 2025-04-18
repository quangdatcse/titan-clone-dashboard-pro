
import { CreditCard } from "@/components/dashboard/CreditCard";
import { CreateVideoCard } from "@/components/dashboard/CreateVideoCard";
import { MyVideosCard } from "@/components/dashboard/MyVideosCard";
import { RecentVideosSection } from "@/components/dashboard/RecentVideosSection";
import { StatisticsSection } from "@/components/dashboard/StatisticsSection";

const Dashboard = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Bảng điều khiển</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <CreditCard 
          credit={0} 
          description="Số credit hiện có trong tài khoản của bạn" 
        />
        <CreateVideoCard 
          title="Tạo video mới" 
          description="Bắt đầu tạo video AI từ ý tưởng của bạn"
        />
        <MyVideosCard 
          title="Video của tôi" 
          description="Xem tất cả video đã tạo trong gallery"
        />
      </div>
      
      <RecentVideosSection />
      
      <StatisticsSection />
    </div>
  );
};

export default Dashboard;
