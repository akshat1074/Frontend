import { Edit, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function Profile() {
  const courses = [
    { id: 1, title: "Introduction to Identity & Ethics", image: "" },
    { id: 2, title: "Introduction to Identity & Ethics", image: "" },
    { id: 3, title: "Introduction to Identity & Ethics", image: "" },
    { id: 4, title: "Introduction to Identity & Ethics", image: "" },
    { id: 5, title: "Introduction to Identity & Ethics", image: "" },
    { id: 6, title: "Introduction to Identity & Ethics", image: "" },
  ];

  return (
    <div className="max-w-4xl space-y-8">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Profile</h1>
        <Button>
          <Edit className="mr-2 h-4 w-4" />
          Edit
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Profile Card */}
        <Card className="lg:col-span-1">
          <CardContent className="pt-6">
            <div className="flex flex-col items-center space-y-4">
              <Avatar className="h-24 w-24">
                <AvatarImage src="" alt="Profile" />
                <AvatarFallback className="text-2xl">TH</AvatarFallback>
              </Avatar>
              
              <div className="text-center">
                <h3 className="font-semibold text-lg">Tom Haniel</h3>
                <p className="text-muted-foreground">Creator Id: On</p>
              </div>

              <div className="w-full space-y-4">
                <div>
                  <Label className="text-sm font-medium">FULL NAME</Label>
                  <Input value="Tom Haniel" className="mt-1" />
                </div>

                <div>
                  <Label className="text-sm font-medium">PHONE NUMBER</Label>
                  <Input value="+1-999-999-1234" className="mt-1" />
                </div>

                <div>
                  <Label className="text-sm font-medium">EMAIL ADDRESS</Label>
                  <Input value="tomhaniel@gmail.com" className="mt-1" />
                </div>

                <div>
                  <Label className="text-sm font-medium">CITY, COUNTRY</Label>
                  <Input value="Washington DC, USA" className="mt-1" />
                </div>

                <div>
                  <Label className="text-sm font-medium">ORGANIZATION</Label>
                  <Input value="IBM, NPTI" className="mt-1" />
                </div>

                <div>
                  <Label className="text-sm font-medium">EXPERIENCE</Label>
                  <Input value="7+ years" className="mt-1" />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Main Content */}
        <div className="lg:col-span-2 space-y-6">
          {/* Bio Section */}
          <Card>
            <CardContent className="pt-6">
              <div className="space-y-4">
                <div>
                  <Label className="text-sm font-medium">BIO</Label>
                  <Textarea 
                    className="mt-1 min-h-[100px]"
                    value="I am interested in blockchain managed with educators and NFTES rehumanitized Systems from the University of International, hgh in mathematics about creating..... see more"
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Social Links */}
          <Card>
            <CardHeader>
              <CardTitle>Social Links</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label className="text-sm font-medium">WEBSITE</Label>
                <Input 
                  value="https://www.tomhaniel.com/about" 
                  className="mt-1"
                />
              </div>
              <div>
                <Label className="text-sm font-medium">FACEBOOK</Label>
                <Input 
                  value="https://facebook.com/tomhanielcourse" 
                  className="mt-1"
                />
              </div>
              <div>
                <Label className="text-sm font-medium">LINKEDIN</Label>
                <Input 
                  value="https://linkedin.com/in/tom_daniel" 
                  className="mt-1"
                />
              </div>
            </CardContent>
          </Card>

          {/* Courses Grid */}
          <Card>
            <CardHeader>
              <CardTitle>Courses</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {courses.map((course) => (
                  <div key={course.id} className="space-y-2">
                    <div className="aspect-video bg-gray-900 rounded-lg flex items-center justify-center">
                      <div className="text-center text-white">
                        <div className="w-12 h-12 bg-white/20 rounded-full mx-auto mb-2 flex items-center justify-center">
                          <Plus className="h-6 w-6" />
                        </div>
                        <p className="text-xs">Course Thumbnail</p>
                      </div>
                    </div>
                    <p className="text-sm font-medium text-center">{course.title}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}