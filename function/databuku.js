// Nama file: /function/data-buku.js

const daftarBuku = [
    {
        id: 1,
        judul: "Seni Memvisualisasikan Naskah",
        penulis: "Dedy Indra Setiawan",
        harga: "Rp 75.000",
        gambar: "/public/produk/print.webp", // Ganti dengan gambar cover bukumu nanti ya
        deskripsi: "Panduan mendalam mengubah narasi menjadi estetika visual.",
        rating: "4.9",
        terjual: "500+"
    },
    {
        id: 2,
        judul: "Modul Pengantar Multimedia",
        penulis: "Dedy Indra Setiawan",
        harga: "Rp 80.000",
        gambar: "/public/produk/print.webp",
        deskripsi: "Buku referensi lengkap mengenai dasar-dasar teknologi multimedia.",
        rating: "5.0",
        terjual: "2rb+"
    },
    {
        id: 3,
        judul: "Terbuang dalam Waktu: Kamu yang Menemukanku",
        penulis: "Dedy Indra Setiawan",
        harga: "Rp 85.000",
        gambar: "/public/produk/print.webp",
        deskripsi: "Eksplorasi naratif tentang hubungan manusia dan waktu.",
        rating: "4.8",
        terjual: "1rb+"
    }
    // Kalau mau tambah buku ke-4, tinggal copy paste format di atas ke bawah sini
];

// Ambil elemen wadah dari HTML
const wadahBuku = document.getElementById('tempat-etalase-buku');

// Pastikan wadahnya ada di halaman tersebut agar tidak error
if (wadahBuku) {
    let htmlBuku = ''; // Variabel untuk menampung HTML

    // Cek apakah ini halaman Home atau Toko Buku
    let bukuYangDitampilkan = daftarBuku;

    // Jika ada elemen khusus (misal ID 'halaman-home'), batasi datanya
    if (document.getElementById('halaman-home')) {
        bukuYangDitampilkan = daftarBuku.slice(0, 3); // Ambil 3 data pertama saja
    }

    // Lakukan perulangan untuk setiap buku
    bukuYangDitampilkan.forEach(buku => {
        htmlBuku += `
            <div class="katalog-card">
                <div class="image-container">
                    <img src="${buku.gambar}" alt="${buku.judul}" class="book-cover">
                </div>
                <div class="book-info">
                    <h3 class="book-title">${buku.judul}</h3>
                    
                    <div style="font-size: 0.75rem; color: #6b7280; margin-bottom: 8px; display: flex; align-items: center; gap: 4px;">
                        <i class="bi bi-star-fill" style="color: #fbbf24;"></i> 
                        <span>${buku.rating}</span> <span style="color: #cbd5e1;">|</span> <span>Terjual ${buku.terjual}</span>
                    </div>

                    <p class="book-price">${buku.harga}</p>

                    <div style="font-size: 0.75rem; color: #6b7280; display: flex; align-items: center; gap: 4px; margin-bottom: 12px; margin-top: auto;">
                        <i class="bi bi-geo-alt"></i> Bojonegoro
                    </div>

                    <button class="btn fw-bold w-100 btn-bungded"
                        onclick="bukaModal('${buku.judul}', 'Penulis: ${buku.penulis}. ${buku.deskripsi}', '${buku.harga}', '${buku.gambar}')">
                        Order Sekarang
                    </button>
                </div>
            </div>
        `;
    });

    // Masukkan hasil HTML yang sudah dirangkai ke dalam wadah
    wadahBuku.innerHTML = htmlBuku;
}