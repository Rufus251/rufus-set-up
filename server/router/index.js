import Router from 'express';
import PostController from "../controllers/PostController.js";

const router = Router();

router.get('/posts', PostController.getPosts);
router.get('/posts/:id', PostController.getPost);
router.post('/posts', PostController.addPost);

export default router;