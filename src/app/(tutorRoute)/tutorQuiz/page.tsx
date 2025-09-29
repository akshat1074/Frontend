"use client"

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { Plus, Trash2, Award } from "lucide-react";

interface Question {
  id: string;
  type: 'multiple-choice' | 'true-false' | 'fill-blank';
  question: string;
  options: string[];
  correctAnswer: string;
  points: number;
}

export default function QuizAssessment() {
  const [assessmentType, setAssessmentType] = useState("Quiz");
  const [questions, setQuestions] = useState<Question[]>([
    {
      id: "1",
      type: "multiple-choice",
      question: "What is the primary purpose of a blockchain?",
      options: [
        "Centralize data storage",
        "Facilitate private communication", 
        "Maintain a secure, decentralized ledger",
        "Speed up internet browsing"
      ],
      correctAnswer: "Maintain a secure, decentralized ledger",
      points: 10
    },
    {
      id: "2", 
      type: "true-false",
      question: "In a DAO, decisions are usually made through token-based voting.",
      options: ["True", "False"],
      correctAnswer: "True",
      points: 5
    },
    {
      id: "3",
      type: "fill-blank",
      question: "The total supply of a token that will ever exist is called its __________ supply.",
      options: [],
      correctAnswer: "maximum",
      points: 15
    }
  ]);

  const [newQuestion, setNewQuestion] = useState<Partial<Question>>({
    type: 'multiple-choice',
    question: '',
    options: ['', '', '', ''],
    correctAnswer: '',
    points: 10
  });

  const addQuestion = () => {
    if (newQuestion.question && newQuestion.correctAnswer) {
      const question: Question = {
        id: Date.now().toString(),
        type: newQuestion.type as Question['type'],
        question: newQuestion.question,
        options: newQuestion.options || [],
        correctAnswer: newQuestion.correctAnswer,
        points: newQuestion.points || 10
      };
      setQuestions([...questions, question]);
      setNewQuestion({
        type: 'multiple-choice',
        question: '',
        options: ['', '', '', ''],
        correctAnswer: '',
        points: 10
      });
    }
  };

  const removeQuestion = (id: string) => {
    setQuestions(questions.filter(q => q.id !== id));
  };

  const updateNewQuestionOption = (index: number, value: string) => {
    const options = [...(newQuestion.options || ['', '', '', ''])];
    options[index] = value;
    setNewQuestion({ ...newQuestion, options });
  };

  return (
    <div className="max-w-4xl space-y-8">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Quiz / Assessment</h1>
        <div className="flex space-x-3">
          <Button variant="outline">Save</Button>
          <Button>Next</Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Quiz Builder */}
        <div className="lg:col-span-2 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Assessment Type</CardTitle>
            </CardHeader>
            <CardContent>
              <Select value={assessmentType} onValueChange={setAssessmentType}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Quiz">Quiz</SelectItem>
                  <SelectItem value="Assessment">Assessment</SelectItem>
                  <SelectItem value="Final Exam">Final Exam</SelectItem>
                </SelectContent>
              </Select>
            </CardContent>
          </Card>

          {/* Existing Questions */}
          <div className="space-y-4">
            {questions.map((question, index) => (
              <Card key={question.id}>
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-base">
                      {index + 1}. {question.type === 'multiple-choice' ? 'Multiple Choice' : 
                         question.type === 'true-false' ? 'True or False' : 'Fill in the Blank'}
                    </CardTitle>
                    <Button 
                      variant="ghost" 
                      size="sm"
                      onClick={() => removeQuestion(question.id)}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="font-medium">{question.question}</p>
                  
                  {question.type === 'multiple-choice' && (
                    <RadioGroup value={question.correctAnswer} className="mt-3">
                      {question.options.map((option, optionIndex) => (
                        <div key={optionIndex} className="flex items-center space-x-2">
                          <RadioGroupItem 
                            value={option} 
                            id={`q${question.id}-${optionIndex}`}
                            disabled
                          />
                          <Label 
                            htmlFor={`q${question.id}-${optionIndex}`}
                            className={option === question.correctAnswer ? "font-medium text-primary" : ""}
                          >
                            {String.fromCharCode(65 + optionIndex)}) {option}
                          </Label>
                        </div>
                      ))}
                    </RadioGroup>
                  )}

                  {question.type === 'true-false' && (
                    <RadioGroup value={question.correctAnswer} className="mt-3">
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="True" id={`q${question.id}-true`} disabled />
                        <Label 
                          htmlFor={`q${question.id}-true`}
                          className={question.correctAnswer === "True" ? "font-medium text-primary" : ""}
                        >
                          A) True
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="False" id={`q${question.id}-false`} disabled />
                        <Label 
                          htmlFor={`q${question.id}-false`}
                          className={question.correctAnswer === "False" ? "font-medium text-primary" : ""}
                        >
                          B) False
                        </Label>
                      </div>
                    </RadioGroup>
                  )}

                  {question.type === 'fill-blank' && (
                    <div className="mt-3">
                      <p className="text-sm text-muted-foreground">
                        Correct answer: <span className="font-medium text-primary">{question.correctAnswer}</span>
                      </p>
                    </div>
                  )}

                  <div className="flex justify-between text-sm text-muted-foreground pt-2 border-t">
                    <span>Points: {question.points}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Add New Question */}
          <Card>
            <CardHeader>
              <CardTitle>Add New Question</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label>Question Type</Label>
                <Select 
                  value={newQuestion.type} 
                  onValueChange={(value) => setNewQuestion({ ...newQuestion, type: value as Question['type'] })}
                >
                  <SelectTrigger className="mt-1">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="multiple-choice">Multiple Choice</SelectItem>
                    <SelectItem value="true-false">True or False</SelectItem>
                    <SelectItem value="fill-blank">Fill in the Blank</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label>Question</Label>
                <Textarea
                  value={newQuestion.question}
                  onChange={(e) => setNewQuestion({ ...newQuestion, question: e.target.value })}
                  className="mt-1"
                  placeholder="Enter your question here..."
                />
              </div>

              {newQuestion.type === 'multiple-choice' && (
                <div className="space-y-2">
                  <Label>Options</Label>
                  {(newQuestion.options || ['', '', '', '']).map((option, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <span className="text-sm font-medium w-6">{String.fromCharCode(65 + index)})</span>
                      <Input
                        value={option}
                        onChange={(e) => updateNewQuestionOption(index, e.target.value)}
                        placeholder={`Option ${index + 1}`}
                      />
                      <Checkbox
                        checked={newQuestion.correctAnswer === option}
                        onCheckedChange={(checked:any) => {
                          if (checked) {
                            setNewQuestion({ ...newQuestion, correctAnswer: option });
                          }
                        }}
                      />
                    </div>
                  ))}
                </div>
              )}

              {newQuestion.type === 'true-false' && (
                <div>
                  <Label>Correct Answer</Label>
                  <RadioGroup 
                    value={newQuestion.correctAnswer} 
                    onValueChange={(value) => setNewQuestion({ ...newQuestion, correctAnswer: value })}
                    className="mt-2"
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="True" id="true" />
                      <Label htmlFor="true">True</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="False" id="false" />
                      <Label htmlFor="false">False</Label>
                    </div>
                  </RadioGroup>
                </div>
              )}

              {newQuestion.type === 'fill-blank' && (
                <div>
                  <Label>Correct Answer</Label>
                  <Input
                    value={newQuestion.correctAnswer}
                    onChange={(e) => setNewQuestion({ ...newQuestion, correctAnswer: e.target.value })}
                    className="mt-1"
                    placeholder="Enter the correct answer"
                  />
                </div>
              )}

              <div>
                <Label>Points</Label>
                <Input
                  type="number"
                  value={newQuestion.points}
                  onChange={(e) => setNewQuestion({ ...newQuestion, points: parseInt(e.target.value) || 0 })}
                  className="mt-1"
                  placeholder="10"
                />
              </div>

              <Button onClick={addQuestion} className="w-full">
                <Plus className="mr-2 h-4 w-4" />
                Add Question
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Certification */}
        <div>
          <Card>
            <CardHeader>
              <CardTitle>Certification</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label>Type</Label>
                <Select defaultValue="Certificate">
                  <SelectTrigger className="mt-1">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Certificate">Certificate</SelectItem>
                    <SelectItem value="Badge">Badge</SelectItem>
                    <SelectItem value="NFT">NFT Certificate</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="text-center py-8">
                <div className="bg-gradient-to-br from-primary/20 to-primary/10 rounded-lg p-6 mb-4">
                  <Award className="mx-auto h-12 w-12 text-primary mb-2" />
                  <h3 className="font-semibold">Certificate Preview</h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    Earn a certificate that verifies your skills and knowledge upon course completion.
                  </p>
                </div>
              </div>

              <div className="text-sm text-muted-foreground">
                <p>
                  Earn a certificate that verifies your skills and knowledge upon course completion. 
                  Downloadable as a PDF for your portfolio or LinkedIn.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="mt-6">
            <CardHeader>
              <CardTitle>Assessment Summary</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-sm">Total Questions</span>
                  <span className="font-medium">{questions.length}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Total Points</span>
                  <span className="font-medium">{questions.reduce((sum, q) => sum + q.points, 0)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Passing Score</span>
                  <span className="font-medium">70%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Time Limit</span>
                  <span className="font-medium">30 minutes</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
