const express = require("express");
const path = require("path");
const generatePDF = require("./utils/generatePDF");

const app = express();
const PORT = 5000;

app.use(express.json());
// This tells express to serve index.html from the 'public' folder automatically
app.use(express.static(path.join(__dirname, "public")));

// ROUTE: This must match the fetch() URL in index.html
app.post("/generate", (req, res) => {
    try {
        const pdfDoc = generatePDF(req.body);

        res.setHeader('Content-Type', 'application/pdf');
        res.setHeader('Content-Disposition', 'attachment; filename=resume.pdf');

        pdfDoc.pipe(res);
        pdfDoc.end();
    } catch (err) {
        console.error("PDF Error:", err);
        res.status(500).send("Server Error");
    }
});

app.listen(PORT, () => {
    console.log(`✅ Server is running! Access it at: http://localhost:${PORT}`);
});
