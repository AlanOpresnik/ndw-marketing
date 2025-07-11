"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingPhrases } from "@/components/ui/infinite-moving-pharses";

export function InfiniteCarouselPhrases() {
  return (
    <div className=" rounded-md flex flex-col antialiased   items-center justify-center relative overflow-hidden">
      <InfiniteMovingPhrases
        items={pharses}
        direction="left"
        speed="normal"
      />
    </div>
  );
}

const pharses = [
  {
    quote:
      "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair.",
    name: "Charles Dickens1",
    title: "Impulsando Marcas",
    avatar: "/flechaNaranja.svg",
  },
    {
    quote:
      "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair.",
    name: "Charles Dickens2",
    title: "Impulsando Marcas",
    avatar: "/flechaNaranja.svg",
  },
    {
    quote:
      "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair.",
    name: "Charles Dickens3",
    title: "Impulsando Marcas",
    avatar: "/flechaNaranja.svg",
  },
];
