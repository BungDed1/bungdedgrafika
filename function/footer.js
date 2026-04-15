document.addEventListener("DOMContentLoaded", function () {
    const footerContainer = document.getElementById('tempat-footer');

    if (footerContainer) {
        footerContainer.innerHTML = `
            <footer class="custom-footer mt-5 pb-4 position-relative text-white"
                style="background-color: #002967; border-top-left-radius: 40px; border-top-right-radius: 40px; margin-top: 120px !important;">
                
                <div class="footer-logo-wrapper position-absolute start-50 translate-middle-x bg-white rounded-circle shadow d-flex justify-content-center align-items-center"
                    style="top: -60px; width: 120px; height: 120px;">
                    <img src="/public/birulogo.webp" alt="Logo BungDed Grafika" class="w-75 h-auto">
                </div>
                
                <div class="container pt-5 mt-4">
                    <div class="text-center mb-5 pt-4">
                        <h2 class="fs-1 fw-bold mb-2">BungDed Grafika</h2>
                        <p class="fst-italic" style="color: #A8B2D1;">"Penerbit & Percetakan"</p>
                    </div>
                    
                    <div class="row gx-5 gy-4">
                        
                        <div class="col-md-6">
                            <h3 class="fs-5 mb-4">BUNGDED GRAFIKA</h3>
                            <p style="color: #A8B2D1; line-height: 1.8;">Tulis naskahnya, biarkan kami yang mengurus sisanya. Terbitkan dan cetak buku jadi lebih mudah.</p>
                            <div class="d-flex gap-3">
                                <a href="[https://instagram.com/bungdedgrafika](https://instagram.com/bungdedgrafika)" target="_blank" class="d-flex justify-content-center align-items-center bg-white rounded-circle social-icon-custom" style="width: 40px; height: 40px; transition: 0.3s;">
                                    <img src="/public/ig.webp" alt="Instagram" height="25">
                                </a>
                                <a href="[http://wa.me/081515709786](http://wa.me/081515709786)" target="_blank" class="d-flex justify-content-center align-items-center bg-white rounded-circle social-icon-custom" style="width: 40px; height: 40px; transition: 0.3s;">
                                    <img src="/public/wa.webp" alt="WhatsApp" height="27">
                                </a>
                            </div>
                        </div>
                        
                        <div class="col-md-6 mt-5 mt-md-0 text-start">
                            <h3 class="fs-5 mb-4">Hubungi Kami di</h3>
                            <ul class="list-unstyled">
                                
                                <li class="d-flex align-items-center gap-3 mb-4">
                                    <span class="d-flex justify-content-center align-items-center bg-white rounded-circle flex-shrink-0" style="width: 40px; height: 40px;">
                                        <img src="/public/loc.webp" alt="Lokasi" style="width: 20px; object-fit: contain;">
                                    </span>
                                    <span style="color: #A8B2D1;">Bojonegoro, Jawa Timur</span>
                                </li>
                                
                                <li class="d-flex align-items-center gap-3">
                                    <span class="d-flex justify-content-center align-items-center bg-white rounded-circle flex-shrink-0" style="width: 40px; height: 40px;">
                                        <img src="/public/em.webp" alt="Email" style="width: 20px; object-fit: contain;">
                                    </span>
                                    <span style="color: #A8B2D1;">bungdedgrafika@gmail.com</span>
                                </li>
                                
                            </ul>
                        </div>
                        
                    </div>
                </div>
            </footer>
        `;
    }
});