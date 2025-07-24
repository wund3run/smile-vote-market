import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface MimiosLogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
  showText?: boolean;
}

export function MimiosLogo({ className, size = "md", showText = true }: MimiosLogoProps) {
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

  return (
    <div className={cn("flex items-center space-x-2", className)}>
      {/* Official Mimios Logo */}
      <img
        src="/mimios-logo.png"
        alt="Mimios Logo"
        className={cn("object-contain", sizeClasses[size])}
      />
      
      {/* Brand Text */}
      {showText && (
        <h1 className={cn(
          "font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent",
          textSizeClasses[size]
        )}>
          Mimios
        </h1>
      )}
    </div>
  );
}
