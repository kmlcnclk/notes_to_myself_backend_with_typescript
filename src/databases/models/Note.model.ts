import mongoose from 'mongoose';
const Schema = mongoose.Schema;

export interface NoteDocument extends mongoose.Document {
  _id: mongoose.Schema.Types.ObjectId;
  title: string;
  content: string;
  isCompleted: boolean;
  userId: mongoose.Schema.Types.ObjectId;
  createdAt: Date;
  updatedAt: Date;
}

const NoteSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, 'Please enter a title'],
    },
    content: {
      type: String,
      required: [true, 'Please enter a content'],
    },
    isCompleted: {
      type: Boolean,
      default: false,
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
  },
  {
    timestamps: true,
  }
);

const Note = mongoose.model<NoteDocument>('Note', NoteSchema);

export default Note;
