📌 QR Code Attendance System

Sistem absensi berbasis QR Code untuk memudahkan monitoring kehadiran satpam di berbagai lokasi.
Dilengkapi dengan validasi lokasi (GPS), foto wajah, notifikasi otomatis, laporan PDF, serta prediksi risiko keterlambatan.

⚙️ Tech Stack

Framework Backend: Express.js

Framework Frontend: React + TypeScript

Design UI: Material UI (MUI)

Tools: Kubb
 – untuk generate API client dari OpenAPI spec, mempermudah integrasi React Query.

🚀 Fitur Utama

Generate & Scan QR → QR unik per lokasi & shift, expired per jam.

Validasi GPS → Lokasi scan harus dalam radius 30m.

Foto Karyawan → Validasi wajah untuk mencegah titip absen.

Telegram Notification → Notifikasi otomatis bila terlambat >30 menit, serta rekap harian.

PDF Report → Laporan mingguan otomatis via email (OnTime/Late/Absent).

AI Prediction → Prediksi 3 satpam berisiko terlambat berdasarkan histori 7 hari.

Real-Time Dashboard → Persentase kehadiran, grafik bulanan, dan top 10 satpam paling sering terlambat.

📂 Struktur Project (Sederhana)
/backend    → Express.js (API, Auth, DB, QR Generator, AI Model)
/frontend   → React + TS (UI, Dashboard, Scan Page, Reports)

🛠️ Cara Menjalankan

Backend

cd backend
npm install
npm run dev


API berjalan di http://localhost:5000

Frontend

cd frontend
npm install
npm run dev


Akses aplikasi di http://localhost:5173

📊 Catatan

Gunakan .env untuk menyimpan konfigurasi (API URL, DB, Telegram token, dsb).

Pastikan device user mengaktifkan GPS & kamera saat melakukan absensi.

Untuk integrasi API ke frontend, gunakan Kubb agar otomatis generate hooks React Query dari OpenAPI spec.