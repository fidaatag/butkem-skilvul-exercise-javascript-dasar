# **Latihan Pemrograman JavaScript Condition & Looping**

Tugas dasar JavaScript ini merupakan bagian dari program SkillVul, inisiatif beasiswa Perempuan Inovasi 2023. Pada module intro ini, akan dijelaskan beberapa konsep dasar pemrograman JavaScript melalui latihan-latihan sederhana. Berikut ini 

- [Condition](##Condition) 
- [Looping](##Looping)
- [Perbedaan antara Procedural, Conditional, dan Looping](##Perbedaan-antara-Procedural,-Conditional,-dan-Looping)

## Condition

### **Ans-1: Menampilkan User ke-1 hingga User ke-100**
```javascript
for (let index = 1; index <= 100; index++) {
  console.log(`user ke-${index}`);
}
```
Pada latihan pertama, menggunakan perulangan `for` untuk menampilkan teks "user ke-" diikuti dengan nomor urut dari 1 hingga 100.

### **Ans-2: Penambahan Nilai dengan FOR LOOP**
```javascript
let nilaiAwal = 0;

for (let indexke = 0; indexke <= 10; indexke += 2) {
  nilaiAwal += 2;
  console.log(`Hasil penambahan pada pengulangan ke-${indexke + 1}: ${nilaiAwal}`);
}
```
Latihan kedua melibatkan penambahan nilai dengan menggunakan `for loop`. Nilai awal dimulai dari 0, kemudian ditambahkan 2 setiap iterasi. Hasilnya ditampilkan pada setiap pengulangan.

### **Ans-3: Pengecekan Bilangan Ganjil atau Genap**
```javascript
for (let jilnap = 0; jilnap <= 20; jilnap++) {
  if (jilnap % 2 === 0) {
    console.log(`${jilnap} termasuk bilangan genap`);
  } else {
    console.log(`${jilnap} termasuk bilangan ganjil`);
  }
}
```
Pada latihan ketiga, dilakukan pengecekan apakah suatu bilangan adalah ganjil atau genap menggunakan operator modulo (`%`). Hasilnya ditampilkan pada setiap iterasi.

### **Ans-4: Konfirmasi Pop Up dan Pengulangan**
```javascript
let countClickOk = 0;

for (;;) {
  const konfirmasi = confirm("Apakah anda mau mengulang?");

  if (konfirmasi) {
    countClickOk++;
  } else {
    alert(`Perulangan sudah dilakukan sebanyak ${countClickOk} kali.`);
    break;
  }
}
```
Latihan keempat melibatkan penggunaan `confirm` untuk menampilkan pop-up konfirmasi kepada pengguna. Jika pengguna memilih 'OK', program akan terus menampilkan pop-up yang sama. Jika memilih 'Cancel', program akan menampilkan jumlah kali 'OK' diklik.

### **Ans-5: Kuis dengan Prompt**
```javascript
const jawabanBenar = "Impact Byte";

while (true) {
  const jawabanUser = prompt("Sebutkan kepanjangan dari nama IB");

  if (jawabanUser === jawabanBenar) {
    alert("Selamat jawaban kamu benar");
    break;
  } else {
    alert("Jawaban kamu salah. Silakan coba lagi.");
  }
}
```
Pada latihan kelima, membuat sebuah kuis dengan menggunakan `prompt`. Program akan terus meminta pengguna untuk menyebutkan kepanjangan dari "IB" hingga jawaban benar. Setelah benar, program memberikan selamat dan keluar dari pengulangan.


## Looping

### Ans-1: Conditional IF...ELSE IF untuk Divisi dan Tugas

```javascript
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
```

**Penjelasan:**
- Kode ini menggunakan struktur `if...else if` untuk mengecek nilai variabel `jabatan`.
- Setiap `if` dan `else if` mencocokkan nilai `jabatan` dengan nilai yang diharapkan untuk setiap divisi.
- Pesan log dicetak sesuai dengan jabatan yang sesuai atau mencetak pesan kesalahan jika jabatan tidak dikenali.

### Ans-2: Conditional untuk Membandingkan 2 Nilai

```javascript
let a = 10;
let b = 5;

if (a > b) {
    console.log("Nilai a lebih besar dari b.");
} else if (a < b) {
    console.log("Nilai a lebih kecil dari b.");
} else {
    console.log("Nilai a sama dengan b.");
}
```

**Penjelasan:**
- Kode ini membandingkan dua nilai, `a` dan `b`, menggunakan struktur kondisional `if...else if`.
- Pesan log dicetak berdasarkan hasil perbandingan nilai `a` dan `b`.

### Ans-3: Switch Case untuk Mengetahui Nama Hari

```javascript
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
```

**Penjelasan:**
- Kode ini menggunakan struktur `switch case` untuk menentukan nama hari berdasarkan nilai `angkaHari`.
- Setiap `case` mewakili satu hari dan mencetak nama hari sesuai dengan angka yang diberikan.
- `default` menangani nilai yang tidak valid.

### Ans-4: Switch Case untuk Game Sederhana

```javascript
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
```

**Penjelasan:**
- Kode ini menggunakan struktur `switch case` untuk menggerakkan karakter dalam game sederhana berdasarkan nilai `arah`.
- Setiap `case` menentukan arah pergerakan karakter dan mencetak pesan sesuai dengan arah yang diberikan.
- `default` menangani nilai arah yang tidak valid.



## Perbedaan antara Procedural, Conditional, dan Looping:

#### 1. Procedural:
Prosedural adalah paradigma pemrograman yang berfokus pada langkah-langkah atau prosedur-prosedur yang harus dilakukan secara berurutan. Pada pendekatan ini, program diorganisir menjadi serangkaian langkah atau fungsi-fungsi yang dieksekusi secara berurutan.

#### 2. Conditional:
Kondisional atau pemilihan adalah bagian dari logika kontrol aliran program yang memungkinkan kita menjalankan blok kode tertentu berdasarkan kondisi tertentu. Kondisional memungkinkan kita membuat keputusan di dalam program, seperti jika suatu kondisi terpenuhi, lakukan sesuatu, dan jika tidak, lakukan sesuatu yang lain.

#### 3. Looping:
Looping atau perulangan adalah konsep yang memungkinkan kita menjalankan serangkaian pernyataan atau blok kode berulang kali. Ini membantu menghindari penulisan kode yang panjang dan membosankan dengan mengeksekusi serangkaian perintah yang sama berulang kali.

## Kapan Harus Menggunakan Looping?

Looping digunakan ketika kita perlu menjalankan serangkaian pernyataan atau tugas berulang kali, berdasarkan kondisi atau jumlah iterasi tertentu. Ini membantu mengoptimalkan kode, mengurangi duplikasi, dan membuat program lebih efisien.

## 3 Jenis Looping dan Fungsinya:

#### 1. **for Loop:**
   - **Fungsi:** Digunakan untuk melakukan iterasi sejumlah tertentu, berdasarkan inisialisasi, kondisi, dan langkah iterasi yang ditentukan.

   ```javascript
   for (let i = 0; i < 5; i++) {
     console.log(i);
   }
   ```

#### 2. **while Loop:**
   - **Fungsi:** Mengeksekusi serangkaian pernyataan selama kondisi yang diberikan bernilai benar.

   ```javascript
   let i = 0;
   while (i < 5) {
     console.log(i);
     i++;
   }
   ```

#### 3. **do...while Loop:**
   - **Fungsi:** Mirip dengan `while`, tetapi pernyataan di dalamnya akan dieksekusi setidaknya satu kali bahkan jika kondisi awal tidak terpenuhi.

   ```javascript
   let i = 0;
   do {
     console.log(i);
     i++;
   } while (i < 5);
   ```
   
Looping sangat berguna untuk mengotomatiskan tugas berulang dan mengatasi masalah yang melibatkan sejumlah besar data atau operasi.