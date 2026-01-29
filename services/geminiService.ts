
import { GoogleGenAI } from "@google/genai";

// Initialize GoogleGenAI using the mandatory process.env.API_KEY environment variable.
const getAI = () => new GoogleGenAI({ apiKey: process.env.API_KEY });

export const getSafetyAdvice = async (buildingType: string, squareFootage: string, industry: string) => {
  const ai = getAI();
  const prompt = `Act as a professional fire safety engineer. Provide a structured fire safety recommendation for a ${buildingType} in the ${industry} industry with approximately ${squareFootage} sq ft.
  Include:
  1. Recommended types of extinguishers.
  2. Necessary detection systems.
  3. Key compliance steps.
  Keep it concise but professional.`;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
      config: {
        temperature: 0.7,
        topP: 0.8,
        topK: 40,
      }
    });

    // Access .text property directly as per the @google/genai guidelines.
    return response.text;
  } catch (error) {
    console.error("Gemini Error:", error);
    return "I'm sorry, I couldn't generate advice at this moment. Please contact our human experts at +91-123-456-7890.";
  }
};
