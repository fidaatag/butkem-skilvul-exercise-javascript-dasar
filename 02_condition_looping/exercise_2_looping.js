/*  Exercise

1------
Buat conditional IF .. ELSE IF yang menggambarkan divisi dan tugas divisi pada STARTUP.
Contoh: Jika saya sebagai HR maka tugas saya adalah melakukan rekrutmen untuk calon pegawai baru

2------
Buat conditional untuk membandingkan 2 buah nilai. Tampilkan apakah salah satu nilai misal a lebih besar dari b, a lebih kecil dari b, dan a sama dengan b.

3------
Gunakan switch case untuk mengetahui nama hari berdasarkan angka.
Hari minggu dimulai dari angka 1 dan seterusnya

4------
Gunakan switch case untuk membuat sebuah game sederhana.
UP -> Karakter berjalan keatas
RIGHT -> Karakter berjalan kekanan
BOTTOM -> Karakter berjalan kebawah
LEFT -> Karakter berjalan kekiri


*/


// --- Ans-1
let jabatan = "CTO"; // Ganti dengan jabatan yang ingin diketahui tugasnya

if (jabatan === "CEO") {
    console.log("Sebagai CEO, tugas utama Anda adalah mengarahkan dan mengelola strategi bisnis perusahaan.");
} else if (jabatan === "CTO") {
    console.log("Sebagai CTO, tugas utama Anda adalah mengelola dan mengembangkan teknologi yang mendukung produk atau layanan perusahaan.");
} else if (jabatan === "COO") {
    console.log("Sebagai COO, tugas utama Anda adalah mengelola operasional sehari-hari perusahaan untuk memastikan efisiensi dan kinerja maksimal.");
} else if (jabatan === "CFO") {
    console.log("Sebagai CFO, tugas utama Anda adalah mengelola keuangan perusahaan, termasuk perencanaan keuangan, pengelolaan risiko, dan pelaporan keuangan.");
} else if (jabatan === "HR") {
    console.log("Sebagai HR, tugas utama Anda adalah melakukan rekrutmen, manajemen kinerja, pengembangan karyawan, dan kebijakan sumber daya manusia.");
    // Tambahan untuk jabatan HR
    console.log("Selain itu, Anda juga bertanggung jawab untuk memastikan kebijakan perusahaan terkait sumber daya manusia diikuti dan diterapkan dengan baik.");
} else if (jabatan === "Marketing") {
    console.log("Sebagai bagian dari tim pemasaran, tugas Anda adalah mengembangkan strategi pemasaran, membangun merek, dan mengelola kampanye promosi.");
} else {
    console.log("Jabatan tidak dikenali. Mohon periksa kembali.");
}


// --- Ans-2
let a = 10;
let b = 5;

if (a > b) {
    console.log("Nilai a lebih besar dari b.");
} else if (a < b) {
    console.log("Nilai a lebih kecil dari b.");
} else {
    console.log("Nilai a sama dengan b.");
}



// --- Ans-3
let angkaHari = 3; // Ganti dengan angka hari yang diinginkan

switch (angkaHari) {
    case 1:
        console.log("Hari Minggu");
        break;
    case 2:
        console.log("Hari Senin");
        break;
    case 3:
        console.log("Hari Selasa");
        break;
    case 4:
        console.log("Hari Rabu");
        break;
    case 5:
        console.log("Hari Kamis");
        break;
    case 6:
        console.log("Hari Jumat");
        break;
    case 7:
        console.log("Hari Sabtu");
        break;
    default:
        console.log("Angka hari tidak valid. Harap masukkan angka antara 1 dan 7.");
        break;
}



// --- Ans-4
let arah = "UP"; // Ganti dengan arah yang diinginkan: UP, RIGHT, BOTTOM, atau LEFT

switch (arah) {
    case "UP":
        console.log("Karakter berjalan ke atas.");
        break;
    case "RIGHT":
        console.log("Karakter berjalan ke kanan.");
        break;
    case "BOTTOM":
        console.log("Karakter berjalan ke bawah.");
        break;
    case "LEFT":
        console.log("Karakter berjalan ke kiri.");
        break;
    default:
        console.log("Arah tidak valid. Harap masukkan UP, RIGHT, BOTTOM, atau LEFT.");
        break;
}

