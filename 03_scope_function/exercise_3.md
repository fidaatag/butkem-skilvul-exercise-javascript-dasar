# **Exercise: JavaScript Functions**


## Apakah wajib menggunakan return pada function?
Tidak, tidak selalu wajib menggunakan `return` pada sebuah fungsi di JavaScript. Fungsi dalam JavaScript dapat memiliki atau tidak memiliki pernyataan `return`. Alasannya tergantung pada tujuan dan fungsionalitas spesifik dari fungsi tersebut.

Beberapa poin untuk diperhatikan:

1. **Tidak Ada Nilai Kembali (Return Undefined):** Jika fungsi tidak memiliki pernyataan `return`, secara default, fungsi tersebut akan mengembalikan nilai `undefined`. Hal ini sering terjadi pada fungsi-fungsi yang hanya digunakan untuk menjalankan aksi atau tugas tertentu tanpa mengembalikan nilai tertentu.

    ```javascript
    function sapa(nama) {
      console.log(`Halo, ${nama}!`);
    }

    // Panggil fungsi
    sapa("John");
    ```

    Dalam contoh di atas, fungsi `sapa` hanya mencetak pesan ke konsol dan tidak mengembalikan nilai.

2. **Mengembalikan Nilai:**
   Pada fungsi yang dimaksudkan untuk menghasilkan nilai yang akan digunakan di tempat lain dalam program, pemakaian `return` diperlukan. 

    ```javascript
    function tambah(a, b) {
      return a + b;
    }

    // Panggil fungsi dan simpan hasilnya
    let hasilPenambahan = tambah(3, 5);

    console.log(hasilPenambahan); // Output: 8
    ```

    Dalam contoh di atas, fungsi `tambah` mengembalikan hasil penambahan dari dua parameter yang diberikan.

Pemakaian `return` atau tidak tergantung pada kebutuhan spesifik dari fungsi tersebut. Penting untuk mempertimbangkan apakah fungsi tersebut seharusnya memberikan nilai kembali atau hanya melakukan tugas tertentu tanpa memberikan nilai.

---


### **Ans-1: Toko Online**

```javascript
// Fungsi untuk toko online
function TokoOnline(pembeli, beliApa) {
  return(`Terima kasih ${pembeli} telah membeli produk ${beliApa}`);
}

// Contoh penggunaan
console.log(TokoOnline("fidaa", "sabun"));
```

Fungsi `TokoOnline` memberikan ucapan terima kasih kepada pembeli dan mencantumkan produk yang dibeli.

---

### **Ans-2: Konversi Temperatur**

```javascript
// Fungsi helper Fahrenheit ke Celsius
function FahToCel(fahrenheit) {
  let ToCelsius = (fahrenheit - 32) * 5/9;
  return ToCelsius;
}

// Fungsi helper Celsius ke Fahrenheit
function CelToFah(celsius) {
  let ToFahrenheit = (celsius * 9/5) + 32;
  return ToFahrenheit;
}

// Fungsi utama untuk konversi temperatur
function konversiTemperatur(suhu, satuan) {
  if (satuan.toLowerCase() === 'c') {
      var hasil = CelToFah(suhu);
      return suhu + " Celsius sama dengan " + hasil + " Fahrenheit";
  } else if (satuan.toLowerCase() === 'f') {
      var hasil = FahToCel(suhu);
      return suhu + " Fahrenheit sama dengan " + hasil + " Celsius";
  } else {
      return "Satuan temperatur tidak valid. Gunakan 'C' atau 'F'.";
  }
}

// Contoh penggunaan
console.log(konversiTemperatur(30, 'C'));
console.log(konversiTemperatur(98.6, 'F'));
```
penjelasan: 
- **Fungsi Helper Fahrenheit ke Celsius (`FahToCel`):**
  - Mengonversi suhu dari Fahrenheit ke Celsius menggunakan rumus `(Fahrenheit - 32) * 5/9`.

- **Fungsi Helper Celsius ke Fahrenheit (`CelToFah`):**
  - Mengonversi suhu dari Celsius ke Fahrenheit menggunakan rumus `(Celsius * 9/5) + 32`.

- **Fungsi Utama untuk Konversi Temperatur (`konversiTemperatur`):**
  - Menerima dua parameter, `suhu` dan `satuan`.
  - Memeriksa satuan yang diberikan (Celsius atau Fahrenheit) dan melakukan konversi dengan memanggil fungsi helper yang sesuai.
  - Mengembalikan string yang memberikan hasil konversi atau pesan kesalahan jika satuan tidak valid.

- **Contoh Penggunaan:**
  - Menunjukkan hasil konversi dari Celsius ke Fahrenheit dan sebaliknya untuk suhu 30 dan 98.6.

---

### **Ans-3: Umur Kucing dalam Tahun Manusia**

```javascript
// Arrow function untuk menghitung umur kucing dalam tahun manusia
const hitungUmurKucing = (umurManusia) => {
  if (umurManusia === 1) {
    return 15;
  } else if (umurManusia === 2)  {
    return 24;
  } else if (umurManusia > 2) {
    return 24 + (umurManusia - 2) * 4;
  } else {
    return "Umur tidak valid";
  }
};

// Contoh penggunaan
const umurKucingSaatIni = 4;
const umurKucingDalamTahunManusia = hitungUmurKucing(umurKucingSaatIni);

console.log(`Umur kucing ${umurKucingSaatIni} tahun dalam tahun manusia adalah ${umurKucingDalamTahunManusia} tahun.`);
```
Penjelasan:
- Fungsi `hitungUmurKucing` menerima satu parameter, yaitu `umurManusia`, yang merupakan umur manusia yang akan dikonversi menjadi umur kucing.
- Dalam fungsi tersebut, menggunakan struktur kondisional (`if-else`) untuk menentukan peraturan umur kucing berdasarkan umur manusia yang diberikan.
- Jika `umurManusia` adalah 1 tahun, umur kucing adalah 15 tahun manusia.
- Jika `umurManusia` adalah 2 tahun, umur kucing adalah 24 tahun manusia.
- Jika `umurManusia` lebih dari 2 tahun, umur kucing dihitung menggunakan rumus 4 kali (umur manusia - 2) + 24.
- Jika `umurManusia` kurang dari 1 tahun, fungsi mengembalikan pesan kesalahan karena aturan tidak berlaku untuk umur manusia kurang dari 1 tahun.
- Contoh penggunaan ditunjukkan dengan menghitung umur kucing saat ini (4 tahun) dan mencetak hasilnya.

---

### Ans-4 ops.1 : Fungsi dengan 1 Baris Blok (Single Line Block Function)

```javascript
const ubahFormat = (jadiKecil) => jadiKecil.toLowerCase();
```
Penjelasan:
- Pada baris pertama, terdapat deklarasi fungsi `ubahFormat` yang merupakan single line block function.
- Fungsi ini menerima satu parameter, `jadiKecil`, dan langsung mengembalikan nilai dari panggilan metode `toLowerCase()` pada parameter tersebut.
- Kelebihan dari single line block function adalah kesederhanaan dan kekompakan, namun perlu diperhatikan agar tidak terlalu kompleks sehingga mudah dibaca.

### Ans-4 ops.2 : Fungsi Tanpa Menggunakan Built-in Function JavaScript

```javascript
const ubahFormatLagi = (jadiKecilLagi) => {
  let hasilFormat = "";

  for (let i = 0; i < jadiKecilLagi.length; i++) {
    let huruf = jadiKecilLagi[i];
    
    // Mengubah huruf kapital menjadi huruf kecil
    if (huruf >= "A" && huruf <= "Z") {
      // Menggunakan ASCII code untuk konversi
      hasilFormat += String.fromCharCode(huruf.charCodeAt(0) + 32);
    } else {
      // Menambahkan huruf/karakter yang tidak dapat dikonversi
      hasilFormat += huruf;
    }
  }

  return hasilFormat;
}

// Contoh penggunaan
const stringInput = "JADI KECIL  laGI DonG";
const stringOutput = ubahFormatLagi(stringInput);

console.log(`String setelah diubah ke huruf kecil: ${stringOutput}`);
```
Penjelasan:
- Pada baris pertama, terdapat deklarasi fungsi `ubahFormatLagi` yang mengubah format string menjadi huruf kecil tanpa menggunakan built-in function seperti `toLowerCase()`.
- Fungsi ini menggunakan loop `for` untuk mengiterasi melalui setiap karakter dalam string.
- Terdapat penggunaan ASCII code untuk mengonversi huruf kapital menjadi huruf kecil.
- Hal ini menunjukkan pendekatan manual yang kurang umum digunakan dibandingkan dengan menggunakan built-in function. Namun, pendekatan ini memberikan gambaran tentang bagaimana proses konversi karakter dapat dilakukan secara manual.

