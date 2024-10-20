let angkaAcak = Math.floor(Math.random() * 10) + 1;

let tebakan = parseInt(prompt("Tebak angka antara 1 sampai 10:"));


if (isNaN(tebakan) || tebakan < 1 || tebakan > 10) {
    alert("Tolong masukkan angka yang valid antara 1 dan 10.");
} else {

    if (tebakan === angkaAcak) {
        alert("Tebakan Anda benar!");
    } else {
        alert("Tebakan Anda salah! Angka yang benar adalah " + angkaAcak + ".");
    }
}
