"use client";

import { useCallback, useEffect, useRef } from "react";
import Particles from "react-tsparticles";
import { loadLinksPreset } from "tsparticles-preset-links";
import type { Engine } from "tsparticles-engine";
import { useApp } from "@/app/contexts/AppContext";

export default function AnimatedBackground() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { colorPalette } = useApp();

  const particlesInit = useCallback(async (engine: Engine) => {
    await loadLinksPreset(engine);
  }, []);

  return (
    <div ref={containerRef} className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
      <Particles
        options={{
          particles: {
            number: { value: 80 },
            size: { 
              value: { min: 1, max: 4 },
              animation: {
                enable: true,
                speed: 2,
                sync: false
              }
            },
            move: { 
              enable: true,
              speed: 1.5,
              direction: "none",
              random: true,
              straight: false,
              outModes: {
                default: "bounce"
              }
            },
            opacity: { 
              value: { min: 0.1, max: 0.3 },
              animation: {
                enable: true,
                speed: 1,
                sync: false
              }
            },
            color: { value: colorPalette.colors.primary },
            links: {
              enable: true,
              distance: 120,
              color: colorPalette.colors.highlight,
              opacity: 0.2,
              width: 1,
            },
          },
          interactivity: {
            detect_on: "window",
            events: {
              onhover: { 
                enable: true, 
                mode: "grab",
                parallax: { enable: false, force: 60, smooth: 10 }
              },
              onclick: { enable: true, mode: "push" },
              resize: true
            },
            modes: {
              grab: {
                distance: 140,
                links: {
                  opacity: 0.5
                }
              },
              push: {
                quantity: 4
              }
            }
          },
          background: {
            opacity: 0
          },
          fpsLimit: 120,
          retina_detect: true
        }}
        init={particlesInit}
        className="absolute inset-0"
        style={{ width: "100%", height: "100%" }}
      />
    </div>
  );
}