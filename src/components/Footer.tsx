"use client";

import Link from "next/link";
import { Instagram, Mail, Phone, Globe } from "lucide-react";
import { useEffect, useRef } from "react";

export default function Footer() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas dimensions
    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Particle system for cultural connection animation
    const particles: Array<{
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      color: string;
      life: number;
      maxLife: number;
      connectionDistance: number;
    }> = [];

    const colors = [
      'rgba(255, 115, 0, 0.6)', // Orange
      'rgba(255, 165, 0, 0.4)', // Light Orange
      'rgba(255, 200, 0, 0.3)', // Yellow Orange
      'rgba(255, 255, 255, 0.2)', // White
    ];

    // Create particles
    for (let i = 0; i < 40; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2 + 1,
        speedX: (Math.random() - 0.5) * 0.5,
        speedY: (Math.random() - 0.5) * 0.5,
        color: colors[Math.floor(Math.random() * colors.length)],
        life: Math.random() * 100,
        maxLife: 100 + Math.random() * 100,
        connectionDistance: 100 + Math.random() * 50,
      });
    }

    // Animation loop
    let animationId: number;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw subtle gradient background
      const gradient = ctx.createRadialGradient(
        canvas.width / 2,
        canvas.height,
        0,
        canvas.width / 2,
        canvas.height,
        canvas.width
      );
      gradient.addColorStop(0, 'rgba(255, 115, 0, 0.05)');
      gradient.addColorStop(0.3, 'rgba(255, 115, 0, 0.02)');
      gradient.addColorStop(1, 'transparent');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Update and draw particles
      particles.forEach((p, i) => {
        // Update position
        p.x += p.speedX;
        p.y += p.speedY;
        p.life += 0.5;

        // Bounce off edges
        if (p.x <= 0 || p.x >= canvas.width) p.speedX *= -1;
        if (p.y <= 0 || p.y >= canvas.height) p.speedY *= -1;

        // Keep within bounds
        p.x = Math.max(0, Math.min(canvas.width, p.x));
        p.y = Math.max(0, Math.min(canvas.height, p.y));

        // Reset particle if life exceeds max
        if (p.life > p.maxLife) {
          particles[i] = {
            x: Math.random() * canvas.width,
            y: canvas.height,
            size: Math.random() * 2 + 1,
            speedX: (Math.random() - 0.5) * 0.5,
            speedY: (Math.random() - 0.5) * 0.5,
            color: colors[Math.floor(Math.random() * colors.length)],
            life: 0,
            maxLife: 100 + Math.random() * 100,
            connectionDistance: 100 + Math.random() * 50,
          };
        }

        // Draw particle
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.fill();

        // Draw connections between nearby particles
        particles.forEach((p2, j) => {
          if (i >= j) return; // Avoid duplicate connections
          
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < Math.min(p.connectionDistance, p2.connectionDistance)) {
            const opacity = 0.2 * (1 - distance / Math.min(p.connectionDistance, p2.connectionDistance));
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(255, 115, 0, ${opacity})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        });
      });

      // Draw cultural pattern overlay (subtle)
      ctx.strokeStyle = 'rgba(255, 115, 0, 0.03)';
      ctx.lineWidth = 0.5;
      
      // Hexagonal pattern
      const hexSize = 60;
      for (let x = 0; x < canvas.width; x += hexSize * 1.5) {
        for (let y = 0; y < canvas.height; y += hexSize * Math.sqrt(3)) {
          ctx.beginPath();
          for (let i = 0; i < 6; i++) {
            const angle = (Math.PI / 3) * i;
            const hexX = x + hexSize * Math.cos(angle);
            const hexY = y + hexSize * Math.sin(angle);
            if (i === 0) {
              ctx.moveTo(hexX, hexY);
            } else {
              ctx.lineTo(hexX, hexY);
            }
          }
          ctx.closePath();
          ctx.stroke();
        }
      }

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <footer className="relative bg-neutral-950 text-gray-300 overflow-hidden">

      {/* CANVAS ANIMATION */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
      />

      {/* ORANGE GLOW OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-b from-orange-500/5 via-transparent to-transparent" />

      <div className="relative z-10 container mx-auto px-6 py-24">

        <div className="flex flex-col md:flex-row items-center justify-between gap-10">

          {/* BRAND */}
          <div>
            <h3 className="text-2xl font-bold text-white">Lightgate</h3>
            <p className="mt-2 max-w-sm text-sm opacity-70">
              Illuminating the world through culture.
            </p>
          </div>

          {/* LINKS */}
          <div className="flex gap-10 text-sm">
            <Link href="/about" className="hover:text-orange-400 transition-colors">About</Link>
            <Link href="/portfolio" className="hover:text-orange-400 transition-colors">Portfolio</Link>
            <Link href="/services" className="hover:text-orange-400 transition-colors">Services</Link>
            <Link href="/contact" className="hover:text-orange-400 transition-colors">Contact</Link>
          </div>

          {/* SOCIAL & CONTACT */}
          <div className="flex items-center gap-6">
            <a
              href="https://www.instagram.com/lightgate.co/"
              target="_blank"
              className="p-3 rounded-full border border-white/20 hover:border-orange-400 hover:text-orange-400 hover:bg-orange-400/10 transition-all duration-300"
              aria-label="Instagram"
            >
              <Instagram size={20} />
            </a>
            <a
              href="mailto:lightgate.fest@gmail.com"
              className="p-3 rounded-full border border-white/20 hover:border-orange-400 hover:text-orange-400 hover:bg-orange-400/10 transition-all duration-300"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
            <a
              href="https://www.lightgate.media"
              target="_blank"
              className="p-3 rounded-full border border-white/20 hover:border-orange-400 hover:text-orange-400 hover:bg-orange-400/10 transition-all duration-300"
              aria-label="Website"
            >
              <Globe size={20} />
            </a>
          </div>

        </div>

        {/* COPYRIGHT */}
        <div className="mt-20 text-center text-xs opacity-60">
          <p>© {new Date().getFullYear()} Lightgate. All rights reserved.</p>
          <p className="mt-2">Riyadh | Jeddah, KSA • lightgate.fest@gmail.com • www.Lightgate.media</p>
        </div>

      </div>

    </footer>
  );
}
