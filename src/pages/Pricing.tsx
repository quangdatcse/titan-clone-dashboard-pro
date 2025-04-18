
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckIcon } from "lucide-react";

const Pricing = () => {
  const pricingPlans = [
    {
      name: "Starter",
      description: "Dành cho người mới bắt đầu",
      price: "199,000",
      credits: 100,
      features: [
        "100 credit",
        "Tạo video cơ bản",
        "Tối đa 720p",
        "Hỗ trợ email",
        "1 GB lưu trữ",
      ],
      buttonText: "Bắt đầu",
      popular: false,
    },
    {
      name: "Professional",
      description: "Dành cho người dùng cá nhân",
      price: "499,000",
      credits: 300,
      features: [
        "300 credit",
        "Tạo video nâng cao",
        "Tối đa 1080p",
        "Hỗ trợ ưu tiên",
        "5 GB lưu trữ",
        "Xuất video không watermark",
      ],
      buttonText: "Đăng ký",
      popular: true,
    },
    {
      name: "Enterprise",
      description: "Dành cho doanh nghiệp",
      price: "999,000",
      credits: 700,
      features: [
        "700 credit",
        "Tất cả tính năng nâng cao",
        "Tối đa 4K",
        "Hỗ trợ 24/7",
        "20 GB lưu trữ",
        "Tùy chỉnh theo yêu cầu",
        "API tích hợp",
      ],
      buttonText: "Liên hệ",
      popular: false,
    },
  ];

  return (
    <div className="container mx-auto py-12 px-4">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold mb-4">Bảng giá đơn giản, minh bạch</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Chọn gói phù hợp với nhu cầu của bạn. Tất cả các gói đều bao gồm các tính năng cơ bản.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {pricingPlans.map((plan) => (
          <Card 
            key={plan.name} 
            className={`relative ${plan.popular ? 'border-primary shadow-lg' : ''}`}
          >
            {plan.popular && (
              <div className="absolute top-0 right-0 transform translate-x-1/4 -translate-y-1/2">
                <span className="bg-primary text-primary-foreground text-xs py-1 px-3 rounded-full">
                  Phổ biến nhất
                </span>
              </div>
            )}
            <CardHeader>
              <CardTitle>{plan.name}</CardTitle>
              <CardDescription>{plan.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="mb-6">
                <p className="text-4xl font-bold">{plan.price} ₫</p>
                <p className="text-sm text-muted-foreground mt-1">
                  {plan.credits} credit
                </p>
              </div>
              <ul className="space-y-2">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center">
                    <CheckIcon className="h-4 w-4 text-primary mr-2" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Button 
                className={`w-full ${plan.popular ? 'bg-primary hover:bg-primary/90' : ''}`}
                variant={plan.popular ? 'default' : 'outline'}
              >
                {plan.buttonText}
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
