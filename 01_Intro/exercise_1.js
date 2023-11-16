/*  Exercise

1------
Console log data diri
Nama
Asal daerah
Tanggal lahir
Umur
Posisi pekerjaan

2-----
Membuat interaksi kepada user
Prompt data berikut:
Nama user
Asal Negara
Confirm data user. Apakah data yang diisi sudah benar?
Alert “Terima kasih sudah mengisi form”

3-----
Lakukan operasi matematika berikut. Simpan hasil pada sebuah variabel untuk masing-masing operasi.
25 + 10
100 * 2
99 / 2
99 % 2


*/


// --- Ans-1
const nama = "fidaa";
const asal = "semarang";
const ttl = "30 Oktober";
const umur = "xx tahun";
const job = "fotografer";

console.log (nama, asal, ttl, umur, job);







// --- Ans-3
const sum = 25 + 10;
const multiple = 100 * 2;
const devide = 99 / 2;
const modulo = 99 % 2;

console.log(`hasil dari 25 ditambah 10 adalah ${sum}`);
console.log(`hasil dari 100 dikali 2 adalah ${multiple}`);
console.log(`hasil dari 99 dibagi 2 adalah ${devide}`);
console.log(`hasil sisa bagi dari 99 dibagi 2 adalah ${modulo}`);







// --- Ans-2 ops.1 akan muncul pop-up - ini terjadi jika file js nyangkut di file html
const promtNama = prompt("Siapa namamu? ");
const promtNegara = prompt("Dari mana asalmu? ");

// menampilkan data yang diisi
alert("Data yang Anda isi \nNama: " + promtNama + "\nAsal Negara: " + promtNegara)

// Konfirmasi data pengguna
const konfirmasi = confirm("Apakah data yang diisi sudah benar?");

// Menampilkan alert terima kasih berdasarkan konfirmasi
if (konfirmasi) {
    alert("Terima kasih sudah mengisi form!");
} else {
    alert("Silakan periksa kembali data Anda. Silah refresh halaman ini untuk isi data lagi.");
}







// --- Ans-2 ops.2 dengan terminal
// untuk menjalankannya ==>  ... > terminal > new terminal > tulis node 01_intro.js > lakukan pengisian data

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Minta nama pengguna
rl.question('Masukkan nama Anda: ', (namaUser) => {
  // Minta asal negara pengguna
  rl.question('Masukkan asal negara Anda: ', (asalNegara) => {
    // Konfirmasi data pengguna
    console.log(`\nKonfirmasi data:\nNama: ${namaUser}\nAsal Negara: ${asalNegara}`);

    // Minta konfirmasi dari pengguna
    rl.question('\nApakah data yang diisi sudah benar? (ya/tidak): ', (konfirmasi) => {
      // Periksa konfirmasi pengguna
      if (konfirmasi.toLowerCase() === 'ya') {
        console.log('\nTerima kasih sudah mengisi formulir!');
      } else {
        console.log('\nSilakan periksa kembali data Anda dan isi formulir dengan benar.');
      }

      // Tutup interface readline setelah selesai
      rl.close();
    });
  });
});




