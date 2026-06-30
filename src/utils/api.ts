import puter from "@heyputer/puter.js";

/**
 * The Real Keyless AI API (via Puter.js)
 */
export const fetchLiveAIResponse = async (
  userPrompt: string,
): Promise<string> => {
  try {
    // 1. Await the response object from Puter
    const response = await (puter as any).ai.chat(userPrompt);

    // 2. Drill down to extract the actual string payload
    // If response.message.content is an array (multimodal), we take the text, otherwise read directly
    if (typeof response.message?.content === "string") {
      return response.message.content;
    } else if (Array.isArray(response.message?.content)) {
      return response.message.content[0]?.text || "No response text found.";
    }

    // Fallback if the structure varies by model default
    return response.toString() || "Empty response";
  } catch (error) {
    console.error("Puter AI Error:", error);
    throw new Error("Failed to reach AI service.");
  }
};
