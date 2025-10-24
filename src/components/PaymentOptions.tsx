import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface PaymentOptionProps {
  icon: ReactNode;
  title: string;
  description: string;
  selected: boolean;
  onClick: () => void;
}

export const PaymentOption = ({ icon, title, description, selected, onClick }: PaymentOptionProps) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        "w-full flex items-center gap-4 p-5 rounded-xl border-2 transition-all duration-300",
        "hover:border-accent hover:shadow-md",
        selected 
          ? "border-accent bg-accent/5 shadow-md" 
          : "border-border bg-card"
      )}
    >
      <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-secondary">
        {icon}
      </div>
      <div className="flex-1 text-left">
        <h3 className="font-semibold text-foreground">{title}</h3>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
      <div className={cn(
        "w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all",
        selected ? "border-accent" : "border-border"
      )}>
        {selected && (
          <div className="w-3 h-3 rounded-full bg-accent" />
        )}
      </div>
    </button>
  );
};
