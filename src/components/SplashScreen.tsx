import { useEffect, useState } from "react";

export default function SplashScreen({ onFinish }: { onFinish: () => void }) {
    const [lines, setLines] = useState<{ text: string; id: number }[]>([]);
    const [progress, setProgress] = useState(0); // 0 à 100
    const messages = [
        "Opening portfolio...","",
        "Loading education, experiences, skills...",
        "Setting up React environment...",
        "Starting user interface..."
    ];

    useEffect(() => {
        let i = 0;
        const interval = setInterval(() => {
            if (i < messages.length) {
                setLines((prev) => [...prev, { text: messages[i], id: Date.now() + Math.random() }]);
                i++;
            }
            setProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(interval);
                    setTimeout(onFinish, 400);
                    return 100;
                }
                return prev + 3;
            });
        }, 100);
        return () => clearInterval(interval);
    }, []);

    const renderProgressBar = () => {
        const totalBlocks = 20; // nombre de "="
        const filledBlocks = Math.floor((progress / 100) * totalBlocks);
        const emptyBlocks = totalBlocks - filledBlocks;
        return `${"=".repeat(filledBlocks)}${">"}${" ".repeat(emptyBlocks)}`;
    };

    return (
        <div className="w-screen h-screen flex flex-col items-start justify-center text-teal-500 font-mono text-sm overflow-auto p-4 ">
            {lines.map((line) => (
                <div key={line.id}>{line.text}</div>
            ))}
            <div className="mt-2">{renderProgressBar()} {progress}%</div>
        </div>
    );
}