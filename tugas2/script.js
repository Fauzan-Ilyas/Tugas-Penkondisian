let inputUmur = prompt("Masukkan umur Anda:");

let umur = parseInt(inputUmur);


if (isNaN(umur)) {
    alert("Tolong masukkan umur yang valid.");
} else {

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
