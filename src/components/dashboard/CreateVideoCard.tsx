
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PlusIcon, VideoIcon } from "lucide-react";
import { Link } from "react-router-dom";

interface CreateVideoCardProps {
  title: string;
  description: string;
}

export const CreateVideoCard = ({ title, description }: CreateVideoCardProps) => {
  return (
    <Card className="border-blue-100 bg-blue-50">
      <CardContent className="p-6">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
            <VideoIcon className="h-6 w-6 text-blue-500" />
          </div>
          <div className="flex-1">
            <h3 className="text-lg font-medium">{title}</h3>
            <p className="text-sm text-muted-foreground mt-1">{description}</p>
            <Link to="/dashboard/create">
              <Button className="mt-4 bg-primary hover:bg-primary/90">
                <PlusIcon className="mr-2 h-4 w-4" />
                Tạo ngay
              </Button>
            </Link>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
