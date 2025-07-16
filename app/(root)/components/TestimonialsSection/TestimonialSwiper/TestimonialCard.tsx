import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Image from "next/image";
import React from "react";

interface Props {
  id: number;
  quote: string;
  avatar: string;
  name: string;
  initials: string;
  company: string;
  slidesPerView: number;
  companyName: string;
}

export default function TestimonialCard({
  id,
  quote,
  avatar,
  name,
  initials,
  company,
  slidesPerView,
  companyName,
}: Props) {
  return (
    <div
      key={id}
      className="flex-shrink-0 !px-4 z-10 !rounded-xl"
      style={{ width: `${100 / slidesPerView}%` }}
    >
      <div className="relative h-full flex flex-col z-10 justify-between !rounded-xl !p-6 border  bg-gradient-to-l from-gray-800 via-transparent to-transparent ">
        {/* Quote */}
        <div className="!mb-4">
          <Image
            src={"https://www.pngarts.com/files/5/Star-Rating-5-PNG.png"}
            width={100}
            height={200}
            alt="stars"
          />
        </div>
        <blockquote className="text-lg border-b border-gray-500 !pb-16 z-10 font-light md:text-3xl leading-relaxed text-gray-100 flex-grow !mb-6">
          "{quote}"
        </blockquote>


        {/* Author info */}
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-4 !mt-auto z-10">
            <Avatar className="h-12 w-12 flex-shrink-0 z-10">
              <AvatarImage src={avatar || "/placeholder.svg"} alt={name} />
              <AvatarFallback className="bg-gray-700  text-white">
                {initials}
              </AvatarFallback>
            </Avatar>
            <div className="min-w-0 z-10">
              <div className="font-semibold text-white truncate z-10">
                {name}
              </div>
              <div className="text-gray-400 text-sm truncate">{company}</div>
            </div>
          </div>
          <div className="border-l border-gray-500 !p-4 opacity-55">
            <p>{companyName}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
