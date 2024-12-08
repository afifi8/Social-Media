import mongoose, { Schema, Document, Types } from "mongoose";

export interface IPost extends Document {
  content: string;
  senderUserId: Types.ObjectId;
  senderUserName: string;
  postId: Types.ObjectId;
  isRead: boolean;
}

const notificationSchema = new Schema<IPost>({
  content: {
    type: String,
    required: true,
  },
  senderUserId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  senderUserName: {
    type: String,
    required: true,
  },
  postId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  isRead: {
    type: Boolean,
    default: false,
  },
});

const Notification = mongoose.model<IPost>("Notification", notificationSchema);

export default Notification;
