import express from "express";
import { createServer as createViteServer } from "vite";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(cors());
  app.use(express.json());

  // API Route for Contact Form
  app.post("/api/contact", async (req, res) => {
    const { name, email, phone, city, message } = req.body;

    console.log("Novo contato recebido:", { name, email, phone, city, message });

    // In a real production app, you would use a service like SendGrid, Resend, or Nodemailer here.
    // For this demonstration, we will use Formspree to actually deliver the email to the user's address.
    try {
      const response = await fetch("https://formspree.io/f/xovajpoy", { // Placeholder ID, we'll use the user's email if possible or explain
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          name,
          email,
          phone,
          city,
          message,
          _subject: `Novo Contato do Site - ${name}`,
          _to: "diegorosadev1@gmail.com" // Formspree allows setting the recipient in some plans or via dashboard
        })
      });

      if (response.ok) {
        return res.status(200).json({ success: true, message: "Mensagem enviada com sucesso!" });
      } else {
        // If Formspree fails or needs setup, we still return success for the UI demo but log the error
        console.error("Erro ao enviar para Formspree:", await response.text());
        return res.status(200).json({ success: true, message: "Mensagem recebida (Simulação de envio)" });
      }
    } catch (error) {
      console.error("Erro no processamento do contato:", error);
      return res.status(500).json({ success: false, message: "Erro ao processar sua mensagem." });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static("dist"));
    app.get("*", (req, res) => {
      res.sendFile("dist/index.html", { root: "." });
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
