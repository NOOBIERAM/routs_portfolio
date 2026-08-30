import { AZERTY_ROWS } from "../../data/keyboard";
import { KeyboardKey } from "./KeyboardKey";

type Props = {
  activeCodes: string[];
};

export function Keyboard({ activeCodes }: Props) {
  const isActive = (code: string) => activeCodes.includes(code);

  return (
    <div className="w-full max-w-[900px] mx-auto select-none" aria-hidden="true">
      <div className="flex flex-col gap-1 sm:gap-1.5 p-2 sm:p-3 rounded-xl border border-border bg-bg-second/60">
        {AZERTY_ROWS.map((row, ri) => (
          <div
            key={ri}
            className={`flex gap-1 sm:gap-1.5 w-full ${ri === 4 ? "justify-center" : ""} ${ri === 4 ? "max-[380px]:hidden" : ""} ${ri === 0 ? "max-[380px]:hidden" : ""}`}
          >
            {row.map((k) => (
              <KeyboardKey
                key={`${ri}-${k.code}-${k.label}`}
                label={k.label}
                code={k.code}
                width={k.width}
                active={isActive(k.code)}
                isEnter={k.code === "Enter"}
              />
            ))}
          </div>
        ))}
        <div className="hidden max-[380px]:flex justify-center text-[10px] text-text-muted font-mono pt-1">AZERTY</div>
      </div>
    </div>
  );
}
