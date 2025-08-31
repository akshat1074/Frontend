import { cn } from "@/lib/utils";

interface NavigationTab {
  id: string;
  label: string;
  active?: boolean;
}

interface CourseNavigationProps {
  tabs: NavigationTab[];
  onTabChange: (tabId: string) => void;
  className?: string;
}

export const CourseNavigation = ({ tabs, onTabChange, className }: CourseNavigationProps) => {
  return (
    <div className={cn("flex border-b bg-card", className)}>
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => onTabChange(tab.id)}
          className={cn(
            "px-6 py-3 text-sm font-medium transition-colors relative",
            tab.active
              ? "text-primary border-b-2 border-primary bg-primary/5"
              : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
          )}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
};