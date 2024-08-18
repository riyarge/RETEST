const express = require("express");
const cors = require("cors");

const app = express();
var PORT = 3001;
const blogModel=require('./model');
require('./connection'); 
app.use(express.json());
app.use(cors());
//Write missing code here


// POST API to add new blog entry
app.post("/add", async (req, res) => {
  const { title, content, category, image } = req.body;
  /*try {
    const newBlog = new blogModel({ title, content, category, image });
    await newBlog.save();
    res.status(201).send(newBlog);
  } catch (error) {
    res.status(500).send("Error adding blog: " + error);
  }
});*/
try {
  const item = req.body;
  const newBlog = new blogModel(item);
  await newBlog.save();
  res.status(201).send('Post successful');
} catch (error) {
  console.error(error);
  res.status(500).send('Error posting blog');
}
});


app.put('/blogedit/:id', async (req, res) => {
try {
  await blogModel.findByIdAndUpdate(req.params.id, req.body);
  res.status(200).send('Updated successfully');
} catch (error) {
  console.error(error);
  res.status(500).send('Error updating blog');
}
});


app.delete('/removeblog/:id', async (req, res) => {
try {
  await blogModel.findByIdAndDelete(req.params.id);
  res.status(200).send('Deleted successfully');
} catch (error) {
  console.error(error);
  res.status(500).send('Error deleting blog');
}
});


app.get('/blog', async (req, res) => {
try {
  const data = await blogModel.find();
  res.status(200).send(data);
} catch (error) {
  console.error(error);
  res.status(500).send('Data not found');
}
});

app.listen(PORT, () => {
console.log('Server is running on PORT 3001');
});

//Write your POST API here
