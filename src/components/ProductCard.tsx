import { useState } from "react";
import { Heart, ShoppingCart, ThumbsUp, Eye, Star } from "lucide-react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ContentVerificationLabel, ContentDisclaimer } from "@/components/ContentVerificationLabel";

interface ProductCardProps {
  id: string;
  title: string;
  description: string;
  price: string;
  originalPrice?: string;
  imageUrl: string;
  category: string;
  votes: number;
  rating: number;
  reviewCount: number;
  supplier?: string;
  featured?: boolean;
  trending?: boolean;
  viewMode?: 'grid' | 'list';
  verified?: {
    rating: boolean;
    price: boolean;
    supplier: boolean;
    claims: boolean;
  };
}

export function ProductCard({
  id,
  title,
  description,
  price,
  originalPrice,
  imageUrl,
  category,
  votes,
  rating,
  reviewCount,
  supplier,
  featured,
  trending,
  viewMode = 'grid',
  verified = {
    rating: false,
    price: false,
    supplier: false,
    claims: false
  }
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
    <Card className={`group cursor-pointer transition-all duration-300 hover:shadow-medium overflow-hidden ${
      viewMode === 'grid' 
        ? 'hover:-translate-y-1' 
        : 'flex flex-row'
    }`}>
      <div className={`relative ${
        viewMode === 'grid' ? '' : 'w-48 flex-shrink-0'
      }`}>
        <img
          src={imageUrl}
          alt={title}
          className={`object-cover transition-transform duration-300 group-hover:scale-105 ${
            viewMode === 'grid' ? 'w-full h-48' : 'w-full h-full'
          }`}
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

      <div className={`${viewMode === 'grid' ? '' : 'flex-1 flex flex-col'}`}>
      <CardContent className="p-4 flex-1">
        <h3 className="font-semibold text-lg mb-2 line-clamp-2 group-hover:text-primary transition-colors">
          {title}
        </h3>
        <ContentDisclaimer status="unverified" className="mb-3">
          <p className="text-sm text-muted-foreground line-clamp-2">
            {description}
          </p>
        </ContentDisclaimer>
        
        {supplier && (
          <div className="mb-2">
            {!verified.supplier ? (
              <ContentDisclaimer status="unverified">
                <p className="text-xs text-primary">
                  By {supplier}
                </p>
              </ContentDisclaimer>
            ) : (
              <p className="text-xs text-primary">
                By {supplier}
              </p>
            )}
          </div>
        )}

        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center space-x-2">
            {!verified.price ? (
              <div className="flex items-center gap-2">
                <span className="text-lg font-bold text-primary">{price}</span>
                <ContentVerificationLabel status="unverified" showTooltip={false} />
              </div>
            ) : (
              <span className="text-lg font-bold text-primary">{price}</span>
            )}
            {originalPrice && (
              <span className="text-sm text-muted-foreground line-through">
                {originalPrice}
              </span>
            )}
          </div>
          <div className="flex items-center space-x-1 text-sm">
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            <span>{rating}</span>
            <span className="text-muted-foreground">({reviewCount})</span>
            {!verified.rating && (
              <ContentVerificationLabel status="unverified" showTooltip={false} className="ml-1" />
            )}
          </div>
        </div>
      </CardContent>

      <CardFooter className={`p-4 pt-0 space-x-2 ${
        viewMode === 'list' ? 'mt-auto' : ''
      }`}>
        <Button variant="outline" size="sm" className="flex-1">
          <Eye className="h-4 w-4 mr-2" />
          View Details
        </Button>
        <Button variant="default" size="sm" className="flex-1" onClick={handleAddToCart}>
          <ShoppingCart className="h-4 w-4 mr-2" />
          Add to Cart
        </Button>
      </CardFooter>
      </div>
    </Card>
  );
}