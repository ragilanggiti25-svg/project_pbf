const Mahasiswa = require('../models/mahasiswaModel');

// Ambil Semua Data
exports.getAll = (req, res) => {
  try {
    const data = Mahasiswa.getAllMahasiswa();
    res.json({
      success: true,
      message: "Berhasil mengambil semua data mahasiswa",
      total: data.length,
      data: data
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

// Ambil Data Berdasarkan ID
exports.getById = (req, res) => {
  try {
    const { id } = req.params;
    const data = Mahasiswa.getById(parseInt(id));
    
    if (!data) {
      return res.status(404).json({
        success: false,
        message: "Data mahasiswa tidak ditemukan"
      });
    }
    
    res.json({
      success: true,
      message: "Detail data mahasiswa ditemukan",
      data: data
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

// Tambah Data Baru
exports.create = (req, res) => {
  try {
    const { nim, nama, prodi, angkatan } = req.body;
    
    if (!nim || !nama || !prodi || !angkatan) {
      return res.status(400).json({
        success: false,
        message: "Semua data wajib diisi!"
      });
    }
    
    const dataBaru = Mahasiswa.create({ nim, nama, prodi, angkatan });
    
    res.status(201).json({
      success: true,
      message: "Data berhasil ditambahkan",
      data: dataBaru
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

// Perbarui Data
exports.update = (req, res) => {
  try {
    const { id } = req.params;
    const { nim, nama, prodi, angkatan } = req.body;
    
    if (!nim || !nama || !prodi || !angkatan) {
      return res.status(400).json({
        success: false,
        message: "Semua data wajib diisi!"
      });
    }
    
    const data = Mahasiswa.update(parseInt(id), { nim, nama, prodi, angkatan });
    
    if (!data) {
      return res.status(404).json({
        success: false,
        message: "Data mahasiswa tidak ditemukan"
      });
    }
    
    res.json({
      success: true,
      message: "Data mahasiswa berhasil diperbarui",
      data: data
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

// Hapus Data
exports.remove = (req, res) => {
  try {
    const { id } = req.params;
    const data = Mahasiswa.remove(parseInt(id));
    
    if (!data) {
      return res.status(404).json({
        success: false,
        message: "Data mahasiswa tidak ditemukan"
      });
    }
    
    res.json({
      success: true,
      message: "Data mahasiswa berhasil dihapus",
      data: data
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};
