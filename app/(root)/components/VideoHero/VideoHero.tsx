import Image from "next/image";
import React from "react";

export default function VideoHero() {
  return (
    <div className="flex justify-center top-[-80px] relative">
      <Image
        src={
          "https://www.biblecenterchurch.com/wp-content/uploads/2018/10/video-placeholder.png"
        }
        alt="Video Placeholder"
        width={1200}
        height={400}
        className="top-[-30px] rounded-lg shadow-lg"
      />
    </div>
  );
}
