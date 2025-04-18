
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { PlusIcon } from "lucide-react";
import { Link } from "react-router-dom";

const MyVideos = () => {
  const hasVideos = false; // This would be a state from API/context in a real app

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Video của tôi</h1>
        <Link to="/dashboard/create">
          <Button className="bg-primary hover:bg-primary/90">
            <PlusIcon className="mr-2 h-4 w-4" />
            Tạo video mới
          </Button>
        </Link>
      </div>

      {hasVideos ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Video items would go here */}
        </div>
      ) : (
        <Card>
          <CardContent className="flex flex-col items-center justify-center py-12">
            <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mb-4">
              <span className="text-2xl">🎬</span>
            </div>
            <h2 className="text-xl font-semibold mb-2">Chưa có video nào</h2>
            <p className="text-muted-foreground text-center mb-6 max-w-md">
              Bạn chưa tạo video nào. Bắt đầu tạo video đầu tiên của bạn ngay bây giờ.
            </p>
            <Link to="/dashboard/create">
              <Button className="bg-primary hover:bg-primary/90">
                Tạo video đầu tiên
              </Button>
            </Link>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default MyVideos;
