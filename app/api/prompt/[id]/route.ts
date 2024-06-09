import Prompt from "@models/prompt";
import { connectToDB } from "@utils/database";
import { ParamsType } from "@/types/custom-types";

export const GET = async (req: Request, { params }: ParamsType) => {
  try {
    await connectToDB();

    const prompt = await Prompt.findById(params.id).populate("creator");
    if (!prompt) return new Response("Prompt not found", { status: 404 });

    return new Response(JSON.stringify(prompt), { status: 200 });
  } catch (error) {
    return new Response("Failed to fetch a prompt", { status: 500 });
  }
};

export const PATCH = async (req: Request, { params }: ParamsType) => {
  const { prompt, tag } = await req.json();

  try {
    await connectToDB();
    // const filter = { _id: params.id }
    // const update = { prompt: prompt, tag: tag }

    // const editedPrompt = await Prompt.findOneAndUpdate(filter, update, {new : true});

    // return new Response(JSON.stringify(editedPrompt), { status: 200 });

    const existingPrompt = await Prompt.findById(params.id);

    if (!existingPrompt)
      return new Response("Prompt not found", { status: 404 });

    existingPrompt.prompt = prompt;
    existingPrompt.tag = tag;

    await existingPrompt.save();

    return new Response(JSON.stringify(existingPrompt), { status: 200 });
  } catch (error) {
    return new Response("Failed to edit a prompt", { status: 500 });
  }
};
