import { LucideIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface CategoryCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  productCount: number;
  onClick: () => void;
}

export function CategoryCard({ icon: Icon, title, description, productCount, onClick }: CategoryCardProps) {
  return (
    <Card 
      className="group cursor-pointer transition-all duration-300 hover:shadow-medium hover:-translate-y-1 border-0 bg-gradient-subtle"
      onClick={onClick}
    >
      <CardContent className="p-6 text-center">
        <div className="mb-4 inline-flex items-center justify-center w-16 h-16 bg-gradient-primary rounded-full group-hover:scale-110 transition-transform duration-300">
          <Icon className="h-8 w-8 text-primary-foreground" />
        </div>
        <h3 className="text-lg font-semibold text-card-foreground mb-2">
          {title}
        </h3>
        <p className="text-sm text-muted-foreground mb-3">
          {description}
        </p>
        <div className="text-xs text-primary font-medium">
          {productCount} Products
        </div>
      </CardContent>
    </Card>
  );
}