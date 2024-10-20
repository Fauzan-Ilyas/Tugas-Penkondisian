// Menghasilkan angka acak antara 1 sampai 10
let angkaAcak = Math.floor(Math.random() * 10) + 1;

// Meminta pengguna untuk menebak angka
let tebakan = parseInt(prompt("Tebak angka antara 1 sampai 10:"));

// Mengecek apakah input adalah angka yang valid
if (isNaN(tebakan) || tebakan < 1 || tebakan > 10) {
    alert("Tolong masukkan angka yang valid antara 1 dan 10.");
} else {
    // Mengecek tebakan pengguna
    if (tebakan === angkaAcak) {
        alert("Tebakan Anda benar!");
    } else {
        alert("Tebakan Anda salah! Angka yang benar adalah " + angkaAcak + ".");
    }
}
