
import { Link, useLocation } from "react-router-dom";
import {
  CreditCard,
  LayoutDashboard,
  FileVideo,
  Clock,
  LibraryBig,
  History,
  HelpCircle,
  Settings,
} from "lucide-react";

export const Sidebar = () => {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const sidebarItems = [
    {
      icon: LayoutDashboard,
      label: "Tổng quan",
      path: "/dashboard",
    },
    {
      icon: FileVideo,
      label: "Tạo video",
      path: "/dashboard/create",
    },
    {
      icon: Clock,
      label: "Đang xử lý",
      path: "/dashboard/processing",
    },
    {
      icon: LibraryBig,
      label: "Video của tôi",
      path: "/dashboard/my-videos",
    },
    {
      icon: LibraryBig,
      label: "Kho lưu trữ",
      path: "/dashboard/archive",
    },
    {
      icon: History,
      label: "Lịch sử",
      path: "/dashboard/history",
    },
    {
      icon: HelpCircle,
      label: "Hướng dẫn",
      path: "/dashboard/guide",
    },
    {
      icon: CreditCard,
      label: "Mua credit",
      path: "/dashboard/buy-credits",
    },
    {
      icon: Settings,
      label: "Cài đặt",
      path: "/dashboard/settings",
    },
  ];

  return (
    <aside className="w-60 border-r border-border h-screen flex flex-col">
      <div className="py-4 px-2 flex-1 overflow-y-auto">
        <ul className="space-y-1">
          {sidebarItems.map((item) => (
            <li key={item.path}>
              <Link
                to={item.path}
                className={`flex items-center px-4 py-2 rounded-lg text-sm ${
                  isActive(item.path)
                    ? "bg-primary text-primary-foreground"
                    : "text-foreground hover:bg-secondary"
                }`}
              >
                <item.icon className="mr-2 h-5 w-5" />
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="p-4 border-t border-border">
        <div className="flex items-center">
          <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center">
            <span className="text-sm font-medium">U</span>
          </div>
          <div className="ml-2 overflow-hidden">
            <p className="text-sm font-medium truncate">user@example.com</p>
          </div>
        </div>
      </div>
    </aside>
  );
};
