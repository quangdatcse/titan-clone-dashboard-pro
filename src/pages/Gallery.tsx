
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Gallery = () => {
  const emptyGallery = true; // This would normally come from an API or context

  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-8">Thư viện video</h1>

      {emptyGallery ? (
        <Card className="max-w-4xl mx-auto">
          <CardContent className="flex flex-col items-center justify-center py-12">
            <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mb-4">
              <span className="text-2xl">🎬</span>
            </div>
            <h2 className="text-xl font-semibold mb-2">Chưa có video nào</h2>
            <p className="text-muted-foreground text-center mb-6 max-w-md">
              Bạn chưa tạo video nào. Bắt đầu tạo video đầu tiên của bạn ngay bây giờ.
            </p>
            <Button className="bg-primary hover:bg-primary/90">
              Tạo video đầu tiên
            </Button>
          </CardContent>
        </Card>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Gallery items would go here */}
        </div>
      )}
    </div>
  );
};

export default Gallery;
