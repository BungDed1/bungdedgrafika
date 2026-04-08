document.addEventListener("DOMContentLoaded", function () {
    const navbarContainer = document.getElementById('tempat-navbar');

    if (navbarContainer) {
        navbarContainer.innerHTML = `
            <nav class="navbar navbar-expand-lg fixed-top shadow-sm" style="background-color: #002967;">
                <div class="container-fluid px-4">
                    
                    <a class="navbar-brand d-flex align-items-center text-white" href="/index.html">
                        <img src="/public/putih.webp" alt="Logo BungDed Grafika" height="40" class="me-2">
                        <strong class="fs-4">BungDed Grafika</strong>
                    </a>
                    
                    <button class="navbar-toggler border-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                        <span class="navbar-toggler-icon" style="filter: invert(1);"></span>
                    </button>
                    
                    <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
                        <ul class="navbar-nav gap-3">
                            <li class="nav-item"><a href="/index.html" class="nav-link text-white px-3 rounded custom-nav-link">Home</a></li>
                            
                            <li class="nav-item"><a href="/pages/Layanan/index.html" class="nav-link text-white px-3 rounded custom-nav-link">Layanan</a></li>
                            <li class="nav-item"><a href="/pages/Toko Buku/index.html" class="nav-link text-white px-3 rounded custom-nav-link">Toko Buku</a></li>
                            
                            <li class="nav-item"><a href="/index.html#paket" class="nav-link text-white px-3 rounded custom-nav-link">Paket Penerbitan</a></li>
                            
                            <li class="nav-item"><a href="/pages/Tentang Kami/index.html" class="nav-link text-white px-3 rounded custom-nav-link">Tentang Kami</a></li>
                            <li class="nav-item"><a href="/pages/Konsultasi Gratis/index.html" class="nav-link text-white px-3 rounded custom-nav-link">Konsultasi Gratis</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        `;
    }
});