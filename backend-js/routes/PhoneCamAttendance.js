const express = require('express');
const multer = require('multer');
const router = express.Router();

const upload = multer({ dest: 'uploads/' });

router.post('/attendance/phone', upload.single('image'), takeAttendanceViaPhone);

module.exports = router;