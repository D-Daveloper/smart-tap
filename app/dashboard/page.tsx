import { DashboardShell } from "@/components/dashboard/DashboardShell";

export const metadata = {
  title: "Dashboard — SmartTap",
  description: "Your numbers, your scan page, and your plan.",
};
async function getDashboardData() {
  await new Promise((resolve) => setTimeout(resolve, 3000)); // 3-second delay
  return { message: "Welcome to your dashboard!" };
}
export default async function DashboardPage() {
  // await getDashboardData(); // Wait for the data to be fetched before rendering
  return <DashboardShell />;
}
