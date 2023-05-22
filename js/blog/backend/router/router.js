const router =  express.Router();


let blogs = [];

// Get all blogs
app.get('/blogs', (req, res) => {
  res.json(blogs);
});

// Create a new blog
app.post('/blogs', (req, res) => {
  const { title, content } = req.body;
  const newBlog = { id: blogs.length + 1, title, content };
  blogs.push(newBlog);
  res.status(201).json(newBlog);
});

// Get a single blog
app.get('/blogs/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const blog = blogs.find((blog) => blog.id === id);
  if (blog) {
    res.json(blog);
  } else {
    res.status(404).json({ message: 'Blog not found' });
  }
});

// Update a blog
app.put('/blogs/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const { title, content } = req.body;
  const blog = blogs.find((blog) => blog.id === id);
  if (blog) {
    blog.title = title;
    blog.content = content;
    res.json(blog);
  } else {
    res.status(404).json({ message: 'Blog not found' });
  }
});

// Delete a blog
app.delete('/blogs/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = blogs.findIndex((blog) => blog.id === id);
  if (index !== -1) {
    const deletedBlog = blogs.splice(index, 1);
    res.json(deletedBlog[0]);
  } else {
    res.status(404).json({ message: 'Blog not found' });
  }
});


export default router;