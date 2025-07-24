import { useState } from "react";
import { Heart, ShoppingCart, ThumbsUp, Eye, Star, GitCompareArrows, Truck, Shield, Clock } from "lucide-react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

import { Product as MarketplaceProduct } from "@/data/marketplace";

interface Product extends MarketplaceProduct {
  originalPrice?: number | string;
}

interface ProductCardProps {
  product: Product;
  viewMode?: 'grid' | 'list';
  onWishlist?: () => void;
  onCompare?: () => void;
  onAddToCart?: () => void;
  isInWishlist?: boolean;
  isInCompare?: boolean;
  isInCart?: boolean;
}

export function ProductCard({
  product,
  viewMode = 'grid',
  onWishlist,
  onCompare,
  onAddToCart,
  isInWishlist = false,
  isInCompare = false,
  isInCart = false
}: ProductCardProps) {
  const [voteCount, setVoteCount] = useState(product.votes);
  const [hasVoted, setHasVoted] = useState(false);

  const handleVote = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!hasVoted) {
      setVoteCount(prev => prev + 1);
      setHasVoted(true);
    }
  };

  const handleWishlist = (e: React.MouseEvent) => {
    e.stopPropagation();
    onWishlist?.();
  };

  const handleCompare = (e: React.MouseEvent) => {
    e.stopPropagation();
    onCompare?.();
  };

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    onAddToCart?.();
  };

  const isDiscounted = product.originalPrice && product.originalPrice !== product.price;

  return (
    <Card className={`group cursor-pointer transition-all duration-300 hover:shadow-xl overflow-hidden border-0 bg-white ${
      viewMode === 'grid' 
        ? 'hover:-translate-y-2 hover:scale-[1.02]' 
        : 'flex flex-row'
    }`}>
      <div className={`relative ${
        viewMode === 'grid' ? '' : 'w-48 flex-shrink-0'
      }`}>
        <img
          src={product.imageUrl}
          alt={product.title}
          className={`object-cover transition-transform duration-300 group-hover:scale-105 ${
            viewMode === 'grid' ? 'w-full h-48' : 'w-full h-full'
          }`}
        />
        
        {/* Overlay badges and actions */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Top badges */}
        <div className="absolute top-2 left-2 flex flex-col gap-1">
          <Badge variant="secondary" className="text-xs bg-white/90 text-gray-700">
            {product.category}
          </Badge>
          {product.featured && (
            <Badge className="text-xs bg-[#00A86B] text-white">
              Featured
            </Badge>
          )}
          {product.trending && (
            <Badge className="text-xs bg-[#0066CC] text-white">
              Trending
            </Badge>
          )}
          {isDiscounted && (
            <Badge className="text-xs bg-red-500 text-white">
              Sale
            </Badge>
          )}
        </div>
        
        {/* Action buttons */}
        <div className="absolute top-2 right-2 flex flex-col gap-1">
          <Button
            variant="vote"
            size="sm"
            onClick={handleVote}
            disabled={hasVoted}
            className={`${hasVoted ? 'bg-[#00A86B] text-white' : 'bg-white/90'} text-xs px-2 py-1 shadow-sm`}
          >
            <ThumbsUp className="h-3 w-3 mr-1" />
            {voteCount}
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8 bg-white/90 hover:bg-white shadow-sm"
            onClick={handleWishlist}
          >
            <Heart className={`h-4 w-4 ${isInWishlist ? 'fill-red-500 text-red-500' : 'text-gray-600'}`} />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className={`h-8 w-8 shadow-sm ${isInCompare ? 'bg-[#0066CC] text-white' : 'bg-white/90 hover:bg-white text-gray-600'}`}
            onClick={handleCompare}
            disabled={!isInCompare && onCompare === undefined}
          >
            <GitCompareArrows className="h-4 w-4" />
          </Button>
        </div>
        
        {/* Quick view on hover */}
        <div className="absolute bottom-2 left-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <Button variant="secondary" size="sm" className="w-full bg-white/90 backdrop-blur-sm">
            <Eye className="h-4 w-4 mr-2" />
            Quick View
          </Button>
        </div>
      </div>

      <div className={`${viewMode === 'grid' ? '' : 'flex-1 flex flex-col'}`}>
        <CardContent className="p-4 flex-1">
          {/* Supplier info */}
          {product.supplier && (
            <div className="flex items-center gap-2 mb-2">
              <div className="w-6 h-6 bg-[#0066CC] text-white rounded-full flex items-center justify-center text-xs font-bold">
                {product.supplier.charAt(0)}
              </div>
              <span className="text-xs text-gray-600">{product.supplier}</span>
              <Badge variant="outline" className="text-xs">
                <Shield className="w-2 h-2 mr-1" />
                Verified
              </Badge>
            </div>
          )}
          
          <h3 className="font-semibold text-lg mb-2 line-clamp-2 group-hover:text-[#0066CC] transition-colors">
            {product.title}
          </h3>
          <p className="text-sm text-gray-600 mb-3 line-clamp-2">
            {product.description}
          </p>

          {/* Rating and reviews */}
          <div className="flex items-center gap-3 mb-3">
            <div className="flex items-center space-x-1 text-sm">
              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              <span className="font-medium">{product.rating}</span>
              <span className="text-gray-500">({product.reviewCount} reviews)</span>
            </div>
          </div>

          {/* Price */}
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center space-x-2">
              <span className="text-xl font-bold text-[#0066CC]">{product.price}</span>
              {isDiscounted && (
                <span className="text-sm text-gray-500 line-through">
                  {product.originalPrice}
                </span>
              )}
            </div>
            {isDiscounted && (
              <Badge className="bg-red-50 text-red-600 border-red-200">
                Save {Math.round(((parseFloat(product.originalPrice?.toString().replace('$', '').replace(',', '') || '0') - parseFloat(product.price.replace('$', '').replace(',', ''))) / parseFloat(product.originalPrice?.toString().replace('$', '').replace(',', '') || '1')) * 100)}%
              </Badge>
            )}
          </div>
          
          {/* Features/Benefits */}
          <div className="flex flex-wrap gap-2 mb-3">
            <div className="flex items-center gap-1 text-xs text-gray-600">
              <Truck className="w-3 h-3" />
              Free Shipping
            </div>
            <div className="flex items-center gap-1 text-xs text-gray-600">
              <Clock className="w-3 h-3" />
              2-3 Days
            </div>
            <div className="flex items-center gap-1 text-xs text-gray-600">
              <Shield className="w-3 h-3" />
              Warranty
            </div>
          </div>
        </CardContent>

        <CardFooter className={`p-4 pt-0 space-x-2 ${
          viewMode === 'list' ? 'mt-auto' : ''
        }`}>
          <Button 
            variant="outline" 
            size="sm" 
            className="flex-1 border-[#0066CC] text-[#0066CC] hover:bg-[#0066CC] hover:text-white"
          >
            <Eye className="h-4 w-4 mr-2" />
            Details
          </Button>
          <Button 
            variant="default" 
            size="sm" 
            className={`flex-1 ${
              isInCart 
                ? 'bg-green-600 hover:bg-green-700' 
                : 'bg-[#00A86B] hover:bg-[#00A86B]/90'
            }`}
            onClick={handleAddToCart}
          >
            <ShoppingCart className="h-4 w-4 mr-2" />
            {isInCart ? 'Added' : 'Add to Cart'}
          </Button>
        </CardFooter>
      </div>
    </Card>
  );
}