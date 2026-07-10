"use client";

import { useEffect, useRef, useState } from "react";
import { skillNarratives } from "@/lib/data/skills";
import { profile } from "@/lib/data/profile";

// Frames are captured to an offscreen bitmap sequence so scrolling can
// redraw instantly instead of seeking the video. Resolution is derived
// per-load from the source video and viewport (see start() below) rather
// than hardcoded, so playback is never a blurry upscale of a fixed-size
// buffer. Frame count then scales inversely with resolution to keep the
// total pixel budget — and therefore memory use — roughly constant.
const PIXEL_FRAME_BUDGET = 640 * 360 * 240;
const MAX_CAPTURE_WIDTH = 1600;
const MIN_FRAMES = 60;
const MAX_FRAMES_CAP = 240;

export function ExplodedScroll() {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const framesRef = useRef<ImageBitmap[]>([]);
  const frameSizeRef = useRef({ width: 640, height: 360 });
  const maxFramesRef = useRef(MAX_FRAMES_CAP);

  const [framesReady, setFramesReady] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [introVisible, setIntroVisible] = useState(true);

  // Play the clip once on load, capturing every frame to an offscreen
  // bitmap. Once we have the full sequence, scrolling can redraw the
  // matching frame on a canvas instantly — no per-scroll video seeking.
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (typeof video.requestVideoFrameCallback !== "function") {
      video.loop = true;
      video.play().catch(() => {});
      return;
    }

    let cancelled = false;
    const grabCanvas = document.createElement("canvas");
    const grabCtx = grabCanvas.getContext("2d");

    const onFrame = async () => {
      if (cancelled || !grabCtx) return;

      const { width, height } = frameSizeRef.current;
      grabCtx.drawImage(video, 0, 0, width, height);
      const bitmap = await createImageBitmap(grabCanvas);
      if (cancelled) {
        bitmap.close();
        return;
      }
      framesRef.current.push(bitmap);

      const done =
        video.ended ||
        video.currentTime >= video.duration - 0.05 ||
        framesRef.current.length >= maxFramesRef.current;

      if (!done) {
        video.requestVideoFrameCallback(onFrame);
      } else {
        video.pause();
        setFramesReady(true);
      }
    };

    const start = () => {
      // Derive capture resolution from the source video's native size and
      // the current viewport (capped) so the buffer we scrub through is
      // never lower-res than what's actually displayed.
      const nativeWidth = video.videoWidth || 1280;
      const nativeHeight = video.videoHeight || 720;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const targetWidth = Math.round(
        Math.min(nativeWidth, window.innerWidth * dpr, MAX_CAPTURE_WIDTH),
      );
      const targetHeight = Math.round(targetWidth * (nativeHeight / nativeWidth));

      frameSizeRef.current = { width: targetWidth, height: targetHeight };
      grabCanvas.width = targetWidth;
      grabCanvas.height = targetHeight;

      // Keep total captured pixels roughly constant: sharper frames means
      // fewer of them, so memory use doesn't scale with resolution.
      maxFramesRef.current = Math.round(
        Math.min(
          MAX_FRAMES_CAP,
          Math.max(MIN_FRAMES, PIXEL_FRAME_BUDGET / (targetWidth * targetHeight)),
        ),
      );

      video.requestVideoFrameCallback(onFrame);
      video.play().catch(() => {});
    };

    if (video.readyState >= 1) {
      start();
    } else {
      video.addEventListener("loadedmetadata", start, { once: true });
    }

    return () => {
      cancelled = true;
      video.removeEventListener("loadedmetadata", start);
      framesRef.current.forEach((frame) => frame.close());
      framesRef.current = [];
    };
  }, []);

  // Drive the canvas frame, intro card, and skill cards from scroll position.
  useEffect(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!container || !canvas || !framesReady) return;

    const ctx = canvas.getContext("2d");
    const { width, height } = frameSizeRef.current;
    canvas.width = width;
    canvas.height = height;

    let raf = 0;
    const update = () => {
      raf = 0;
      const rect = container.getBoundingClientRect();
      const total = Math.max(rect.height - window.innerHeight, 1);
      const progress = Math.min(Math.max(-rect.top / total, 0), 1);

      const frames = framesRef.current;
      if (ctx && frames.length) {
        const frameIndex = Math.min(
          frames.length - 1,
          Math.floor(progress * frames.length),
        );
        ctx.drawImage(frames[frameIndex], 0, 0, width, height);
      }

      const count = skillNarratives.length;
      const index = Math.min(count - 1, Math.floor(progress * count));
      setActiveIndex(index);
      setIntroVisible(progress < 0.08);
    };

    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, [framesReady]);

  return (
    <section ref={containerRef} className="relative h-[300vh]">
      <div className="sticky top-0 h-screen w-full overflow-hidden bg-background">
        <video
          ref={videoRef}
          src="/gallery.mp4"
          muted
          playsInline
          preload="auto"
          aria-hidden
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-300 ${
            framesReady ? "opacity-0" : "opacity-100"
          }`}
        />
        <canvas
          ref={canvasRef}
          aria-hidden
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-300 ${
            framesReady ? "opacity-100" : "opacity-0"
          }`}
        />

        {/* <div
          className={`pointer-events-none absolute inset-0 flex flex-col items-center justify-center gap-4 px-6 text-center transition-opacity duration-500 ${
            introVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="rounded-3xl bg-background/70 px-8 py-10 backdrop-blur-md sm:px-16 sm:py-14">
            <h1 className="text-[13vw] font-black uppercase leading-none tracking-tight text-foreground sm:text-[clamp(3rem,9vw,8rem)]">
              {profile.name}
            </h1>
            <p className="mt-4 text-xs font-medium uppercase tracking-[0.3em] text-foreground/70 sm:text-sm">
              {profile.tagline}
            </p>
          </div> */}
        {/* </div> */}
      </div>
    </section>
  );
}
