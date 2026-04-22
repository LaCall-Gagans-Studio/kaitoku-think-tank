import { Hero } from "@/components/features/Hero";
import { Manifesto } from "@/components/features/Manifesto";
import { Speakers } from "@/components/features/Speakers";
import { TimeTable } from "@/components/features/TimeTable";
import { CTA } from "@/components/features/CTA";
import { DataStats } from "@/components/features/DataStats";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-start w-full">
      <Hero />
      <Manifesto />
      <Speakers />
      <TimeTable />
      <CTA />
      <DataStats />
    </div>
  );
}
