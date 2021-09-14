import mongoose from "mongoose";

const {Schema} = mongoose;

const postSchema = new Schema({
    title: String,
    body: String,
    tags: [String],
    publishedDate: {
        type: Date,
        default: Date.now,
    }
});

const Post = mongoose.model('post', postSchema);
export default Post;
