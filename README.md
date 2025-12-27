# 📄PDF Resume Builder

A lightweight, full-stack web application that allows users to input their professional details and generate a formatted PDF resume instantly. Built with **Node.js**, **Express**, and **PDFKit**.

## 🚀 Features

* **Real-time PDF Generation**: Creates PDFs on-the-fly without saving files to the server.
* **Clean UI**: Simple, responsive form for data entry.
* **Professional Layout**: Automatically formats Education, Skills, Projects, and Experience sections.
* **Direct Download**: Uses browser blobs to trigger an immediate file download.

## 🛠️ Tech Stack

* **Frontend**: HTML5, CSS3, JavaScript (Fetch API)
* **Backend**: Node.js, Express.js
* **PDF Engine**: PDFKit

## 📂 Project Structure

project-folder/
├── public/
│   └── index.html         # Frontend User Interface
├── utils/
│   └── generatePDF.js     # PDFKit logic and formatting
├── server.js              # Express server and API routes
├── package.json           # Project dependencies
└── README.md              # Documentation# Resume-Builder
