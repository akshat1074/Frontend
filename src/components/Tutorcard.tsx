import React from 'react';
import { Star, MapPin } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';

interface TutorCardProps {
  name: string;
  image: string;
  rating: number;
  reviews: number;
  specialization: string;
  location?: string;
  hourlyRate?: number;
}

const TutorCard: React.FC<TutorCardProps> = ({
  name,
  image,
  rating,
  reviews,
  specialization,
  location,
  hourlyRate
}) => {
  


  return (
    <a href="/tutors/TomHaniel" className='block'>  
    <Card className="group hover:shadow-md transition-all duration-200 cursor-pointer border-border/50">
      <CardContent className="p-6">
     
        <div className="flex flex-col items-center text-center space-y-4">
          <Avatar className="h-20 w-20">
            <AvatarImage src={image} alt={name} />
            <AvatarFallback>{name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
          </Avatar>
          
          <div className="space-y-2">
            <h3 className="font-semibold text-lg text-foreground">{name}</h3>
            <Badge variant="secondary" className="text-xs px-2 py-1">
              {specialization}
            </Badge>
          </div>

          <div className="flex items-center space-x-1">
            <div className="flex items-center space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`h-4 w-4 ${
                    i < Math.floor(rating)
                      ? 'fill-yellow-400 text-yellow-400'
                      : 'text-muted-foreground'
                  }`}
                />
              ))}
            </div>
            <span className="text-sm text-muted-foreground">({reviews})</span>
          </div>

          {location && (
            <div className="flex items-center space-x-1 text-sm text-muted-foreground">
              <MapPin className="h-4 w-4" />
              <span>{location}</span>
            </div>
          )}

          {hourlyRate && (
            <div className="text-sm font-medium text-foreground">
              ${hourlyRate}/hour
            </div>
          )}
        </div>
        
      </CardContent>
    </Card>
    </a>
    
  );
};

export default TutorCard;