"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Particles from "react-tsparticles";
import { loadLinksPreset } from "tsparticles-preset-links";
import type { Engine } from "tsparticles-engine";

export default function ParticlesBackground() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [particleColor, setParticleColor] = useState("#ffffff");

  const particlesInit = useCallback(async (engine: Engine) => {
    await loadLinksPreset(engine);
  }, []);

  useEffect(() => {
    if (containerRef.current) {
      const style = getComputedStyle(containerRef.current);
      const bgColor = style.backgroundColor;

      // Convertir rgb(a) a hex
      const rgb = bgColor.match(/\d+/g);
      if (rgb) {
        const [r, g, b] = rgb.map(Number);
        const hex = `#${[r, g, b]
          .map((x) => x.toString(16).padStart(2, "0"))
          .join("")}`;
        setParticleColor(hex);
      }
    }
  }, []);

  return (
    <div ref={containerRef} className="absolute inset-0 z-0 pointer-events-none">
      <Particles
        options={{
          particles: {
            number: { value: 75 },
            size: { value: 3 },
            move: { enable: true },
            opacity: { value: 0.05 },
            color: { value: particleColor },
            links: {
              enable: true,
              distance: 150,
              color: particleColor,
              opacity: 0.05,
              width: 1,
            },
            interactivity: {
              detect_on: "window",
              events: {
                onhover: { enable: true, mode: "repulse" },
                onclick: { enable: true, mode: "push" },
                resize: true
              },
          }
        },
        }}
        init={particlesInit}
        className="absolute inset-0"
        style={{ width: "100%", height: "100%" }}
        canvasClassName="particles-canvas"
        id="tsparticles"
      />
    </div>
  );
}
