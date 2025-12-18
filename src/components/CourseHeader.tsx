import { ArrowLeft, Download, Star } from "lucide-react";
import { Button } from "./ui/button";

interface CourseHeaderProps {
  title: string;
  rating: number;
  ratingCount: number;
  downloadSize: string;
  onBack?: () => void;
}

export const CourseHeader = ({ 
  title, 
  rating, 
  ratingCount, 
  downloadSize, 
  onBack 
}: CourseHeaderProps) => {
  return (
    <div className="flex items-center justify-between py-4 px-6 border-b bg-card">
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="sm" onClick={onBack}>
          <ArrowLeft className="w-4 h-4" />
        </Button>
        <h1 className="text-lg font-semibold text-foreground">{title}</h1>
      </div>
      
      <div className="flex items-center gap-6">
        <div className="flex items-center gap-2">
          <div className="flex">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star 
                key={star} 
                className={`w-4 h-4 ${
                  star <= Math.floor(rating) 
                    ? 'fill-warning text-warning' 
                    : 'text-muted-foreground'
                }`} 
              />
            ))}
          </div>
          <span className="text-sm font-medium">{rating}</span>
          <span className="text-sm text-muted-foreground">({ratingCount})</span>
        </div>
        
        <Button variant="outline" size="sm" className="gap-2">
          <Download className="w-4 h-4" />
          Download
          <span className="text-xs text-muted-foreground">{downloadSize}</span>
        </Button>
      </div>
    </div>
  );
};