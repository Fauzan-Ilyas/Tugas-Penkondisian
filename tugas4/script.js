// Daftar produk dan harganya
const produk = {
    1: { nama: "Air Mineral", harga: 3000 },
    2: { nama: "Kopi", harga: 5000 },
    3: { nama: "Teh", harga: 4000 }
};

// Meminta pengguna memasukkan jumlah uang
let uang = parseInt(prompt("Masukkan jumlah uang Anda:"));

// Meminta pengguna memilih produk
let pilihan = parseInt(prompt("Pilih produk:\n1. Air Mineral (Rp 3000)\n2. Kopi (Rp 5000)\n3. Teh (Rp 4000)"));

// Mengecek apakah input adalah angka yang valid
if (isNaN(uang) || isNaN(pilihan) || !produk[pilihan]) {
    alert("Tolong masukkan input yang valid.");
} else {
    // Mendapatkan harga produk yang dipilih
    let hargaProduk = produk[pilihan].harga;
    
    // Mengecek apakah uang cukup
    if (uang >= hargaProduk) {
        alert("Anda membeli " + produk[pilihan].nama + " seharga Rp " + hargaProduk + ".\nKembali: Rp " + (uang - hargaProduk));
    } else {
        alert("Uang Anda tidak cukup untuk membeli " + produk[pilihan].nama + ".\nHarga: Rp " + hargaProduk + ", Uang Anda: Rp " + uang);
    }
}
