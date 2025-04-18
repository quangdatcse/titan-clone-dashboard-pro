
import { ReactNode } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface DashboardMetricCardProps {
  title: string;
  value: string | number;
  description?: string;
  icon?: ReactNode;
  className?: string;
}

export const DashboardMetricCard = ({
  title,
  value,
  description,
  icon,
  className,
}: DashboardMetricCardProps) => {
  return (
    <Card className={className}>
      <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        {icon && <div className="w-4 h-4">{icon}</div>}
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        {description && (
          <CardDescription className="text-xs mt-1">{description}</CardDescription>
        )}
      </CardContent>
    </Card>
  );
};
