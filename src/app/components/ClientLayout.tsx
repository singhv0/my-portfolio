"use client";
import { useRef, useEffect } from "react";
import "locomotive-scroll/dist/locomotive-scroll.css";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let scroll: any;
    import("locomotive-scroll").then((LocomotiveScroll) => {
      if (scrollRef.current) {
        scroll = new LocomotiveScroll.default({
          el: scrollRef.current,
          smooth: true,
        });
      }
    });
    return () => {
      if (scroll) scroll.destroy();
    };
  }, []);

  return (
    <div data-scroll-container ref={scrollRef}>
      {children}
    </div>
  );
}