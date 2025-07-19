import { useState } from "react";
import { Heart, MapPin, Star, Clock, Plane, Shield, TrendingUp, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TourismPackage } from "@/data/marketplace";
import { ContentVerificationLabel, ContentDisclaimer } from "@/components/ContentVerificationLabel";

type TourismPackageCardProps = TourismPackage;

export const TourismPackageCard = ({
  id,
  title,
  description,
  destination,
  price,
  originalPrice,
  duration,
  votes,
  imageUrl,
  rating,
  reviewCount,
  features,
  treatments,
  accommodation,
  featured,
  trending,
  savings,
  verified = {
    pricing: false,
    savings: false,
    features: false,
    treatments: false,
    rating: false
  }
}: TourismPackageCardProps) => {
  const [currentVotes, setCurrentVotes] = useState(votes);
  const [hasVoted, setHasVoted] = useState(false);

  const handleVote = () => {
    if (!hasVoted) {
      setCurrentVotes(prev => prev + 1);
      setHasVoted(true);
    }
  };

  return (
    <Card className="group relative overflow-hidden hover-scale bg-card border-border/50 hover:border-primary/20 transition-all duration-300 hover:shadow-elegant">
      {/* Status Badges */}
      <div className="absolute top-3 left-3 z-10 flex gap-2">
        {featured && (
          <Badge variant="default" className="bg-gradient-primary text-primary-foreground">
            <Sparkles className="h-3 w-3 mr-1" />
            Featured
          </Badge>
        )}
        {trending && (
          <Badge variant="secondary" className="bg-accent/20 text-accent">
            <TrendingUp className="h-3 w-3 mr-1" />
            Trending
          </Badge>
        )}
      </div>

      {/* Savings Badge */}
      {savings && (
        <div className="absolute top-3 right-3 z-10 flex items-center gap-1">
          <Badge variant="destructive" className="bg-gradient-to-r from-red-500 to-red-600 text-white">
            {savings}
          </Badge>
          {!verified.savings && (
            <ContentVerificationLabel status="unverified" showTooltip={false} />
          )}
        </div>
      )}

      {/* Image */}
      <CardHeader className="p-0 relative">
        <div className="aspect-video relative overflow-hidden">
          <img 
            src={imageUrl} 
            alt={title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
        </div>
      </CardHeader>

      <CardContent className="p-4 space-y-3">
        {/* Location & Duration */}
        <div className="flex items-center justify-between text-sm text-muted-foreground">
          <div className="flex items-center space-x-1">
            <MapPin className="h-4 w-4" />
            <span>{destination}</span>
          </div>
          <div className="flex items-center space-x-1">
            <Clock className="h-4 w-4" />
            <span>{duration}</span>
          </div>
        </div>

        {/* Title */}
        <h3 className="font-semibold text-lg text-foreground line-clamp-2 group-hover:text-primary transition-colors">
          {title}
        </h3>

        {/* Description */}
        <ContentDisclaimer status="unverified" className="mb-3">
          <p className="text-sm text-muted-foreground line-clamp-2">
            {description}
          </p>
        </ContentDisclaimer>

        {/* Rating & Reviews */}
        <div className="flex items-center space-x-2">
          <div className="flex items-center space-x-1">
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            <span className="text-sm font-medium">{rating}</span>
          </div>
          <span className="text-sm text-muted-foreground">({reviewCount} reviews)</span>
          {!verified.rating && (
            <ContentVerificationLabel status="unverified" showTooltip={false} />
          )}
        </div>

        {/* Key Features */}
        <div className="space-y-2">
          {!verified.features ? (
            <ContentDisclaimer status="unverified">
              <div className="flex flex-wrap gap-1">
                {features.slice(0, 2).map((feature, index) => (
                  <Badge key={index} variant="outline" className="text-xs">
                    {feature}
                  </Badge>
                ))}
                {features.length > 2 && (
                  <Badge variant="outline" className="text-xs">
                    +{features.length - 2} more
                  </Badge>
                )}
              </div>
            </ContentDisclaimer>
          ) : (
            <div className="flex flex-wrap gap-1">
              {features.slice(0, 2).map((feature, index) => (
                <Badge key={index} variant="outline" className="text-xs">
                  {feature}
                </Badge>
              ))}
              {features.length > 2 && (
                <Badge variant="outline" className="text-xs">
                  +{features.length - 2} more
                </Badge>
              )}
            </div>
          )}
        </div>

        {/* Accommodation */}
        <ContentDisclaimer status="unverified">
          <div className="flex items-center space-x-1 text-sm">
            <Shield className="h-4 w-4 text-primary" />
            <span className="text-muted-foreground">{accommodation}</span>
          </div>
        </ContentDisclaimer>

        {/* Treatments Preview */}
        <div className="space-y-1">
          <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
            Treatments Included:
          </p>
          {!verified.treatments ? (
            <ContentDisclaimer status="unverified">
              <div className="flex flex-wrap gap-1">
                {treatments.slice(0, 3).map((treatment, index) => (
                  <span key={index} className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">
                    {treatment}
                  </span>
                ))}
                {treatments.length > 3 && (
                  <span className="text-xs text-muted-foreground">
                    +{treatments.length - 3} more
                  </span>
                )}
              </div>
            </ContentDisclaimer>
          ) : (
            <div className="flex flex-wrap gap-1">
              {treatments.slice(0, 3).map((treatment, index) => (
                <span key={index} className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">
                  {treatment}
                </span>
              ))}
              {treatments.length > 3 && (
                <span className="text-xs text-muted-foreground">
                  +{treatments.length - 3} more
                </span>
              )}
            </div>
          )}
        </div>
      </CardContent>

      <CardFooter className="p-4 pt-0 flex items-center justify-between">
        {/* Pricing */}
        <div className="space-y-1">
          <div className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-primary">{price}</span>
            {originalPrice && (
              <span className="text-sm text-muted-foreground line-through">
                {originalPrice}
              </span>
            )}
            {!verified.pricing && (
              <ContentVerificationLabel status="unverified" showTooltip={false} />
            )}
          </div>
          <p className="text-xs text-muted-foreground">Per person, all inclusive</p>
        </div>

        {/* Vote Button */}
        <Button
          variant={hasVoted ? "default" : "outline"}
          size="sm"
          onClick={handleVote}
          className={`flex items-center space-x-1 ${
            hasVoted 
              ? "bg-gradient-primary text-primary-foreground" 
              : "hover:bg-primary/10 hover:text-primary hover:border-primary"
          }`}
        >
          <Heart className={`h-4 w-4 ${hasVoted ? "fill-current" : ""}`} />
          <span>{currentVotes}</span>
        </Button>
      </CardFooter>
    </Card>
  );
};