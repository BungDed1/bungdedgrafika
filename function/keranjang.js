// Variabel global untuk menyimpan data awal saat modal dibuka
let produkPilihan = "";
let hargaAwalString = "";
let deskripsiAwal = "";

/**
 * =================================================================
 * DATABASE VARIASI PRODUK (Otomatis memunculkan dropdown di modal)
 * =================================================================
 */
const variasiProduk = {
    "Jasa Bordir": [
        { nama: "Bordir Nama", harga: 3500 },
        { nama: "Bordir Logo (Maksimal 9cm)", harga: 4500 }
    ],
    "Jasa Sablon DTF": [
        { nama: "Sablon DTF A4", harga: 14000 },
        { nama: "Sablon DTF A3", harga: 43000 }
    ],
    "Pembuatan Stempel": [
        { nama: "Stempel Kayu (Manual)", harga: 30000 },
        { nama: "Stempel Flash (Otomatis)", harga: 75000 }
    ],
    "Poster A5 & A4": [
        { nama: "Poster A5 (AP 120/150 Gsm)", harga: 900 },
        { nama: "Poster A5 (AP 230/260 Gsm)", harga: 1000 },
        { nama: "Poster A4 (AP 120/150 Gsm)", harga: 1800 },
        { nama: "Poster A4 (AP 230/260 Gsm)", harga: 2000 }
    ],
    "Poster A3": [
        { nama: "Poster A3 (AP 120/150 Gsm)", harga: 3200 },
        { nama: "Poster A3 (AP 230 Gsm)", harga: 4000 },
        { nama: "Poster A3 (AP 260 Gsm)", harga: 4500 }
    ],
    "Legalitas & Penerbitan": [
        { nama: "Terbit QRCBN", harga: 10000 },
        { nama: "Daftar Hak Cipta (HKI)", harga: 330000 }
    ],
    "Design Banner/Poster": [
        { nama: "Design Poster", harga: 10000 },
        { nama: "Design Banner", harga: 15000 }
    ]
};

/**
 * Fungsi format angka menjadi Rupiah (Rp X.XXX)
 */
function formatRupiah(angka) {
    return "Rp " + angka.toLocaleString('id-ID');
}

/**
 * Fungsi utama untuk membuka Modal Bootstrap
 */
function bukaModal(judul, deskripsi, harga, gambar) {
    produkPilihan = judul;
    hargaAwalString = harga;
    deskripsiAwal = deskripsi;

    document.getElementById('detailJudul').innerText = judul;

    // SUNTIKAN SAKTI: Cek apakah produk ini punya variasi di database atas
    let extraHTML = "";
    if (variasiProduk[judul]) {
        extraHTML += `
            <div class="mt-4 p-3" style="background-color: #f8fafc; border-radius: 8px; border: 1px solid #e2e8f0;">
                <label class="form-label fw-bold small text-muted text-uppercase mb-2">Pilih Varian Layanan</label>
                <select id="inputVariasi" class="form-select fw-bold" style="border: 2px solid #cbd5e1; border-radius: 6px; cursor: pointer;">`;

        variasiProduk[judul].forEach((v) => {
            extraHTML += `<option value="${v.harga}" data-nama="${v.nama}">${v.nama} - Rp ${v.harga.toLocaleString('id-ID')}</option>`;
        });

        extraHTML += `</select></div>`;
    }

    // Tempat penampungan notifikasi diskon grosir
    extraHTML += `<div id="notifGrosir" class="mt-2"></div>`;

    // Masukkan deskripsi + elemen tambahan ke modal
    document.getElementById('detailDeskripsi').innerHTML = deskripsi + extraHTML;

    // Menangani Gambar
    const elemenGambar = document.getElementById('detailGambar');
    if (gambar && gambar !== "") {
        elemenGambar.src = gambar;
        elemenGambar.classList.remove('d-none');
    } else {
        elemenGambar.src = "";
        elemenGambar.classList.add('d-none');
    }

    // Reset nilai input
    document.getElementById('inputKuantitas').value = 1;
    document.getElementById('inputCatatan').value = "";

    // Pasang "pendengar" ke dropdown variasi agar harga berubah otomatis saat variasi diganti
    const inputVar = document.getElementById('inputVariasi');
    if (inputVar) {
        inputVar.addEventListener('change', updateHargaTotal);
    }

    // Hitung harga awal saat modal pertama kali muncul
    updateHargaTotal();

    // Tampilkan Modal
    const modalElement = document.getElementById('modalProduk');
    const myModal = bootstrap.Modal.getInstance(modalElement) || new bootstrap.Modal(modalElement);
    myModal.show();
}

/**
 * =========================================================
 * LOGIKA HARGA BERTINGKAT / DINAMIS SAAT KUANTITAS DIUBAH
 * =========================================================
 */
function updateHargaTotal() {
    let qty = parseInt(document.getElementById('inputKuantitas').value);
    if (isNaN(qty) || qty < 1) qty = 1;

    let totalHarga = 0;
    let elemenHarga = document.getElementById('detailHarga');
    let notifGrosir = document.getElementById('notifGrosir');

    if (notifGrosir) notifGrosir.innerHTML = ""; // Bersihkan notif grosir dulu

    const inputVar = document.getElementById('inputVariasi');

    // 1. KASUS KHUSUS 1: Lanyard Custom (Harga Bertingkat / Grosir)
    if (produkPilihan.includes("Lanyard Custom")) {
        if (qty > 24) {
            totalHarga = 12600 * qty;
            if (notifGrosir) notifGrosir.innerHTML = "<strong style='color: #10b981; font-size: 0.85rem;'><i class='bi bi-check-circle-fill'></i> Harga Grosir Besar (Rp 12.600/pcs) aktif!</strong>";
        } else if (qty >= 7) {
            totalHarga = 14150 * qty;
            if (notifGrosir) notifGrosir.innerHTML = "<strong style='color: #10b981; font-size: 0.85rem;'><i class='bi bi-check-circle-fill'></i> Harga Grosir Sedang (Rp 14.150/pcs) aktif!</strong>";
        } else {
            totalHarga = 18200 * qty;
        }
        elemenHarga.innerText = formatRupiah(totalHarga);
    }

    // 2. KASUS KHUSUS 2: Produk dengan Dropdown Variasi (Misal: Bordir, Sablon)
    else if (inputVar) {
        let hargaVariasi = parseInt(inputVar.value);
        totalHarga = hargaVariasi * qty;
        elemenHarga.innerText = formatRupiah(totalHarga);
    }

    // 3. KASUS KHUSUS 3: Harga Menyesuaikan (Tidak bisa dihitung otomatis)
    else if (hargaAwalString.toLowerCase().includes("menyesuaikan") || hargaAwalString.toLowerCase().includes("custom")) {
        elemenHarga.innerText = "Harga Menyesuaikan";
    }

    // 4. KASUS UMUM: Produk biasa yang harganya cuma satu (Misal: Banner)
    else {
        // Ekstrak angka dari teks (Contoh: "Rp 25.000 /m" menjadi 25000)
        let hargaSatuan = parseInt(hargaAwalString.replace(/[^0-9]/g, ''));

        if (!isNaN(hargaSatuan)) {
            totalHarga = hargaSatuan * qty;
            elemenHarga.innerText = formatRupiah(totalHarga);
        } else {
            elemenHarga.innerText = hargaAwalString;
        }
    }
}

// Pasang pendengar di input Kuantitas agar harga berubah otomatis saat diketik
document.addEventListener("DOMContentLoaded", function () {
    document.addEventListener('input', function (e) {
        if (e.target && e.target.id === 'inputKuantitas') {
            updateHargaTotal();
        }
    });
});

/**
 * =========================================================
 * CHECKOUT KE WHATSAPP
 * =========================================================
 */
function checkoutWA() {
    let kuantitas = document.getElementById('inputKuantitas').value;
    let catatan = document.getElementById('inputCatatan').value;
    let hargaFinal = document.getElementById('detailHarga').innerText;

    let namaProdukFinal = produkPilihan;

    // Jika produk ini punya variasi, tambahkan nama variasinya ke pesan WA
    const inputVar = document.getElementById('inputVariasi');
    if (inputVar) {
        let namaVariasi = inputVar.options[inputVar.selectedIndex].getAttribute('data-nama');
        namaProdukFinal = produkPilihan + " (" + namaVariasi + ")";
    }

    if (kuantitas < 1 || isNaN(kuantitas)) {
        alert("Mohon masukkan jumlah pesanan minimal 1.");
        document.getElementById('inputKuantitas').focus();
        return;
    }

    const nomorWA = "6281515709786";

    // Menyusun format struk pesan WhatsApp
    let pesan = `Halo Admin *BungDed Grafika*, saya ingin melakukan pemesanan dengan detail berikut:\n\n`;
    pesan += `📦 *DETAIL PESANAN:*\n`;
    pesan += `▪️ *Layanan:* ${namaProdukFinal}\n`;
    pesan += `▪️ *Jumlah:* ${kuantitas}\n`;
    pesan += `▪️ *Total Biaya:* ${hargaFinal}\n`;

    if (catatan.trim() !== "") {
        pesan += `▪️ *Catatan:* ${catatan}\n`;
    }

    pesan += `\nMohon panduannya untuk proses selanjutnya. Terima kasih! 🙏`;

    // Buka WhatsApp
    const linkWA = `https://wa.me/${nomorWA}?text=${encodeURIComponent(pesan)}`;
    window.open(linkWA, '_blank');
}