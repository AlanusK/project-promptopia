import { Types } from "mongoose";
export interface PromptType {
  prompt: string;
  tag: string;
  _id?: string;
  creator?: Types.Object;
}
