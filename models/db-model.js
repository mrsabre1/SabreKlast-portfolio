const mongoose = require('mongoose');

//With Mongoose, everything is derived from a Schema
//Each schema maps to a MongoDB collection and defines the shape of the documents within that collection.
const templateSchema = new mongoose.Schema({    
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
        }
});

// To use our schema definition, we need to convert our Schema into a Model we can work with. 
// To do so, we pass it into mongoose.model(modelName, schema):
// Model constructor:

module.exports = mongoose.model('Template-model', templateSchema); //compile schema into a Model

// A model is a class with which we construct documents.  Each Author is a new document
// Document and Model are distinct classes in Mongoose. The Model class is a subclass of the Document class. 
// When you use the Model constructor, you create a new document.
//
