const express = require('express');
const multer = require('multer');
const router = express.Router();


router.post('/attendance/manual', takeAttendanceManually);

module.exports = router;