import { Clock, User, AlertCircle, CheckCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function InfoPanel() {
  const currentDate = new Date().toLocaleDateString('en-US', {
    day: '2-digit',
    month: 'long',  
    year: 'numeric'
  });

  const currentTime = new Date().toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: true
  });

  return (
    <div className="w-80 h-screen bg-card border-l border-border-subtle p-4 space-y-4 overflow-y-auto">
      {/* Date Card */}
      <Card className="bg-secondary border-border-subtle">
        <CardContent className="p-4 text-center">
          <div className="text-2xl font-bold text-foreground mb-1">
            {currentDate}
          </div>
          <div className="text-sm text-muted-foreground">
            {currentTime}
          </div>
        </CardContent>
      </Card>

      {/* Ongoing Lecture */}
      <Card className="border-primary/20 bg-primary/5">
        <CardHeader className="pb-3">
          <CardTitle className="text-sm font-medium text-foreground flex items-center gap-2">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
            Lecture Ongoing
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-0 space-y-3">
          <div>
            <h3 className="font-semibold text-primary">Data Structures</h3>
            <div className="flex items-center gap-2 text-sm text-muted-foreground mt-1">
              <User size={14} />
              <span>Prof. Sarah Johnson</span>
            </div>
          </div>
          <div className="space-y-1">
            <div className="flex justify-between text-xs text-muted-foreground">
              <span>Start: 10:00 AM</span>
              <span>End: 11:30 AM</span>
            </div>
            <div className="w-full bg-muted rounded-full h-1">
              <div className="bg-primary h-1 rounded-full w-3/5"></div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Upcoming Class */}
      <Card className="border-warning/20 bg-warning/5">
        <CardHeader className="pb-3">
          <CardTitle className="text-sm font-medium text-foreground flex items-center gap-2">
            <Clock size={16} className="text-warning" />
            Upcoming Class
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-0">
          <div>
            <h3 className="font-semibold text-foreground">Database Management</h3>
            <div className="flex items-center gap-2 text-sm text-muted-foreground mt-1">
              <User size={14} />
              <span>Mrs. Emily Davis</span>
            </div>
            <div className="text-xs text-warning mt-2">
              Starts in 30 minutes (12:00 PM - 1:30 PM)
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Missed Classes */}
      <Card className="border-destructive/20 bg-destructive/5">
        <CardHeader className="pb-3">
          <CardTitle className="text-sm font-medium text-foreground flex items-center gap-2">
            <AlertCircle size={16} className="text-destructive" />
            Missed Classes Today
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-0 space-y-2">
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium text-foreground">Operating System</span>
              <Badge variant="destructive" className="text-xs">Missed</Badge>
            </div>
            <div className="text-xs text-muted-foreground">
              Prof. Michael Chen • 8:00 AM - 9:30 AM
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Today's Attendance */}
      <Card className="border-success/20 bg-success/5">
        <CardHeader className="pb-3">
          <CardTitle className="text-sm font-medium text-foreground flex items-center gap-2">
            <CheckCircle size={16} className="text-success" />
            Today's Attendance
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-0 text-center">
          <div className="text-3xl font-bold text-success mb-2">88%</div>
          <div className="text-xs text-muted-foreground">
            4 out of 5 classes attended
          </div>
          <div className="flex justify-center gap-1 mt-3">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="w-2 h-2 bg-success rounded-full"></div>
            ))}
            <div className="w-2 h-2 bg-destructive rounded-full"></div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}