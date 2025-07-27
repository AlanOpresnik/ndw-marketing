"use client";
 
import React from "react";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards"; 
 
export function InfiniteMovingCardsDemo() {
  return (
    <div className=" rounded-md flex flex-col antialiased   items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={testimonials}
        direction="left"
        speed="normal"
      />
    </div>
  );
}
 
const testimonials = [
  {
    quote:
      "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair.",
    name: "Charles Dickens",
    title: "A Tale of Two Cities",
    avatar: '/clientes/5.png'
  },
  {
    quote:
      "To be, or not to be, that is the question: Whether 'tis nobler in the mind to suffer The slings and arrows of outrageous fortune, Or to take Arms against a Sea of troubles, And by opposing end them: to die, to sleep.",
    name: "William Shakespeare",
    title: "Hamlet",
    avatar: '/clientes/7.png'
  },
  {
    quote: "All that we see or seem is but a dream within a dream.",
    name: "Edgar Allan Poe",
    title: "A Dream Within a Dream",
    avatar: '/clientes/casa_padua.png'
  },
    {
    quote: "All that we see or seem is but a dream within a dream.",
    name: "Farmacia jar",
    title: "A Dream Within a Dream",
    avatar: '/clientes/farmacia-jar.png'
  },  {
    quote: "All that we see or seem is but a dream within a dream.",
    name: "Farmacia",
    title: "A Dream Within a Dream",
    avatar: '/clientes/farmacia.png'
  },
    {
    quote: "All that we see or seem is but a dream within a dream.",
    name: "fly nigth",
    title: "A Dream Within a Dream",
    avatar: '/clientes/fly-nigth.png'
  },
    {
    quote: "All that we see or seem is but a dream within a dream.",
    name: "N",
    title: "A Dream Within a Dream",
    avatar: '/clientes/N.png'
  },
    {
    quote: "All that we see or seem is but a dream within a dream.",
    name: "P",
    title: "A Dream Within a Dream",
    avatar: '/clientes/P.png'
  },
    {
    quote: "All that we see or seem is but a dream within a dream.",
    name: "Sofia rodados",
    title: "A Dream Within a Dream",
    avatar: '/clientes/sofia_rodados.png'
  },
    {
    quote: "All that we see or seem is but a dream within a dream.",
    name: "Triangulo",
    title: "A Dream Within a Dream",
    avatar: '/clientes/triangulo.png'
  },

];