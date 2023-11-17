/*  Exercise

1------
Buat sebuah function untuk toko online kita. Ikuti poin-poin dibawah ini:
Function mempunyai 2 parameter yaitu nama pembeli dan produk yang dibeli
Function akan mengembalikan nilai “Terima kasih (nama pembeli) telah membeli produk (produk yang dibeli)”
Panggil function dengan menggunakan console.log()


2------
Buat sebuah function helper untuk convert temperatur Celcius ke Fahrenherit dan sebaliknya. Ikuti poin-poin dibawah ini:
Buat sebuah function helper lalu gunakan pada function converternya. Seperti contoh dibawah ini. Jadi kita tinggal membuat function helper dan function utama untuk convert fahrenheit ke Celcius


3------
Kita akan membuat program untuk menghitung umur kucing dalam usia manusia. Poin-poinya adalah:
Pada usia 1 tahun, umur kucing adalah 15 kali umur manusia
Pada usia 2 tahun, umur kucing adalah 24 kali umur manusia
Pada usia 3 tahun (> 24 tahun) dan seterusnya umur kucing adalah 4 kali umur manusia. Jadi jika umur kucing saat ini 4 tahun berarti dalam kalendar tahun kucing, umurnya adalah 32 tahun.
Buat sebuah ARROW function yang menerima parameter umur kucing berdasarkan perhitungan tahun manusia.


4-------
Buat sebuah function untuk mengubah format semua string menjadi huruf kecil.
Menerima 1 parameter string
Gunakan single line block function
Output adalah string yang telah diubah formatnya menjadi lower case
Gunakan built in method string

*/


// --- Ans-1
function TokoOnline(pembeli, beliApa) {
  return(`Terima kasih ${pembeli} telah membeli produk ${beliApa}`)
}

console.log(TokoOnline("fidaa", "sabun"))








// --- Ans-2

// function helper F-> C
function FahToCel(fahrenheit) {
  let ToCelcius = (fahrenheit - 32) * 5/9;
  return ToCelcius;
}
// function helper C->F
function CelToFah(celcius) {
  let ToFahrenheit = (celcius * 9/5) + 32;
  return ToFahrenheit;
}

// fungsi utama untuk konversi
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









// --- Ans-3

const hitungUmurKucing = (umurManusia) => {
  if (umurManusia === 1) {
    return 15;
  } else if (umurManusia === 2)  {
    return 24;
  } else if (umurManusia > 2) {
    // Untuk umur di atas 2 tahun, umur kucing adalah 4 kali umur manusia setelah tahun kedua
    return 24 + (umurManusia - 2) * 4;
  } else {
    // Mengatasi nilai umur yang tidak valid (kurang dari 1)
    return "Umur tidak valid";
  }
} 

// Contoh penggunaan
const umurKucingSaatIni = 4;
const umurKucingDalamTahunManusia = hitungUmurKucing(umurKucingSaatIni);

console.log(`Umur kucing ${umurKucingSaatIni} tahun dalam tahun manusia adalah ${umurKucingDalamTahunManusia} tahun.`);




// --- Ans-4.Ops 1 single line block function
const ubahFormat = (jadiKecil) => jadiKecil.toLowerCase() ;

console.log(ubahFormat("JADI KECIL"));





// --- Ans-4.Ops 2 tanpa build function bawaan JS
const ubahFormatLagi = (jadiKecilLagi) => {
  let hasilFormat = "";

  for (let i = 0; i < jadiKecilLagi.length; i++) {
    let huruf = jadiKecilLagi[i];
    
    // mengubah huruf kapital jadi biasa
    if (huruf >= "A" && huruf <= "Z") {
      // pakai ASCII code untuk konfersi
      hasilFormat += String.fromCharCode(huruf.charCodeAt(0) + 32);
    } else {
      // menambahkan huruf / karakter yang tidak bisa di konversi
      hasilFormat += huruf;
    }
  }

  return hasilFormat;
}

// Contoh penggunaan
const stringInput = "JADI KECIL  laGI DonG";
const stringOutput = ubahFormatLagi(stringInput);

console.log(`String setelah diubah ke huruf kecil: ${stringOutput}`);

