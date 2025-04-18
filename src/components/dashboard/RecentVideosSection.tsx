
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PlusIcon } from "lucide-react";
import { Link } from "react-router-dom";

export const RecentVideosSection = () => {
  const hasVideos = false; // This would be a state from API/context in a real app

  return (
    <section className="mt-8">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold">Video gần đây</h2>
        <div className="text-sm text-muted-foreground">
          Những video bạn đã tạo gần đây nhất
        </div>
      </div>

      <Card className="p-6">
        {hasVideos ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Video items would go here */}
            <div>Video item</div>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-12">
            <p className="text-center text-muted-foreground mb-4">
              Bạn chưa có video nào
            </p>
            <Link to="/dashboard/create">
              <Button>
                <PlusIcon className="mr-2 h-4 w-4" />
                Tạo video đầu tiên
              </Button>
            </Link>
          </div>
        )}
      </Card>
    </section>
  );
};
