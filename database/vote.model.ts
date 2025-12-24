import { model, models, Schema, Types, Document } from "mongoose";

export type VoteTargetType = "question" | "answer";
export type VoteType = "upvote" | "downvote";

export interface IVote {
  author: Types.ObjectId;
  targetId: Types.ObjectId;
  targetType: VoteTargetType;
  voteType: VoteType;
}

export interface IVoteDoc extends IVote, Document {}

const VoteSchema = new Schema<IVoteDoc>(
  {
    author: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    targetId: {
      type: Schema.Types.ObjectId,
      required: true,
    },
    targetType: {
      type: String,
      required: true,
      enum: ["question", "answer"],
    },
    voteType: {
      type: String,
      required: true,
      enum: ["upvote", "downvote"],
    },
  },
  { timestamps: true }
);

/* 🔥 Performance + data integrity */
VoteSchema.index({ author: 1, targetType: 1, targetId: 1 }, { unique: true });
VoteSchema.index({ targetType: 1, targetId: 1, createdAt: -1 });
VoteSchema.index({ author: 1, createdAt: -1 });

const Vote = models.Vote || model<IVoteDoc>("Vote", VoteSchema);

export default Vote;
