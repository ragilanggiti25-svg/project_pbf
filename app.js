const express = require("express");
const mahasiswaRoutes = require('./routes/mahasiswaRoutes');

const app = express();
const PORT = 3000;

app.use(express.json());

// Endpoint utama
app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Welcome to REST API Project PBF"
  });
});

// Endpoint Mahasiswa
app.use("/api/mahasiswa", mahasiswaRoutes);

app.listen(PORT, () => {
  console.log(`Server berjalan di http://localhost:${PORT}`);
});
