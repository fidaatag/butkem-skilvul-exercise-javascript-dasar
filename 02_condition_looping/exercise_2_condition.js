/*  Exercise

1------
Kita sudah mengetahui bahwa banyaknya user maksimal adalah 100.
Buat sebuah program yang menampilkan teks ‘User ke - 1 … User ke - 100’ pada setiap baris di halaman HTML.
Lakukan FOR LOOP pada Javascript.


2-----
Lakukan pengulangan menggunakan FOR LOOP untuk melakukan penambahan nilai sebanyak 10 kali.
Nilai awal = 0
Pengulangan = 10 kali
Nilai awal ditambah 2 setiap pengulangan
Tampilan hasil penambahan pada setiap pengulangan


3-----
Lakukan pengulangan dengan FOR LOOP yang melakukan iterasi dari 0..20.
Setiap iterasi/pengulangan lakukan pengecekan apakah nilai tersebut ganjil atau genap.
Tampilkan keterangan ganjil dan genap pada sebuah nilai setiap pengulangan


4-----
ampilkan sebuah Konfirmasi Pop Up kepada user menggunakan confirm();
Berikan teks ‘Apakah anda mau mengulang’ pada box confirm
Jika user memilih ‘OK’ maka program akan terus menampilan pop up yang sama
Jika user memilih ‘Cancel’ maka program akan menampilkan teks ‘Perulangan sudah dilakukan sebanyak …(jumlah klik OK yang dilakukan user)


5------
Buat sebuah program kuis.
Tampilkan prompt() untuk meminta inputan dari user. Tampilan teks ‘Sebutkan kepanjangan dari nama IB (Impact Byte)?’
Lakukan pengecekan apakah jawaban dari user sudah benar
Jika benar, tampilkan alert ‘Selamat jawaban kamu benar’
Jika salah, lakukan pengulangan untuk menampilkan prompt() yg sama hingga jawaban dari user benar



*/


// --- Ans-1
for (let index = 1; index <= 100; index++) {
  console.log(`user ke-${index}`)
}





// --- Ans-2

// tentukan nilai awal
let nilaiAwal = 0

for (let indexke = 0; indexke <= 10; indexke += 2) {
  // Menambahkan nilai awal dengan 2 pada setiap pengulangan
  nilaiAwal += 2
  // Menampilkan hasil penambahan pada setiap pengulangan
  console.log(`Hasil penambahan pada pengulangan ke-${indexke + 1}: ${nilaiAwal}`)
}




// --- Ans-3
for (let jilnap = 0; jilnap <= 20; jilnap++) {
  if (jilnap % 2 === 0) {
    console.log(`${jilnap} termasuk bilangan genap`)
  } else {
    console.log(`${jilnap} termasuk bilangan ganjil`)
  }
  
}



// --- Ans 4
let countClickOk = 0

// menggunakan for lop tanpa kondisi penghentian yang eksplisit
for (;;) {
  const konfirmasi = confirm("Apakah anda mau mengulang?");

  // Jika user memilih 'OK'
  if (konfirmasi) {
    countClickOk ++;
  } else {
     // Jika user memilih 'Cancel'
    alert(`Perulangan sudah dilakukan sebanyak ${countClickOk} kali.`);
    break; // Menghentikan pengulangan
  }
}





// --- Ans 5
// Tampilkan prompt() untuk meminta inputan dari user. Tampilan teks ‘Sebutkan kepanjangan dari nama IB (Impact Byte)?’
// Lakukan pengecekan apakah jawaban dari user sudah benar
// Jika benar, tampilkan alert ‘Selamat jawaban kamu benar’
// Jika salah, lakukan pengulangan untuk menampilkan prompt() yg sama hingga jawaban dari user benar

const jawabanBenar = "Impact Byte"

// gunakan cara lingkaran setan ^-^
// pengulangan untuk memastikan jawaban benar
while (true) {
  const jawabanUser = prompt("Sebutkan kepanjangan dari nama IB");

  if (jawabanUser === jawabanBenar) {
    alert("Selamat jawaban kamu benar")
    break; // cara keluar dari perulangan


  } else {
    alert("Jawaban kamu salah. Silakan coba lagi.")
  }

}








