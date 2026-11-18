// Data awal disimpan di sini
let mahasiswa = [
  {
    id: 1,
    nim: "2026001",
    nama: "Andi Saputra",
    prodi: "Teknik Informatika"
  },
  {
    id: 2,
    nim: "2026002",
    nama: "Budi Santoso",
    prodi: "Sistem Informasi"
  }
];

// Fungsi ambil semua data
const getAllMahasiswa = () => {
  return mahasiswa;
};

// Fungsi ambil data berdasarkan ID
const getMahasiswaById = (id) => {
  return mahasiswa.find(m => m.id === parseInt(id));
};

// Fungsi tambah data baru
const addMahasiswa = (dataBaru) => {
  const idTerbaru = mahasiswa.length > 0 ? mahasiswa[mahasiswa.length - 1].id + 1 : 1;
  const data = { id: idTerbaru, ...dataBaru };
  mahasiswa.push(data);
  return data;
};

// Fungsi ubah data
const updateMahasiswa = (id, dataUpdate) => {
  const index = mahasiswa.findIndex(m => m.id === parseInt(id));
  if (index !== -1) {
    mahasiswa[index] = { id: parseInt(id), ...dataUpdate };
    return mahasiswa[index];
  }
  return null;
};

// Fungsi hapus data
const deleteMahasiswa = (id) => {
  const index = mahasiswa.findIndex(m => m.id === parseInt(id));
  if (index !== -1) {
    mahasiswa.splice(index, 1);
    return true;
  }
  return false;
};

// Export fungsi agar bisa dipakai di file lain
module.exports = {
  getAll: getAllMahasiswa,
  getById: getMahasiswaById,
  create: addMahasiswa,
  update: updateMahasiswa,
  remove: deleteMahasiswa
};

