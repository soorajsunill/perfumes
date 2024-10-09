import mongoose from 'mongoose';

mongoose.connect("mongodb+srv://soorajsunil9495:soorajsunil9495@cluster0.vkzvy.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0", {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  console.log("Connected to MongoDB Atlas");
})
.catch((err) => {
  console.log(err);
});
