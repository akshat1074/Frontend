"use client"


import { useSearchParams } from 'next/navigation'
import { Suspense } from 'react';
import { CourseHeader } from "@/components/CourseHeader";
import { VideoPlayer } from "@/components/VideoPlayer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";

const Lesson = () => {
  const searchParams = useSearchParams();
  
  const mymodule = searchParams.get("module") || "Introduction to Tokenomics";
  

  const lessonContent = {
    "Introduction to Tokenomics": {
      overview: {
        title: "Tokenomics: Designing Crypto Assets",
        subtitle: "Overview",
        content: `Tokenomics (short for token economics) is the study and design of the economic systems and incentives behind cryptocurrencies, tokens, and blockchain-based projects. It combines economics, game theory and blockchain technology to ensure that a token has real utility, long-term sustainability, and proper behavior among users, investors, and developers.

Today, we'll explore how cryptocurrencies design their own versions of monetary policy - and how they differ from traditional economics.

Let's start with a quick recap of what monetary policy means in traditional finance.

First thing: let's understand what role the government plays. In traditional finance - like the Federal Reserve in the European Central Bank - they have the exclusive rights to issue their currency. This allows them to decide (and printing money, changing interest rates, and setting reserve requirements) for banks they use exclusive printing rights to increase money supply and boost economic growth vs. `
      },
      timestamps: ["06:00", "20:30"]
    },
    "Token Distribution Model": {
      overview: {
        title: "Token Distribution Model",
        subtitle: "Understanding Distribution Mechanisms",
        content: `Token distribution is a critical aspect of tokenomics that determines how tokens are allocated among different stakeholders. A well-designed distribution model ensures fair allocation, proper incentives, and long-term sustainability of the project.

Key distribution mechanisms include:
- Initial Coin Offerings (ICOs)
- Token Generation Events (TGEs)
- Airdrops and community rewards
- Mining and staking rewards
- Team and advisor allocations
- Treasury reserves

Each mechanism serves different purposes and targets different participant groups in the ecosystem.`
      },
      timestamps: ["08:15", "25:45"]
    }
  };

  const currentLesson = lessonContent[mymodule as keyof typeof lessonContent] || lessonContent["Introduction to Tokenomics"];

  return (
    
    <div className="min-h-screen bg-background">
      <CourseHeader
        title="Tokenomics: Designing Crypto Assets"
        rating={4.7}
        ratingCount={234}
        downloadSize="393 MB"
        
      />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 p-6">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-6">
          <VideoPlayer title={mymodule} poster="cryptoChart"/>
          
          <Card>
            <CardContent className="p-6">
              <div className="mb-4">
                <h1 className="text-2xl font-bold mb-2">{currentLesson.overview.title}</h1>
                <h2 className="text-lg text-muted-foreground mb-4">{currentLesson.overview.subtitle}</h2>
              </div>
              
              <div className="prose max-w-none">
                <p className="text-foreground leading-relaxed whitespace-pre-line">
                  {currentLesson.overview.content}
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="space-y-4">
          <Card>
            <CardContent className="p-4">
              <h3 className="font-semibold mb-4">Lesson Navigation</h3>
              <div className="space-y-2">
                {currentLesson.timestamps.map((timestamp, index) => (
                  <button
                    key={index}
                    className="flex items-center gap-3 w-full p-2 text-left rounded-lg hover:bg-muted/50 transition-colors"
                  >
                    <div className="text-xs text-muted-foreground font-mono">
                      {timestamp}
                    </div>
                    <div className="text-sm">
                      {index === 0 ? "Introduction" : "Core Concepts"}
                    </div>
                  </button>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <h3 className="font-semibold mb-4">Resources</h3>
              <div className="space-y-2">
                <button className="flex items-center gap-2 text-sm text-primary hover:underline">
                  📄 Download Transcript
                </button>
                <button className="flex items-center gap-2 text-sm text-primary hover:underline">
                  📊 Additional Charts
                </button>
                <button className="flex items-center gap-2 text-sm text-primary hover:underline">
                  🔗 External References
                </button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Navigation Footer */}
      <div className="sticky bottom-0 bg-background border-t p-4">
        <div className="max-w-6xl mx-auto flex justify-between">
          <Button variant="outline" >
            <Link href="/course">
            <ChevronLeft className="w-4 h-4 mr-2" />
            Previous
            </Link>
          </Button>
          <Button >
            <Link href="/assessment">
            Next
            <ChevronRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
    

    
  );
};

export default function LessonPage(){
  return(
    <Suspense fallback={<div>Loding . .. ...</div>}>
      <Lesson/>
    </Suspense>
  )
}

