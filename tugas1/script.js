
let input = prompt("Masukkan sebuah angka:");

let angka = parseInt(input);

if (isNaN(angka)) {
    alert("Tolong masukkan angka yang valid.");
} else {

    if (angka % 2 === 0) {
        alert("Angka ini adalah bilangan genap.");
    } else {
        alert("Angka ini adalah bilangan ganjil.");
    }
}
