const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true })); // Add this to handle form data

// Path to text file where data will be saved
const dataFilePath = path.join(__dirname, 'contact.txt');

// Route to handle form submission
app.post('/submit-form', (req, res) => {
    const { FName, LName, Email, Phone, Message } = req.body;

    // Format the data to be saved as a string
    const entry = `
--- New Submission ---
First Name: ${FName}
Last Name: ${LName}
Email: ${Email}
Phone: ${Phone}
Message: ${Message}
Date: ${new Date().toISOString()}
-----------------------
`;

    // Append the data to contact.txt
    fs.appendFile(dataFilePath, entry, (err) => {
        if (err) {
            return res.status(500).send({ message: 'Error saving data.', error: err });
        }
        res.status(201).send({ message: 'Data saved successfully!' });
    });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
