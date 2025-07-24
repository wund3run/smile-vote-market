import { AlertTriangle, Info, HelpCircle } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

export type VerificationStatus = 'unverified' | 'inference' | 'speculation' | 'unknown';

interface ContentVerificationLabelProps {
  status: VerificationStatus;
  content?: string;
  className?: string;
  showTooltip?: boolean;
}

const verificationConfig = {
  unverified: {
    label: "[Unverified]",
    icon: AlertTriangle,
    variant: "secondary" as const,
    tooltip: "This information has not been independently verified and should not be considered as established fact."
  },
  inference: {
    label: "[Inference]",
    icon: Info,
    variant: "outline" as const,
    tooltip: "This information is based on inference or deduction and may not be factually accurate."
  },
  speculation: {
    label: "[Speculation]",
    icon: HelpCircle,
    variant: "outline" as const,
    tooltip: "This information is speculative and should not be relied upon as fact."
  },
  unknown: {
    label: "[Unknown]",
    icon: HelpCircle,
    variant: "secondary" as const,
    tooltip: "The accuracy of this information cannot be determined."
  }
};

export function ContentVerificationLabel({ 
  status, 
  content, 
  className,
  showTooltip = true 
}: ContentVerificationLabelProps) {
  const config = verificationConfig[status];
  const Icon = config.icon;

  const badgeContent = (
    <Badge variant={config.variant} className={`text-xs font-medium ${className}`}>
      <Icon className="h-3 w-3 mr-1" />
      {config.label}
    </Badge>
  );

  if (!showTooltip) {
    return badgeContent;
  }

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        {badgeContent}
      </TooltipTrigger>
      <TooltipContent>
        <div className="max-w-xs">
          <p className="font-medium mb-1">{config.label}</p>
          <p className="text-sm">{config.tooltip}</p>
          {content && (
            <p className="text-xs mt-1 opacity-75">
              Content: {content}
            </p>
          )}
        </div>
      </TooltipContent>
    </Tooltip>
  );
}

interface ContentDisclaimerProps {
  children: React.ReactNode;
  status: VerificationStatus;
  className?: string;
}

export function ContentDisclaimer({ children, status, className }: ContentDisclaimerProps) {
  const config = verificationConfig[status];
  
  return (
    <div className={`space-y-2 ${className}`}>
      <div className="flex items-start gap-2">
        <ContentVerificationLabel status={status} showTooltip={false} />
        <div className="flex-1">
          {children}
        </div>
      </div>
    </div>
  );
}