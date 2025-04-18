
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="flex flex-col items-center text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Tạo Video AI Chất Lượng Cao Trong Tích Tắc
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl">
              TitanLabs giúp bạn biến ý tưởng thành video chỉ với vài cú nhấp chuột. 
              Công nghệ AI tiên tiến, dễ sử dụng, kết quả chuyên nghiệp.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/dashboard">
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  Bắt đầu ngay
                </Button>
              </Link>
              <Link to="/gallery">
                <Button size="lg" variant="outline">
                  Xem thư viện mẫu
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-secondary/50">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl font-bold text-center mb-12">Tính năng nổi bật</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <span className="text-primary text-2xl">🎬</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Tạo video AI</h3>
              <p className="text-muted-foreground">
                Tạo video từ văn bản, hình ảnh hoặc âm thanh với công nghệ AI tiên tiến.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <span className="text-primary text-2xl">⚡</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Xử lý nhanh chóng</h3>
              <p className="text-muted-foreground">
                Hệ thống xử lý video nhanh chóng, tiết kiệm thời gian của bạn.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <span className="text-primary text-2xl">🎨</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Đa dạng phong cách</h3>
              <p className="text-muted-foreground">
                Hàng trăm mẫu và phong cách khác nhau để lựa chọn hoặc tạo phong cách riêng.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-5xl text-center">
          <h2 className="text-3xl font-bold mb-6">Sẵn sàng để tạo video đầu tiên?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Đăng ký ngay hôm nay và nhận credit miễn phí để trải nghiệm sức mạnh của TitanLabs.
          </p>
          <Link to="/dashboard">
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              Bắt đầu miễn phí
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Index;
