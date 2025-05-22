import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI(process.env.GOOGLE_API_KEY);
const model = ai.getGenerativeModel({model:"gemini-2.0-flash"});

async function generateContext(prompt){
    const result = await model.generate(prompt);
    return result.response.text();
}

module.exports = generateContext;