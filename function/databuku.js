// Nama file: /function/data-buku.js

const daftarBuku = [
    {
        id: 1,
        judul: "Seni Memvisualisasikan Naskah",
        penulis: "Dedy Indra Setiawan",
        harga: "Rp 75.000",
        gambar: "/public/produk/print.webp",
        deskripsi: "Panduan mendalam mengubah narasi menjadi estetika visual."
    },
    {
        id: 2,
        judul: "Modul Pengantar Multimedia",
        penulis: "Dedy Indra Setiawan",
        harga: "Rp 80.000",
        gambar: "/public/produk/print.webp",
        deskripsi: "Buku referensi lengkap mengenai dasar-dasar teknologi multimedia."
    },
    {
        id: 3,
        judul: "Terbuang dalam Waktu: Kamu yang Menemukanku",
        penulis: "Dedy Indra Setiawan",
        harga: "Rp 85.000",
        gambar: "/public/produk/print.webp",
        deskripsi: "Eksplorasi naratif tentang hubungan manusia dan waktu."
    }
    // Kalau mau tambah buku ke-4, tinggal tambahkan di sini saja
];

// Ambil elemen wadah dari HTML
const wadahBuku = document.getElementById('tempat-etalase-buku');

// Pastikan wadahnya ada di halaman tersebut agar tidak error
if (wadahBuku) {
    let htmlBuku = ''; // Variabel untuk menampung HTML

    // Cek apakah ini halaman Home atau Toko Buku
    // Misalnya, di Home kita cuma mau tampilkan 3 buku terbaru
    let bukuYangDitampilkan = daftarBuku;

    // Jika ada elemen khusus (misal ID 'halaman-home'), batasi datanya
    if (document.getElementById('halaman-home')) {
        bukuYangDitampilkan = daftarBuku.slice(0, 3); // Ambil 3 data pertama saja
    }

    // Lakukan perulangan untuk setiap buku
    bukuYangDitampilkan.forEach(buku => {
        htmlBuku += `
            <div class="katalog-card shadow-sm">
                <div class="image-container">
                    <img src="${buku.gambar}" alt="${buku.judul}" class="book-cover">
                </div>
                <div class="book-info flex-grow-1">
                    <h3 class="book-title">${buku.judul}</h3>
                    <p class="book-author">Penulis: ${buku.penulis}</p>
                    <p class="book-price">${buku.harga}</p>
                </div>
                <button class="btn fw-bold w-100 paket-btn-custom"
                    style="background-color: #002967; color: white; border: 2px solid #002967;"
                    onclick="bukaModal('${buku.judul}', 'Penulis: ${buku.penulis}', '${buku.harga}', '${buku.gambar}')">
                    Order Sekarang
                </button>
            </div>
        `;
    });

    // Masukkan hasil HTML yang sudah dirangkai ke dalam wadah
    wadahBuku.innerHTML = htmlBuku;
}