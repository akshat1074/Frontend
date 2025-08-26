import { useState } from "react";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { Label } from "./ui/label";
import { Button } from "./ui/button";
import { CheckCircle2, XCircle } from "lucide-react";

interface QuizOption {
  id: string;
  text: string;
  correct?: boolean;
}

interface QuizQuestionProps {
  questionNumber: number;
  question: string;
  options: QuizOption[];
  onAnswer: (selectedOption: string) => void;
  showResult?: boolean;
  selectedAnswer?: string;
}

export const QuizQuestion = ({ 
  questionNumber, 
  question, 
  options, 
  onAnswer,
  showResult = false,
  selectedAnswer 
}: QuizQuestionProps) => {
  const [selected, setSelected] = useState<string>(selectedAnswer || "");

  const handleSubmit = () => {
    if (selected) {
      onAnswer(selected);
    }
  };

  const getOptionClassName = (option: QuizOption) => {
    if (!showResult) return "hover:bg-muted/50";
    
    if (option.correct) return "bg-success/10 border-success";
    if (selected === option.id && !option.correct) return "bg-destructive/10 border-destructive";
    return "";
  };

  const getOptionIcon = (option: QuizOption) => {
    if (!showResult) return null;
    
    if (option.correct) return <CheckCircle2 className="w-4 h-4 text-success" />;
    if (selected === option.id && !option.correct) return <XCircle className="w-4 h-4 text-destructive" />;
    return null;
  };

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold mb-4">
          Q{questionNumber}: {question}
        </h3>
        
        <RadioGroup value={selected} onValueChange={setSelected} disabled={showResult}>
          <div className="space-y-3">
            {options.map((option) => (
              <div 
                key={option.id}
                className={`flex items-center space-x-3 p-3 rounded-lg border transition-colors ${getOptionClassName(option)}`}
              >
                <RadioGroupItem value={option.id} id={option.id} />
                <Label 
                  htmlFor={option.id} 
                  className="flex-1 cursor-pointer text-sm"
                >
                  {option.text}
                </Label>
                {getOptionIcon(option)}
              </div>
            ))}
          </div>
        </RadioGroup>
      </div>
      
      {!showResult && (
        <Button 
          onClick={handleSubmit} 
          disabled={!selected}
          className="w-full"
        >
          Submit Answer
        </Button>
      )}
    </div>
  );
};