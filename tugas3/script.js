let inputNilai = prompt("Masukkan nilai Anda:");

let nilai = parseFloat(inputNilai);


if (isNaN(nilai)) {
    alert("Tolong masukkan nilai yang valid.");
} else {
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
