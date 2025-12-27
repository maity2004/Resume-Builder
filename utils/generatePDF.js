const PDFDocument = require("pdfkit");

function section(doc, title, content) {
    if (!content) return; // Skip section if empty
    doc.moveDown()
       .fontSize(14)
       .font("Helvetica-Bold")
       .text(title)
       .moveDown(0.2)
       .fontSize(12)
       .font("Helvetica")
       .text(content);
    
    // Draw a small line under header
    doc.moveTo(doc.x, doc.y).lineTo(550, doc.y).strokeColor("#cccccc").stroke();
    doc.moveDown(0.5);
}

function generatePDF(data) {
    const doc = new PDFDocument({ margin: 50 });

    // Header: Name
    doc.fontSize(24).font("Helvetica-Bold").text(data.name || "Your Name", { align: "center" });
    
    // Contact Info
    doc.fontSize(10).font("Helvetica")
       .text(`${data.email || 'email@example.com'} | ${data.phone || '000-000-0000'}`, { align: "center" });

    // Horizontal Rule
    doc.moveDown().moveTo(50, doc.y).lineTo(550, doc.y).stroke();

    // Content Sections
    section(doc, "EDUCATION", data.education);
    section(doc, "SKILLS", data.skills);
    section(doc, "PROJECTS", data.projects);
    section(doc, "EXPERIENCE", data.experience);

    return doc;
}

module.exports = generatePDF;
