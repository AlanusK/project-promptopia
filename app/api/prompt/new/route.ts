import { connectToDB } from "@utils/Database";
import Prompt from "@models/prompt";

export const POST = async (req: any) => {
  const { prompt, tag } = await req.json();

  try {
    await connectToDB();
    const newPrompt = new Prompt({
      prompt,
      tag,
    });

    await newPrompt.save();
    console.log()

    return new Response(JSON.stringify(newPrompt), { status: 201 });
  } catch (error) {
    return new Response("Failed to create a new prompt", { status: 500 });
  }
};
