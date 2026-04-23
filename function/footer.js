document.addEventListener("DOMContentLoaded", function () {
    const footerContainer = document.getElementById('tempat-footer');

    if (footerContainer) {
        footerContainer.innerHTML = `
            <style>
                /* CSS Khusus Footer Elegan */
                .footer-gradient {
                    background: linear-gradient(135deg, #001533 0%, #002967 100%);
                }
                .social-btn-custom {
                    transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
                    border-color: rgba(255, 255, 255, 0.2);
                    color: #ffffff;
                    background-color: transparent;
                }
                .social-btn-custom:hover {
                    background-color: #FFCA59 !important;
                    border-color: #FFCA59 !important;
                    color: #001533 !important;
                    transform: translateY(-5px);
                    box-shadow: 0 10px 20px rgba(255, 202, 89, 0.3);
                }
                .footer-link {
                    color: #cbd5e1;
                    text-decoration: none;
                    transition: all 0.3s ease;
                    display: inline-block;
                }
                .footer-link:hover {
                    color: #FFCA59;
                    transform: translateX(8px);
                }
            </style>

            <footer class="position-relative text-white mt-5 footer-gradient"
                style="border-top-left-radius: 40px; border-top-right-radius: 40px; margin-top: 120px !important; padding-top: 80px; padding-bottom: 20px;">
                
                <div class="position-absolute start-50 translate-middle-x bg-white rounded-circle shadow-lg d-flex justify-content-center align-items-center p-2"
                    style="top: -50px; width: 100px; height: 100px; border: 4px solid #f8f9fa;">
                    <img src="/public/birulogo.webp" alt="Logo BungDed Grafika" class="img-fluid" style="max-width: 70%;">
                </div>
                
                <div class="container pt-4">
                    <div class="row align-items-start justify-content-between px-3 px-md-0">
                        
                        <div class="col-lg-4 col-md-12 text-center text-lg-start mb-5 mb-lg-0">
                            <h4 class="fw-bold mb-4 fs-4" style="letter-spacing: -0.5px;">BungDed Grafika</h4>
                            <p style="color: #cbd5e1; line-height: 1.7; font-size: 0.95rem;">
                                Tulis naskahnya, biarkan kami yang mengurus sisanya. Mitra terpercaya untuk menerbitkan dan mencetak karya terbaik Anda dengan mudah dan profesional.
                            </p>
                            
                            <div class="d-flex gap-3 justify-content-center justify-content-lg-start mt-4">
                                <a href="https://instagram.com/bungdedgrafika" target="_blank" 
                                    class="btn rounded-circle d-flex align-items-center justify-content-center social-btn-custom border" 
                                    style="width: 45px; height: 45px;">
                                    <i class="bi bi-instagram fs-5"></i>
                                </a>
                                <a href="http://wa.me/081515709786" target="_blank" 
                                    class="btn rounded-circle d-flex align-items-center justify-content-center social-btn-custom border" 
                                    style="width: 45px; height: 45px;">
                                    <i class="bi bi-whatsapp fs-5"></i>
                                </a>
                            </div>
                        </div>

                        <div class="col-lg-3 col-md-6 text-center text-lg-start mb-5 mb-lg-0">
                            <h4 class="fw-bold mb-4 fs-4 invisible">Tautan Cepat</h4>
                            <ul class="list-unstyled d-flex flex-column gap-3 align-items-center align-items-lg-start">
                                <li>
                                    <a href="/index.html" class="footer-link">
                                        <i class="bi bi-chevron-right me-2" style="font-size: 0.8rem; color: #FFCA59;"></i> Beranda
                                    </a>
                                </li>
                                <li>
                                    <a href="/pages/Layanan/index.html" class="footer-link">
                                        <i class="bi bi-chevron-right me-2" style="font-size: 0.8rem; color: #FFCA59;"></i> Layanan Kami
                                    </a>
                                </li>
                                <li>
                                    <a href="/pages/Toko Buku/index.html" class="footer-link">
                                        <i class="bi bi-chevron-right me-2" style="font-size: 0.8rem; color: #FFCA59;"></i> Toko Buku
                                    </a>
                                </li>
                                <li>
                                    <a href="/pages/Produk/percetakan/index.html" class="footer-link">
                                        <i class="bi bi-chevron-right me-2" style="font-size: 0.8rem; color: #FFCA59;"></i> Katalog Percetakan
                                    </a>
                                </li>
                            </ul>
                        </div>
                        
                        <div class="col-lg-4 col-md-6 text-center text-lg-start mb-0 mb-lg-0">
                            <h4 class="fw-bold mb-4 fs-4">Hubungi Kami</h4>
                            <ul class="list-unstyled d-flex flex-column gap-3 align-items-center align-items-lg-start">
                                
                                <li class="d-flex align-items-start gap-3 text-start">
                                    <i class="bi bi-geo-alt-fill fs-5 mt-1" style="color: #FFCA59;"></i>
                                    <span style="color: #cbd5e1; line-height: 1.6;">Bojonegoro, Jawa Timur<br>Indonesia</span>
                                </li>
                                
                                <li class="d-flex align-items-center gap-3">
                                    <i class="bi bi-envelope-fill fs-5" style="color: #FFCA59;"></i>
                                    <span style="color: #cbd5e1;">bungdedgrafika@gmail.com</span>
                                </li>
                                
                            </ul>
                        </div>
                        
                    </div>
                    
                    <div class="row mt-5 pt-4" style="border-top: 1px solid rgba(255, 255, 255, 0.1);">
                        <div class="col-12 text-center">
                            <p class="mb-0 small" style="color: #94a3b8; letter-spacing: 0.5px;">
                                &copy; 2026 <strong>BungDed Group</strong>. All rights reserved.
                            </p>
                        </div>
                    </div>
                    
                </div>
            </footer>
        `;
    }
});