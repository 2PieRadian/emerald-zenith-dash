import { StudentSidebar } from "@/components/StudentSidebar";
import { WelcomeSection } from "@/components/WelcomeSection";
import { InfoPanel } from "@/components/InfoPanel";

const Index = () => {
  return (
    <div className="flex h-screen w-full bg-background">
      <StudentSidebar />
      <WelcomeSection />
      <InfoPanel />
    </div>
  );
};

export default Index;
