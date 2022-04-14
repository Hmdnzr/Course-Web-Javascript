// Membuat object
// 1. Object Literal

// var mhs = {
//     nama : "Hamdan ZR",
//     umur : 23,
//     ips : [5.00, 7.50, 4.20],
//     alamat : {
//         jalan : "Jl. deliikao No. 123",
//         kota : "BOGOR",
//         provinsi : "Jawa Barat"
//     }
// };

var mhs1 = {
        nama : "Hamadan R",
        nrp :  '20180178',
        email : 'koroko@gmail.com',
        jurusan : 'Teknik Informatika'
}

var mhs2 = {
    nama : "Maharani putrak",
    nrp :  '20180179',
    email : 'maharanixxx@gmail.com',
    jurusan : 'Teknik Informatika'
}


// 2. Function Declaration
function buatObjectMahasiswa(nama, nrp, email, jurusan) {
    var mhs = {};
    mhs.nama = nama;
    mhs.nrp = nrp;
    mhs.email = email;
    mhs.jurusan = jurusan;

    return mhs;
}

var mhs3 = buatObjectMahasiswa('Nika', '20180111', 'nanxxxx@gmail.com', 'Teknik Informatika')


// 3. Constructor (Keyword new)
function Mahasiswa(nama, nrp, email, jurusan) {
    // var this = {};
    this.nama = nama;
    this.nrp = nrp;
    this.email = email;
    this.jurusan = jurusan;
    // return this;
}

var mhs4 = new Mahasiswa('fatih', '2019012', 'fatihxxx@gmail.com', 'Teknik Infantr')