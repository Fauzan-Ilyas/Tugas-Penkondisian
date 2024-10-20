// Meminta pengguna untuk memasukkan angka
let input = prompt("Masukkan sebuah angka:");

// Mengonversi input menjadi angka bulat
let angka = parseInt(input);

// Mengecek apakah input adalah angka yang valid
if (isNaN(angka)) {
    alert("Tolong masukkan angka yang valid.");
} else {
    // Mengecek apakah angka genap atau ganjil
    if (angka % 2 === 0) {
        alert("Angka ini adalah bilangan genap.");
    } else {
        alert("Angka ini adalah bilangan ganjil.");
    }
}
