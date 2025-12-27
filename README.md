📄PDF Resume Builder
A lightweight, full-stack web application that allows users to input their professional details and generate a formatted PDF resume instantly. This project demonstrates how to handle server-side PDF generation and stream it directly to the client.

🚀 Features
Server-Side Rendering: Uses PDFKit on the backend to ensure consistent document layout.

No Database Required: Processes data in-memory and streams it back to the user instantly.

Clean UI: A simple, responsive form designed for quick data entry.

Automatic Formatting: Handles section headers, contact info alignment, and horizontal separators.

🛠️ Tech Stack
Frontend: HTML5, CSS3, JavaScript (Vanilla)

Backend: Node.js, Express.js

PDF Engine: PDFKit

📂 Project Structure
To ensure the application works correctly, maintain the following structure:

Plaintext

resume-project/
├── public/
│   └── index.html         # The frontend form
├── utils/
│   └── generatePDF.js     # Logic for building the PDF
├── server.js              # Express server & API routes
├── package.json           # Dependencies and scripts
└── README.md              # Project documentation
📖 How to Use
Follow these steps to get the project running on your local machine.

1. Prerequisites
Ensure you have Node.js (v14 or higher) installed on your system.

2. Installation
Clone or Download this repository.

Open your terminal/command prompt in the project folder.

Install the necessary dependencies:

Bash

npm install express pdfkit
3. Running the Server
Start the Node.js server with the following command:

Bash

node server.js
You should see a message: ✅ Server started! Open http://localhost:5000.

4. Generating a Resume
Open your web browser and go to: http://localhost:5000.

⚠️ IMPORTANT: Do not double-click the index.html file from your folder. The app must be accessed via the http:// URL for the PDF generation to work.

Fill out the form with your Name, Contact Info, Education, Skills, Projects And Experience.

Click the "Download PDF" button.

The browser will receive the PDF stream from the server and automatically trigger a download.
