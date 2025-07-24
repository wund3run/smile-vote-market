import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  MessageSquare,
  Search,
  Send,
  Calendar,
  Bell,
  ChevronRight,
  Phone,
  Video,
  MoreVertical,
  PlusCircle,
  Image as ImageIcon,
  Paperclip,
  Smile
} from "lucide-react";

export function CommunicationHub() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-12 gap-6">
        {/* Contacts & Conversations List */}
        <div className="col-span-12 md:col-span-4 lg:col-span-3">
          <Card className="h-[calc(100vh-10rem)]">
            <CardHeader>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <CardTitle>Messages</CardTitle>
                  <Button size="icon" variant="ghost">
                    <PlusCircle className="h-5 w-5" />
                  </Button>
                </div>
                <div className="relative">
                  <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input placeholder="Search conversations..." className="pl-8" />
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {/* Sample conversation */}
                <div className="flex items-center gap-4 p-2 rounded-lg hover:bg-muted cursor-pointer">
                  <Avatar>
                    <AvatarImage src="/placeholder-avatar.jpg" />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-start">
                      <p className="font-medium truncate">John Doe</p>
                      <span className="text-xs text-muted-foreground">2m</span>
                    </div>
                    <p className="text-sm text-muted-foreground truncate">
                      Latest message preview...
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Chat Window */}
        <div className="col-span-12 md:col-span-8 lg:col-span-6">
          <Card className="h-[calc(100vh-10rem)]">
            <CardHeader className="border-b">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-4">
                  <Avatar>
                    <AvatarImage src="/placeholder-avatar.jpg" />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="font-medium">John Doe</h3>
                    <p className="text-sm text-muted-foreground">Online</p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button variant="ghost" size="icon">
                    <Phone className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="icon">
                    <Video className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="icon">
                    <MoreVertical className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent className="p-0">
              <div className="h-[calc(100%-8rem)] overflow-y-auto p-4">
                {/* Messages would go here */}
              </div>
              <div className="border-t p-4">
                <div className="flex items-center gap-2">
                  <Button variant="ghost" size="icon">
                    <Paperclip className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="icon">
                    <ImageIcon className="h-4 w-4" />
                  </Button>
                  <Input placeholder="Type a message..." className="flex-1" />
                  <Button variant="ghost" size="icon">
                    <Smile className="h-4 w-4" />
                  </Button>
                  <Button>
                    <Send className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Info Panel */}
        <div className="hidden lg:block lg:col-span-3">
          <Card className="h-[calc(100vh-10rem)]">
            <CardHeader>
              <CardTitle>Details</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h4 className="text-sm font-medium mb-2">Shared Files</h4>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 p-2 rounded-lg hover:bg-muted cursor-pointer">
                      <ImageIcon className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">X-Ray-001.jpg</span>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h4 className="text-sm font-medium mb-2">Upcoming</h4>
                  <div className="space-y-2">
                    <div className="p-2 rounded-lg hover:bg-muted cursor-pointer">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4 text-primary" />
                        <span className="text-sm font-medium">Follow-up</span>
                      </div>
                      <p className="text-xs text-muted-foreground ml-6">
                        Tomorrow, 2:30 PM
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
