import { model, models, Schema, Document } from "mongoose";

export interface ITag {
  name: string;
  questions: number;
}

export interface ITagDoc extends ITag, Document {}

const TagSchema = new Schema<ITagDoc>(
  {
    name: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
    },
    questions: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

const Tag = models.Tag || model<ITagDoc>("Tag", TagSchema);

export default Tag;
