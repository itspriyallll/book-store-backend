const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const bookSchema = new Schema({

    name:{
        type:String,
        required:true
    },
    author:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    available:{
        type:Boolean,
        
    },
    image:{
        type:String,
        required:true
    }
});

module.exports = mongoose.model("Book",bookSchema); //It probably means that we are making a model inside our mongoose Database which will be named books and would have schema like that of bookSchema you are creating.
