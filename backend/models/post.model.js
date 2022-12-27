import mongoose from "mongoose";
const postSchema = mongoose.Schema({
  title: String,
  message: String,
  createdBy: String,
  tags: [String],
  selectedFile: String,
  createAt: {
    type: Date,
    default: new Date(),
  },
});

const PostMessage = mongoose.model('PostMessage',postSchema);

export default PostMessage