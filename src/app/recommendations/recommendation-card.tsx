import React, { useState } from 'react';
import { Flame, Gem, CloudMoon, Star } from 'lucide-react';
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

interface Recommendation {
  type: 'puja' | 'gemstone' | 'ritual' | 'meditation';
  title: string;
  description: string;
  benefits: string[];
  timing?: string;
  items?: string[];
}

export const RecommendationCard: React.FC<{ recommendation: Recommendation }> = ({ recommendation }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const getIcon = () => {
    switch (recommendation.type) {
      case 'puja':
        return <Flame className="w-8 h-8 text-red-600" />;
      case 'gemstone':
        return <Gem className="w-8 h-8 text-red-600" />;
      case 'meditation':
        return <CloudMoon className="w-8 h-8 text-red-600" />;
      case 'ritual':
        return <Star className="w-8 h-8 text-red-600" />;
    }
  };

  return (
    <Card className="group transition-all duration-500 hover:shadow-xl">
      <CardHeader>
        <div className="flex items-center mb-2">
          <div className="p-2 rounded-lg bg-red-50 group-hover:bg-red-100 transition-colors duration-300">
            {getIcon()}
          </div>
          <CardTitle className="text-2xl font-bold text-red-900 ml-4">{recommendation.title}</CardTitle>
        </div>
        <CardDescription className="text-red-700">{recommendation.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <Accordion type="single" collapsible>
          <AccordionItem value="benefits">
            <AccordionTrigger>Benefits</AccordionTrigger>
            <AccordionContent>
              <ul className="space-y-2">
                {recommendation.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-red-500 mr-2">•</span>
                    <span className="text-red-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </AccordionContent>
          </AccordionItem>
          {recommendation.timing && (
            <AccordionItem value="timing">
              <AccordionTrigger>Timing</AccordionTrigger>
              <AccordionContent>
                <p className="text-red-700">{recommendation.timing}</p>
              </AccordionContent>
            </AccordionItem>
          )}
          {recommendation.items && (
            <AccordionItem value="items">
              <AccordionTrigger>Required Items</AccordionTrigger>
              <AccordionContent>
                <ul className="space-y-2">
                  {recommendation.items.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-red-500 mr-2">•</span>
                      <span className="text-red-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </AccordionContent>
            </AccordionItem>
          )}
        </Accordion>
      </CardContent>
      <CardFooter>
        <Button onClick={() => setIsExpanded(!isExpanded)} variant="outline" className="w-full">
          {isExpanded ? 'Show Less' : 'Learn More'}
        </Button>
      </CardFooter>
    </Card>
  );
};

