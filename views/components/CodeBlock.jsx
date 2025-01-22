import hljs from "highlight.js";
import { toast } from "sonner";

export default function CodeBlock({ code, heading, language }) {
    const copyCode = async () => {
        try {
            await window.navigator.clipboard.writeText(code);
            toast.success("Text copied!");
        } catch (error) {
            toast.error("Failed to copy");
        }
    };

    return (
        <div className="code-block relative">
            <button
                className="absolute right-2 top-2 text-xs px-2 py-1 rounded-sm active:scale-95 bg-zinc-700"
                onClick={copyCode}
            >
                Copy
            </button>
            <h3>{heading}</h3>
            <pre>
                <code dangerouslySetInnerHTML={{ __html: hljs.highlight(code, { language }).value }}></code>
            </pre>
        </div>
    );
}
