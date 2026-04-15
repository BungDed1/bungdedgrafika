// Variabel global untuk menyimpan data produk yang sedang diklik
let produkPilihan = "";
let hargaProduk = "";

/**
 * Fungsi untuk membuka Modal Bootstrap dan mengisi datanya secara dinamis
 */
function bukaModal(judul, deskripsi, harga, gambar) {
    // Memasukkan data text dan gambar ke dalam modal
    document.getElementById('detailJudul').innerText = judul;
    document.getElementById('detailDeskripsi').innerText = deskripsi;
    document.getElementById('detailHarga').innerText = harga;
    document.getElementById('detailGambar').src = gambar;

    // Reset isian form setiap kali modal dibuka kembali
    document.getElementById('inputKuantitas').value = 1;
    document.getElementById('inputCatatan').value = "";

    // Simpan data untuk proses checkout WA
    produkPilihan = judul;
    hargaProduk = harga;

    // Menampilkan modal
    var myModal = new bootstrap.Modal(document.getElementById('modalProduk'));
    myModal.show();
}

/**
 * Fungsi untuk mengeksekusi pesanan dan redirect otomatis ke WhatsApp
 */
function checkoutWA() {
    // Ambil nilai dari inputan pelanggan
    let kuantitas = document.getElementById('inputKuantitas').value;
    let catatan = document.getElementById('inputCatatan').value;

    // Nomor WhatsApp tujuan (Format 62)
    let nomorWA = "6281515709786";

    // Menyusun format template pesan WhatsApp
    let pesan = `Halo *BungDed Grafika*, saya ingin memesan layanan percetakan:\n\n`;
    pesan += ` *Produk:* ${produkPilihan}\n`;
    pesan += ` *Harga:* ${hargaProduk}\n`;
    pesan += ` *Jumlah Pesanan:* ${kuantitas}\n`;

    // Cek apakah pelanggan mengisi catatan, jika diisi maka tambahkan ke template
    if (catatan.trim() !== "") {
        pesan += ` *Catatan:* ${catatan}\n`;
    }

    pesan += `\nMohon info lebih lanjut mengenai pengiriman file desain dan total biayanya. Terima kasih!`;

    // Buka WhatsApp di tab baru
    let linkWA = `https://wa.me/${nomorWA}?text=${encodeURIComponent(pesan)}`;
    window.open(linkWA, '_blank');
}