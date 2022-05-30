import express from 'express';
import { createPost, getPosts } from '../controllers/postControllers.js';
const router = express.Router();

//GET request 

router.get("/", getPosts);

//POST request
router.post("/", createPost);

export default router;