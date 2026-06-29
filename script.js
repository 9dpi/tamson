// ===== Slider Data =====
const artworkData = [
    {
        title: "Ba Thiếu Nữ",
        tags: "#TranhSonMai #BaThieuNu",
        subtitle: "Vẻ đẹp duyên dáng của thiếu nữ Việt Nam qua chất liệu vỏ trứng, thếp vàng.",
        description: "Tác phẩm sơn mài khắc họa vẻ đẹp dịu dàng, trang nhã của ba thiếu nữ Việt Nam trong trang phục truyền thống. Kỹ thuật đắp nổi vỏ trứng, thếp vàng thếp bạc nhiều lớp tỉ mỉ tạo chiều sâu nghệ thuật độc đáo và sang trọng.",
        image: "images/three-ladies.png",
        medium: "Sơn mài trên vóc gỗ (Sơn ta, vỏ trứng, thếp vàng)"
    },
    {
        title: "Thiếu Nữ Bên Hoa",
        tags: "#TranhSonMai #ThieuNu",
        subtitle: "Tranh sơn mài truyền thống tả thực, thếp bạc tinh xảo.",
        description: "Tác phẩm tranh sơn mài truyền thống tả thực vẻ đẹp duyên dáng, thanh tao của người thiếu nữ Việt Nam trong tà áo dài bên đóa sen hồng. Sử dụng kỹ thuật sơn then và thếp bạc tinh xảo nhiều lớp.",
        image: "images/lady.png",
        medium: "Sơn mài trên vóc gỗ (Sơn ta, thếp bạc)"
    },
    {
        title: "Hồ Sen Và Cá Koi",
        tags: "#SonMaiKhamTrai #HoSenCaKoi",
        subtitle: "Sự kết hợp độc đáo giữa nghệ thuật sơn mài và khảm xà cừ lấp lánh.",
        description: "Bức tranh sơn mài kết hợp kỹ thuật khảm trai xà cừ và đắp nổi độc đáo, khắc họa sống động đàn cá koi bơi lội dưới bóng sen, mang lại sự thịnh vượng và an lành cho gia chủ.",
        image: "images/koi-lotus.png",
        medium: "Sơn mài trên vóc gỗ (Sơn ta, khảm xà cừ)"
    },
    {
        title: "Tam Thế Phật Bản Tôn",
        tags: "#TranhPhatGiao #TamThePhat",
        subtitle: "Tranh sơn mài tâm linh sâu lắng, thếp vàng 24K trên nền sơn then.",
        description: "Tác phẩm tranh sơn mài tâm linh sâu lắng, sử dụng chất liệu sơn ta truyền thống kết hợp thếp vàng 24K rực rỡ và sơn then huyền bí, đem lại cảm giác bình yên và tĩnh tại cho không gian.",
        image: "images/three-budha.png",
        medium: "Sơn mài trên vóc gỗ (Sơn ta, thếp vàng 24K)"
    },
    {
        title: "Lễ Hội Mùa Thu",
        tags: "#TranhDanGian #TrungThuSonMai",
        subtitle: "Tái hiện nét đẹp văn hóa dân gian Việt Nam với bột điệp, vỏ trứng rực rỡ.",
        description: "Tái hiện không khí rực rỡ, ấm áp của đêm hội trăng rằm dân gian qua lăng kính nghệ thuật sơn mài Việt Nam. Màu sắc sống động từ bột điệp, vỏ trứng và các lớp sơn mài nhiều tầng mài phẳng tinh tế.",
        image: "images/autumn-festival.png",
        medium: "Sơn mài trên vóc gỗ (Sơn ta, vỏ trứng, bột điệp)"
    },
    {
        title: "Song Anh Cát Tường",
        tags: "#SongAnhCatTuong #UyenUong",
        subtitle: "Khắc họa đôi chim uyên ương thanh bình bên cành mẫu đơn cát tường.",
        description: "Bức tranh sơn mài tả thực tinh tế đôi chim uyên ương thanh bình trên cành mẫu đơn. Tác phẩm biểu tượng cho tình yêu đôi lứa, sự hòa hợp và hạnh phúc viên mãn trong cuộc sống.",
        image: "images/bird.png",
        medium: "Sơn mài trên vóc gỗ (Sơn ta tả thực)"
    }
];

// ===== Slider Logic =====
const cards = document.querySelectorAll('.artwork-card');
const progressBar = document.getElementById('progressBar');
const currentSlide = document.getElementById('currentSlide');
const numbersList = document.getElementById('numbersList');

// Initialize numbers list
function initNumbers() {
    if (!numbersList) return;
    numbersList.innerHTML = '';
    cards.forEach((_, index) => {
        const span = document.createElement('span');
        span.textContent = index + 1;
        span.onclick = (e) => {
            e.stopPropagation();
            setActive(index);
        };
        numbersList.appendChild(span);
    });
}

function setActive(index) {
    if (cards.length === 0) return;
    
    // Remove active class from all cards and number spans
    cards.forEach(card => card.classList.remove('active'));
    const numberSpans = numbersList ? numbersList.querySelectorAll('span') : [];
    numberSpans.forEach(span => span.classList.remove('active'));

    // Add active class to clicked card and number span
    cards[index].classList.add('active');
    if (numberSpans[index]) {
        numberSpans[index].classList.add('active');
    }

    // Update progress bar
    if (progressBar) {
        const progress = ((index + 1) / cards.length) * 100;
        progressBar.style.width = `${progress}%`;
    }

    // Update counter with leading zero
    if (currentSlide) {
        currentSlide.textContent = (index + 1).toString().padStart(2, '0');
    }

    // Smoothly scroll the container to center the active card
    const container = document.querySelector('.slider-container');
    const activeCard = cards[index];
    if (container && activeCard) {
        const containerWidth = container.offsetWidth;
        const cardOffset = activeCard.offsetLeft;
        const cardWidth = activeCard.offsetWidth;
        
        // Target scroll position to center the card
        const scrollTarget = cardOffset - (containerWidth / 2) + (cardWidth / 2);
        
        container.scrollTo({
            left: scrollTarget,
            behavior: 'smooth'
        });
    }
}

// ===== Detail Popup Logic =====
const detailModal = document.getElementById('detailModal');
const modalImage = document.getElementById('modalImage');
const modalTags = document.getElementById('modalTags');
const modalTitle = document.getElementById('modalTitle');
const modalDescription = document.getElementById('modalDescription');
const modalMedium = document.getElementById('modalMedium');

function openDetailPopup(event, index) {
    // Prevent triggering card click (setActive)
    event.stopPropagation();
    
    const data = artworkData[index];
    if (!data || !detailModal) return;

    // Fill data
    if (modalImage) {
        modalImage.src = data.image;
        modalImage.alt = data.title;
    }
    if (modalTags) modalTags.textContent = data.tags;
    if (modalTitle) modalTitle.textContent = data.title;
    if (modalDescription) modalDescription.textContent = data.description;
    if (modalMedium) modalMedium.textContent = data.medium;

    // Open modal
    detailModal.classList.add('active');
}

function closeDetailPopup() {
    if (detailModal) {
        detailModal.classList.remove('active');
    }
}

// Close popup on ESC key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeDetailPopup();
});

// Close popup when clicking outside the content
if (detailModal) {
    detailModal.addEventListener('click', (e) => {
        if (e.target === detailModal) closeDetailPopup();
    });
}

// Initial set up
initNumbers();
window.addEventListener('load', () => {
    setActive(0); // Set first card (Ba Thiếu Nữ) as active by default
});

// ===== Image Loading Enhancement =====
const allImages = document.querySelectorAll('img');
allImages.forEach(img => {
    img.style.opacity = '1';
    img.addEventListener('error', function () {
        console.error('Image failed to load:', this.src);
    });
});

// ===== Console Message =====
console.log('%c🎨 Tâm Son - Modern Lacquer Exhibition', 'font-size: 20px; font-weight: bold; color: #E63946;');

// ===== Mobile Menu Toggle =====
function toggleMobileMenu() {
    const drawer = document.getElementById('mobileMenuDrawer');
    const overlay = document.getElementById('drawerOverlay');
    if (drawer && overlay) {
        drawer.classList.toggle('active');
        overlay.classList.toggle('active');
    }
}
