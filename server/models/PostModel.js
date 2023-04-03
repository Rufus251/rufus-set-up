import mongoose from "mongoose";

const POST = new mongoose.Schema({
    author: {type: String, require: true},
    text: {type: String, require: true}
});

export default mongoose.model('POST', POST);