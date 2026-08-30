import { useEffect, useRef, useState, useCallback } from "react";
import { TYPING_TEXT } from "../data/keyboard";

type Phase = "typing" | "pause" | "enter" | "output" | "done";

export type TypingState = {
  typed: string;
  phase: Phase;
  activeCodes: string[];
  showOutput: boolean;
  isDone: boolean;
};

const CHAR_TO_CODES: Record<string, string[]> = {
  ".": ["Period", "ShiftLeft"],
  "/": ["Slash", "ShiftLeft"],
  s: ["KeyS"],
  t: ["KeyT"],
  a: ["KeyA"],
  r: ["KeyR"],
  h: ["KeyH"],
};

export function useTypingSequence(onComplete: () => void): TypingState & { skip: () => void } {
  const [typed, setTyped] = useState("");
  const [phase, setPhase] = useState<Phase>("typing");
  const [activeCodes, setActiveCodes] = useState<string[]>([]);
  const [showOutput, setShowOutput] = useState(false);
  const [isDone, setIsDone] = useState(false);
  const timers = useRef<number[]>([]);
  const completedRef = useRef(false);

  const clearTimers = useCallback(() => {
    timers.current.forEach((id) => clearTimeout(id));
    timers.current = [];
  }, []);

  const finish = useCallback(() => {
    if (completedRef.current) return;
    completedRef.current = true;
    clearTimers();
    setIsDone(true);
    const id = window.setTimeout(() => onComplete(), 400);
    timers.current.push(id);
  }, [onComplete, clearTimers]);

  const skip = useCallback(() => {
    clearTimers();
    setTyped(TYPING_TEXT);
    setShowOutput(true);
    setPhase("done");
    finish();
  }, [clearTimers, finish]);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (media.matches) {
      setTyped(TYPING_TEXT);
      setShowOutput(true);
      setPhase("done");
      const id = window.setTimeout(() => finish(), 600);
      timers.current.push(id);
      return () => clearTimers();
    }

    let index = 0;

    const typeNext = () => {
      if (index >= TYPING_TEXT.length) {
        setPhase("pause");
        const t1 = window.setTimeout(() => {
          const codes = CHAR_TO_CODES["⏎"] ?? ["Enter"];
          setActiveCodes(codes);
          setPhase("enter");
          const t2 = window.setTimeout(() => {
            setActiveCodes([]);
            setShowOutput(true);
            setPhase("output");
            const t3 = window.setTimeout(() => {
              setPhase("done");
              finish();
            }, 300);
            timers.current.push(t3);
          }, 250);
          timers.current.push(t2);
        }, 400);
        timers.current.push(t1);
        return;
      }

      const char = TYPING_TEXT[index];
      const codes = CHAR_TO_CODES[char] ?? [];
      if (codes.length) setActiveCodes(codes);

      const clearId = window.setTimeout(() => setActiveCodes([]), 120);
      timers.current.push(clearId);

      setTyped((prev) => prev + char);
      index += 1;

      const jitter = Math.random() * 80 - 40;
      const delay = 135 + jitter;
      const nextId = window.setTimeout(typeNext, delay);
      timers.current.push(nextId);
    };

    const startId = window.setTimeout(typeNext, 500);
    timers.current.push(startId);

    return () => clearTimers();
  }, [clearTimers, finish]);

  return { typed, phase, activeCodes, showOutput, isDone, skip };
}
