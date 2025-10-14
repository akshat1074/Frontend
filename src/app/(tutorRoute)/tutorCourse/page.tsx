"use client"

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Plus, Upload, ChevronDown, ChevronRight, X } from "lucide-react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

interface Lesson {
  id: string;
  title: string;
  type: string;
}

interface Module {
  id: string;
  title: string;
  lessons: Lesson[];
  isOpen: boolean;
}

export default function CourseStructure() {
  const [courseDescription, setCourseDescription] = useState("Learn how DAOs enable decentralized, community-led governance on the blockchain through smart contracts, voting, and shared decision-making.");
  const [modules, setModules] = useState<Module[]>([
    {
      id: "1",
      title: "Understanding the Basics",
      isOpen: true,
      lessons: [
        { id: "1-1", title: "What is a DAO?", type: "Video" },
        { id: "1-2", title: "History and Evolution of DAOs", type: "Reading" },
        { id: "1-3", title: "Key Components of a DAO (Smart contracts, tokens, treasury)", type: "Interactive" },
        { id: "1-4", title: "Types of DAOs (Financial, Investment, Social, Grant, etc.)", type: "Quiz" }
      ]
    },
    {
      id: "2",
      title: "How DAOs Work",
      isOpen: false,
      lessons: [
        { id: "2-1", title: "DAO Governance Models (Token-based, reputation-based, quadratic voting)", type: "Video" },
        { id: "2-2", title: "Proposals and Voting Mechanisms", type: "Reading" },
        { id: "2-3", title: "Treasury Management and Funding", type: "Case Study" },
        { id: "2-4", title: "Coordination and Contribution Tools (e.g., Snapshot, Gnosis Safe, Coordinape)", type: "Hands-on" }
      ]
    },
    {
      id: "3",
      title: "Tools for Creating and Participating in DAOs",
      isOpen: false,
      lessons: [
        { id: "3-1", title: "Platforms for Building DAOs (Aragon, DAOhaus, Juicebox, Syndicate)", type: "Tutorial" },
        { id: "3-2", title: "Setting up a DAO: Step-by-step walkthrough", type: "Workshop" },
        { id: "3-3", title: "Wallets and Web3 identities in DAO Access", type: "Practical" },
        { id: "3-4", title: "DAO Tooling Ecosystem Overview", type: "Overview" }
      ]
    }
  ]);

  const [lessonType, setLessonType] = useState("Video, Reading, Quiz, Assessment");
  const [uploadFiles, setUploadFiles] = useState("Options");

  const toggleModule = (moduleId: string) => {
    setModules(modules.map(module => 
      module.id === moduleId 
        ? { ...module, isOpen: !module.isOpen }
        : module
    ));
  };

  const addModule = () => {
    const newModule: Module = {
      id: Date.now().toString(),
      title: "New Module",
      lessons: [],
      isOpen: true
    };
    setModules([...modules, newModule]);
  };

  const addLesson = (moduleId: string) => {
    const newLesson: Lesson = {
      id: `${moduleId}-${Date.now()}`,
      title: "New Lesson",
      type: "Video"
    };
    setModules(modules.map(module => 
      module.id === moduleId 
        ? { ...module, lessons: [...module.lessons, newLesson] }
        : module
    ));
  };

  return (
    <div className="max-w-4xl space-y-8">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Course Structure</h1>
        <div className="flex space-x-3">
          <Button variant="outline">Save</Button>
          <Button>Next</Button>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Course Description</CardTitle>
        </CardHeader>
        <CardContent>
          <Textarea
            value={courseDescription}
            onChange={(e) => setCourseDescription(e.target.value)}
            className="min-h-[100px]"
          />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>Modules</CardTitle>
            <Button onClick={addModule} size="sm">
              <Plus className="mr-2 h-4 w-4" />
              Add Module
            </Button>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          {modules.map((module, moduleIndex) => (
            <div key={module.id} className="border rounded-lg p-4">
              <Collapsible open={module.isOpen} onOpenChange={() => toggleModule(module.id)}>
                <CollapsibleTrigger className="flex items-center justify-between w-full">
                  <div className="flex items-center space-x-2">
                    {module.isOpen ? <ChevronDown className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
                    <h3 className="font-semibold">Module {moduleIndex + 1}: {module.title}</h3>
                  </div>
                </CollapsibleTrigger>
                
                <CollapsibleContent className="pt-4">
                  <div className="space-y-3">
                    {module.lessons.map((lesson, lessonIndex) => (
                      <div key={lesson.id} className="flex items-center space-x-3 p-3 bg-muted rounded-lg">
                        <span className="text-sm text-muted-foreground">Lesson {lessonIndex + 1}:</span>
                        <span className="flex-1">{lesson.title}</span>
                        <Badge variant="secondary">{lesson.type}</Badge>
                      </div>
                    ))}
                    
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => addLesson(module.id)}
                      className="w-full"
                    >
                      <Plus className="mr-2 h-4 w-4" />
                      Add Lesson
                    </Button>
                  </div>
                </CollapsibleContent>
              </Collapsible>
            </div>
          ))}
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Upload Resources</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label>Lesson Type</Label>
              <Select value={lessonType} onValueChange={setLessonType}>
                <SelectTrigger className="mt-1">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Video, Reading, Quiz, Assessment">Video, Reading, Quiz, Assessment</SelectItem>
                  <SelectItem value="Video">Video</SelectItem>
                  <SelectItem value="Reading">Reading</SelectItem>
                  <SelectItem value="Quiz">Quiz</SelectItem>
                  <SelectItem value="Assessment">Assessment</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label>Upload Files</Label>
              <Select value={uploadFiles} onValueChange={setUploadFiles}>
                <SelectTrigger className="mt-1">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Options">Options</SelectItem>
                  <SelectItem value="Videos">Videos</SelectItem>
                  <SelectItem value="Images">Images</SelectItem>
                  <SelectItem value="Documents">Documents</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label>Upload Course Thumbnails</Label>
              <div className="border-2 border-dashed border-border rounded-lg p-8 text-center">
                <Upload className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
                <p className="text-sm text-muted-foreground">
                  Drag and drop files here or click to browse
                </p>
                <Button variant="outline" className="mt-2">
                  Choose Files
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Course Preview</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="aspect-video bg-gray-900 rounded-lg flex items-center justify-center">
                <div className="text-center text-white">
                  <Upload className="mx-auto h-12 w-12 mb-2" />
                  <p className="text-sm">Course Thumbnail</p>
                </div>
              </div>
              <div>
                <h4 className="font-semibold">Course Progress</h4>
                <div className="mt-2 space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Modules Completed</span>
                    <span>0/3</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div className="bg-primary h-2 rounded-full" style={{ width: '0%' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}