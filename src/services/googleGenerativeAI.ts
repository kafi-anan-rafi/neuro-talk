import { GoogleGenerativeAI } from "@google/generative-ai";

export async function generateAIResponse(prompt: string): Promise<string> {
  const apiKey = process.env.API_KEY || "";
  const genAI = new GoogleGenerativeAI(apiKey);
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

  try {
    const result = await model.generateContent(prompt);
    if (result?.response?.text) {
      return result.response.text();
    } else {
      return "No text response found";
    }
  } catch (error) {
    console.error("Error generating content:", error);
    return "Error generating response";
  }
}
