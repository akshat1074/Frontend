"use client"
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { 
  BookOpen, 
  Users, 
  Award, 
  TrendingUp, 
  Calendar, 
  MessageCircle,
  Plus,
  Play
} from "lucide-react";
import { useRouter } from "next/navigation";

const Index = () => {
  const router = useRouter();

  const stats = [
    { title: "Active Courses", value: "3", icon: BookOpen, color: "text-blue-600", bg: "bg-blue-50" },
    { title: "Total Students", value: "1,247", icon: Users, color: "text-green-600", bg: "bg-green-50" },
    { title: "Certificates Issued", value: "892", icon: Award, color: "text-purple-600", bg: "bg-purple-50" },
    { title: "Course Rating", value: "4.8", icon: TrendingUp, color: "text-orange-600", bg: "bg-orange-50" },
  ];

  const recentCourses = [
    { 
      title: "Introduction to DAOs", 
      students: 423, 
      progress: 75, 
      status: "Active",
      thumbnail: ""
    },
    { 
      title: "Blockchain Fundamentals", 
      students: 356, 
      progress: 60, 
      status: "Active",
      thumbnail: ""
    },
    { 
      title: "Web3 Development", 
      students: 468, 
      progress: 90, 
      status: "Draft",
      thumbnail: ""
    },
  ];

  const upcomingSessions = [
    { title: "DAO Governance Q&A", date: "Tomorrow, 2:00 PM", participants: 45 },
    { title: "Blockchain Basics Workshop", date: "Oct 25, 10:00 AM", participants: 67 },
    { title: "Web3 Office Hours", date: "Oct 27, 3:00 PM", participants: 23 },
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Dashboard</h1>
          <p className="text-muted-foreground">Welcome back! Here{"'"}s what{"'"}s happening with your courses.</p>
        </div>
        <Button onClick={() => router.push('/upload-courses')} className="bg-gradient-primary">
          <Plus className="mr-2 h-4 w-4" />
          Create New Course
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <Card key={index} className="hover:shadow-card transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">{stat.title}</p>
                    <p className="text-3xl font-bold">{stat.value}</p>
                  </div>
                  <div className={`p-3 rounded-lg ${stat.bg}`}>
                    <Icon className={`h-6 w-6 ${stat.color}`} />
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Recent Courses */}
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Your Courses</CardTitle>
                <Button variant="outline" size="sm" onClick={() => router.push('/upload-courses')}>
                  View All
                </Button>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              {recentCourses.map((course, index) => (
                <div key={index} className="flex items-center space-x-4 p-4 bg-muted rounded-lg hover:bg-muted/80 transition-colors">
                  <div className="w-16 h-12 bg-gray-900 rounded flex items-center justify-center">
                    <Play className="h-4 w-4 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold">{course.title}</h4>
                      <Badge variant={course.status === 'Active' ? 'default' : 'secondary'}>
                        {course.status}
                      </Badge>
                    </div>
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                      <span className="flex items-center">
                        <Users className="mr-1 h-3 w-3" />
                        {course.students} students
                      </span>
                      <span>Progress: {course.progress}%</span>
                    </div>
                    <Progress value={course.progress} className="mt-2 h-2" />
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Upcoming Sessions */}
        <div>
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="flex items-center">
                  <Calendar className="mr-2 h-5 w-5" />
                  Upcoming Sessions
                </CardTitle>
                <Button variant="outline" size="sm" onClick={() => router.push('/schedule')}>
                  Schedule
                </Button>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              {upcomingSessions.map((session, index) => (
                <div key={index} className="p-3 bg-muted rounded-lg">
                  <h4 className="font-medium text-sm">{session.title}</h4>
                  <p className="text-xs text-muted-foreground mt-1">{session.date}</p>
                  <div className="flex items-center justify-between mt-2">
                    <span className="text-xs text-muted-foreground flex items-center">
                      <Users className="mr-1 h-3 w-3" />
                      {session.participants} registered
                    </span>
                    <Button size="sm" variant="ghost" className="h-6 text-xs px-2">
                      Join
                    </Button>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <Card className="mt-6">
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <Button 
                className="w-full justify-start" 
                variant="outline"
                onClick={() => router.push('/quiz-assessment')}
              >
                <MessageCircle className="mr-2 h-4 w-4" />
                Create Assessment
              </Button>
              <Button 
                className="w-full justify-start" 
                variant="outline"
                onClick={() => router.push('/community')}
              >
                <Users className="mr-2 h-4 w-4" />
                Manage Community
              </Button>
              <Button 
                className="w-full justify-start" 
                variant="outline"
                onClick={() => router.push('/profile')}
              >
                <Award className="mr-2 h-4 w-4" />
                View Profile
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Index;