"use client";

import { useEffect, useRef } from "react";
import type P5 from "p5";

/**
 * Renaissance-fresco koi pond, generative in p5.js (instance mode).
 * A twilight water gradient, drifting bokeh, and a gilded frame stay
 * true to the original piece; ripples, scales, lily rims, and fish
 * trails cycle through a rainbow HSB hue with additive blending and
 * soft blur so the water reads as ethereal, refracted stained-glass light.
 */
function sketch(p: P5, container: HTMLDivElement) {
  type TrailPoint = { x: number; y: number; hue: number };
  type Fish = {
    x: number;
    y: number;
    size: number;
    hue: number;
    speed: number;
    baseSpeed: number;
    angle: number;
    trail: TrailPoint[];
  };
  type LilyPad = { x: number; y: number; size: number; hueShift: number };
  type Cherub = { x: number; y: number; size: number; angle: number };
  type Ripple = { x: number; y: number; radius: number; maxRadius: number; alpha: number; hue: number };
  type GlowOrb = { x: number; y: number; vx: number; vy: number; size: number; hueOffset: number };
  type Mote = { x: number; y: number; vy: number; size: number; hue: number; alpha: number };
  type FeedPoint = { x: number; y: number; life: number };

  const TRAIL_LENGTH = 18;
  const FEED_LIFE = 260;
  const FEED_RADIUS = 18;

  let fish: Fish[] = [];
  const ripples: Ripple[] = [];
  let lilies: LilyPad[] = [];
  let cherubs: Cherub[] = [];
  let glowOrbs: GlowOrb[] = [];
  let motes: Mote[] = [];
  let feedPoint: FeedPoint | null = null;

  function makeFish(x: number, y: number, size: number): Fish {
    const baseSpeed = p.random(0.5, 1);
    return { x, y, size, hue: p.random(20, 40), speed: baseSpeed, baseSpeed, angle: p.random(p.TWO_PI), trail: [] };
  }

  function makeLilyPad(x: number, y: number): LilyPad {
    return { x, y, size: p.random(30, 60), hueShift: p.random(360) };
  }

  function makeCherub(x: number, y: number): Cherub {
    return { x, y, size: p.random(30, 50), angle: 0 };
  }

  function makeRipple(x: number, y: number): Ripple {
    return { x, y, radius: 0, maxRadius: p.random(20, 40), alpha: 100, hue: p.random(360) };
  }

  function makeGlowOrb(): GlowOrb {
    return {
      x: p.random(p.width),
      y: p.random(p.height),
      vx: p.random(-0.15, 0.15),
      vy: p.random(-0.08, 0.08),
      size: p.random(90, 170),
      hueOffset: p.random(360),
    };
  }

  function makeMote(): Mote {
    return {
      x: p.random(p.width),
      y: p.random(p.height * 0.4, p.height),
      vy: p.random(-0.4, -0.12),
      size: p.random(2, 4),
      hue: p.random(360),
      alpha: p.random(30, 65),
    };
  }

  function updateFish(f: Fish) {
    let rippleChance = 0.02;

    if (feedPoint) {
      const dx = feedPoint.x - f.x;
      const dy = feedPoint.y - f.y;
      const dist = p.sqrt(dx * dx + dy * dy);
      const desiredAngle = p.atan2(dy, dx);

      if (dist > FEED_RADIUS) {
        // Steer toward the feed point along the shortest angular path, eager but not robotic.
        let diff = desiredAngle - f.angle;
        diff = p.atan2(p.sin(diff), p.cos(diff));
        f.angle += diff * 0.08 + p.random(-0.03, 0.03);
        f.speed = p.lerp(f.speed, p.min(f.baseSpeed + 1.4, 2.2), 0.08);
      } else {
        // Jostle and mill around the food, like koi clustering at the surface.
        f.angle += p.random(-0.18, 0.18);
        f.speed = p.lerp(f.speed, 0.3, 0.1);
        rippleChance = 0.08;
      }
    } else {
      f.angle += p.random(-0.05, 0.05);
      f.speed = p.lerp(f.speed, f.baseSpeed, 0.04);
    }

    f.x += p.cos(f.angle) * f.speed;
    f.y += p.sin(f.angle) * f.speed;

    let wrapped = false;
    if (f.x > p.width) { f.x = 0; wrapped = true; }
    if (f.x < 0) { f.x = p.width; wrapped = true; }
    if (f.y > p.height) { f.y = 0; wrapped = true; }
    if (f.y < 0) { f.y = p.height; wrapped = true; }

    if (wrapped) {
      // Don't let the trail draw a streak clear across the canvas on wrap.
      f.trail = [];
    } else {
      const trailHue = (p.frameCount * 0.9 + f.x * 0.6 + f.y * 0.3) % 360;
      f.trail.push({ x: f.x, y: f.y, hue: trailHue });
      if (f.trail.length > TRAIL_LENGTH) f.trail.shift();
    }

    if (p.random(1) < rippleChance) {
      ripples.push(makeRipple(f.x, f.y));
    }
  }

  function displayFishTrail(f: Fish) {
    if (f.trail.length < 2) return;
    p.push();
    p.blendMode(p.ADD);
    const ctx = p.drawingContext as CanvasRenderingContext2D;
    ctx.filter = "blur(3px)";
    p.noFill();
    for (let i = 0; i < f.trail.length - 1; i++) {
      const t = f.trail[i];
      const next = f.trail[i + 1];
      const progress = i / f.trail.length;
      p.strokeWeight(p.map(progress, 0, 1, 1, 6));
      p.stroke(t.hue, 75, 100, p.map(progress, 0, 1, 2, 45));
      p.line(t.x, t.y, next.x, next.y);
    }
    ctx.filter = "none";
    p.pop();
  }

  function displayFish(f: Fish) {
    p.push();
    p.translate(f.x, f.y);
    p.rotate(f.angle);

    p.fill(f.hue, 70, 80);
    p.ellipse(0, 0, f.size, f.size / 2);

    p.triangle(
      -f.size / 2,
      0,
      -f.size * 0.8,
      -f.size / 4,
      -f.size * 0.8,
      f.size / 4,
    );

    // Iridescent sheen along the spine — a slow rainbow hue drifting over time.
    p.push();
    p.blendMode(p.ADD);
    const sheenHue = (p.frameCount * 0.6 + f.x + f.y) % 360;
    p.noStroke();
    p.fill(sheenHue, 80, 100, 22);
    p.ellipse(0, -f.size / 8, f.size * 0.6, f.size / 6);
    p.pop();

    p.fill(0);
    p.ellipse(f.size / 4, -f.size / 8, f.size / 10);

    p.pop();
  }

  function displayLilyPad(l: LilyPad) {
    p.push();
    p.translate(l.x, l.y);
    p.fill(100, 70, 60);
    p.ellipse(0, 0, l.size, l.size * 0.8);
    p.stroke(100, 70, 40);
    p.noFill();
    p.arc(0, 0, l.size * 0.9, l.size * 0.7, 0, p.PI);

    // Thin rainbow rim catching light along the pad's edge, like the reference photo's window glow.
    p.push();
    p.blendMode(p.ADD);
    const rimHue = (p.frameCount * 0.4 + l.hueShift) % 360;
    p.noFill();
    p.strokeWeight(1.5);
    p.stroke(rimHue, 70, 100, 40);
    p.ellipse(0, 0, l.size * 1.05, l.size * 0.85);
    p.pop();

    p.pop();
  }

  function updateCherub(c: Cherub) {
    c.angle += 0.02;
    c.y += p.sin(c.angle) * 0.5;
  }

  function displayCherub(c: Cherub) {
    p.push();
    p.translate(c.x, c.y);
    p.fill(20, 30, 95);
    p.ellipse(0, 0, c.size, c.size * 1.2);
    p.ellipse(-c.size / 3, -c.size / 2, c.size / 2);
    p.ellipse(c.size / 3, -c.size / 2, c.size / 2);
    p.fill(80, 99, 57);
    p.ellipse(0, -c.size / 2, c.size / 2);
    p.pop();
  }

  function expandRipple(r: Ripple) {
    r.radius += 0.5;
    r.alpha -= 1;
  }

  function displayRipple(r: Ripple) {
    p.push();
    p.blendMode(p.ADD);
    const ctx = p.drawingContext as CanvasRenderingContext2D;
    ctx.filter = "blur(1.5px)";
    p.noFill();
    // Rainbow-cycling stroke instead of flat white, so ripples shimmer like refracted light.
    p.stroke(r.hue, 60, 100, r.alpha);
    p.ellipse(r.x, r.y, r.radius * 2);
    ctx.filter = "none";
    p.pop();
  }

  function rippleFinished(r: Ripple) {
    return r.radius > r.maxRadius || r.alpha < 0;
  }

  function setGradientBackground() {
    // Twilight indigo-to-blue gradient, moodier and dimmer than a plain daylight pond.
    for (let y = 0; y < p.height; y++) {
      const inter = p.map(y, 0, p.height, 0, 1);
      const c = p.lerpColor(p.color(252, 55, 13), p.color(210, 30, 45), inter);
      p.stroke(c);
      p.line(0, y, p.width, y);
    }
  }

  function drawGlowOrbs() {
    // Slow-drifting bokeh, like out-of-focus reflections of colored light in the water.
    p.push();
    p.blendMode(p.ADD);
    const ctx = p.drawingContext as CanvasRenderingContext2D;
    ctx.filter = "blur(20px)";
    p.noStroke();
    for (const o of glowOrbs) {
      o.x += o.vx;
      o.y += o.vy;
      if (o.x < -80) o.x = p.width + 80;
      if (o.x > p.width + 80) o.x = -80;
      if (o.y < -80) o.y = p.height + 80;
      if (o.y > p.height + 80) o.y = -80;

      const hue = (p.frameCount * 0.15 + o.hueOffset) % 360;
      p.fill(hue, 55, 100, 14);
      p.ellipse(o.x, o.y, o.size, o.size);
    }
    ctx.filter = "none";
    p.pop();
  }

  function drawLightBeams() {
    // Soft, blurred prismatic light shards drifting across the water.
    p.push();
    p.blendMode(p.ADD);
    const ctx = p.drawingContext as CanvasRenderingContext2D;
    ctx.filter = "blur(9px)";
    p.noStroke();
    const beamCount = 5;
    for (let i = 0; i < beamCount; i++) {
      const hue = (p.frameCount * 0.3 + i * 70) % 360;
      const xOffset = ((p.frameCount * 0.35 + i * 160) % (p.width + 200)) - 100;
      p.push();
      p.translate(xOffset, 0);
      p.rotate(0.35);
      p.fill(hue, 65, 100, 5);
      p.rect(-25, -p.height * 0.3, 50, p.height * 1.8);
      p.pop();
    }
    ctx.filter = "none";
    p.pop();
  }

  function updateAndDrawMotes() {
    // Fine drifting light motes for atmosphere, like dust caught in a shaft of colored light.
    p.push();
    p.blendMode(p.ADD);
    const ctx = p.drawingContext as CanvasRenderingContext2D;
    ctx.filter = "blur(2px)";
    p.noStroke();
    for (const m of motes) {
      m.y += m.vy;
      m.x += p.sin(p.frameCount * 0.02 + m.y * 0.05) * 0.15;
      if (m.y < -10) {
        m.y = p.height + 10;
        m.x = p.random(p.width);
      }
      const hue = (m.hue + p.frameCount * 0.5) % 360;
      p.fill(hue, 45, 100, m.alpha);
      p.ellipse(m.x, m.y, m.size, m.size);
    }
    ctx.filter = "none";
    p.pop();
  }

  function drawFeedMarker() {
    if (!feedPoint) return;
    const lifeRatio = feedPoint.life / FEED_LIFE;
    p.push();
    p.blendMode(p.ADD);
    const ctx = p.drawingContext as CanvasRenderingContext2D;
    ctx.filter = "blur(6px)";
    p.noStroke();
    const pulse = 10 + p.sin(p.frameCount * 0.15) * 4;
    const hue = (p.frameCount * 1.2) % 360;
    p.fill(hue, 60, 100, 45 * lifeRatio);
    p.ellipse(feedPoint.x, feedPoint.y, pulse * 2, pulse * 2);
    ctx.filter = "none";
    p.pop();
  }

  function drawFrame() {
    p.push();
    p.noFill();
    p.strokeWeight(20);
    p.stroke(30, 70, 50);
    p.rect(0, 0, p.width, p.height);

    const cornerSize = 50;
    p.stroke(40, 80, 60);
    p.arc(cornerSize, cornerSize, cornerSize * 2, cornerSize * 2, 0, p.HALF_PI);
    p.arc(p.width - cornerSize, cornerSize, cornerSize * 2, cornerSize * 2, p.HALF_PI, p.PI);
    p.arc(
      p.width - cornerSize,
      p.height - cornerSize,
      cornerSize * 2,
      cornerSize * 2,
      p.PI,
      p.PI + p.HALF_PI,
    );
    p.arc(
      cornerSize,
      p.height - cornerSize,
      cornerSize * 2,
      cornerSize * 2,
      p.PI + p.HALF_PI,
      p.TWO_PI,
    );
    p.pop();
  }

  function drawVignette() {
    // A cool, color-graded vignette rather than a flat black one, for a more cinematic frame.
    const ctx = (p.drawingContext as CanvasRenderingContext2D);
    const gradient = ctx.createRadialGradient(
      p.width / 2,
      p.height / 2,
      0,
      p.width / 2,
      p.height / 2,
      p.width,
    );
    gradient.addColorStop(0, "rgba(10,5,25,0)");
    gradient.addColorStop(1, "rgba(4,2,18,0.78)");
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, p.width, p.height);
  }

  p.setup = () => {
    const canvas = p.createCanvas(container.clientWidth, container.clientHeight);
    canvas.parent(container);
    p.colorMode(p.HSB, 360, 100, 100, 100);

    fish = [];
    lilies = [];
    cherubs = [];
    glowOrbs = [];
    motes = [];
    for (let i = 0; i < 5; i++) fish.push(makeFish(p.random(p.width), p.random(p.height), p.random(30, 60)));
    for (let i = 0; i < 7; i++) lilies.push(makeLilyPad(p.random(p.width), p.random(p.height)));
    for (let i = 0; i < 2; i++) cherubs.push(makeCherub(p.random(p.width), p.random(p.height)));
    for (let i = 0; i < 6; i++) glowOrbs.push(makeGlowOrb());
    for (let i = 0; i < 14; i++) motes.push(makeMote());
  };

  p.draw = () => {
    setGradientBackground();
    drawGlowOrbs();
    drawLightBeams();
    drawFrame();

    if (feedPoint) {
      feedPoint.life -= 1;
      if (feedPoint.life <= 0) feedPoint = null;
    }
    drawFeedMarker();

    for (const f of fish) {
      updateFish(f);
      displayFishTrail(f);
      displayFish(f);
    }
    for (const l of lilies) displayLilyPad(l);
    for (const c of cherubs) {
      updateCherub(c);
      displayCherub(c);
    }
    for (let i = ripples.length - 1; i >= 0; i--) {
      displayRipple(ripples[i]);
      expandRipple(ripples[i]);
      if (rippleFinished(ripples[i])) ripples.splice(i, 1);
    }
    updateAndDrawMotes();

    drawVignette();
  };

  p.mousePressed = () => {
    if (p.mouseX >= 0 && p.mouseX <= p.width && p.mouseY >= 0 && p.mouseY <= p.height) {
      ripples.push(makeRipple(p.mouseX, p.mouseY));
      feedPoint = { x: p.mouseX, y: p.mouseY, life: FEED_LIFE };
    }
  };
}

export function KoiPondSketch() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let p5Instance: P5 | undefined;
    let resizeObserver: ResizeObserver | undefined;
    let cancelled = false;

    (async () => {
      const { default: P5Ctor } = await import("p5");
      if (cancelled) return;

      p5Instance = new P5Ctor((p: P5) => sketch(p, container), container);

      resizeObserver = new ResizeObserver(() => {
        p5Instance?.resizeCanvas(container.clientWidth, container.clientHeight);
      });
      resizeObserver.observe(container);
    })();

    return () => {
      cancelled = true;
      resizeObserver?.disconnect();
      p5Instance?.remove();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative mt-12 aspect-[16/9] w-full overflow-hidden rounded-2xl bg-foreground/5 sm:mt-20 [&>canvas]:block [&>canvas]:h-full [&>canvas]:w-full"
    />
  );
}
