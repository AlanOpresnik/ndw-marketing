"use client"

import { useEffect, useState, useRef } from "react"
import gsap from "gsap"
import Loader from "../shared/loader/Loader"

export default function ClientWrapper({ children }: { children: React.ReactNode }) {
  const [isLoaded, setIsLoaded] = useState(false)
  const loaderRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleLoad = () => {
      // Esperar breve para mostrar transición
      gsap.to(loaderRef.current, {
        opacity: 1,
        scale: 1.05,
        duration: 0.7,
        ease: "power2.out",
        onComplete: () => setIsLoaded(true),
      })
    }

    if (document.readyState === "complete") {
      handleLoad()
    } else {
      window.addEventListener("load", handleLoad)
      return () => window.removeEventListener("load", handleLoad)
    }
  }, [])

  return (
    <>
      {!isLoaded && (
        <div ref={loaderRef}>
          <Loader isLoaded={false} />
        </div>
      )}
      <div className={`${!isLoaded ? "opacity-20 pointer-events-none" : "opacity-100"} transition-opacity duration-700`}>
        {children}
      </div>
    </>
  )
}