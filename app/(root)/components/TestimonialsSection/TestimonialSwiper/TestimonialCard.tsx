import { Star } from "lucide-react";
import React from "react";

interface Props {
  testimonial: {
    id: number;
    rating: number;
    text: string;
    avatar?: string;
    author: string;
    position: string;
    company: string;
  };
}

export default function TestimonialCard({ testimonial }: Props) {
  return (
    <div className="  rounded-2xl !p-8 border bg-gradient-to-br from-transparent via-transparent to-gray-700 border-gray-700  flex flex-col lg:w-[700px] min-h-[390px] ">
      {/* Rating Stars */}
      <div className="flex gap-1 !mb-6">
        {[...Array(testimonial.rating)].map((_, i) => (
          <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
        ))}
      </div>

      {/* Testimonial Text */}
      <div>
        <blockquote className="text-gray-200  md:text-2xl leading-relaxed !mb-4 !flex-grow">
          &quot;{testimonial.text}&quot;
        </blockquote>
      </div>

      {/* Author Info */}
      <div className="flex items-center justify-between !pt-6 border-t border-gray-700">
        <div className="flex items-center gap-4">
          <div className="relative">
            <img
              src={testimonial.avatar || "/placeholder.svg"}
              alt={testimonial.author}
              className="w-12 h-12 rounded-full  bg-gray-600"
            />
          </div>
          <div>
            <div className="text-white font-semibold">{testimonial.author}</div>
            <div className="text-gray-400 text-sm font-medium">
              {testimonial.company}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
