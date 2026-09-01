import type { KeyDef } from "../types";

// AZERTY français réaliste — 5 rangées
export const AZERTY_ROWS: KeyDef[][] = [
  // Rangée 1 : chiffres / symboles
  [
    { label: "²", code: "Backquote" },
    { label: "&", code: "Digit1" },
    { label: "é", code: "Digit2" },
    { label: '"', code: "Digit3" },
    { label: "'", code: "Digit4" },
    { label: "(", code: "Digit5" },
    { label: "-", code: "Digit6" },
    { label: "è", code: "Digit7" },
    { label: "_", code: "Digit8" },
    { label: "ç", code: "Digit9" },
    { label: "à", code: "Digit0" },
    { label: ")", code: "Minus" },
    { label: "=", code: "Equal" },
    { label: "⌫", code: "Backspace", width: 2 },
  ],
  // Rangée 2 : AZERTY
  [
    { label: "⇥", code: "Tab", width: 1.5 },
    { label: "A", code: "KeyA" },
    { label: "Z", code: "KeyZ" },
    { label: "E", code: "KeyE" },
    { label: "R", code: "KeyR" },
    { label: "T", code: "KeyT" },
    { label: "Y", code: "KeyY" },
    { label: "U", code: "KeyU" },
    { label: "I", code: "KeyI" },
    { label: "O", code: "KeyO" },
    { label: "P", code: "KeyP" },
    { label: "^", code: "BracketLeft" },
    { label: "$", code: "BracketRight" },
  ],
  // Rangée 3 : QSDFGHJKLM
  [
    { label: "⇪", code: "CapsLock", width: 1.75 },
    { label: "Q", code: "KeyQ" },
    { label: "S", code: "KeyS" },
    { label: "D", code: "KeyD" },
    { label: "F", code: "KeyF" },
    { label: "G", code: "KeyG" },
    { label: "H", code: "KeyH" },
    { label: "J", code: "KeyJ" },
    { label: "K", code: "KeyK" },
    { label: "L", code: "KeyL" },
    { label: "M", code: "KeyM" },
    { label: "ù", code: "Semicolon" },
    { label: "*", code: "Quote" },
    { label: "⏎", code: "Enter", width: 2.25 },
  ],
  // Rangée 4 : WXCVBN + ponctuation
  [
    { label: "⇧", code: "ShiftLeft", width: 2.25 },
    { label: "<", code: "IntlBackslash" },
    { label: "W", code: "KeyW" },
    { label: "X", code: "KeyX" },
    { label: "C", code: "KeyC" },
    { label: "V", code: "KeyV" },
    { label: "B", code: "KeyB" },
    { label: "N", code: "KeyN" },
    { label: ",", code: "Comma" },
    { label: ";", code: "Period" },
    { label: ":", code: "Slash" },
    { label: "!", code: "Backslash" },
    { label: "⇧", code: "ShiftRight", width: 2.25 },
  ],
  // Rangée 5 : modificateurs + espace
  [
    { label: "Ctrl", code: "ControlLeft" },
    { label: "Fn", code: "Fn" },
    { label: "⌘", code: "MetaLeft" },
    { label: "Alt", code: "AltLeft" },
    { label: "ESPACE", code: "Space", width: 6.25 },
    { label: "AltGr", code: "AltRight" },
    { label: "Ctrl", code: "ControlRight" },
  ],
];

// Mapping caractère tapé -> codes de touches à illuminer
export const CHAR_TO_CODES: Record<string, string[]> = {
  ".": ["Period", "ShiftLeft"], // ; + Shift
  "/": ["Slash", "ShiftLeft"], // : + Shift
  s: ["KeyS"],
  t: ["KeyT"],
  a: ["KeyA"],
  r: ["KeyR"],
  h: ["KeyH"],
  "⏎": ["Enter"],
};

export const TYPING_TEXT = "curl https://routsgg.me";
