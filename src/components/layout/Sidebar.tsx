"use client"
import { 
    Home, 
    User, 
    Upload, 
    ClipboardList, 
    Users, 
    Calendar, 
    Settings, 
    Lock, 
    Eye, 
    BookOpen,
    Menu,
    X
  } from "lucide-react";
  import { Button } from "@/components/ui/button";
  import { cn } from "@/lib/utils";
  
  import { useState } from "react";
  import { useRouter,usePathname } from 'next/navigation';

  const navigation = [
    { name: "Home", href: "/", icon: Home },
    { name: "Profile", href: "/profile", icon: User },
    { name: "Upload Courses", href: "/upload-courses", icon: Upload },
    { name: "Quiz and Assessment", href: "/quiz-assessment", icon: ClipboardList },
    { name: "Community and Interaction", href: "/community", icon: Users },
    { name: "Schedule a Session", href: "/schedule", icon: Calendar },
    { name: "Pricing and Access Control", href: "/pricing", icon: Lock },
    { name: "Course Visibility", href: "/visibility", icon: Eye },
    { name: "Publish Course", href: "/publish", icon: BookOpen },
  ];
  
  export function Sidebar() {
    const router = useRouter();
    const pathname = usePathname()

    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
    const sidebarContent = (
      <>
        {/* Header */}
        <div className="p-6 border-b border-border">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">d3</span>
              </div>
              <span className="font-bold text-xl">ed3hub</span>
            </div>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        </div>
  
        {/* Navigation */}
        <nav className="flex-1 px-4 py-6 space-y-1">
          {navigation.map((item) => {
            const isActive = pathname === item.href;
            const Icon = item.icon;
            
            return (
              <Button
                key={item.name}
                variant="ghost"
                onClick={() => {
                  router.push(item.href);
                  setIsMobileMenuOpen(false);
                }}
                className={cn(
                  "w-full justify-start h-10 px-3 text-left font-normal transition-colors",
                  isActive
                    ? "bg-sidebar-active text-white hover:bg-sidebar-active/90"
                    : "text-sidebar-text hover:bg-sidebar-hover hover:text-foreground"
                )}
              >
                <Icon className="mr-3 h-4 w-4 flex-shrink-0" />
                <span className="truncate">{item.name}</span>
              </Button>
            );
          })}
        </nav>
  
        {/* User Info */}
        <div className="p-4 border-t border-border">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-muted rounded-full flex items-center justify-center">
              <User className="h-4 w-4" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium truncate">Account</p>
            </div>
          </div>
        </div>
      </>
    );
  
    return (
      <>
        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden fixed top-4 left-4 z-50 bg-background shadow-md"
          onClick={() => setIsMobileMenuOpen(true)}
        >
          <Menu className="h-4 w-4" />
        </Button>
  
        {/* Desktop Sidebar */}
        <div className="hidden md:flex w-64 h-screen bg-sidebar-bg border-r border-border flex-col">
          {sidebarContent}
        </div>
  
        {/* Mobile Sidebar */}
        {isMobileMenuOpen && (
          <>
            <div
              className="fixed inset-0 bg-black/50 z-40 md:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <div className="fixed left-0 top-0 w-64 h-screen bg-sidebar-bg border-r border-border flex flex-col z-50 md:hidden">
              {sidebarContent}
            </div>
          </>
        )}
      </>
    );
  }