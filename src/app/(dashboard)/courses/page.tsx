"use client"
import { useState } from "react";
import { CourseHeader } from "@/components/CourseHeader";
import { CourseNavigation } from "@/components/CourseNavigation";
import { ProgressBar } from "@/components/ProgressBar";
import { ModuleItem } from "@/components/ModuleItem";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useRouter } from "next/navigation";

const Course = () => {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("home");

  const tabs = [
    { id: "home", label: "Home", active: activeTab === "home" },
    { id: "resources", label: "Resources", active: activeTab === "resources" },
    { id: "skill-level", label: "Skill Level", active: activeTab === "skill-level" },
    { id: "duration", label: "Duration", active: activeTab === "duration" },
    { id: "info", label: "Info", active: activeTab === "info" },
  ];

  const modules = [
    {
      title: "Introduction to Tokenomics",
      isCompleted: true,
      hasVideo: true,
      hasArticle: true,
    },
    {
      title: "Token Distribution Model",
      isCompleted: true,
      hasVideo: true,
      hasArticle: false,
    },
    {
      title: "Monetary Policy in Crypto",
      isCompleted: true,
      hasVideo: true,
      hasArticle: false,
    },
    {
      title: "Game Theory in Tokenomics",
      isCompleted: false,
      hasVideo: false,
      hasArticle: true,
    },
    {
      title: "Assessment",
      isCompleted: false,
      hasVideo: false,
      hasArticle: false,
    },
  ];

  const handleModuleClick = (moduleTitle: string) => {
    if (moduleTitle === "Assessment") {
      router.push("/assessment");
    } else {
      router.push(`/lesson?module=${encodeURIComponent(moduleTitle)}`);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <CourseHeader
        title="Tokenomics: Designing Crypto Assets"
        rating={4.7}
        ratingCount={234}
        downloadSize="393 MB"
        onBack={()=>{}}
      />
      
      <div className="px-6 py-4">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-3 h-3 rounded-full bg-warning"></div>
          <span className="text-sm font-medium">40% completed</span>
        </div>
        <ProgressBar progress={40} className="mb-8" />
      </div>

      <CourseNavigation tabs={tabs} onTabChange={setActiveTab} />

      <div className="p-6">
        {activeTab === "home" && (
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="mb-8">
              <p className="text-foreground leading-relaxed">
                This course introduces UI/UX designers to the world of Tokenomics and Decentralized Finance (DeFi). 
                You{"'"}ll learn how DeFi protocols work, the economic models behind them, and how to design usable, 
                trustworthy, and engaging interfaces for Web3 users.
              </p>
              <p className="text-foreground leading-relaxed mt-4">
                The course blends conceptual understanding with practical design applications, helping you... 
                <span className="text-primary cursor-pointer hover:underline">see more→</span>
              </p>
            </div>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Module 1</CardTitle>
                <h3 className="text-base font-semibold text-foreground">Introduction to Tokenomics</h3>
              </CardHeader>
              <CardContent className="p-0">
                {modules.map((module, index) => (
                  <ModuleItem
                    key={index}
                    title={module.title}
                    isCompleted={module.isCompleted}
                    hasVideo={module.hasVideo}
                    hasArticle={module.hasArticle}
                    onClick={() => handleModuleClick(module.title)}
                  />
                ))}
              </CardContent>
            </Card>
          </div>
        )}

        {activeTab === "resources" && (
          <div className="max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle>Course Resources</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-4 border rounded-lg">
                    <h4 className="font-medium mb-2">Supplementary Reading</h4>
                    <p className="text-sm text-muted-foreground">Additional materials and research papers</p>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <h4 className="font-medium mb-2">Tools & Templates</h4>
                    <p className="text-sm text-muted-foreground">Design templates and analysis tools</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {activeTab === "skill-level" && (
          <div className="max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle>Skill Level</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-success"></div>
                    <span>Beginner Friendly</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-warning"></div>
                    <span>Some Design Experience Recommended</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-info"></div>
                    <span>Basic Understanding of Cryptocurrency Helpful</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
};

export default Course;