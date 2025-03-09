const mongoose=require("mongoose")

const connectDb=async()=>{
    await mongoose.connect("mongodb+srv://pranav27borse:4NhqrY9yLj0vyDx1@recipe.dvuho.mongodb.net/?retryWrites=true&w=majority&appName=Recipe")
    .then(()=>console.log("connected..."))
}

module.exports=connectDb

// const mongoose = require('mongoose');

// mongoose.connect('mongodb://127.0.0.1:27017/foodRecipeDB', {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// })
// .then(() => console.log('✅ MongoDB Connected Successfully'))
// .catch(err => console.error('❌ MongoDB Connection Error:', err));
