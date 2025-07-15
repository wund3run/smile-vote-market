import { useState } from "react";
import { Heart, ShoppingCart, ThumbsUp, Eye } from "lucide-react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface ProductCardProps {
  id: string;
  title: string;
  description: string;
  price: string;
  originalPrice?: string;
  image: string;
  category: string;
  votes: number;
  isB2B?: boolean;
  supplier?: string;
  minOrder?: string;
}

export function ProductCard({
  id,
  title,
  description,
  price,
  originalPrice,
  image,
  category,
  votes,
  isB2B = false,
  supplier,
  minOrder
}: ProductCardProps) {
  const [voteCount, setVoteCount] = useState(votes);
  const [hasVoted, setHasVoted] = useState(false);
  const [isWishlisted, setIsWishlisted] = useState(false);

  const handleVote = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!hasVoted) {
      setVoteCount(prev => prev + 1);
      setHasVoted(true);
    }
  };

  const handleWishlist = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsWishlisted(!isWishlisted);
  };

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    // Add to cart logic
  };

  return (
    <Card className="group cursor-pointer transition-all duration-300 hover:shadow-medium hover:-translate-y-1 overflow-hidden">
      <div className="relative">
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute top-2 left-2">
          <Badge variant="secondary" className="text-xs">
            {category}
          </Badge>
        </div>
        <div className="absolute top-2 right-2 flex space-x-1">
          <Button
            variant="vote"
            size="sm"
            onClick={handleVote}
            disabled={hasVoted}
            className={`${hasVoted ? 'bg-accent text-accent-foreground' : ''} text-xs px-2 py-1`}
          >
            <ThumbsUp className="h-3 w-3 mr-1" />
            {voteCount}
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8 bg-background/80 hover:bg-background"
            onClick={handleWishlist}
          >
            <Heart className={`h-4 w-4 ${isWishlisted ? 'fill-red-500 text-red-500' : ''}`} />
          </Button>
        </div>
      </div>

      <CardContent className="p-4">
        <h3 className="font-semibold text-lg mb-2 line-clamp-2 group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
          {description}
        </p>
        
        {isB2B && supplier && (
          <p className="text-xs text-primary mb-2">
            By {supplier}
          </p>
        )}

        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center space-x-2">
            <span className="text-lg font-bold text-primary">{price}</span>
            {originalPrice && (
              <span className="text-sm text-muted-foreground line-through">
                {originalPrice}
              </span>
            )}
          </div>
          {isB2B && minOrder && (
            <span className="text-xs text-muted-foreground">
              MOQ: {minOrder}
            </span>
          )}
        </div>
      </CardContent>

      <CardFooter className="p-4 pt-0 space-x-2">
        <Button variant="outline" size="sm" className="flex-1">
          <Eye className="h-4 w-4 mr-2" />
          View Details
        </Button>
        <Button variant="default" size="sm" className="flex-1" onClick={handleAddToCart}>
          <ShoppingCart className="h-4 w-4 mr-2" />
          {isB2B ? 'Request Quote' : 'Add to Cart'}
        </Button>
      </CardFooter>
    </Card>
  );
}