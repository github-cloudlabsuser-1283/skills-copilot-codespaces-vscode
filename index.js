import { useState } from 'react';
import ReactMarkdown from 'react-markdown';

// Example data array
const data = [
    [{ name: 'John' }, { name: 'Jane' }],
    [{ name: 'Bob' }]
];

// Extract names from the nested data array
const names = data.flatMap(group => group.map(person => person.name));

console.log(names); // Output: ['John', 'Jane', 'Bob']
// /workspaces/skills-copilot-codespaces-vscode/index.js

function reverseSentence(sentence) {
    // Reverse the sentence
    const reversed = sentence.split(' ').reverse().join(' ');

    // Capitalize the first letter of the reversed sentence
    const capitalized = reversed.charAt(0).toUpperCase() + reversed.slice(1);

    return capitalized;
}

// Example usage
const input = "hello world this is a test";
const result = reverseSentence(input);
console.log(result); // Output: "Test a is this world hello"

export default function MarkdownEditor() {
    const [markdown, setMarkdown] = useState("type markdown here");

    const handleChange = (event) => {
        setMarkdown(event.target.value);
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', padding: '20px' }}>
            <h1>Markdown Editor</h1>
            <textarea
                style={{ width: '100%', height: '200px', marginBottom: '20px', fontSize: '16px' }}
                value={markdown}
                onChange={handleChange}
            />
            <h2>Preview</h2>
            <div style={{ border: '1px solid #ccc', padding: '10px', borderRadius: '5px' }}>
                <ReactMarkdown>{markdown}</ReactMarkdown>
            </div>
        </div>
    );
}