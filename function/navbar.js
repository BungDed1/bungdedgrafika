document.addEventListener("DOMContentLoaded", function () {
    const navbarContainer = document.getElementById('tempat-navbar');

    if (navbarContainer) {
        navbarContainer.innerHTML = `
            <style>
                /* CSS Navbar Solid Premium */
                .navbar-custom {
                    background-color: #002967 !important;
                    /* Garis bawah emas sebagai pembatas elegan */
                    border-bottom: 3px solid #FFCA59; 
                    transition: all 0.3s ease;
                }
                
                .custom-nav-link {
                    font-weight: 600;
                    font-size: 0.95rem;
                    transition: all 0.2s ease;
                    border-radius: 6px;
                }
                
                /* Efek Hover untuk menu utama */
                .custom-nav-link:hover {
                    color: #FFCA59 !important;
                    background-color: rgba(255, 255, 255, 0.1);
                }

                /* ================= DROPDOWN STYLING ================= */
                .dropdown-menu {
                    border: none;
                    border-radius: 12px;
                    padding: 10px 0;
                    margin-top: 15px !important; /* Jarak agar tidak terlalu nempel dengan navbar */
                }
                
                .dropdown-item {
                    font-weight: 700; /* Font tebal seperti di screenshot */
                    color: #1f2937;
                    padding: 10px 20px;
                    font-size: 0.95rem;
                    transition: all 0.2s ease;
                }
                
                .dropdown-item:hover, .dropdown-item:focus {
                    background-color: #f8f9fa;
                    color: #002967;
                    padding-left: 26px; /* Efek geser sedikit ke kanan saat disorot biar elegan */
                }

                /* Tombol CTA (Konsultasi Gratis) */
                .nav-btn-custom {
                    background-color: #ffffff;
                    color: #002967 !important;
                    font-weight: 700;
                    border-radius: 8px;
                    padding: 0.5rem 1.5rem !important;
                    transition: all 0.3s ease;
                    border: 2px solid #ffffff;
                }

                .nav-btn-custom:hover {
                    background-color: #FFCA59;
                    border-color: #FFCA59;
                    color: #002967 !important;
                }

                /* Styling Hamburger Menu (Mobile) */
                .navbar-toggler {
                    border-color: rgba(255,255,255,0.3) !important;
                }
                .navbar-toggler:focus {
                    box-shadow: none;
                }
            </style>

            <nav class="navbar navbar-expand-lg fixed-top shadow navbar-custom py-3">
                <div class="container">
                    
                    <a class="navbar-brand d-flex align-items-center text-white" href="/index.html">
                        <img src="/public/logonavbar.webp" alt="Logo BungDed Grafika" height="40" class="me-2">
                    </a>
                    
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                        <span class="navbar-toggler-icon" style="filter: invert(1);"></span>
                    </button>
                    
                    <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
                        <ul class="navbar-nav gap-2 align-items-lg-center mt-3 mt-lg-0">
                            <li class="nav-item"><a href="/index.html" class="nav-link text-white px-3 custom-nav-link">Home</a></li>
                            <li class="nav-item"><a href="/pages/Layanan/index.html" class="nav-link text-white px-3 custom-nav-link">Layanan</a></li>
                            
                            <li class="nav-item dropdown">
                                <a class="nav-link text-white px-3 custom-nav-link dropdown-toggle" href="#" id="katalogDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Katalog
                                </a>
                                <ul class="dropdown-menu shadow-lg" aria-labelledby="katalogDropdown">
                                    <li><a class="dropdown-item" href="/pages/Toko Buku/index.html">Toko Buku</a></li>
                                    <li><a class="dropdown-item" href="/pages/Produk/percetakan/index.html">Percetakan</a></li>
                                    <li><a class="dropdown-item" href="/pages/Produk/penerbitan/index.html">Paket Penerbitan</a></li>
                                </ul>
                            </li>
                            
                            <li class="nav-item"><a href="/pages/Tentang Kami/index.html" class="nav-link text-white px-3 custom-nav-link">Tentang Kami</a></li>
                            
                            <li class="nav-item ms-lg-3 mt-3 mt-lg-0">
                                <a href="/pages/Konsultasi Gratis/index.html" class="nav-link nav-btn-custom text-center">Konsultasi Gratis</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        `;
    }
});