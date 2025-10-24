import { CheckCircle2, Circle, Play, FileText, ChevronRight } from "lucide-react";


interface ModuleItemProps {
  title: string;
  isCompleted: boolean;
  hasVideo?: boolean;
  hasArticle?: boolean;
  onClick?: () => void;
}

export const ModuleItem = ({ 
  title, 
  isCompleted, 
  hasVideo = false, 
  hasArticle = false, 
  onClick 
}: ModuleItemProps) => {
  return (
    <div className="flex items-center justify-between p-4 hover:bg-muted/50 transition-colors cursor-pointer border-b border-border/50"
         onClick={onClick}>
      <div className="flex items-center gap-3">
        {isCompleted ? (
          <CheckCircle2 className="w-5 h-5 text-success" />
        ) : (
          <Circle className="w-5 h-5 text-muted-foreground" />
        )}
        <span className="text-sm font-medium text-foreground">{title}</span>
      </div>
      
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-2">
          {hasVideo && (
            <div className="flex items-center gap-1 text-xs bg-success/10 text-success px-2 py-1 rounded-full">
              <Play className="w-3 h-3" />
              Video
            </div>
          )}
          {hasArticle && (
            <div className="flex items-center gap-1 text-xs bg-info/10 text-info px-2 py-1 rounded-full">
              <FileText className="w-3 h-3" />
              Article
            </div>
          )}
        </div>
        <ChevronRight className="w-4 h-4 text-muted-foreground" />
      </div>
    </div>
  );
};