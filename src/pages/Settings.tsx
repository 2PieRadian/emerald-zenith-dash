import { StudentSidebar } from "@/components/StudentSidebar";
import { InfoPanel } from "@/components/InfoPanel";

const Settings = () => {
  return (
    <div className="flex h-screen w-full bg-background">
      <StudentSidebar />
      <div className="flex-1 p-6 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-foreground mb-4">Settings</h1>
          <p className="text-muted-foreground">Settings page coming soon...</p>
        </div>
      </div>
      <InfoPanel />
    </div>
  );
};

export default Settings;