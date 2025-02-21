const API_BASE_URL = "https://api.chromeai.com"; // Placeholder, replace with actual API URL

export async function detectLanguage(text) {
  try {
    const response = await fetch(`${API_BASE_URL}/language-detection`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ text }),
    });

    if (!response.ok) throw new Error("Language detection failed");

    const data = await response.json();
    return data.language; // Expected output: "en", "fr", "es", etc.
  } catch (error) {
    console.error(error);
    return "Error detecting language";
  }
}

export async function summarizeText(text) {
  try {
    const response = await fetch(`${API_BASE_URL}/summarizer`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ text }),
    });

    if (!response.ok) throw new Error("Summarization failed");

    const data = await response.json();
    return data.summary;
  } catch (error) {
    console.error(error);
    return "Error summarizing text";
  }
}

export async function translateText(text, targetLang) {
  try {
    const response = await fetch(`${API_BASE_URL}/translator`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ text, targetLang }),
    });

    if (!response.ok) throw new Error("Translation failed");

    const data = await response.json();
    return data.translatedText;
  } catch (error) {
    console.error(error);
    return "Error translating tex
      t";
  }
}
