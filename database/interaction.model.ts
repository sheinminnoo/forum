import { model, models, Schema, Types, Document } from "mongoose";

export type ActionType = "question" | "answer";

export interface IInteraction {
  user: Types.ObjectId;
  action: string;
  actionId: Types.ObjectId;
  actionType: ActionType;
}

export interface IInteractionDoc extends IInteraction, Document {}

const InteractionSchema = new Schema<IInteractionDoc>(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    action: {
      type: String,
      required: true,
      trim: true,
    },
    actionId: {
      type: Schema.Types.ObjectId,
      required: true,
    },
    actionType: {
      type: String,
      required: true,
      enum: ["question", "answer"],
    },
  },
  { timestamps: true }
);

/* Performance indexes */
InteractionSchema.index({ user: 1, createdAt: -1 });
InteractionSchema.index({ actionType: 1, actionId: 1, createdAt: -1 });
InteractionSchema.index({ user: 1, actionType: 1, actionId: 1 });

const Interaction =
  models.Interaction ||
  model<IInteractionDoc>("Interaction", InteractionSchema);

export default Interaction;
