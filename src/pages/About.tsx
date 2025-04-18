
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <div className="container mx-auto py-12 px-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Về TitanLabs</h1>
        
        <div className="prose max-w-none">
          <p className="text-lg mb-6">
            TitanLabs là nền tảng tạo video bằng AI hàng đầu, được thiết kế để giúp mọi người dễ dàng tạo ra các video chất lượng cao mà không cần kiến thức chuyên sâu về chỉnh sửa video.
          </p>
          
          <h2 className="text-2xl font-semibold mt-10 mb-4">Sứ mệnh của chúng tôi</h2>
          <p className="mb-6">
            Chúng tôi tin rằng việc tạo nội dung video chất lượng cao không nên bị giới hạn bởi kỹ năng kỹ thuật hoặc ngân sách. Sứ mệnh của chúng tôi là dân chủ hóa việc sản xuất video bằng cách cung cấp công cụ dễ sử dụng, tiết kiệm thời gian và chi phí cho tất cả mọi người.
          </p>
          
          <h2 className="text-2xl font-semibold mt-10 mb-4">Công nghệ của chúng tôi</h2>
          <p className="mb-6">
            TitanLabs sử dụng các mô hình AI tiên tiến nhất để tạo ra video chất lượng cao từ văn bản, hình ảnh hoặc âm thanh. Chúng tôi liên tục cải tiến thuật toán để đảm bảo kết quả luôn đẹp mắt và chuyên nghiệp.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-10">
            <Card>
              <CardContent className="pt-6">
                <div className="text-4xl font-bold text-primary mb-2">100K+</div>
                <p className="text-sm text-muted-foreground">Video đã được tạo</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="text-4xl font-bold text-primary mb-2">50+</div>
                <p className="text-sm text-muted-foreground">Phong cách video</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="text-4xl font-bold text-primary mb-2">10K+</div>
                <p className="text-sm text-muted-foreground">Khách hàng hài lòng</p>
              </CardContent>
            </Card>
          </div>
          
          <h2 className="text-2xl font-semibold mt-10 mb-4">Đội ngũ của chúng tôi</h2>
          <p className="mb-6">
            TitanLabs được thành lập bởi một nhóm chuyên gia trong lĩnh vực AI và sản xuất video, với hơn 10 năm kinh nghiệm trong ngành. Chúng tôi đam mê về việc tạo ra công nghệ đột phá để giúp mọi người kể câu chuyện của họ một cách hiệu quả hơn.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
