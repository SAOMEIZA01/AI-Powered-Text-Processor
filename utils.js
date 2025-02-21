// src/utils/api.js
export async function detectLanguage(text) {
    return { language: "en", confidence: 0.98 };  // Mock response
}

export async function summarizeText(text) {
    if (text.length <= 150) return null; // Only summarize long text
    return { summary: "This is a summarized version of the input text." };
}

export async function translateText(text, targetLang) {
    return { translation: `Translated text to ${targetLang}` };
}
