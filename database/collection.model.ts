import { model, models, Schema, Types, Document } from "mongoose";

export interface ICollection {
  author: Types.ObjectId;
  question: Types.ObjectId;
}

export interface ICollectionDoc extends ICollection, Document {}

const CollectionSchema = new Schema<ICollectionDoc>(
  {
    author: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    question: {
      type: Schema.Types.ObjectId,
      ref: "Question",
      required: true,
    },
  },
  { timestamps: true }
);

/* 🔥 Performance + data integrity */
CollectionSchema.index({ author: 1, question: 1 }, { unique: true });
CollectionSchema.index({ author: 1, createdAt: -1 });
CollectionSchema.index({ question: 1 });

const Collection =
  models.Collection || model<ICollectionDoc>("Collection", CollectionSchema);

export default Collection;
