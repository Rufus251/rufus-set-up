import POST from "../models/PostModel.js";

class PostController {
    async getPosts (req, res) {
        try {
            const posts = await POST.find();
            return res.json(posts)
        } catch (e) {
            console.log(e)
            return res.status(500).json({
                message: 'Some server error'
            })
        }
    }
    async getPost (req, res) {
        try {
            const id = req.params.id;

            const find_id = await POST.findOne({_id: id});
            if(!find_id) {
                return res.status(401).json({
                    message: 'Post with id ' + id + 'not found'
                })
            }

            return res.json(find_id);

        } catch (e) {
            console.log(e)
            return res.status(500).json({
                message: 'Some server error'
            })
        }
    }
    async addPost (req, res) {
        try {
            const {author, text} = req.body;
            const post = await POST.create({author, text});
            return res.json(post);
        } catch (e) {
            console.log(e)
            return res.status(500).json({
                message: 'Some server error'
            })
        }
    }
}

export default new PostController;