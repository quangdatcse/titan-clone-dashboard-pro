
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { RefreshCwIcon } from "lucide-react";

interface CreditCardProps {
  credit: number;
  description: string;
}

export const CreditCard = ({ credit, description }: CreditCardProps) => {
  return (
    <Card className="border-yellow-100 bg-yellow-50">
      <CardContent className="p-6">
        <div className="flex justify-between items-start">
          <div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-yellow-200 flex items-center justify-center">
                <span className="text-yellow-600 text-lg">💰</span>
              </div>
              <h3 className="text-xl font-bold">{credit} credit</h3>
            </div>
            <p className="text-sm text-muted-foreground mt-2">{description}</p>
          </div>
          <Button size="icon" variant="ghost" className="h-8 w-8">
            <RefreshCwIcon className="h-4 w-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};
