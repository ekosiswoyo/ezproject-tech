# TechNova Solutions - Backend Server

## Setup dan Instalasi

### 1. Install Dependencies
Jalankan perintah berikut untuk menginstall dependencies yang diperlukan:

```bash
npm install express nodemailer cors body-parser nodemon
```

### 2. Menjalankan Server

#### Opsi 1: Manual
```bash
node server.js
```

#### Opsi 2: Menggunakan Batch File (Windows)
Double-click file `start-server.bat` atau jalankan:
```bash
start-server.bat
```

#### Opsi 3: Development Mode dengan Auto-reload
```bash
npx nodemon server.js
```

### 3. Konfigurasi Email

Server dikonfigurasi untuk mengirim email dengan pengaturan berikut:
- **Email Pengirim**: enfams19@gmail.com
- **Password Aplikasi**: zsyc uaph uumr vbbr
- **Email Tujuan**: eko@gmail.com
- **CC**: david@gmail.com
- **From Address**: noreply@ezproject.teh

### 4. Endpoint API

#### POST /api/consultation
Mengirim data konsultasi gratis

**Request Body:**
```json
{
  "name": "Nama Lengkap",
  "email": "email@example.com",
  "company": "Nama Perusahaan (opsional)",
  "phone": "No. Telepon (opsional)",
  "service": "Layanan yang Dibutuhkan (opsional)",
  "message": "Pesan (opsional)"
}
```

**Response Success:**
```json
{
  "success": true,
  "message": "Terima kasih! Konsultasi Anda telah berhasil dikirim. Tim kami akan menghubungi Anda segera."
}
```

**Response Error:**
```json
{
  "success": false,
  "message": "Error message"
}
```

#### GET /api/health
Health check endpoint

**Response:**
```json
{
  "status": "OK",
  "message": "Server is running"
}
```

### 5. Port
Server berjalan di port **3001** secara default.
URL: `http://localhost:3001`

### 6. CORS
Server dikonfigurasi untuk menerima request dari semua origin untuk development.

### 7. Troubleshooting

#### Error: Cannot connect to server
- Pastikan server backend berjalan di port 3001
- Periksa apakah ada firewall yang memblokir koneksi
- Pastikan dependencies sudah terinstall

#### Error: Email tidak terkirim
- Periksa konfigurasi email di `server.js`
- Pastikan password aplikasi Gmail masih valid
- Periksa koneksi internet

#### Error: Port already in use
- Tutup aplikasi lain yang menggunakan port 3001
- Atau ubah port di `server.js` (ubah variabel PORT)

### 8. Development

Untuk development, disarankan menggunakan nodemon agar server restart otomatis saat ada perubahan:

```bash
npx nodemon server.js
```

### 9. Production

Untuk production, pastikan:
1. Gunakan environment variables untuk konfigurasi email
2. Setup CORS dengan domain yang spesifik
3. Tambahkan rate limiting
4. Gunakan HTTPS
5. Setup logging yang proper