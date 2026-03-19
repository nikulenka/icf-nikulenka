import express from 'express';
import { createServer as createViteServer } from 'vite';
import nodemailer from 'nodemailer';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  app.post('/api/contact', async (req, res) => {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ success: false, error: 'Пожалуйста, заполните все поля' });
    }

    try {
      if (process.env.SMTP_USER && process.env.SMTP_PASS) {
        const transporter = nodemailer.createTransport({
          host: process.env.SMTP_HOST || 'smtp.gmail.com',
          port: Number(process.env.SMTP_PORT) || 587,
          secure: false,
          auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS,
          },
        });

        await transporter.sendMail({
          from: `"${name}" <${email}>`,
          to: 'nikulenka@gmail.com',
          subject: `Новое сообщение с сайта от ${name}`,
          text: message,
          html: `
            <h3>Новое сообщение с вашего сайта</h3>
            <p><strong>Имя:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Сообщение:</strong><br/>${message.replace(/\n/g, '<br/>')}</p>
          `,
        });
        console.log('Email sent successfully via SMTP');
      } else {
        console.log('--- MOCK EMAIL SENT ---');
        console.log(`To: nikulenka@gmail.com`);
        console.log(`From: ${name} <${email}>`);
        console.log(`Message: ${message}`);
        console.log('-----------------------');
        console.log('Note: Configure SMTP_USER and SMTP_PASS in .env to send real emails.');
      }

      res.json({ success: true, message: 'Сообщение успешно отправлено' });
    } catch (error) {
      console.error('Error sending email:', error);
      res.status(500).json({ success: false, error: 'Ошибка при отправке сообщения. Попробуйте позже.' });
    }
  });

  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
