// Meminta pengguna untuk memasukkan nilai
let inputNilai = prompt("Masukkan nilai Anda:");

// Mengonversi input menjadi angka
let nilai = parseFloat(inputNilai);

// Mengecek apakah input adalah angka yang valid
if (isNaN(nilai)) {
    alert("Tolong masukkan nilai yang valid.");
} else {
    // Menentukan grade berdasarkan nilai
    if (nilai >= 90) {
        alert("Grade A");
    } else if (nilai >= 80) {
        alert("Grade B");
    } else if (nilai >= 70) {
        alert("Grade C");
    } else if (nilai >= 60) {
        alert("Grade D");
    } else {
        alert("Grade E");
    }
}
