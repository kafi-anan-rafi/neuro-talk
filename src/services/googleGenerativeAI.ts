import { GoogleGenerativeAI } from "@google/generative-ai";

export async function generateAIResponse(prompt: string): Promise<string> {
  const genAI = new GoogleGenerativeAI(
    "AIzaSyBcgSJTTlNJy-LUr9nBJQOlRdqTnc0dTZo"
  );
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

  try {
    const result = await model.generateContent(prompt);
    return result.response.text ? result.response.text() : result.response;
  } catch (error) {
    console.error("Error generating content:", error);
    return "Error generating response";
  }
}
