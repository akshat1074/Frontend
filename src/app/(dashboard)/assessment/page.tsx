"use client"

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { CourseHeader } from "@/components/CourseHeader";
import { QuizQuestion } from "@/components/QuizQuestion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ProgressBar } from "@/components/ProgressBar";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Assessment = () => {
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<{ [key: number]: string }>({});
  const [showResults, setShowResults] = useState(false);

  const questions = [
    {
      id: 1,
      question: "Which of the following best describes a smart contract?",
      options: [
        { id: "a", text: "A legal agreement stored in PDF format", correct: false },
        { id: "b", text: "A self-executing code on the blockchain", correct: true },
        { id: "c", text: "A crypto wallet with enhanced security", correct: false },
        { id: "d", text: "A centralized app for trading NFTs", correct: false },
      ],
    },
    {
      id: 2,
      question: "Blockchain transactions can be modified or deleted once confirmed.",
      options: [
        { id: "a", text: "True", correct: false },
        { id: "b", text: "False", correct: true },
      ],
    },
    {
      id: 3,
      question: "A wallet that stores user credentials on a decentralized network is often referred to as a _______ identity wallet.",
      options: [
        { id: "a", text: "Centralized", correct: false },
        { id: "b", text: "Decentralized", correct: true },
        { id: "c", text: "Custodial", correct: false },
        { id: "d", text: "Hardware", correct: false },
      ],
    },
    {
      id: 4,
      question: "What is one of the main functions of a governance token in a DAO?",
      options: [
        { id: "a", text: "Increase mining speed", correct: false },
        { id: "b", text: "Reduce gas fees", correct: false },
        { id: "c", text: "Allow users to vote on proposals", correct: true },
        { id: "d", text: "Store personal data on-chain", correct: false },
      ],
    },
    {
      id: 5,
      question: "DeFi platforms eliminate the need for intermediaries like banks.",
      options: [
        { id: "a", text: "True", correct: true },
        { id: "b", text: "False", correct: false },
      ],
    },
  ];

  const handleAnswer = (selectedOption: string) => {
    const newAnswers = { ...answers, [currentQuestion]: selectedOption };
    setAnswers(newAnswers);
    
    if (currentQuestion < questions.length - 1) {
      setTimeout(() => setCurrentQuestion(currentQuestion + 1), 1500);
    } else {
      setTimeout(() => setShowResults(true), 1500);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  const calculateScore = () => {
    let correct = 0;
    questions.forEach((question, index) => {
      const selectedOption = answers[index];
      const correctOption = question.options.find(opt => opt.correct);
      if (selectedOption === correctOption?.id) {
        correct++;
      }
    });
    return { correct, total: questions.length, percentage: Math.round((correct / questions.length) * 100) };
  };

  const score = calculateScore();

  if (showResults) {
    return (
      <div className="min-h-screen bg-background">
        <CourseHeader
          title="Assessment Results"
          rating={4.7}
          ratingCount={234}
          downloadSize="393 MB"
          onBack={() => navigate("/course")}
        />
        
        <div className="p-6 max-w-4xl mx-auto">
          <Card>
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">Assessment Complete!</CardTitle>
            </CardHeader>
            <CardContent className="text-center space-y-6">
              <div className="text-6xl font-bold text-primary mb-4">
                {score.percentage}%
              </div>
              <p className="text-lg">
                You scored {score.correct} out of {score.total} questions correctly
              </p>
              
              <div className="flex gap-4 justify-center">
                <Button onClick={() => navigate("/course")}>
                  Back to Course
                </Button>
                <Button variant="outline" onClick={() => {
                  setCurrentQuestion(0);
                  setAnswers({});
                  setShowResults(false);
                }}>
                  Retake Assessment
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <CourseHeader
        title="Assessment - Blockchain Basics"
        rating={4.7}
        ratingCount={234}
        downloadSize="393 MB"
        onBack={() => navigate("/course")}
      />

      <div className="p-6">
        <div className="max-w-4xl mx-auto">
          <div className="mb-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold">Blockchain Basics</h2>
              <span className="text-sm text-muted-foreground">
                Question {currentQuestion + 1} of {questions.length}
              </span>
            </div>
            <ProgressBar progress={(currentQuestion + 1) / questions.length * 100} />
          </div>

          <Card>
            <CardContent className="p-6">
              <QuizQuestion
                questionNumber={currentQuestion + 1}
                question={questions[currentQuestion].question}
                options={questions[currentQuestion].options}
                onAnswer={handleAnswer}
                showResult={answers[currentQuestion] !== undefined}
                selectedAnswer={answers[currentQuestion]}
              />
            </CardContent>
          </Card>

          <div className="flex justify-between mt-6">
            <Button 
              variant="outline" 
              onClick={handlePrevious}
              disabled={currentQuestion === 0}
            >
              <ChevronLeft className="w-4 h-4 mr-2" />
              Previous
            </Button>
            
            <Button 
              onClick={handleNext}
              disabled={!answers[currentQuestion]}
            >
              {currentQuestion === questions.length - 1 ? "Finish" : "Next"}
              <ChevronRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Assessment;