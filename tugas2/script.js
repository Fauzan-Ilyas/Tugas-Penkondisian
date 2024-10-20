// Meminta pengguna untuk memasukkan umur
let inputUmur = prompt("Masukkan umur Anda:");

// Mengonversi input menjadi angka
let umur = parseInt(inputUmur);

// Mengecek apakah input adalah angka yang valid
if (isNaN(umur)) {
    alert("Tolong masukkan umur yang valid.");
} else {
    // Menentukan kategori umur
    if (umur < 12) {
        alert("Anak-anak");
    } else if (umur >= 13 && umur <= 17) {
        alert("Remaja");
    } else if (umur >= 18 && umur <= 64) {
        alert("Dewasa");
    } else {
        alert("Lansia");
    }
}
