import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BookOpen, TrendingUp, Calendar, Award } from "lucide-react";

export function WelcomeSection() {
  const userName = "Alex";
  const motivationalQuote = "Discipline is the bridge between goals and success.";

  return (
    <div className="flex-1 p-6 space-y-6 overflow-y-auto">
      {/* Welcome Card */}
      <Card className="bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20">
        <CardContent className="p-8">
          <div className="space-y-4">
            <div>
              <h1 className="text-3xl font-bold text-foreground mb-2">
                Welcome, {userName}!
              </h1>
              <p className="text-muted-foreground text-lg italic">
                "{motivationalQuote}"
              </p>
            </div>
            
            <div className="flex items-center gap-2">
              <Badge variant="secondary" className="bg-primary/20 text-primary border-primary/30">
                Student Portal
              </Badge>
              <Badge variant="outline" className="border-border-subtle">
                Academic Year 2025
              </Badge>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Academic Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="border-border-subtle hover:border-primary/30 transition-colors">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Current GPA</p>
                <p className="text-2xl font-bold text-primary">3.78</p>
              </div>
              <TrendingUp className="w-8 h-8 text-primary" />
            </div>
          </CardContent>
        </Card>

        <Card className="border-border-subtle hover:border-success/30 transition-colors">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Attendance Rate</p>
                <p className="text-2xl font-bold text-success">92%</p>
              </div>
              <Calendar className="w-8 h-8 text-success" />
            </div>
          </CardContent>
        </Card>

        <Card className="border-border-subtle hover:border-warning/30 transition-colors">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Active Courses</p>
                <p className="text-2xl font-bold text-warning">6</p>
              </div>
              <BookOpen className="w-8 h-8 text-warning" />
            </div>
          </CardContent>
        </Card>

        <Card className="border-border-subtle hover:border-purple-400/30 transition-colors">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Achievements</p>
                <p className="text-2xl font-bold text-purple-400">12</p>
              </div>
              <Award className="w-8 h-8 text-purple-400" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Recent Activity */}
      <Card className="border-border-subtle">
        <CardContent className="p-6">
          <h3 className="text-lg font-semibold text-foreground mb-4">Recent Activity</h3>
          <div className="space-y-4">
            <div className="flex items-start gap-3 p-3 rounded-lg bg-muted/30">
              <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
              <div className="flex-1">
                <p className="text-sm font-medium text-foreground">
                  Assignment submitted: Data Structures Project
                </p>
                <p className="text-xs text-muted-foreground">2 hours ago</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3 p-3 rounded-lg bg-muted/30">
              <div className="w-2 h-2 bg-success rounded-full mt-2"></div>
              <div className="flex-1">
                <p className="text-sm font-medium text-foreground">
                  Attended lecture: Database Management Systems
                </p>
                <p className="text-xs text-muted-foreground">Yesterday, 2:00 PM</p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3 rounded-lg bg-muted/30">
              <div className="w-2 h-2 bg-warning rounded-full mt-2"></div>
              <div className="flex-1">
                <p className="text-sm font-medium text-foreground">
                  New assignment posted: Operating System Lab
                </p>
                <p className="text-xs text-muted-foreground">2 days ago</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* College Notification */}
      <Card className="border-warning/20 bg-warning/5">
        <CardContent className="p-6">
          <h3 className="text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
            <div className="w-3 h-3 bg-warning rounded-full animate-pulse"></div>
            College Official Notification
          </h3>
          <p className="text-sm text-foreground mb-3">
            <strong>Semester Examinations Schedule Released</strong>
          </p>
          <p className="text-sm text-muted-foreground">
            The examination schedule for the current semester has been published. 
            Students are advised to check their individual timetables and prepare accordingly. 
            All examinations will be conducted in offline mode starting from March 15th, 2025.
          </p>
          <div className="mt-3 text-xs text-muted-foreground">
            Posted by: Academic Office • 1 day ago
          </div>
        </CardContent>
      </Card>
    </div>
  );
}