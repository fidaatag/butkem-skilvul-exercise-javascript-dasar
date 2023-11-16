
Tugas dasar JavaScript ini merupakan bagian dari program SkillVul, inisiatif beasiswa Perempuan Inovasi 2023. Pada module intro ini, akan dijelaskan beberapa konsep dasar pemrograman JavaScript melalui latihan-latihan sederhana.

### **Ans-1: Menampilkan Data Diri**

```javascript
const nama = "fidaa";
const asal = "semarang";
const ttl = "30 Oktober";
const umur = "xx tahun";
const job = "fotografer";

console.log(nama, asal, ttl, umur, job);
```

Pada bagian ini, kode menggunakan variabel konstan (`const`) untuk menyimpan informasi data diri seperti nama, asal, tanggal lahir, umur, dan pekerjaan. Variabel `const` digunakan ketika nilai variabel tidak akan diubah setelah diinisialisasi. Kemudian, `console.log` digunakan untuk menampilkan data tersebut di konsol.

### **Ans-3: Melakukan Operasi Matematika**

```javascript
const sum = 25 + 10;
const multiple = 100 * 2;
const devide = 99 / 2;
const modulo = 99 % 2;

console.log(`hasil dari 25 ditambah 10 adalah ${sum}`);
console.log(`hasil dari 100 dikali 2 adalah ${multiple}`);
console.log(`hasil dari 99 dibagi 2 adalah ${devide}`);
console.log(`hasil sisa bagi dari 99 dibagi 2 adalah ${modulo}`);
```

Pada bagian ini, kode menggunakan variabel konstan untuk menyimpan hasil dari beberapa operasi matematika. Penggunaan template literal (dengan tanda backticks ``) memungkinkan kita menyisipkan nilai variabel ke dalam string dengan lebih mudah dan ekspresif.

### **Ans-2 ops.1: Interaksi dengan Pengguna (di browser)**

```javascript
const promtNama = prompt("Siapa namamu? ");
const promtNegara = prompt("Dari mana asalmu? ");

alert("Data yang Anda isi \nNama: " + promtNama + "\nAsal Negara: " + promtNegara);

const konfirmasi = confirm("Apakah data yang diisi sudah benar?");

if (konfirmasi) {
    alert("Terima kasih sudah mengisi form!");
} else {
    alert("Silakan periksa kembali data Anda. Silah refresh halaman ini untuk isi data lagi.");
}
```

Pada bagian ini, `prompt` digunakan untuk meminta input dari pengguna, `alert` digunakan untuk menampilkan data yang diisi, dan `confirm` digunakan untuk mengonfirmasi data. Penggunaan `if-else` mengendalikan alur program berdasarkan hasil konfirmasi pengguna.

### **Ans-2 ops.2: Interaksi dengan Pengguna (di terminal)**

```javascript
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
```

Pada bagian ini, kita menggunakan modul `readline` dari Node.js untuk berinteraksi dengan pengguna melalui terminal. Fungsi `rl.question` digunakan untuk meminta input dari pengguna, dan setiap pertanyaan berikutnya dijalankan dalam callback yang diberikan. `rl.close` digunakan untuk menutup antarmuka readline setelah selesai.