// //1.Menentukan nilai
let PABP = Number(prompt("Masukkan nilai PABP Anda"))
let MTK = Number(prompt("Masukkan nilai MTK Anda"))
let DPK = Number(prompt("Masukkan nilai DPK Anda"))
let rtrt = (PABP + MTK + DPK) / 3;

if (rtrt >= 80 && rtrt <100) {
    result = "A"
} else if (rtrt >=75 && rtrt< 80) {
    result = "B"
} else if (rtrt >=65 && rtrt< 75) {
    result = "C"
} else if (rtrt >=45 && rtrt< 65) {
    result = "D"
} else if (rtrt >=0 && rtrt< 45) {
    result = "E"
} else {
    result = "K"
}

console.log (`Anda mendapatkan nilai rata-rata ${rtrt} sehingga ia mendapatkan nilai ${result}`)

// //2.menentukan informasi dari kode pegawai
let kode = Number(prompt("Masukkan kode pegawai anda"))
let g = Math.floor(kode % 100000000000/10000000000)
let dd = Math.floor(kode % 10000000000/100000000)
let mm = Math.floor(kode % 100000000/1000000)
let year = Math.floor(kode % 1000000/100)
let nn = Math.floor(kode % 100)

if (g > 4) {
    g = "(Tidak ada golongan)"
} 

if (mm == 1) {
    mm = "Januari"
} else if (mm == 2) {
    mm = "Febuari"
} else if (mm == 3) {
    mm = "Maret"
} else if (mm == 4) {
    mm = "April"
} else if (mm == 5) {
    mm = "Mei"
} else if (mm == 6) {
    mm = "Juni"
} else if (mm == 7) {
    mm = "Juli"
} else if (mm == 8) {
    mm = "Agustus"
} else if (mm == 9) {
    mm = "September"
} else if (mm == 10) {
    mm = "Oktober"
} else if (mm == 11) {
    mm = "November"
} else if (mm == 12) {
    mm = "Desember"
} else {
    mm = "Unknown"
}

console.log(`jadi informasi yang didapatkan dari kode pegawai anda adalah ${g} adalah nomor golongan anda ${dd} adalah hari lahir anda ${mm} adalah bulan lahir anda ${year} adalah tahun lahir anda ${nn} adalah kode identitas`)


// 3.Penambahan 1 detik
let Jam = Number(prompt(`masukkan jam`))
let Menit = Number(prompt(`masukkan menit`))
let Detik = Number(prompt(`masukkan detik`)) + 1

if (Detik > 59) {
    Hasil = Detik = 0
    HasilM = Menit + 1
    HasilJ = Jam
    Hasil1 = `jadi jika ditambahkan 1 detik maka waktunya menjadi ${HasilJ}:${HasilM}:${Hasil}`


if (HasilM > 59){
        HasilM = Menit = 0
        HasilJ = Jam + 1
        Hasil1 = `jadi jika ditambahkan 1 detik maka waktunya menjadi ${HasilJ}:${HasilM}:${Hasil}`
    }

if (HasilJ > 23) {
        HasilJ = Jam = 0
        HasilM = Menit = 0
        Hasil = Detik = 0
        Hasil1 = `jadi jika ditambahkan 1 detik maka waktunya menjadi ${HasilJ}:${HasilM}:${Hasil}`
    }

    console.log(Hasil1)
} else {
    console.log(`jadi jika ditambahkan 1 detik maka waktunya menjadi ${Jam}:${Menit}:${Detik}`)
}




