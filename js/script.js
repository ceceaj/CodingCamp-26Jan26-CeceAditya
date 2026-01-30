// 1. WELCOMING SPEECH (Meminta nama user saat loading)
document.addEventListener("DOMContentLoaded", function() {
    // Meminta nama user lewat pop-up
    const userName = prompt("Siapa nama Anda?", "User");
    
    // Jika user mengisi nama, ganti teks di HTML
    if (userName != null) {
        document.getElementById("user-name").innerText = userName;
    }
});

// 2. FORM VALIDATION & OUTPUT
const submitBtn = document.querySelector("button[type='submit']");

submitBtn.addEventListener("click", function(event) {
    event.preventDefault(); // Mencegah halaman reload saat klik submit

    // Ambil value dari form
    const nama = document.getElementById("nama").value;
    const tglLahir = document.getElementById("tgl-lahir").value;
    const pesan = document.getElementById("pesan").value;
    
    // Ambil value radio button (Gender)
    let gender = "";
    const genderInput = document.querySelector('input[name="gender"]:checked');
    if (genderInput) {
        gender = genderInput.value;
    }

    // VALIDASI: Cek apakah ada yang kosong
    if (nama === "" || tglLahir === "" || gender === "" || pesan === "") {
        alert("Harap isi semua data!");
        return; // Berhenti di sini jika ada yang kosong
    }

    // Tampilkan hasil di kotak kanan (Result Box)
    const resultBox = document.getElementById("result-box");
    const currentTime = new Date().toString(); // Waktu sekarang

    resultBox.innerHTML = `
        <p><strong>Current Time:</strong> ${currentTime}</p>
        <hr><br>
        <p><strong>Nama:</strong> ${nama}</p>
        <p><strong>Tanggal Lahir:</strong> ${tglLahir}</p>
        <p><strong>Jenis Kelamin:</strong> ${gender}</p>
        <p><strong>Pesan:</strong> ${pesan}</p>
    `;
});