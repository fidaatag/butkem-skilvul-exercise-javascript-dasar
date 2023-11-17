# **Exercise: JavaScript Functions**

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

Fungsi `konversiTemperatur` mengubah suhu antara Fahrenheit dan Celsius menggunakan fungsi helper `FahToCel` dan `CelToFah`.

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

Fungsi `hitungUmurKucing` menghitung umur kucing dalam tahun manusia dengan mempertimbangkan aturan tertentu.