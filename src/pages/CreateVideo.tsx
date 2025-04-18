
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { UploadIcon, ImageIcon, TextIcon, MicIcon } from "lucide-react";

const CreateVideo = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Tạo video mới</h1>

      <Tabs defaultValue="text" className="w-full">
        <TabsList className="mb-6">
          <TabsTrigger value="text" className="flex items-center gap-2">
            <TextIcon className="h-4 w-4" />
            <span>Văn bản</span>
          </TabsTrigger>
          <TabsTrigger value="image" className="flex items-center gap-2">
            <ImageIcon className="h-4 w-4" />
            <span>Hình ảnh</span>
          </TabsTrigger>
          <TabsTrigger value="voice" className="flex items-center gap-2">
            <MicIcon className="h-4 w-4" />
            <span>Giọng nói</span>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="text" className="w-full">
          <Card>
            <CardHeader>
              <CardTitle>Tạo video từ văn bản</CardTitle>
              <CardDescription>
                Nhập hoặc dán văn bản của bạn để tạo video
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="title">Tiêu đề</Label>
                  <Input id="title" placeholder="Nhập tiêu đề cho video của bạn" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="description">Mô tả</Label>
                  <Textarea
                    id="description"
                    placeholder="Mô tả chi tiết về video bạn muốn tạo..."
                    rows={5}
                  />
                </div>
                <div className="space-y-2">
                  <Label>Phong cách</Label>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {["Phong cảnh", "Hoạt hình", "3D", "Thực tế"].map((style) => (
                      <Button key={style} variant="outline" className="justify-start">
                        {style}
                      </Button>
                    ))}
                  </div>
                </div>
                <Button className="w-full bg-primary hover:bg-primary/90">
                  Tạo video
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="image">
          <Card>
            <CardHeader>
              <CardTitle>Tạo video từ hình ảnh</CardTitle>
              <CardDescription>
                Tải lên hình ảnh để tạo video
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="border-2 border-dashed border-muted-foreground/25 rounded-lg p-12 text-center">
                  <div className="flex flex-col items-center">
                    <UploadIcon className="h-8 w-8 text-muted-foreground mb-4" />
                    <h3 className="font-medium mb-1">Kéo và thả hình ảnh vào đây</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Hoặc click để chọn hình ảnh từ máy tính
                    </p>
                    <Button variant="outline">Chọn hình ảnh</Button>
                  </div>
                </div>
                <Button className="w-full" disabled>
                  Tạo video
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="voice">
          <Card>
            <CardHeader>
              <CardTitle>Tạo video từ giọng nói</CardTitle>
              <CardDescription>
                Ghi âm hoặc tải lên file âm thanh để tạo video
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="border-2 border-dashed border-muted-foreground/25 rounded-lg p-12 text-center">
                  <div className="flex flex-col items-center">
                    <MicIcon className="h-8 w-8 text-muted-foreground mb-4" />
                    <h3 className="font-medium mb-1">Nhấn để bắt đầu ghi âm</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Hoặc tải lên file âm thanh từ máy tính
                    </p>
                    <div className="flex gap-2">
                      <Button variant="outline">Bắt đầu ghi âm</Button>
                      <Button variant="outline">Tải lên</Button>
                    </div>
                  </div>
                </div>
                <Button className="w-full" disabled>
                  Tạo video
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default CreateVideo;
