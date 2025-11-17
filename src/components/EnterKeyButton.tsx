import React from "react";

// Composant EnterKeyButton réécrit selon un style similaire à ton exemple (Hero)
// - Utilisation de React.FC
// - Structure claire
// - Nommage cohérent
// - Organisation propre et lisible

interface EnterKeyButtonProps {
    label?: string;
    size?: "sm" | "md" | "lg";
    onClick?: () => void;
    className?: string;
    ariaLabel?: string;
}

const EnterKeyButton: React.FC<EnterKeyButtonProps> = ({
    label = "Entrer",
    size = "md",
    onClick,
    className = "",
    ariaLabel = "Touche Entrer",
}) => {

    // Config des tailles du bouton
    const sizes = {
        sm: { w: 110, h: 40, fontSize: 12 },
        md: { w: 140, h: 48, fontSize: 14 },
        lg: { w: 180, h: 64, fontSize: 16 },
    };

    const s = sizes[size] || sizes.md;

    return (
        <button
            onClick={onClick}
            aria-label={ariaLabel}
            className={`inline-flex items-center gap-3 p-1 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-400 ${className}`}
        >
            <svg
                width={s.w}
                height={s.h}
                viewBox={`0 0 ${s.w} ${s.h}`}
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                aria-hidden="true"
            >
                {/* Fond */}
                <defs>
                    <filter id="soft-shadow" x="-20%" y="-20%" width="140%" height="140%">
                        <feDropShadow dx="0" dy="1" stdDeviation="1" floodOpacity="0.12" />
                    </filter>
                </defs>

                <rect
                    x="2"
                    y="2"
                    width={s.w - 4}
                    height={s.h - 4}
                    rx="8"
                    ry="8"
                    fill="#f8fafc"
                    stroke="#e6e7ea"
                    strokeWidth="2"
                    filter="url(#soft-shadow)"
                />

                {/* Effet interne */}
                <rect
                    x="6"
                    y="6"
                    width={s.w - 12}
                    height={s.h - 12}
                    rx="6"
                    ry="6"
                    fill="none"
                    stroke="#ffffff99"
                    strokeWidth="1"
                />

                {/* Forme Enter */}
                <path
                    d={`M ${s.w - 54} ${s.h / 2 - 8} h -${s.w - 110} v -${s.h / 4} h -10 v ${s.h / 4 + 4} h 10 v 8 h ${s.w - 110}`}
                    fill="none"
                    stroke="#111827"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />

                {/* Pointe de la flèche */}
                <polyline
                    points={`${s.w - 60},${s.h / 2 - 12} ${s.w - 44},${s.h / 2} ${s.w - 60},${s.h / 2 + 12}`}
                    fill="none"
                    stroke="#111827"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />

                {/* Texte */}
                <text
                    x="18"
                    y={s.h / 2 + 5}
                    fontFamily="Inter, ui-sans-serif, system-ui, -apple-system, 'Segoe UI', Roboto"
                    fontSize={s.fontSize}
                    fontWeight={600}
                    fill="#0f172a"
                >
                    {label}
                </text>
            </svg>
        </button>
    );
};

export default EnterKeyButton;

/* Exemple d'utilisation:

import EnterKeyButton from "./EnterKeyButton";

<EnterKeyButton
    label="Entrer"
    size="md"
    onClick={() => console.log("Pressed")}
/>

*/
