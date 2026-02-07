
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const getStyleAdvice = async (userPrompt: string) => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: userPrompt,
      config: {
        systemInstruction: "You are an elegant fashion consultant for Aura Couture, a premium women's tailor shop. Your tone is warm, professional, and knowledgeable about traditional and modern Indian wear. Keep advice concise and sophisticated. Suggest fabrics like silk, chiffon, and organza when appropriate.",
        temperature: 0.7,
      },
    });
    return response.text;
  } catch (error) {
    console.error("Gemini Error:", error);
    return "I apologize, dear. My fashion sense is taking a quick break. How else can I assist you with your tailoring needs?";
  }
};
