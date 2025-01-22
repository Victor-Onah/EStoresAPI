import hljs from "highlight.js";

export default function CodeBlock({ code, heading, language }) {
    return (
        <div className="code-block">
            <h3>{heading}</h3>
            <pre>
                <code dangerouslySetInnerHTML={{ __html: hljs.highlight(code, { language }).value }}></code>
            </pre>
        </div>
    );
}
