// Fungsi untuk menghitung BMI
function hitungBMI() {

    // Mengambil nilai dari form
    let weight = parseFloat(document.getElementById("berat-badan").value);
    let height = parseFloat(document.getElementById("tinggi-badan").value);
    let age = parseFloat(document.getElementById("usia").value);
    let gender = document.querySelector('input[name="jeniskelamin"]:checked');

    // Validasi form
    if (!weight || !height || !age || !gender) {
        alert("Mohon lengkapi form");
        return;
    }

    // Menghitung BMI
    let bmi = (weight / (height/100) ** 2).toFixed(2);

    // Deklarasi variabel untuk kategori dan penjelasan
    let category = "";
    let explanation = "";

    // Menentukan kategori BMI
    if (bmi < 18.5) {
        category = "Anda termasuk kedalam kategori kekurangan berat badan";
        explanation = "BMI kurang dari 18.5 menunjukkan bahwa Anda memiliki berat badan yang kurang dari normal. Anda perlu menambah berat badan untuk menjaga kesehatan.";
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        category = "Anda termasuk kedalam kategori normal (ideal)";
        explanation = "BMI antara 18.5 dan 24.9 menunjukkan bahwa Anda memiliki berat badan yang normal. Anda memiliki risiko penyakit yang lebih rendah.";
    } else if (bmi >= 25 && bmi <= 29.9) {
        category = "Anda termasuk kedalam kategori kelebihan berat badan";
        explanation = "BMI antara 25 dan 29.9 menunjukkan bahwa Anda memiliki berat badan yang lebih dari normal. Anda perlu mengurangi berat badan untuk menjaga kesehatan.";
    } else if (bmi >= 30) {
        category = "Anda termasuk kedalam kategori kegemukan (obesitas)";
        explanation = "BMI lebih dari 30 menunjukkan bahwa Anda memiliki berat badan yang jauh lebih dari normal. Anda perlu mengurangi berat badan untuk menjaga kesehatan.";
    }

    // Menampilkan hasil
    document.getElementById("resultValue").textContent = bmi;
    document.getElementById("resultCategory").textContent = category;
    document.getElementById("resultExplanation").textContent = explanation;
    document.getElementById("result-section").classList.remove("hidden");
}