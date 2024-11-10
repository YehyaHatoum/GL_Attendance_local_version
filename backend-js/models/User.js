const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    email : {type: String , required : true, unique: true},
    matricule : {type: String},
    firstname : {type: String , required : true},
    lastname : {type: String , required : true},
    password : {type: String , required : true},
    isStudent : {type : Boolean, required : true},
    isAdmin : {type : Boolean},
    firstLogin : {type: Boolean , required : true},
    folderName : {type: String}
},{timestamps : true});

const UserModel = mongoose.model('User' , UserSchema);

module.exports = UserModel;