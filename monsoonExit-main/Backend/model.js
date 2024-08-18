//Write missing codes here
const mongoose=require('mongoose');
const blogSchema = mongoose.Schema({
  title: String,
  content: String,
  img_url: String,
});
const BlogData=mongoose.model('blogs',blogSchema);//'movie' 
module.exports=BlogData
//Write missing codes here
