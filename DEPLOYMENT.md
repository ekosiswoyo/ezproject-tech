# TechNova Solutions - Deployment Guide

## Cloud Hosting Deployment

Server Node.js ini sudah dioptimalkan untuk deployment di cloud hosting seperti Heroku, DigitalOcean, AWS, Google Cloud, atau VPS lainnya.

## Prerequisites

- Node.js 16+ dan npm 8+
- Account cloud hosting
- Domain (opsional)
- Gmail account dengan App Password

## Environment Variables

Buat file `.env` di root directory dengan konfigurasi berikut:

```env
# Environment
NODE_ENV=production
PORT=3001

# Email Configuration
EMAIL_USER=your-gmail@gmail.com
EMAIL_PASS=your-app-password

# Email Recipients
TO_EMAIL=eko@sgo.co.id
CC_EMAIL=ekoputra351@gmail.com
FROM_EMAIL=noreply@yourdomain.com

# Company Information
COMPANY_NAME=TechNova Solutions
```

## Deployment Steps

### 1. Heroku Deployment

```bash
# Install Heroku CLI
# Login to Heroku
heroku login

# Create new app
heroku create your-app-name

# Set environment variables
heroku config:set NODE_ENV=production
heroku config:set EMAIL_USER=your-gmail@gmail.com
heroku config:set EMAIL_PASS=your-app-password
heroku config:set TO_EMAIL=eko@sgo.co.id
heroku config:set CC_EMAIL=ekoputra351@gmail.com
heroku config:set FROM_EMAIL=noreply@yourdomain.com
heroku config:set COMPANY_NAME="TechNova Solutions"

# Deploy
git add .
git commit -m "Deploy to production"
git push heroku main
```

### 2. DigitalOcean App Platform

1. Connect your GitHub repository
2. Set environment variables in App Platform dashboard
3. Deploy automatically

### 3. VPS Deployment

```bash
# Clone repository
git clone your-repo-url
cd technova-visionary-showcase

# Install dependencies
npm install express nodemailer cors body-parser dotenv

# Create .env file
cp .env.example .env
# Edit .env with your configuration

# Install PM2 for process management
npm install -g pm2

# Start application
pm2 start server.js --name "technova-backend"

# Setup PM2 to start on boot
pm2 startup
pm2 save
```

### 4. Docker Deployment

Create `Dockerfile`:

```dockerfile
FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm ci --only=production

COPY . .

EXPOSE 3001

USER node

CMD ["node", "server.js"]
```

Create `docker-compose.yml`:

```yaml
version: '3.8'
services:
  backend:
    build: .
    ports:
      - "3001:3001"
    environment:
      - NODE_ENV=production
      - EMAIL_USER=${EMAIL_USER}
      - EMAIL_PASS=${EMAIL_PASS}
      - TO_EMAIL=${TO_EMAIL}
      - CC_EMAIL=${CC_EMAIL}
      - FROM_EMAIL=${FROM_EMAIL}
      - COMPANY_NAME=${COMPANY_NAME}
    restart: unless-stopped
```

## Frontend Configuration

Update frontend API URL untuk production:

```javascript
// In Contact.tsx, update API endpoint
const API_URL = process.env.NODE_ENV === 'production' 
  ? 'https://your-backend-domain.com/api/consultation'
  : 'http://localhost:3001/api/consultation';
```

## CORS Configuration

Update CORS origins di server.js:

```javascript
app.use(cors({
  origin: process.env.NODE_ENV === 'production' 
    ? ['https://yourdomain.com', 'https://www.yourdomain.com'] 
    : ['http://localhost:3000', 'http://localhost:8081', 'http://localhost:5173']
}));
```

## SSL Certificate

Untuk production, pastikan menggunakan HTTPS:

1. **Heroku**: SSL otomatis tersedia
2. **DigitalOcean**: Enable SSL di dashboard
3. **VPS**: Gunakan Let's Encrypt dengan Nginx/Apache

## Monitoring

### Health Check Endpoint

Server menyediakan health check di `/api/health`:

```bash
curl https://your-domain.com/api/health
```

### Logging

Untuk production logging yang lebih baik, tambahkan:

```bash
npm install winston
```

## Security Considerations

1. **Environment Variables**: Jangan commit file `.env`
2. **CORS**: Set origin yang spesifik untuk production
3. **Rate Limiting**: Tambahkan rate limiting untuk API
4. **Input Validation**: Validasi semua input dari client
5. **HTTPS**: Selalu gunakan HTTPS di production

## Troubleshooting

### Common Issues

1. **Email tidak terkirim**:
   - Periksa Gmail App Password
   - Pastikan 2FA aktif di Gmail
   - Cek environment variables

2. **CORS Error**:
   - Update CORS origins
   - Pastikan frontend URL benar

3. **Port Issues**:
   - Gunakan PORT dari environment variable
   - Pastikan port tidak digunakan aplikasi lain

### Logs

```bash
# Heroku
heroku logs --tail

# PM2
pm2 logs technova-backend

# Docker
docker logs container-name
```

## Performance Optimization

1. **Caching**: Implement Redis untuk caching
2. **Database**: Gunakan database untuk menyimpan submissions
3. **CDN**: Gunakan CDN untuk static assets
4. **Load Balancer**: Untuk high traffic

## Backup Strategy

1. **Code**: Git repository
2. **Environment**: Backup environment variables
3. **Logs**: Setup log rotation
4. **Database**: Regular database backups (jika menggunakan database)

Server ini sudah production-ready dan dapat di-deploy ke berbagai platform cloud hosting.