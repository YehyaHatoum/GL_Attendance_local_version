const express = require('express');
const multer = require('multer');  // For handling file uploads
const { uploadImage } = require('../controllers/imageCollectionController');
const router = express.Router();

const upload = multer({ dest: 'uploads/' });

router.post('/upload', upload.single('image'), uploadImage);

module.exports = router;