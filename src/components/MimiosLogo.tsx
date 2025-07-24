import { cn } from "@/lib/utils";

interface MimiosLogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
  showText?: boolean;
  onClick?: () => void;
  clickable?: boolean;
}

export function MimiosLogo({ className, size = "md", showText = true, onClick, clickable = false }: MimiosLogoProps) {
  const sizeClasses = {
    sm: "w-6 h-6",
    md: "w-8 h-8", 
    lg: "w-12 h-12"
  };

  const textSizeClasses = {
    sm: "text-lg",
    md: "text-xl",
    lg: "text-2xl"
  };

  const content = (
    <div className={cn("flex items-center space-x-2", className)}>
      {/* Official Mimios Logo */}
      <img
        src="/mimiso-logo.png"
        alt="Mimios Logo"
        className={cn(
          "object-contain transition-transform hover:scale-105 drop-shadow-md", 
          sizeClasses[size],
          clickable && "cursor-pointer"
        )}
      />
      
      {/* Brand Text */}
      {showText && (
        <h1 className={cn(
          "font-bold bg-gradient-to-r from-[#0066CC] to-[#00A86B] bg-clip-text text-transparent",
          textSizeClasses[size],
          clickable && "cursor-pointer"
        )}>
          Mimios
        </h1>
      )}
    </div>
  );

  if (clickable && onClick) {
    return (
      <button
        onClick={onClick}
        className="focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-lg transition-transform hover:scale-105"
        aria-label="Navigate to platform homepage"
      >
        {content}
      </button>
    );
  }

  return content;
}