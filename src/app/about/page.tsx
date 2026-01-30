"use client";

import React from "react";
import { FadeUp } from "@/components/Motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Users, Target, Eye } from "lucide-react";

// Cool animated background for mission & vision section
function MissionVisionBackground() {
  const canvasRef = React.useRef<HTMLCanvasElement>(null);
  const containerRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (!canvasRef.current || !containerRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas dimensions
    const resizeCanvas = () => {
      canvas.width = containerRef.current!.offsetWidth;
      canvas.height = containerRef.current!.offsetHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Particle system
    class Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      color: string;
      opacity: number;
      life: number;
      maxLife: number;
      waveOffset: number;
      type: 'orb' | 'spark' | 'trail';

      constructor(x: number, y: number, type: 'orb' | 'spark' | 'trail' = 'orb') {
        this.x = x;
        this.y = y;
        this.type = type;
        this.waveOffset = Math.random() * Math.PI * 2;
        
        if (type === 'orb') {
          this.size = Math.random() * 20 + 10;
          this.speedX = (Math.random() - 0.5) * 0.2;
          this.speedY = (Math.random() - 0.5) * 0.2;
          this.opacity = 0.1 + Math.random() * 0.2;
          this.life = 1;
          this.maxLife = 1;
          this.color = `rgba(${255}, ${100 + Math.random() * 155}, ${50}, ${this.opacity})`;
        } else if (type === 'spark') {
          this.size = Math.random() * 3 + 1;
          this.speedX = (Math.random() - 0.5) * 1.5;
          this.speedY = (Math.random() - 0.5) * 1.5;
          this.opacity = 0.8 + Math.random() * 0.2;
          this.life = 0.5 + Math.random() * 0.5;
          this.maxLife = this.life;
          this.color = `rgba(${255}, ${200 + Math.random() * 55}, ${100}, ${this.opacity})`;
        } else {
          this.size = Math.random() * 2 + 1;
          this.speedX = (Math.random() - 0.5) * 0.5;
          this.speedY = (Math.random() - 0.5) * 0.5;
          this.opacity = 0.3 + Math.random() * 0.3;
          this.life = 2 + Math.random() * 3;
          this.maxLife = this.life;
          this.color = `rgba(${255}, ${150 + Math.random() * 105}, ${50}, ${this.opacity})`;
        }
      }

      update(time: number) {
        this.life -= 0.002;
        
        if (this.type === 'orb') {
          // Orb floating motion with wave pattern
          this.x += this.speedX + Math.sin(time + this.waveOffset) * 0.2;
          this.y += this.speedY + Math.cos(time + this.waveOffset) * 0.2;
          
          // Pulsing effect
          const pulse = Math.sin(time * 2 + this.waveOffset) * 0.3 + 0.7;
          this.size = (Math.random() * 20 + 10) * pulse;
        } else {
          this.x += this.speedX;
          this.y += this.speedY;
          
          // Slow down over time
          this.speedX *= 0.99;
          this.speedY *= 0.99;
        }

        // Wrap around edges
        if (this.x < -50) this.x = canvas.width + 50;
        if (this.x > canvas.width + 50) this.x = -50;
        if (this.y < -50) this.y = canvas.height + 50;
        if (this.y > canvas.height + 50) this.y = -50;
      }

      draw(ctx: CanvasRenderingContext2D, time: number) {
        if (this.life <= 0) return;

        const currentOpacity = this.opacity * (this.life / this.maxLife);
        
        if (this.type === 'orb') {
          // Orb with gradient
          const gradient = ctx.createRadialGradient(
            this.x, this.y, 0,
            this.x, this.y, this.size
          );
          gradient.addColorStop(0, this.color.replace('0.3', currentOpacity.toString()));
          gradient.addColorStop(0.5, this.color.replace('0.3', (currentOpacity * 0.5).toString()));
          gradient.addColorStop(1, this.color.replace('0.3', '0'));
          
          ctx.beginPath();
          ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
          ctx.fillStyle = gradient;
          ctx.fill();

          // Orb glow
          ctx.beginPath();
          ctx.arc(this.x, this.y, this.size * 1.5, 0, Math.PI * 2);
          ctx.fillStyle = this.color.replace('0.3', (currentOpacity * 0.2).toString());
          ctx.fill();
        } else {
          // Spark/trail particle
          ctx.beginPath();
          ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
          ctx.fillStyle = this.color.replace(this.opacity.toString(), currentOpacity.toString());
          ctx.fill();

          // Trail effect
          ctx.beginPath();
          ctx.arc(this.x - this.speedX * 2, this.y - this.speedY * 2, this.size * 0.5, 0, Math.PI * 2);
          ctx.fillStyle = this.color.replace(this.opacity.toString(), (currentOpacity * 0.5).toString());
          ctx.fill();
        }
      }
    }

    // Create particles
    const particles: Particle[] = [];
    const particleCount = 30;
    
    for (let i = 0; i < particleCount; i++) {
      const x = Math.random() * canvas.width;
      const y = Math.random() * canvas.height;
      const type = i % 3 === 0 ? 'spark' : i % 3 === 1 ? 'trail' : 'orb';
      particles.push(new Particle(x, y, type));
    }

    // Energy waves
    class EnergyWave {
      x: number;
      y: number;
      radius: number;
      speed: number;
      opacity: number;
      thickness: number;
      color: string;

      constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
        this.radius = 0;
        this.speed = 0.5 + Math.random() * 1;
        this.opacity = 0.5;
        this.thickness = 2 + Math.random() * 3;
        this.color = `rgba(${255}, ${100 + Math.random() * 155}, ${50}, ${this.opacity})`;
      }

      update() {
        this.radius += this.speed;
        this.opacity -= 0.005;
        return this.opacity > 0;
      }

      draw(ctx: CanvasRenderingContext2D) {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.strokeStyle = this.color.replace(this.opacity.toString(), this.opacity.toString());
        ctx.lineWidth = this.thickness;
        ctx.stroke();

        // Inner glow
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.strokeStyle = this.color.replace(this.opacity.toString(), (this.opacity * 0.3).toString());
        ctx.lineWidth = this.thickness * 2;
        ctx.stroke();
      }
    }

    const energyWaves: EnergyWave[] = [];
    
    // Create initial energy waves at card positions
    setTimeout(() => {
      const leftCardX = canvas.width * 0.25;
      const rightCardX = canvas.width * 0.75;
      const cardY = canvas.height * 0.5;
      
      for (let i = 0; i < 3; i++) {
        energyWaves.push(new EnergyWave(leftCardX, cardY));
        energyWaves.push(new EnergyWave(rightCardX, cardY));
      }
    }, 1000);

    // Add new energy waves periodically
    setInterval(() => {
      if (energyWaves.length < 10) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        energyWaves.push(new EnergyWave(x, y));
      }
    }, 3000);

    // Animation loop
    let animationId: number;
    let time = 0;
    
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      time += 0.01;

      // Draw gradient background
      const gradient = ctx.createLinearGradient(
        0, 0, 
        canvas.width, canvas.height
      );
      gradient.addColorStop(0, 'rgba(255, 115, 0, 0.02)');
      gradient.addColorStop(0.3, 'rgba(255, 165, 0, 0.015)');
      gradient.addColorStop(0.6, 'rgba(255, 200, 0, 0.01)');
      gradient.addColorStop(1, 'rgba(255, 115, 0, 0.02)');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw subtle geometric pattern
      ctx.strokeStyle = 'rgba(255, 115, 0, 0.03)';
      ctx.lineWidth = 1;
      
      // Hexagonal grid
      const hexSize = 80;
      for (let x = -hexSize; x < canvas.width + hexSize; x += hexSize * 1.5) {
        for (let y = -hexSize; y < canvas.height + hexSize; y += hexSize * Math.sqrt(3)) {
          // Animate hexagons
          const pulse = Math.sin(time + x * 0.01 + y * 0.01) * 0.5 + 0.5;
          
          ctx.beginPath();
          for (let i = 0; i < 6; i++) {
            const angle = (Math.PI / 3) * i + time * 0.1;
            const hexX = x + hexSize * pulse * Math.cos(angle);
            const hexY = y + hexSize * pulse * Math.sin(angle);
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

      // Update and draw energy waves
      for (let i = energyWaves.length - 1; i >= 0; i--) {
        if (!energyWaves[i].update()) {
          energyWaves.splice(i, 1);
        } else {
          energyWaves[i].draw(ctx);
        }
      }

      // Update and draw particles
      particles.forEach((particle, i) => {
        particle.update(time);
        particle.draw(ctx, time);
        
        // Remove and replace dead particles
        if (particle.life <= 0) {
          const x = Math.random() * canvas.width;
          const y = Math.random() * canvas.height;
          const type = i % 3 === 0 ? 'spark' : i % 3 === 1 ? 'trail' : 'orb';
          particles[i] = new Particle(x, y, type);
        }

        // Draw connections between nearby particles
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 150) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            const opacity = (1 - distance / 150) * 0.1 * particles[i].opacity * particles[j].opacity;
            ctx.strokeStyle = `rgba(255, 115, 0, ${opacity})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      });

      // Draw card connection line
      const leftCardX = canvas.width * 0.25;
      const rightCardX = canvas.width * 0.75;
      const cardY = canvas.height * 0.5;
      
      ctx.beginPath();
      ctx.moveTo(leftCardX, cardY);
      ctx.bezierCurveTo(
        canvas.width * 0.4, cardY - 50,
        canvas.width * 0.6, cardY + 50,
        rightCardX, cardY
      );
      ctx.strokeStyle = `rgba(255, 115, 0, ${0.05 + Math.sin(time) * 0.02})`;
      ctx.lineWidth = 2;
      ctx.stroke();

      // Draw pulsing orbs at card positions
      const pulseSize = 5 + Math.sin(time * 2) * 2;
      [leftCardX, rightCardX].forEach((x, i) => {
        const yOffset = Math.sin(time * 3 + i * Math.PI) * 20;
        
        // Main orb
        ctx.beginPath();
        ctx.arc(x, cardY + yOffset, pulseSize, 0, Math.PI * 2);
        const pulseGradient = ctx.createRadialGradient(
          x, cardY + yOffset, 0,
          x, cardY + yOffset, pulseSize
        );
        pulseGradient.addColorStop(0, `rgba(255, 115, 0, ${0.8 + Math.sin(time * 4) * 0.2})`);
        pulseGradient.addColorStop(1, 'rgba(255, 115, 0, 0)');
        ctx.fillStyle = pulseGradient;
        ctx.fill();

        // Orb glow
        ctx.beginPath();
        ctx.arc(x, cardY + yOffset, pulseSize * 3, 0, Math.PI * 2);
        const glowGradient = ctx.createRadialGradient(
          x, cardY + yOffset, 0,
          x, cardY + yOffset, pulseSize * 3
        );
        glowGradient.addColorStop(0, `rgba(255, 115, 0, ${0.3 + Math.sin(time * 4) * 0.1})`);
        glowGradient.addColorStop(1, 'rgba(255, 115, 0, 0)');
        ctx.fillStyle = glowGradient;
        ctx.fill();
      });

      // Draw floating particles along connection line
      for (let i = 0; i < 5; i++) {
        const progress = (time * 0.1 + i * 0.2) % 1;
        const t = progress * 2 - 1;
        const x = leftCardX + (rightCardX - leftCardX) * progress;
        const y = cardY + 50 * Math.sin(t * Math.PI);
        
        ctx.beginPath();
        ctx.arc(x, y, 2, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 200, 50, ${0.5 + Math.sin(time * 5 + i) * 0.3})`;
        ctx.fill();
      }

      // Draw ambient light beams
      for (let i = 0; i < 3; i++) {
        const beamX = canvas.width * 0.5;
        const beamY = canvas.height;
        const angle = time * 0.5 + (i * Math.PI * 2) / 3;
        const length = 300;
        
        ctx.beginPath();
        ctx.moveTo(beamX, beamY);
        ctx.lineTo(
          beamX + Math.cos(angle) * length,
          beamY + Math.sin(angle) * length
        );
        
        const beamGradient = ctx.createLinearGradient(
          beamX, beamY,
          beamX + Math.cos(angle) * length,
          beamY + Math.sin(angle) * length
        );
        beamGradient.addColorStop(0, `rgba(255, 115, 0, ${0.1})`);
        beamGradient.addColorStop(1, 'rgba(255, 115, 0, 0)');
        
        ctx.strokeStyle = beamGradient;
        ctx.lineWidth = 30;
        ctx.stroke();
        
        ctx.strokeStyle = beamGradient;
        ctx.lineWidth = 10;
        ctx.stroke();
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
    <div ref={containerRef} className="absolute inset-0 overflow-hidden">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
      />
    </div>
  );
}

// Animated timeline background - CLEANED UP VERSION
function TimelineBackground() {
  const canvasRef = React.useRef<HTMLCanvasElement>(null);
  const containerRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (!canvasRef.current || !containerRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas dimensions
    const resizeCanvas = () => {
      canvas.width = containerRef.current!.offsetWidth;
      canvas.height = containerRef.current!.offsetHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Timeline particles
    const particles: Array<{
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      color: string;
      opacity: number;
      type: 'timeline' | 'energy' | 'spark';
    }> = [];

    const colors = [
      'rgba(255, 115, 0, 0.4)',
      'rgba(255, 165, 0, 0.5)',
      'rgba(255, 200, 50, 0.6)',
      'rgba(255, 225, 100, 0.7)',
    ];

    // Create particles along timeline
    const particleCount = 60;
    for (let i = 0; i < particleCount; i++) {
      const type = i % 3 === 0 ? 'energy' : i % 3 === 1 ? 'spark' : 'timeline';
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: type === 'spark' ? Math.random() * 2 + 1 : Math.random() * 4 + 2,
        speedX: (Math.random() - 0.5) * (type === 'spark' ? 0.8 : 0.3),
        speedY: (Math.random() - 0.5) * (type === 'spark' ? 0.8 : 0.3),
        color: colors[Math.floor(Math.random() * colors.length)],
        opacity: type === 'energy' ? 0.4 + Math.random() * 0.4 : 0.2 + Math.random() * 0.3,
        type: type
      });
    }

    // Animation loop
    let animationId: number;
    let time = 0;
    
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      time += 0.01;

      // Draw clean gradient background
      const gradient = ctx.createLinearGradient(
        0, 0, 
        0, canvas.height
      );
      gradient.addColorStop(0, 'rgba(255, 115, 0, 0.02)');
      gradient.addColorStop(0.5, 'rgba(255, 165, 0, 0.025)');
      gradient.addColorStop(1, 'rgba(255, 200, 0, 0.03)');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw timeline path
      const timelineY = canvas.height / 2;
      ctx.beginPath();
      ctx.moveTo(100, timelineY);
      ctx.lineTo(canvas.width - 100, timelineY);
      ctx.strokeStyle = 'rgba(255, 115, 0, 0.15)';
      ctx.lineWidth = 4;
      ctx.stroke();

      // Draw timeline glow
      ctx.beginPath();
      ctx.moveTo(100, timelineY);
      ctx.lineTo(canvas.width - 100, timelineY);
      ctx.strokeStyle = 'rgba(255, 115, 0, 0.08)';
      ctx.lineWidth = 12;
      ctx.stroke();

      // Draw pulsing orb on timeline
      const pulseSize = 10 + Math.sin(time * 3) * 3;
      ctx.beginPath();
      ctx.arc(canvas.width / 2, timelineY, pulseSize, 0, Math.PI * 2);
      const pulseGradient = ctx.createRadialGradient(
        canvas.width / 2, timelineY, 0,
        canvas.width / 2, timelineY, pulseSize
      );
      pulseGradient.addColorStop(0, `rgba(255, 115, 0, ${0.9 + Math.sin(time * 4) * 0.1})`);
      pulseGradient.addColorStop(1, 'rgba(255, 115, 0, 0)');
      ctx.fillStyle = pulseGradient;
      ctx.fill();

      // Update and draw particles
      particles.forEach((p, i) => {
        // Update position
        p.x += p.speedX;
        p.y += p.speedY;
        
        // Pulsing effect for energy particles
        if (p.type === 'energy') {
          const pulse = Math.sin(time * 4 + i) * 0.5 + 0.5;
          p.size = (Math.random() * 4 + 2) * pulse;
        }
        
        // Wrap around edges
        if (p.x < -50) p.x = canvas.width + 50;
        if (p.x > canvas.width + 50) p.x = -50;
        if (p.y < -50) p.y = canvas.height + 50;
        if (p.y > canvas.height + 50) p.y = -50;

        // Draw particle
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        
        if (p.type === 'energy') {
          const gradient = ctx.createRadialGradient(
            p.x, p.y, 0,
            p.x, p.y, p.size * 2
          );
          gradient.addColorStop(0, p.color.replace('0.5', (p.opacity * 0.8).toString()));
          gradient.addColorStop(1, p.color.replace('0.5', '0'));
          ctx.fillStyle = gradient;
        } else {
          ctx.fillStyle = p.color.replace('0.4', (p.opacity * (p.type === 'spark' ? 0.7 : 1)).toString());
        }
        
        ctx.fill();

        // Draw connection to timeline for timeline particles
        if (p.type === 'timeline') {
          const distanceToTimeline = Math.abs(p.y - timelineY);
          if (distanceToTimeline < 150) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p.x, timelineY);
            ctx.strokeStyle = `rgba(255, 115, 0, ${0.08 * (1 - distanceToTimeline / 150) * p.opacity})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      });

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <div ref={containerRef} className="absolute inset-0 overflow-hidden">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
      />
    </div>
  );
}

// BOLD ELECTRIC Hexagonal background for Team Members section
function TeamMembersBackground() {
  const canvasRef = React.useRef<HTMLCanvasElement>(null);
  const containerRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (!canvasRef.current || !containerRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas dimensions
    const resizeCanvas = () => {
      canvas.width = containerRef.current!.offsetWidth;
      canvas.height = containerRef.current!.offsetHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Electric particle system - BOLD but within orange palette
    class ElectricParticle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      opacity: number;
      life: number;
      maxLife: number;
      waveOffset: number;
      pulseSpeed: number;
      trail: Array<{x: number, y: number, size: number}>;

      constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
        this.size = 1.5 + Math.random() * 3;
        this.speedX = (Math.random() - 0.5) * 0.8;
        this.speedY = (Math.random() - 0.5) * 0.8;
        this.opacity = 0.6 + Math.random() * 0.4;
        this.life = 4 + Math.random() * 8;
        this.maxLife = this.life;
        this.waveOffset = Math.random() * Math.PI * 2;
        this.pulseSpeed = 3 + Math.random() * 4;
        this.trail = [];
      }

      update(time: number) {
        this.life -= 0.003;
        
        // Electric movement with wave pattern
        this.x += this.speedX + Math.sin(time * this.pulseSpeed + this.waveOffset) * 0.5;
        this.y += this.speedY + Math.cos(time * this.pulseSpeed + this.waveOffset) * 0.5;
        
        // Add to trail
        this.trail.push({
          x: this.x,
          y: this.y,
          size: this.size * (0.3 + Math.sin(time * this.pulseSpeed) * 0.2)
        });
        if (this.trail.length > 8) {
          this.trail.shift();
        }
        
        // Wrap around edges
        if (this.x < -30) this.x = canvas.width + 30;
        if (this.x > canvas.width + 30) this.x = -30;
        if (this.y < -30) this.y = canvas.height + 30;
        if (this.y > canvas.height + 30) this.y = -30;
      }

      draw(ctx: CanvasRenderingContext2D, time: number) {
        if (this.life <= 0) return;

        const currentOpacity = this.opacity * (this.life / this.maxLife);
        const pulse = Math.sin(time * this.pulseSpeed) * 0.4 + 0.6;
        const currentSize = this.size * pulse;
        
        // Draw trail
        this.trail.forEach((point, i) => {
          const trailOpacity = currentOpacity * (i / this.trail.length) * 0.4;
          const trailSize = point.size * (i / this.trail.length);
          
          ctx.beginPath();
          ctx.arc(point.x, point.y, trailSize, 0, Math.PI * 2);
          
          const gradient = ctx.createRadialGradient(
            point.x, point.y, 0,
            point.x, point.y, trailSize
          );
          gradient.addColorStop(0, `rgba(255, ${180 + Math.random() * 40}, ${80}, ${trailOpacity})`);
          gradient.addColorStop(1, `rgba(255, 140, 40, 0)`);
          ctx.fillStyle = gradient;
          ctx.fill();
        });
        
        // Draw main particle
        ctx.beginPath();
        ctx.arc(this.x, this.y, currentSize, 0, Math.PI * 2);
        
        const gradient = ctx.createRadialGradient(
          this.x, this.y, 0,
          this.x, this.y, currentSize * 2
        );
        gradient.addColorStop(0, `rgba(255, 200, 100, ${currentOpacity})`);
        gradient.addColorStop(0.5, `rgba(255, 165, 0, ${currentOpacity * 0.6})`);
        gradient.addColorStop(1, `rgba(255, 115, 0, 0)`);
        ctx.fillStyle = gradient;
        ctx.fill();
        
        // Draw electric aura
        ctx.beginPath();
        ctx.arc(this.x, this.y, currentSize * 2.5, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(255, 200, 100, ${currentOpacity * 0.2})`;
        ctx.lineWidth = 1.5;
        ctx.stroke();
      }
    }

    // Create electric particles
    const particles: ElectricParticle[] = [];
    const particleCount = 35;
    
    for (let i = 0; i < particleCount; i++) {
      const x = Math.random() * canvas.width;
      const y = Math.random() * canvas.height;
      particles.push(new ElectricParticle(x, y));
    }

    // Hexagon grid with ELECTRIC energy
    class HexagonCell {
      x: number;
      y: number;
      size: number;
      energy: number;
      maxEnergy: number;
      pulsePhase: number;
      connections: Array<{x: number, y: number}>;
      isActive: boolean;
      activationTime: number;
      rotation: number;
      rotationSpeed: number;

      constructor(x: number, y: number, size: number) {
        this.x = x;
        this.y = y;
        this.size = size;
        this.energy = 0;
        this.maxEnergy = 0.5 + Math.random() * 0.5;
        this.pulsePhase = Math.random() * Math.PI * 2;
        this.connections = [];
        this.isActive = false;
        this.activationTime = 0;
        this.rotation = Math.random() * Math.PI * 2;
        this.rotationSpeed = (Math.random() - 0.5) * 0.02;
      }

      update(time: number) {
        this.rotation += this.rotationSpeed;
        
        // Energy pulse
        this.energy = this.maxEnergy * (Math.sin(time * 2 + this.pulsePhase) * 0.4 + 0.6);
        
        // Random activation for electric effects
        if (!this.isActive && Math.random() < 0.02) {
          this.isActive = true;
          this.activationTime = time;
        }
        
        if (this.isActive && time - this.activationTime > 0.8) {
          this.isActive = false;
        }
      }

      draw(ctx: CanvasRenderingContext2D, time: number) {
        // Draw hexagon with electric energy
        ctx.beginPath();
        for (let i = 0; i < 6; i++) {
          const angle = (Math.PI / 3) * i + this.rotation;
          const hexX = this.x + this.size * Math.cos(angle);
          const hexY = this.y + this.size * Math.sin(angle);
          if (i === 0) {
            ctx.moveTo(hexX, hexY);
          } else {
            ctx.lineTo(hexX, hexY);
          }
        }
        ctx.closePath();
        
        // Electric glow effect when active
        if (this.isActive) {
          const pulse = Math.sin(time * 15) * 0.5 + 0.5;
          const gradient = ctx.createRadialGradient(
            this.x, this.y, 0,
            this.x, this.y, this.size * 2.5
          );
          gradient.addColorStop(0, `rgba(255, 225, 100, ${0.4 * pulse})`);
          gradient.addColorStop(1, `rgba(255, 165, 0, 0)`);
          ctx.fillStyle = gradient;
          ctx.fill();
          
          // Draw electric arcs from vertices
          for (let i = 0; i < 6; i++) {
            const angle = (Math.PI / 3) * i + this.rotation;
            const hexX = this.x + this.size * Math.cos(angle);
            const hexY = this.y + this.size * Math.sin(angle);
            
            if (Math.random() < 0.3) {
              ctx.beginPath();
              ctx.moveTo(hexX, hexY);
              const arcX = hexX + (Math.random() - 0.5) * 25;
              const arcY = hexY + (Math.random() - 0.5) * 25;
              ctx.lineTo(arcX, arcY);
              ctx.strokeStyle = `rgba(255, 225, 100, ${0.6 * pulse})`;
              ctx.lineWidth = 1.2;
              ctx.stroke();
            }
          }
        }
        
        // Draw hexagon outline with energy-based color
        const energyColor = Math.floor(this.energy * 200);
        ctx.strokeStyle = `rgba(255, ${150 + energyColor}, ${50 + energyColor}, ${0.15 + this.energy * 0.25})`;
        ctx.lineWidth = 1.5 + this.energy * 2;
        ctx.stroke();
        
        // Draw electric center energy dot
        if (this.energy > 0.3) {
          ctx.beginPath();
          ctx.arc(this.x, this.y, 2 + this.energy * 4, 0, Math.PI * 2);
          const centerGradient = ctx.createRadialGradient(
            this.x, this.y, 0,
            this.x, this.y, 2 + this.energy * 4
          );
          centerGradient.addColorStop(0, `rgba(255, 225, 100, ${0.7 + this.energy * 0.3})`);
          centerGradient.addColorStop(1, `rgba(255, 165, 0, 0)`);
          ctx.fillStyle = centerGradient;
          ctx.fill();
        }
      }
    }

    // Create hexagon grid
    const hexagonGrid: HexagonCell[] = [];
    const hexSize = 65;
    const hexWidth = hexSize * 2;
    const hexHeight = hexSize * Math.sqrt(3);
    
    for (let x = -hexWidth; x < canvas.width + hexWidth; x += hexWidth * 0.8) {
      for (let y = -hexHeight; y < canvas.height + hexHeight; y += hexHeight) {
        const offsetX = (Math.floor(y / hexHeight) % 2 === 0) ? 0 : hexWidth * 0.4;
        hexagonGrid.push(new HexagonCell(x + offsetX, y, hexSize));
      }
    }

    // Create connections between nearby hexagons
    hexagonGrid.forEach((hex, i) => {
      hex.connections = [];
      hexagonGrid.forEach((otherHex, j) => {
        if (i !== j) {
          const dx = hex.x - otherHex.x;
          const dy = hex.y - otherHex.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          if (distance < hexSize * 2.8) {
            hex.connections.push({x: otherHex.x, y: otherHex.y});
          }
        }
      });
    });

    // Electric pulse system
    class ElectricPulse {
      x: number;
      y: number;
      targetX: number;
      targetY: number;
      progress: number;
      speed: number;
      opacity: number;
      points: Array<{x: number, y: number}>;

      constructor(startX: number, startY: number, endX: number, endY: number) {
        this.x = startX;
        this.y = startY;
        this.targetX = endX;
        this.targetY = endY;
        this.progress = 0;
        this.speed = 0.8 + Math.random() * 0.4;
        this.opacity = 0.8 + Math.random() * 0.2;
        this.points = this.generatePulsePath(startX, startY, endX, endY);
      }

      generatePulsePath(startX: number, startY: number, endX: number, endY: number): Array<{x: number, y: number}> {
        const points = [{x: startX, y: startY}];
        const segments = 6;
        
        for (let i = 1; i <= segments; i++) {
          const t = i / segments;
          const x = startX + (endX - startX) * t + (Math.random() - 0.5) * 20;
          const y = startY + (endY - startY) * t + (Math.random() - 0.5) * 20;
          points.push({x, y});
        }
        
        points.push({x: endX, y: endY});
        return points;
      }

      update() {
        this.progress += this.speed * 0.02;
        this.opacity -= 0.01;
        return this.progress < 1 && this.opacity > 0;
      }

      draw(ctx: CanvasRenderingContext2D) {
        const currentProgress = this.progress;
        const segmentIndex = Math.floor(currentProgress * (this.points.length - 1));
        const segmentProgress = (currentProgress * (this.points.length - 1)) % 1;
        
        if (segmentIndex >= this.points.length - 1) return;
        
        const startPoint = this.points[segmentIndex];
        const endPoint = this.points[segmentIndex + 1];
        const currentX = startPoint.x + (endPoint.x - startPoint.x) * segmentProgress;
        const currentY = startPoint.y + (endPoint.y - startPoint.y) * segmentProgress;
        
        // Draw pulse head
        ctx.beginPath();
        ctx.arc(currentX, currentY, 3, 0, Math.PI * 2);
        const headGradient = ctx.createRadialGradient(
          currentX, currentY, 0,
          currentX, currentY, 6
        );
        headGradient.addColorStop(0, `rgba(255, 225, 100, ${this.opacity})`);
        headGradient.addColorStop(1, `rgba(255, 165, 0, 0)`);
        ctx.fillStyle = headGradient;
        ctx.fill();
        
        // Draw pulse trail
        for (let i = 0; i <= segmentIndex; i++) {
          const point = this.points[i];
          const trailOpacity = this.opacity * (i / this.points.length);
          
          ctx.beginPath();
          ctx.arc(point.x, point.y, 1.5, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(255, 200, 80, ${trailOpacity})`;
          ctx.fill();
        }
      }
    }

    const electricPulses: ElectricPulse[] = [];

    // Create occasional electric pulses between hexagons
    setInterval(() => {
      if (electricPulses.length < 8 && hexagonGrid.length >= 2) {
        const hex1 = hexagonGrid[Math.floor(Math.random() * hexagonGrid.length)];
        const hex2 = hexagonGrid[Math.floor(Math.random() * hexagonGrid.length)];
        if (hex1 !== hex2 && Math.random() < 0.5) {
          electricPulses.push(new ElectricPulse(hex1.x, hex1.y, hex2.x, hex2.y));
        }
      }
    }, 800);

    // Animation loop
    let animationId: number;
    let time = 0;
    
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      time += 0.015;

      // Draw warm gradient background with more intensity
      const gradient = ctx.createLinearGradient(
        0, 0, 
        canvas.width, canvas.height
      );
      gradient.addColorStop(0, 'rgba(255, 115, 0, 0.08)');
      gradient.addColorStop(0.3, 'rgba(255, 165, 0, 0.1)');
      gradient.addColorStop(0.6, 'rgba(255, 200, 50, 0.12)');
      gradient.addColorStop(1, 'rgba(255, 225, 100, 0.1)');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw electric connections between hexagons
      ctx.strokeStyle = 'rgba(255, 200, 100, 0.08)';
      ctx.lineWidth = 0.8;
      hexagonGrid.forEach(hex => {
        hex.connections.forEach(connection => {
          if (Math.random() < 0.3) {
            ctx.beginPath();
            ctx.moveTo(hex.x, hex.y);
            ctx.lineTo(connection.x, connection.y);
            ctx.stroke();
          }
        });
      });

      // Update and draw hexagon grid
      hexagonGrid.forEach(hex => {
        hex.update(time);
        hex.draw(ctx, time);
      });

      // Update and draw electric pulses
      for (let i = electricPulses.length - 1; i >= 0; i--) {
        if (!electricPulses[i].update()) {
          electricPulses.splice(i, 1);
        } else {
          electricPulses[i].draw(ctx);
        }
      }

      // Update and draw electric particles
      particles.forEach((particle, i) => {
        particle.update(time);
        particle.draw(ctx, time);
        
        // Remove and replace dead particles
        if (particle.life <= 0) {
          const x = Math.random() * canvas.width;
          const y = Math.random() * canvas.height;
          particles[i] = new ElectricParticle(x, y);
        }
      });

      // Draw team grid visualization
      const teamGridX = canvas.width / 2;
      const teamGridY = canvas.height / 2;
      const gridSpacing = 90;
      
      for (let i = -2; i <= 2; i++) {
        for (let j = -1; j <= 1; j++) {
          const nodeX = teamGridX + i * gridSpacing;
          const nodeY = teamGridY + j * gridSpacing * 1.5;
          
          // Draw energetic team node
          ctx.beginPath();
          ctx.arc(nodeX, nodeY, 4, 0, Math.PI * 2);
          const nodeGradient = ctx.createRadialGradient(
            nodeX, nodeY, 0,
            nodeX, nodeY, 8
          );
          nodeGradient.addColorStop(0, `rgba(255, 225, 100, ${0.8 + Math.sin(time * 5 + i + j) * 0.2})`);
          nodeGradient.addColorStop(1, `rgba(255, 165, 0, 0)`);
          ctx.fillStyle = nodeGradient;
          ctx.fill();
          
          // Connect to nearby nodes
          if (i < 2) {
            ctx.beginPath();
            ctx.moveTo(nodeX, nodeY);
            ctx.lineTo(nodeX + gridSpacing, nodeY);
            ctx.strokeStyle = `rgba(255, 200, 100, ${0.15 + Math.sin(time * 3 + i) * 0.1})`;
            ctx.lineWidth = 1.5;
            ctx.stroke();
          }
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
    <div ref={containerRef} className="absolute inset-0 overflow-hidden">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
      />
    </div>
  );
}

// Hexagonal background for CTA section
function CTAHexagonalBackground() {
  const canvasRef = React.useRef<HTMLCanvasElement>(null);

  React.useEffect(() => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas dimensions
    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      
      // Clear and draw static pattern
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw subtle gradient background
      const gradient = ctx.createLinearGradient(
        0, 0, 
        canvas.width, canvas.height
      );
      gradient.addColorStop(0, 'rgba(255, 115, 0, 0.03)');
      gradient.addColorStop(0.5, 'rgba(255, 165, 0, 0.02)');
      gradient.addColorStop(1, 'rgba(255, 200, 0, 0.01)');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw hexagonal pattern
      ctx.strokeStyle = 'rgba(255, 115, 0, 0.08)';
      ctx.lineWidth = 1;
      
      const hexSize = 70;
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

      // Draw connecting dots at hexagon centers
      ctx.fillStyle = 'rgba(255, 115, 0, 0.06)';
      for (let x = 0; x < canvas.width; x += hexSize * 1.5) {
        for (let y = 0; y < canvas.height; y += hexSize * Math.sqrt(3)) {
          ctx.beginPath();
          ctx.arc(x, y, 1.5, 0, Math.PI * 2);
          ctx.fill();
        }
      }
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
    />
  );
}

export default function About() {
  return (
    <main className="bg-white dark:bg-neutral-950">

      {/* ================= HERO ================= */}
      <section
        className="relative min-h-screen flex items-center bg-cover bg-center"
        style={{ backgroundImage: "url(/about.jpg)" }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/70" />

        <div className="relative z-10 container mx-auto px-6 text-white">
          <FadeUp>
            <div className="max-w-3xl">
              <span className="inline-block px-4 py-2 rounded-full bg-orange-500/20 border border-orange-500/30 text-orange-300 text-sm font-medium mb-6">
                ABOUT LIGHTGATE
              </span>
              
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight">
                Illuminating the World
                <br />
                Through <span className="text-orange-500">Culture</span>
              </h1>

              <p className="mt-8 max-w-2xl text-xl opacity-90">
                A global phenomenon redefining entertainment through groundbreaking technology, 
                unparalleled scale, and never-before-seen festive event concepts.
              </p>

              <div className="mt-12 flex items-center gap-6">
                <Link
                  href="/portfolio"
                  className="inline-flex items-center gap-3 px-8 py-4 
                           rounded-full bg-gradient-to-r from-orange-500 to-orange-600
                           text-white font-medium text-lg
                           hover:from-orange-600 hover:to-orange-700
                           hover:shadow-[0_0_30px_rgba(255,115,0,0.5)]
                           transform hover:-translate-y-1
                           transition-all duration-300"
                >
                  View Our Work
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-3 px-8 py-4 
                           rounded-full bg-transparent border-2 border-white/30
                           text-white font-medium text-lg
                           hover:border-orange-500 hover:text-orange-500
                           hover:shadow-[0_0_30px_rgba(255,115,0,0.3)]
                           transition-all duration-300"
                >
                  Get In Touch
                </Link>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ================= MISSION & VISION ================= */}
      <section className="relative py-32 bg-white dark:bg-neutral-900 overflow-hidden">
        
        {/* AMAZING Animated Background */}
        <MissionVisionBackground />

        {/* Orange gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-orange-500/5 via-transparent to-orange-500/5" />

        <div className="relative z-10 container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">

            {/* MISSION */}
            <FadeUp>
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-br from-orange-500/10 to-transparent 
                              rounded-3xl opacity-0 group-hover:opacity-100 
                              transition-opacity duration-500 blur-xl" />
                
                <div className="relative bg-white/90 dark:bg-neutral-800/90 backdrop-blur-sm rounded-2xl p-10 
                              border border-gray-200/50 dark:border-neutral-700/50
                              group-hover:border-orange-500/50
                              group-hover:shadow-[0_0_40px_rgba(255,115,0,0.25)]
                              transition-all duration-500 h-full">
                  
                  {/* Animated Icon */}
                  <div className="relative w-20 h-20 rounded-2xl mb-8 
                                bg-gradient-to-br from-orange-500/20 to-orange-500/5
                                flex items-center justify-center
                                group-hover:from-orange-500/30 group-hover:to-orange-500/10
                                transition-all duration-500
                                overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-transparent animate-pulse" />
                    <Target className="w-10 h-10 text-orange-500 relative z-10" />
                  </div>

                  <div className="flex items-center gap-3 mb-6">
                    <div className="relative w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-orange-600 animate-pulse" />
                      <span className="text-white font-bold text-lg relative z-10">01</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white">
                      Our <span className="text-orange-500">Mission</span>
                    </h2>
                  </div>

                  <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
                    To revolutionize cultural entertainment by uniting the world's most iconic 
                    festivals into one immersive, technology-driven event experience—celebrating 
                    global diversity, inspiring connection, and creating unforgettable moments 
                    for audiences everywhere.
                  </p>

                  {/* Corner accents */}
                  <div className="absolute top-4 left-4 w-4 h-4 border-t-2 border-l-2 border-orange-500/0 
                                group-hover:border-orange-500 group-hover:shadow-[0_0_10px_rgba(255,115,0,0.8)]
                                transition-all duration-500" />
                  <div className="absolute top-4 right-4 w-4 h-4 border-t-2 border-r-2 border-orange-500/0 
                                group-hover:border-orange-500 group-hover:shadow-[0_0_10px_rgba(255,115,0,0.8)]
                                transition-all duration-500" />
                  
                  {/* Floating particles effect */}
                  <div className="absolute -top-2 -right-2 w-4 h-4 rounded-full bg-orange-500/20 animate-ping" />
                  <div className="absolute -bottom-2 -left-2 w-3 h-3 rounded-full bg-orange-500/20 animate-ping delay-300" />
                </div>
              </div>
            </FadeUp>

            {/* VISION */}
            <FadeUp>
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-br from-orange-500/10 to-transparent 
                              rounded-3xl opacity-0 group-hover:opacity-100 
                              transition-opacity duration-500 blur-xl" />
                
                <div className="relative bg-white/90 dark:bg-neutral-800/90 backdrop-blur-sm rounded-2xl p-10 
                              border border-gray-200/50 dark:border-neutral-700/50
                              group-hover:border-orange-500/50
                              group-hover:shadow-[0_0_40px_rgba(255,115,0,0.25)]
                              transition-all duration-500 h-full">
                  
                  {/* Animated Icon */}
                  <div className="relative w-20 h-20 rounded-2xl mb-8 
                                bg-gradient-to-br from-orange-500/20 to-orange-500/5
                                flex items-center justify-center
                                group-hover:from-orange-500/30 group-hover:to-orange-500/10
                                transition-all duration-500
                                overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-transparent animate-pulse" />
                    <Eye className="w-10 h-10 text-orange-500 relative z-10" />
                  </div>

                  <div className="flex items-center gap-3 mb-6">
                    <div className="relative w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-orange-600 animate-pulse" />
                      <span className="text-white font-bold text-lg relative z-10">02</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white">
                      Our <span className="text-orange-500">Vision</span>
                    </h2>
                  </div>

                  <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
                    To become the world's leading cultural event platform, transforming how 
                    people engage with art, music, and heritage by blending innovation, scale, 
                    and unity into a single, extraordinary global celebration.
                  </p>

                  {/* Corner accents */}
                  <div className="absolute top-4 left-4 w-4 h-4 border-t-2 border-l-2 border-orange-500/0 
                                group-hover:border-orange-500 group-hover:shadow-[0_0_10px_rgba(255,115,0,0.8)]
                                transition-all duration-500" />
                  <div className="absolute top-4 right-4 w-4 h-4 border-t-2 border-r-2 border-orange-500/0 
                                group-hover:border-orange-500 group-hover:shadow-[0_0_10px_rgba(255,115,0,0.8)]
                                transition-all duration-500" />
                  
                  {/* Floating particles effect */}
                  <div className="absolute -top-2 -right-2 w-4 h-4 rounded-full bg-orange-500/20 animate-ping" />
                  <div className="absolute -bottom-2 -left-2 w-3 h-3 rounded-full bg-orange-500/20 animate-ping delay-300" />
                </div>
              </div>
            </FadeUp>

          </div>
        </div>
      </section>

      {/* ================= OUR HISTORY ================= */}
      <section className="relative py-32 bg-white dark:bg-neutral-950 overflow-hidden">
        <div className="container mx-auto px-6">
          
          <FadeUp>
            <div className="text-center mb-20 max-w-3xl mx-auto">
              <span className="inline-block px-4 py-2 rounded-full bg-orange-500/10 text-orange-500 text-sm font-medium mb-6">
                OUR JOURNEY
              </span>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Our <span className="text-orange-500">History</span>
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400">
                From a bold vision to a global cultural phenomenon
              </p>
            </div>
          </FadeUp>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Image Column */}
            <FadeUp>
              <div className="relative group">
                <div className="relative h-[600px] rounded-3xl overflow-hidden
                              border-4 border-transparent
                              group-hover:border-orange-500/30
                              transition-all duration-500">
                  <Image
                    src="/culture.jpg"
                    alt="Lightgate History"
                    fill
                    className="object-cover group-hover:scale-105 transition duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                  
                  {/* Floating info box */}
                  <div className="absolute bottom-8 left-8 right-8 p-6 rounded-xl 
                                bg-white/10 backdrop-blur-md border border-white/20
                                transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100
                                transition-all duration-500">
                    <h4 className="text-white text-lg font-semibold mb-2">Since 2025</h4>
                    <p className="text-gray-300">Redefining cultural entertainment worldwide</p>
                  </div>
                </div>
              </div>
            </FadeUp>

            {/* Content Column with Hover Animations */}
            <FadeUp>
              <div className="space-y-8">
                <div className="relative group p-8 rounded-2xl bg-gradient-to-br from-orange-500/5 to-transparent 
                              border border-orange-500/10
                              hover:border-orange-500/50
                              hover:shadow-[0_0_30px_rgba(255,115,0,0.15)]
                              transition-all duration-500">
                  <div className="absolute -inset-4 bg-gradient-to-br from-orange-500/10 to-transparent 
                                rounded-2xl opacity-0 group-hover:opacity-100 
                                transition-opacity duration-500 blur-xl" />
                  
                  <h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white relative z-10">
                    The Beginning
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 relative z-10">
                    Lightgate began with a bold vision to redefine cultural entertainment by 
                    uniting the world's most iconic festivals under one groundbreaking platform. 
                    What started as a creative concept has grown into a powerful brand known 
                    for blending innovation, technology, and immersive storytelling.
                  </p>
                </div>

                <div className="relative group p-8 rounded-2xl bg-gradient-to-br from-orange-500/5 to-transparent 
                              border border-orange-500/10
                              hover:border-orange-500/50
                              hover:shadow-[0_0_30px_rgba(255,115,0,0.15)]
                              transition-all duration-500">
                  <div className="absolute -inset-4 bg-gradient-to-br from-orange-500/10 to-transparent 
                                rounded-2xl opacity-0 group-hover:opacity-100 
                                transition-opacity duration-500 blur-xl" />
                  
                  <h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white relative z-10">
                    Evolution & Growth
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 relative z-10">
                    As we expanded, Lightgate evolved into a full-service experience company, 
                    offering world-class photography, creative design, and festive event execution. 
                    We've consistently pushed boundaries while maintaining our core focus on 
                    cultural innovation.
                  </p>
                </div>

                <div className="relative group p-8 rounded-2xl bg-gradient-to-br from-orange-500/5 to-transparent 
                              border border-orange-500/10
                              hover:border-orange-500/50
                              hover:shadow-[0_0_30px_rgba(255,115,0,0.15)]
                              transition-all duration-500">
                  <div className="absolute -inset-4 bg-gradient-to-br from-orange-500/10 to-transparent 
                                rounded-2xl opacity-0 group-hover:opacity-100 
                                transition-opacity duration-500 blur-xl" />
                  
                  <h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white relative z-10">
                    Today & Beyond
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 relative z-10">
                    Today, we continue to push boundaries, creating unforgettable moments that 
                    connect people, cultures, and ideas across the globe. Lightgate stands as a 
                    testament to what's possible when creativity meets execution at scale.
                  </p>
                </div>
              </div>
            </FadeUp>

          </div>
        </div>
        
        {/* ================= SEAMLESS DIVIDER ================= */}
        {/* Orange gradient that transitions from white/neutral-950 to timeline orange */}
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-orange-500/5 via-orange-500/10 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white dark:from-neutral-950 via-white/20 dark:via-neutral-950/20 to-transparent" />
        
        {/* Animated floating particles in the divider */}
        <div className="absolute bottom-0 left-0 right-0 h-48 overflow-hidden">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-orange-500/10"
              style={{
                left: `${Math.random() * 100}%`,
                bottom: `${Math.random() * 48}px`,
                width: `${Math.random() * 6 + 2}px`,
                height: `${Math.random() * 6 + 2}px`,
                animation: `float ${Math.random() * 3 + 2}s infinite ${Math.random() * 2}s`,
              }}
            />
          ))}
        </div>
      </section>

      {/* ================= MAJOR MILESTONES TIMELINE ================= */}
      <section className="relative py-32 overflow-hidden">
        {/* Clean Animated Timeline Background */}
        <TimelineBackground />
        
        {/* REMOVED: Top fade to connect with Our History section */}
        {/* <div className="absolute top-0 left-0 right-0 h-48 bg-gradient-to-b from-orange-500/5 via-orange-500/10 to-transparent" /> */}
        
        <div className="relative z-10 container mx-auto px-6">
          
          <FadeUp>
            <div className="text-center mb-20 max-w-3xl mx-auto">
              <span className="inline-block px-4 py-2 rounded-full bg-orange-500/10 text-orange-500 text-sm font-medium mb-6">
                OUR JOURNEY
              </span>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Major <span className="text-orange-500">Milestones</span>
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400">
                Significant moments that defined our growth
              </p>
            </div>
          </FadeUp>

          {/* Timeline Container */}
          <div className="relative">
            {/* Main Timeline Line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-orange-500/20 via-orange-500/40 to-orange-500/20 -translate-x-1/2 hidden lg:block" />
            
            {/* Timeline Items - Reduced spacing */}
            <div className="space-y-16 lg:space-y-20">
              {[
                {
                  year: "2009",
                  title: "The Birth",
                  description: "Lightgate was founded with a vision to revolutionize cultural entertainment.",
                  image: "/milestone-birth.jpg",
                  align: "left"
                },
                {
                  year: "2011",
                  title: "Hiking & Outdoor Community",
                  description: "Established community-driven outdoor activities promoting healthy lifestyles and environmental awareness.",
                  image: "/milestone-hiking.jpg",
                  align: "right"
                },
                {
                  year: "2013",
                  title: "Peace Boat Hosting Event",
                  description: "Curated cultural exchange for 150+ international guests with Saudi folkloric performances and traditional crafts exhibition.",
                  image: "/milestone-peaceboat.jpg",
                  align: "left"
                },
                {
                  year: "2014",
                  title: "CSR Programs",
                  description: "Launched comprehensive Corporate Social Responsibility initiatives focusing on community development.",
                  image: "/milestone-csr.jpg",
                  align: "right"
                },
                {
                  year: "2015",
                  title: "Walk for a Cause",
                  description: "Community-driven initiative promoting social responsibility through organized walks and fundraising events.",
                  image: "/milestone-walk.jpg",
                  align: "left"
                },
                {
                  year: "2017",
                  title: "International Presence",
                  description: "Expanded operations to multiple countries, establishing Lightgate as an international cultural platform.",
                  image: "/milestone-international.jpg",
                  align: "right"
                },
                {
                  year: "Coming Soon",
                  title: "SPAR Initiative",
                  description: "Saudi sports initiative redefining physical activity as a lifestyle through coast-to-coast events.",
                  image: "/milestone-spar.jpg",
                  align: "left"
                }
              ].map((milestone, index) => (
                <FadeUp key={index}>
                  <div className={`relative flex flex-col lg:flex-row items-center ${milestone.align === "left" ? "lg:flex-row" : "lg:flex-row-reverse"}`}>
                    
                    {/* Timeline Node */}
                    <div className="relative z-10 lg:absolute left-1/2 -translate-x-1/2">
                      <div className="w-6 h-6 rounded-full bg-orange-500 border-4 border-white dark:border-neutral-900 shadow-lg shadow-orange-500/30" />
                      <div className="absolute inset-0 rounded-full bg-orange-500 animate-ping opacity-20" />
                    </div>

                    {/* Content Card */}
                    <div className={`lg:w-5/12 mt-8 lg:mt-0 ${milestone.align === "left" ? "lg:pr-12 lg:text-right" : "lg:pl-12"}`}>
                      <div className="relative group">
                        <div className="absolute -inset-4 bg-gradient-to-br from-orange-500/10 to-transparent 
                                      rounded-2xl opacity-0 group-hover:opacity-100 
                                      transition-opacity duration-500 blur-xl" />
                        
                        <div className="relative bg-white dark:bg-neutral-800 rounded-2xl p-6 
                                      border border-gray-200 dark:border-neutral-700
                                      group-hover:border-orange-500/50
                                      group-hover:shadow-[0_0_30px_rgba(255,115,0,0.15)]
                                      transition-all duration-500 h-full flex flex-col">
                          
                          {/* Year Badge */}
                          <div className={`mb-4 ${milestone.align === "left" ? "lg:flex lg:justify-end" : ""}`}>
                            <span className={`inline-block px-3 py-1.5 rounded-full 
                                          ${milestone.year === "Coming Soon" ? "bg-gradient-to-r from-orange-500 to-orange-600" : "bg-orange-500"} 
                                          text-white text-sm font-bold`}>
                              {milestone.year}
                            </span>
                          </div>

                          <h3 className="text-xl font-bold mb-3 text-gray-800 dark:text-white">
                            {milestone.title}
                          </h3>
                          
                          <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 flex-grow">
                            {milestone.description}
                          </p>

                          {/* Image Preview - FITTED TO CARD WITHOUT WHITE BACKGROUND */}
                          <div className="rounded-xl overflow-hidden h-40 relative">
                            <div className="absolute inset-0">
                              <Image
                                src={milestone.image}
                                alt={milestone.title}
                                fill
                                className="object-cover"
                                onError={(e) => {
                                  // Fallback if image doesn't exist
                                  const target = e.target as HTMLImageElement;
                                  target.style.display = 'none';
                                  const parent = target.parentElement;
                                  if (parent) {
                                    parent.innerHTML = `
                                      <div class="flex items-center justify-center h-full w-full bg-gradient-to-br from-orange-500/10 to-orange-500/5">
                                        <div class="text-center">
                                          <div class="text-3xl font-bold text-gray-300 mb-2">${milestone.year}</div>
                                          <div class="text-md text-gray-400">${milestone.title}</div>
                                        </div>
                                      </div>
                                    `;
                                  }
                                }}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Spacer for desktop */}
                    <div className="lg:w-2/12" />
                  </div>
                </FadeUp>
              ))}
            </div>
          </div>
        </div>
        
        {/* SEAMLESS DIVIDER BETWEEN MILESTONE AND TEAM SECTIONS */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white dark:from-neutral-900 via-white/80 dark:via-neutral-900/80 to-transparent" />
      </section>

      {/* ================= CORE TEAM MEMBERS with BOLD ELECTRIC HEXAGONAL BACKGROUND ================= */}
      <section className="relative py-32 bg-white dark:bg-neutral-900 overflow-hidden">
        
        {/* BOLD ELECTRIC Hexagonal Animated Background */}
        <TeamMembersBackground />
        
        {/* Top fade to connect with milestone section */}
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-white dark:from-neutral-900 via-white/80 dark:via-neutral-900/80 to-transparent" />

        <div className="relative z-10 container mx-auto px-6">
          
          <FadeUp>
            <div className="text-center mb-20 max-w-3xl mx-auto">
              <span className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-orange-500/20 to-amber-500/20 border border-orange-500/30 text-orange-500 text-sm font-medium mb-6">
                OUR PEOPLE
              </span>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Leadership <span className="text-orange-500">Team</span>
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400">
                Visionaries driving cultural innovation forward
              </p>
            </div>
          </FadeUp>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {[
              {
                name: "AMEER ALRIMAWI",
                role: "FOUNDER & CEO",
                image: "/team-ameer.png"
              },
              {
                name: "LUAI HIJAZI",
                role: "PARTNER & COO",
                image: "/team-luai.png"
              },
              {
                name: "AYAH ALRIMAWI",
                role: "CONTENT DIRECTOR",
                image: "/team-ayah.png"
              },
              {
                name: "MOIZ REHMAN",
                role: "MEDIA PRODUCTION HEAD",
                image: "/team-moiz.png"
              },
              {
                name: "SARA ALGHABRAH",
                role: "PRODUCER",
                image: "/team-sara.png"
              },
              {
                name: "ALAA TAMMAR",
                role: "CONTENT CREATOR",
                image: "/team-alaa.png"
              },
              {
                name: "MOHAMAD YAMANI",
                role: "BUSINESS DEVELOPMENT",
                image: "/team-yamani.png"
              },
              {
                name: "MOHAMAD TAYYAR",
                role: "DIGITAL ACTIVATION",
                image: "/team-tayyar.png"
              },
              {
                name: "WISAM KURDI",
                role: "BUSINESS OPERATIONS",
                image: "/team-wisam.png"
              }
            ].map((member, index) => (
              <FadeUp key={index}>
                <div className="group relative">
                  <div className="relative h-80 rounded-2xl overflow-hidden mb-6
                                border-2 border-transparent
                                group-hover:border-orange-500/70
                                group-hover:shadow-[0_0_40px_rgba(255,115,0,0.4)]
                                transition-all duration-500
                                bg-gradient-to-br from-gray-50 to-white dark:from-neutral-800 dark:to-neutral-900">
                    
                    {/* Team Member Photo - FIT TO FRAME (no white background) */}
                    <div className="relative h-full w-full">
                      <div className="absolute inset-0">
                        <Image
                          src={member.image}
                          alt={member.name}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          onError={(e) => {
                            // Fallback to placeholder if image doesn't exist
                            const target = e.target as HTMLImageElement;
                            target.style.display = 'none';
                            const container = target.parentElement;
                            if (container) {
                              container.innerHTML = `
                                <div class="flex flex-col items-center justify-center h-full w-full bg-gradient-to-br from-orange-500/10 to-amber-500/5">
                                  <div class="text-5xl font-bold text-orange-400 mb-4">
                                    ${member.name.split(' ')[0].charAt(0)}
                                  </div>
                                  <div class="text-center">
                                    <div class="text-lg font-semibold text-gray-800 dark:text-white">${member.name.split(' ')[0]}</div>
                                    <div class="text-sm text-gray-600 dark:text-gray-400">${member.role.split(' ')[0]}</div>
                                  </div>
                                </div>
                              `;
                            }
                          }}
                        />
                      </div>
                      
                      {/* Electric border effect on hover */}
                      <div className="absolute inset-0 border-2 border-transparent group-hover:border-orange-400/40 transition-all duration-500" />
                      
                      {/* Electric pulse effect */}
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-orange-400 to-transparent animate-pulse" />
                        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-orange-400 to-transparent animate-pulse delay-300" />
                        <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-orange-400 to-transparent animate-pulse delay-150" />
                        <div className="absolute right-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-orange-400 to-transparent animate-pulse delay-450" />
                      </div>
                    </div>
                    
                    {/* Hover overlay with electric theme */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent 
                                  opacity-0 group-hover:opacity-100 
                                  transition-all duration-500 flex items-end p-6">
                      <div className="transform translate-y-4 opacity-0 
                                    group-hover:translate-y-0 group-hover:opacity-100
                                    transition-all duration-500">
                        <div className="text-white">
                          <div className="w-8 h-1 bg-gradient-to-r from-orange-400 to-amber-400 mb-3" />
                          <p className="text-sm opacity-90 flex items-center gap-2">
                            <span className="text-orange-300">View Profile</span>
                            <ArrowRight className="w-3 h-3 text-orange-300" />
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="text-center">
                    <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-white group-hover:text-orange-500 transition-colors duration-300">
                      {member.name}
                    </h3>
                    <p className="text-orange-500 font-medium bg-gradient-to-r from-orange-500/20 to-amber-500/20 px-4 py-1 rounded-full inline-block">
                      {member.role}
                    </p>
                    
                    {/* Electric connection dots */}
                    <div className="flex justify-center gap-1 mt-4">
                      {[1, 2, 3].map((dot) => (
                        <div 
                          key={dot}
                          className="w-1.5 h-1.5 rounded-full bg-orange-400/60 group-hover:bg-orange-400 transition-colors duration-300"
                          style={{
                            animation: `pulse 1.5s infinite ${dot * 0.2}s`
                          }}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </FadeUp>
            ))}

          </div>
          
          {/* Team synergy message */}
          <FadeUp>
            <div className="text-center mt-20 max-w-2xl mx-auto">
              <div className="inline-flex items-center gap-4 px-6 py-3 rounded-full bg-gradient-to-r from-orange-500/10 to-amber-500/10 border border-orange-500/20 backdrop-blur-sm">
                <div className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
                <p className="text-gray-700 dark:text-gray-300">
                  <span className="text-orange-500 font-semibold">Electric Synergy:</span> Our team collaborates with dynamic energy and precision
                </p>
                <div className="w-2 h-2 rounded-full bg-amber-500 animate-pulse delay-300" />
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ================= PROFESSIONALS WE WORK WITH ================= */}
      <section className="relative py-32 bg-gradient-to-b from-gray-50 to-white dark:from-neutral-950 dark:to-neutral-900">
        <div className="container mx-auto px-6">
          
          <FadeUp>
            <div className="text-center mb-20 max-w-3xl mx-auto">
              <span className="inline-block px-4 py-2 rounded-full bg-orange-500/10 text-orange-500 text-sm font-medium mb-6">
                COLLABORATORS
              </span>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Professionals We <span className="text-orange-500">Work With</span>
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400">
                Expert collaborators who enhance our creative vision
              </p>
            </div>
          </FadeUp>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            
            {/* Jassim Alsaady */}
            <FadeUp>
              <div className="relative group h-full">
                <div className="absolute -inset-4 bg-gradient-to-br from-orange-500/10 to-transparent 
                              rounded-3xl opacity-0 group-hover:opacity-100 
                              transition-opacity duration-500 blur-xl" />
                
                <div className="relative bg-white dark:bg-neutral-800 rounded-2xl p-8 
                              border border-gray-200 dark:border-neutral-700
                              group-hover:border-orange-500/50
                              group-hover:shadow-[0_0_40px_rgba(255,115,0,0.15)]
                              transition-all duration-500 h-full flex flex-col">
                  
                  <div className="flex flex-col items-center text-center flex-grow">
                    {/* Profile image - fitted without white background */}
                    <div className="relative w-32 h-32 rounded-full mb-6 overflow-hidden bg-gray-100 dark:bg-neutral-700">
                      <Image
                        src="/team-jassim.jpg"
                        alt="Jassim Alsaady"
                        fill
                        className="object-cover"
                        sizes="128px"
                        onError={(e) => {
                          // Fallback to placeholder
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                          const parent = target.parentElement;
                          if (parent) {
                            parent.innerHTML = `
                              <div class="flex items-center justify-center h-full w-full bg-gradient-to-br from-orange-500/20 to-orange-500/5">
                                <span class="text-4xl font-bold text-orange-500">J</span>
                              </div>
                            `;
                          }
                        }}
                      />
                    </div>
                    
                    <h3 className="text-2xl font-bold mb-2 text-gray-800 dark:text-white">
                      JASSIM ALSAADY
                    </h3>
                    <p className="text-orange-500 font-medium mb-4">DIRECTOR - FILM & COMMERCIAL</p>
                    
                    <div className="w-12 h-1 bg-orange-500 mb-4" />
                    
                    <p className="text-gray-600 dark:text-gray-400 mb-6 flex-grow">
                      Award-winning film and commercial director bringing cinematic excellence to our projects.
                    </p>
                    
                    <Link 
                      href="https://www.jassimalsady.com" 
                      target="_blank"
                      className="inline-flex items-center gap-2 text-orange-500 hover:text-orange-600
                               transition-colors duration-300 mt-auto"
                    >
                      <span>www.jassimalsady.com</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </FadeUp>

            {/* Emad El Sayed */}
            <FadeUp>
              <div className="relative group h-full">
                <div className="absolute -inset-4 bg-gradient-to-br from-orange-500/10 to-transparent 
                              rounded-3xl opacity-0 group-hover:opacity-100 
                              transition-opacity duration-500 blur-xl" />
                
                <div className="relative bg-white dark:bg-neutral-800 rounded-2xl p-8 
                              border border-gray-200 dark:border-neutral-700
                              group-hover:border-orange-500/50
                              group-hover:shadow-[0_0_40px_rgba(255,115,0,0.15)]
                              transition-all duration-500 h-full flex flex-col">
                  
                  <div className="flex flex-col items-center text-center flex-grow">
                    {/* Profile image - fitted without white background */}
                    <div className="relative w-32 h-32 rounded-full mb-6 overflow-hidden bg-gray-100 dark:bg-neutral-700">
                      <Image
                        src="/team-emad.jpg"
                        alt="Emad El Sayed"
                        fill
                        className="object-cover"
                        sizes="128px"
                        onError={(e) => {
                          // Fallback to placeholder
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                          const parent = target.parentElement;
                          if (parent) {
                            parent.innerHTML = `
                              <div class="flex items-center justify-center h-full w-full bg-gradient-to-br from-orange-500/20 to-orange-500/5">
                                <span class="text-4xl font-bold text-orange-500">E</span>
                              </div>
                            `;
                          }
                        }}
                      />
                    </div>
                    
                    <h3 className="text-2xl font-bold mb-2 text-gray-800 dark:text-white">
                      EMAD EL SAYED
                    </h3>
                    <p className="text-orange-500 font-medium mb-4">CREATIVE DIRECTOR</p>
                    
                    <div className="w-12 h-1 bg-orange-500 mb-4" />
                    
                    <p className="text-gray-600 dark:text-gray-400 mb-6 flex-grow">
                      Renowned creative director specializing in brand strategy and visual storytelling.
                    </p>
                    
                    <Link 
                      href="https://www.emadelsayed.com" 
                      target="_blank"
                      className="inline-flex items-center gap-2 text-orange-500 hover:text-orange-600
                               transition-colors duration-300 mt-auto"
                    >
                      <span>www.emadelsayed.com</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </FadeUp>

          </div>
        </div>
      </section>

      {/* ================= STRATEGIC PARTNERS (7 partners from PDF Page 16) ================= */}
      <section className="relative py-32 bg-white dark:bg-neutral-900">
        <div className="container mx-auto px-6">
          
          <FadeUp>
            <div className="text-center mb-20 max-w-3xl mx-auto">
              <span className="inline-block px-4 py-2 rounded-full bg-orange-500/10 text-orange-500 text-sm font-medium mb-6">
                COLLABORATIONS
              </span>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Strategic <span className="text-orange-500">Partners</span>
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400">
                Trusted by industry leaders worldwide
              </p>
            </div>
          </FadeUp>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            
            {/* 7 Strategic Partners as shown in PDF */}
            {[
              { name: "Partner 1", logo: "/partner-1.png" },
              { name: "Partner 2", logo: "/partner-2.png" },
              { name: "Partner 3", logo: "/partner-3.png" },
              { name: "Partner 4", logo: "/partner-4.png" },
              { name: "Partner 5", logo: "/partner-5.png" },
              { name: "Partner 6", logo: "/partner-6.png" },
              { name: "Partner 7", logo: "/partner-7.png" }
            ].map((partner, index) => (
              <FadeUp key={index}>
                <div className="group relative">
                  <div className="aspect-square rounded-2xl bg-white dark:bg-neutral-800 
                                border border-gray-200 dark:border-neutral-700
                                flex items-center justify-center p-8
                                group-hover:border-orange-500/50
                                group-hover:shadow-[0_0_20px_rgba(255,115,0,0.1)]
                                transition-all duration-500">
                    <div className="relative w-full h-full flex items-center justify-center">
                      <Image
                        src={partner.logo}
                        alt={partner.name}
                        width={120}
                        height={60}
                        className="object-contain max-h-16"
                        sizes="(max-width: 768px) 100px, 120px"
                        onError={(e) => {
                          // Fallback to text if logo doesn't exist
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                          const container = target.parentElement;
                          if (container) {
                            container.innerHTML = `
                              <div class="flex items-center justify-center h-full w-full">
                                <div class="text-gray-400 dark:text-gray-500 text-sm text-center
                                          group-hover:text-orange-500 transition-colors duration-500">
                                  ${partner.name}
                                </div>
                              </div>
                            `;
                          }
                        }}
                      />
                    </div>
                  </div>
                </div>
              </FadeUp>
            ))}

          </div>

          <FadeUp>
            <div className="text-center mt-16">
              <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                We collaborate with leading brands, cultural institutions, and technology 
                partners to create groundbreaking experiences that redefine entertainment.
              </p>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ================= CTA SECTION with Hexagonal Background ================= */}
      <section className="relative py-32 overflow-hidden">
        {/* Hexagonal Background Pattern */}
        <CTAHexagonalBackground />

        {/* Orange gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 via-transparent to-orange-500/5" />

        <div className="relative z-10 container mx-auto px-6">
          
          <FadeUp>
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-bold mb-8 text-gray-800 dark:text-white">
                Ready to Illuminate Your <span className="text-orange-500">Vision</span>?
              </h2>
              
              <p className="text-xl text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
                Let's collaborate to create unforgettable cultural experiences that 
                resonate with audiences worldwide.
              </p>

              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-3 px-10 py-5 
                           rounded-full bg-gradient-to-r from-orange-500 to-orange-600
                           text-white font-medium text-lg
                           hover:from-orange-600 hover:to-orange-700
                           hover:shadow-[0_0_40px_rgba(255,115,0,0.6)]
                           transform hover:-translate-y-1
                           transition-all duration-300"
                >
                  Start a Project
                  <ArrowRight className="w-5 h-5" />
                </Link>
                
                <Link
                  href="/portfolio"
                  className="inline-flex items-center justify-center gap-3 px-10 py-5 
                           rounded-full bg-transparent border-2 border-orange-500
                           text-orange-500 font-medium text-lg
                           hover:bg-orange-500 hover:text-white
                           hover:shadow-[0_0_30px_rgba(255,115,0,0.4)]
                           transition-all duration-300"
                >
                  View Our Portfolio
                </Link>
              </div>
            </div>
          </FadeUp>

        </div>
      </section>

      {/* Add CSS animation for floating particles */}
      <style jsx global>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) translateX(0); }
          33% { transform: translateY(-10px) translateX(5px); }
          66% { transform: translateY(5px) translateX(-5px); }
        }
      `}</style>

    </main>
  );
}
