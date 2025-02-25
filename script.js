function startDisplay() {
    const music = document.getElementById('background-music');
    const musicContainer = document.getElementById('music-container');
    const content1 = document.getElementById('content1'); // Lấy phần tử content1
    const toggleMusicButton = document.getElementById('toggleMusic'); // Lấy nút Music

    if (music.paused) {
        music.play().then(() => {
            // Thêm lớp fade-out để tạo hiệu ứng biến mất cho nút Music
            toggleMusicButton.classList.add('fade-out');
            setTimeout(() => {
                musicContainer.style.display = "none"; // Ẩn container sau khi hiệu ứng hoàn tất
                content1.classList.add('fade-in'); // Thêm lớp fade-in cho content1
                content1.style.display = "block"; // Hiện content1
                setTimeout(() => {
                    content1.classList.add('show'); // Thêm lớp show để kích hoạt hiệu ứng xuất hiện
                }, 10); // Thêm một độ trễ nhỏ để hiệu ứng hoạt động
            }, 1000); // Thời gian trễ tương ứng với thời gian hiệu ứng
        }).catch(error => {
            console.log("Không thể phát nhạc:", error);
        });
    }
}

document.addEventListener("DOMContentLoaded", function() {
    const title = document.getElementById('typing-effect');
    const nextButton = document.getElementById('nextButton'); // Lấy nút "Tiếp tục"
    
    title.style.width = title.scrollWidth + 'px'; // Đặt chiều rộng của tiêu đề
    title.style.animation = 'none'; // Dừng hiệu ứng gõ

    // Thêm độ trễ trước khi khởi động lại hiệu ứng gõ
    setTimeout(() => {
        title.style.animation = ''; // Khởi động lại hiệu ứng gõ
        title.style.width = title.scrollWidth + 'px'; // Đặt chiều rộng của tiêu đề
        
        // Hiển thị nút "Tiếp tục" sau khi hiệu ứng gõ hoàn tất
        setTimeout(() => {
            nextButton.classList.remove('hidden'); // Hiện nút "Tiếp tục"
            nextButton.classList.add('fade-in'); // Thêm lớp fade-in
            setTimeout(() => {
                nextButton.classList.add('show'); // Thêm lớp show để kích hoạt hiệu ứng xuất hiện
            }, 10); // Thêm một độ trễ nhỏ để hiệu ứng hoạt động
        }, 6000); // Thay đổi thời gian này cho phù hợp với thời gian hiệu ứng gõ
    }, 1000); // Thay đổi giá trị này để điều chỉnh độ trễ (1000ms = 1 giây)
});
// Hàm để hiển thị trang theo số (1, 2, 3)
function showPage(pageNumber) {
    var pages = document.querySelectorAll('.page');
    pages.forEach(function(page) {
        page.classList.add('hidden');
    });

    var currentPage = document.getElementById('page' + pageNumber);
    currentPage.classList.remove('hidden');

    // Hiển thị nút bấm mở nhạc chỉ khi trang 1 được hiển thị
    const musicContainer = document.getElementById('music-container');
    if (pageNumber === 1) {
        musicContainer.classList.remove("hidden-music"); // Hiển thị nút bấm
    } else {
        musicContainer.classList.add("hidden-music"); // Ẩn nút bấm
    }
}
