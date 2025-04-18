
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronRightIcon, ListIcon } from "lucide-react";
import { Link } from "react-router-dom";

interface MyVideosCardProps {
  title: string;
  description: string;
}

export const MyVideosCard = ({ title, description }: MyVideosCardProps) => {
  return (
    <Card className="border-green-100 bg-green-50">
      <CardContent className="p-6">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
            <ListIcon className="h-6 w-6 text-green-500" />
          </div>
          <div className="flex-1">
            <h3 className="text-lg font-medium">{title}</h3>
            <p className="text-sm text-muted-foreground mt-1">{description}</p>
            <Link to="/dashboard/my-videos">
              <Button 
                variant="outline" 
                className="mt-4 border-green-200 text-green-700 hover:bg-green-100 hover:text-green-800"
              >
                Xem gallery
                <ChevronRightIcon className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
