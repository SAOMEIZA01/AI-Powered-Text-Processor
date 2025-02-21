import React, { useState } from "react";
import { detectLanguage, summarizeText, translateText } from "./utils/api";

const App = () => {
    const [inputText, setInputText] = useState("");
    const [output, setOutput] = useState([]);
    const [selectedLang, setSelectedLang] = useState("en");

    const handleSend = async () => {
        if (!inputText.trim()) return;
        const languageResult = await detectLanguage(inputText);
        const newMessage = {
            text: inputText,
            language: languageResult.language,
        };
        setOutput([...output, newMessage]);
        setInputText("");
    };

    const handleSummarize = async (index) => {
        const summaryResult = await summarizeText(output[index].text);
        if (summaryResult) {
            const newOutput = [...output];
            newOutput[index].summary = summaryResult.summary;
            setOutput(newOutput);
        }
    };

    const handleTranslate = async (index) => {
        const translationResult = await translateText(output[index].text, selectedLang);
        if (translationResult) {
            const newOutput = [...output];
            newOutput[index].translation = translationResult.translation;
            setOutput(newOutput);
        }
    };

    return (
        <div style={{ padding: "20px", fontFamily: "Arial" }}>
            <h2>AI-Powered Text Processing</h2>
            <div style={{ border: "1px solid #ccc", padding: "10px", minHeight: "200px" }}>
                {output.map((item, index) => (
                    <div key={index} style={{ marginBottom: "10px" }}>
                        <p><b>Text:</b> {item.text}</p>
                        <p><b>Detected Language:</b> {item.language}</p>
                        {item.text.length > 150 && !item.summary && (
                            <button onClick={() => handleSummarize(index)}>Summarize</button>
                        )}
                        {item.summary && <p><b>Summary:</b> {item.summary}</p>}
                        <select onChange={(e) => setSelectedLang(e.target.value)}>
                            <option value="en">English</option>
                            <option value="pt">Portuguese</option>
                            <option value="es">Spanish</option>
                            <option value="ru">Russian</option>
                            <option value="tr">Turkish</option>
                            <option value="fr">French</option>
                        </select>
                        <button onClick={() => handleTranslate(index)}>Translate</button>
                        {item.translation && <p><b>Translation:</b> {item.translation}</p>}
                    </div>
                ))}
            </div>
            <textarea value={inputText} onChange={(e) => setInputText(e.target.value)} placeholder="Enter text..."></textarea>
            <button onClick={handleSend}>Send</button>
        </div>
    );
};

export defaul
                          t App;
