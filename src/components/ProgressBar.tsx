interface ProgressBarProps {
    progress: number;
    className?: string;
  }
  
  export const ProgressBar = ({ progress, className = "" }: ProgressBarProps) => {
    return (
      <div className={`w-full bg-muted rounded-full h-2 ${className}`}>
        <div 
          className="bg-gradient-to-r from-success to-info h-2 rounded-full transition-all duration-300"
          style={{ width: `${Math.min(100, Math.max(0, progress))}%` }}
        />
      </div>
    );
  };