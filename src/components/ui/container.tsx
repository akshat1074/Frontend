import { cn } from "@/lib/utils";
import React from "react";

export const Container = ({
    children,
    className,
}: {
    children: React.ReactNode;
    className?: string;
}) => {
    return (
        <div className="w-full bg-secondary">
            <div className={cn("flex max-w-[90rem] mx-auto bg-inherit min-h-screen tracking-wide p-10 justify-center items-center", className)}>
                {children}
            </div>
        </div>
    )
}