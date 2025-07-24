import { SupportCenter } from "@/components/SupportCenter";
import { Navbar } from "@/components/Navbar";

export default function Support() {
  return (
    <div className="min-h-screen bg-gradient-subtle">
      <Navbar onFilterToggle={() => {}} onMenuClick={() => {}} />
      
      <main className="container py-8">
        <SupportCenter />
      </main>
    </div>
  );
}
