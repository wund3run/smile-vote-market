import { useState } from "react";
import { Send, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface RequestFormProps {
  isOpen: boolean;
  onClose: () => void;
}

export function RequestForm({ isOpen, onClose }: RequestFormProps) {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "",
    budget: "",
    quantity: "",
    urgency: "normal"
  });

  const [votes, setVotes] = useState(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    // TODO: Implement actual form submission logic
    onClose();
  };

  const handleVote = () => {
    setVotes(prev => prev + 1);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="fixed inset-0 bg-black/50" onClick={onClose} />
      <Card className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto animate-scale-in">
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Request Product or Service</CardTitle>
          <Button variant="ghost" size="icon" onClick={onClose}>
            <X className="h-4 w-4" />
          </Button>
        </CardHeader>
        
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="text-sm font-medium mb-2 block">
                Product/Service Title *
              </label>
              <Input
                placeholder="e.g., High-speed dental handpiece"
                value={formData.title}
                onChange={(e) => setFormData(prev => ({ ...prev, title: e.target.value }))}
                required
              />
            </div>

            <div>
              <label className="text-sm font-medium mb-2 block">
                Detailed Description *
              </label>
              <Textarea
                placeholder="Describe what you're looking for, specifications, features needed..."
                value={formData.description}
                onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
                rows={4}
                required
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="category" className="text-sm font-medium mb-2 block">
                  Category
                </label>
                <select
                  id="category"
                  className="w-full px-3 py-2 border border-input rounded-md bg-background"
                  value={formData.category}
                  onChange={(e) => setFormData(prev => ({ ...prev, category: e.target.value }))}
                >
                  <option value="">Select category</option>
                  <option value="equipment">Dental Equipment</option>
                  <option value="instruments">Instruments</option>
                  <option value="consumables">Consumables</option>
                  <option value="oral-care">Oral Care Products</option>
                  <option value="digital">Digital Solutions</option>
                  <option value="laboratory">Laboratory Services</option>
                </select>
              </div>

              <div>
                <label className="text-sm font-medium mb-2 block">
                  Budget Range
                </label>
                <Input
                  placeholder="e.g., $500-1000"
                  value={formData.budget}
                  onChange={(e) => setFormData(prev => ({ ...prev, budget: e.target.value }))}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium mb-2 block">
                  Quantity Needed
                </label>
                <Input
                  placeholder="e.g., 5 units"
                  value={formData.quantity}
                  onChange={(e) => setFormData(prev => ({ ...prev, quantity: e.target.value }))}
                />
              </div>

              <div>
                <label htmlFor="urgency" className="text-sm font-medium mb-2 block">
                  Urgency
                </label>
                <select
                  id="urgency"
                  className="w-full px-3 py-2 border border-input rounded-md bg-background"
                  value={formData.urgency}
                  onChange={(e) => setFormData(prev => ({ ...prev, urgency: e.target.value }))}
                >
                  <option value="low">Low - Within 3 months</option>
                  <option value="normal">Normal - Within 1 month</option>
                  <option value="high">High - Within 1 week</option>
                  <option value="urgent">Urgent - ASAP</option>
                </select>
              </div>
            </div>

            <div className="bg-muted rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-medium">Community Interest</h4>
                <div className="flex items-center space-x-2">
                  <Button variant="vote" size="sm" onClick={handleVote}>
                    👍 {votes}
                  </Button>
                  {votes > 0 && (
                    <Badge variant="secondary" className="text-xs">
                      {votes} {votes === 1 ? 'person wants' : 'people want'} this
                    </Badge>
                  )}
                </div>
              </div>
              <p className="text-sm text-muted-foreground">
                Other users can vote on your request to show interest. Higher voted requests get priority from suppliers.
              </p>
            </div>

            <div className="flex space-x-3">
              <Button type="button" variant="outline" onClick={onClose} className="flex-1">
                Cancel
              </Button>
              <Button type="submit" className="flex-1">
                <Send className="h-4 w-4 mr-2" />
                Submit Request
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}