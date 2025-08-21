import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import nodemailer from 'nodemailer';
import path from 'path';
import { fileURLToPath } from 'url';

// ES module dirname equivalent
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors({
  origin: process.env.NODE_ENV === 'production' 
    ? ['https://nefix.studio', 'https://www.nefix.studio'] 
    : ['http://localhost:3000', 'http://localhost:8081', 'http://localhost:5173']
}));
app.use(bodyParser.json({ limit: '10mb' }));
app.use(bodyParser.urlencoded({ extended: true, limit: '10mb' }));

// Email configuration with environment variables
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER || 'enfams19@gmail.com',
    pass: process.env.EMAIL_PASS || 'zsyc uaph uumr vbbr'
  }
});

// Verify email configuration on startup
transporter.verify((error, success) => {
  if (error) {
    console.error('Email configuration error:', error);
  } else {
    console.log('Email server is ready to send messages');
  }
});

// API endpoint for consultation form
app.post('/api/consultation', async (req, res) => {
  try {
    const { name, email, company, phone, service, message } = req.body;

    // Validate required fields
    if (!name || !email) {
      return res.status(400).json({ 
        success: false, 
        message: 'Nama dan email wajib diisi' 
      });
    }

    // Email content
    const emailContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f8f9fa;">
        <div style="background-color: #1a1a2e; padding: 30px; border-radius: 10px; color: white;">
          <h2 style="color: #00d4ff; margin-bottom: 20px; text-align: center;">Konsultasi Gratis Baru - EzProject</h2>
          
          <div style="background-color: #16213e; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
            <h3 style="color: #00d4ff; margin-bottom: 15px;">Informasi Klien</h3>
            <table style="width: 100%; color: white;">
              <tr>
                <td style="padding: 8px 0; font-weight: bold; width: 30%;">Nama Lengkap:</td>
                <td style="padding: 8px 0;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold;">Email:</td>
                <td style="padding: 8px 0;">${email}</td>
              </tr>
              ${company ? `
              <tr>
                <td style="padding: 8px 0; font-weight: bold;">Perusahaan:</td>
                <td style="padding: 8px 0;">${company}</td>
              </tr>
              ` : ''}
              ${phone ? `
              <tr>
                <td style="padding: 8px 0; font-weight: bold;">No. Telepon:</td>
                <td style="padding: 8px 0;">${phone}</td>
              </tr>
              ` : ''}
              ${service ? `
              <tr>
                <td style="padding: 8px 0; font-weight: bold;">Layanan:</td>
                <td style="padding: 8px 0;">${service}</td>
              </tr>
              ` : ''}
            </table>
          </div>
          
          ${message ? `
          <div style="background-color: #16213e; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
            <h3 style="color: #00d4ff; margin-bottom: 15px;">Pesan</h3>
            <p style="color: white; line-height: 1.6; margin: 0;">${message}</p>
          </div>
          ` : ''}
          
          <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #00d4ff;">
            <p style="color: #a0a0a0; margin: 0; font-size: 14px;">Email ini dikirim otomatis dari website EzProject</p>
            <p style="color: #a0a0a0; margin: 5px 0 0 0; font-size: 14px;">Waktu: ${new Date().toLocaleString('id-ID')}</p>
          </div>
        </div>
      </div>
    `;

    // Email options with environment variables
    const mailOptions = {
      from: {
        name: process.env.COMPANY_NAME || 'EzProject',
        address: process.env.FROM_EMAIL || 'cs@ezproject.tech'
      },
      to: process.env.TO_EMAIL || 'ekoputra351@gmail.com',
      bcc: ['rizairsyad300198@gmail.com', 'davidrenaldy1@gmail.com'],
      subject: `Konsultasi Gratis Baru dari ${name} - ${process.env.COMPANY_NAME || 'EzProject'}`,
      html: emailContent
    };

    // Send email
    await transporter.sendMail(mailOptions);

    res.status(200).json({ 
      success: true, 
      message: 'Terima kasih! Konsultasi Anda telah berhasil dikirim. Tim kami akan menghubungi Anda segera.' 
    });

  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Terjadi kesalahan saat mengirim konsultasi. Silakan coba lagi.' 
    });
  }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.status(200).json({ status: 'OK', message: 'Server is running' });
});

// Serve static files in production
if (process.env.NODE_ENV === 'production') {
  // Serve static files from the dist directory
  app.use(express.static(path.join(__dirname, 'dist')));
  
  // Handle React routing, return all requests to React app
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'));
  });
} else {
  // Development mode - just show a simple message for non-API routes
  app.get('/', (req, res) => {
    res.json({
      success: true,
      message: 'Server is running in development mode',
      endpoints: {
        health: '/api/health',
        consultation: 'POST /api/consultation'
      }
    });
  });
}

// Global error handler
app.use((err, req, res, next) => {
  console.error('Global error handler:', err);
  res.status(500).json({
    success: false,
    message: 'Internal server error'
  });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: 'Endpoint not found'
  });
});

// Graceful shutdown
process.on('SIGTERM', () => {
  console.log('SIGTERM received, shutting down gracefully');
  process.exit(0);
});

process.on('SIGINT', () => {
  console.log('SIGINT received, shutting down gracefully');
  process.exit(0);
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server is running on port ${PORT}`);
  console.log(`Environment: ${process.env.NODE_ENV || 'development'}`);
  console.log(`CORS origins: ${process.env.NODE_ENV === 'production' ? 'production domains' : 'localhost'}`);
});

export default app;