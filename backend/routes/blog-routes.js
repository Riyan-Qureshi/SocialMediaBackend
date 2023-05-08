import express from 'express';
import {getAllBlogs} from '../controllers/blog-controller'
import {addBlog} from '../controllers/blog-controller'
import {updateBlog} from '../controllers/blog-controller'
import {getByID} from '../controllers/blog-controller'
import {deleteBlog} from '../controllers/blog-controller'
import {getByUserID} from '../controllers/blog-controller'

const blogRouter = express.Router();

blogRouter.get("/", getAllBlogs);
blogRouter.post("/add", addBlog);
blogRouter.put("/update/:id", updateBlog);
blogRouter.get("/:id", getByID);
blogRouter.delete("/:id", deleteBlog);
blogRouter.get("/user/:id", getByUserID);

export default blogRouter;