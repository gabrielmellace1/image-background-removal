const express = require('express');
const multer = require('multer');
const { spawn } = require('child_process');
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

const router = express.Router();
const upload = multer({ dest: 'uploads/' });

router.post('/upload', upload.single('image'), (req, res) => {
    if (!req.file) {
        return res.status(400).send("No image uploaded");
    }

    const hashName = crypto.randomBytes(16).toString('hex') + ".png";
    const outputPath = path.join(__dirname, "..", "processedImages", hashName);

    const pythonProcess = spawn('python', ["./process_image.py", req.file.path, outputPath]);

    pythonProcess.stderr.on('data', (data) => {
        console.error(`Python Error: ${data}`);
        res.status(500).send('Error during image processing.');
    });

    pythonProcess.on('exit', (code) => {
        fs.unlinkSync(req.file.path);  // Delete the uploaded file after processing
        if (code !== 0) {
            return res.status(500).send("Failed processing image");
        }
        res.send({ imageUrl: `/processedImages/${hashName}` });
    });
});

router.delete('/processed/:imageName', (req, res) => {
    const imagePath = path.join(__dirname, "..", "processedImages", req.params.imageName);
    if (fs.existsSync(imagePath)) {
        fs.unlinkSync(imagePath);
        res.status(200).send("Image deleted successfully");
    } else {
        res.status(404).send("Image not found");
    }
});

module.exports = router;
