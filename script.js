document.getElementById('convertBtn').addEventListener('click', function() {
    const fileInput = document.getElementById('fileInput');
    const file = fileInput.files[0];

    if (!file) {
        alert('Vui lòng chọn một file để chuyển đổi.');
        return;
    }

    // Hiển thị thông báo đã chọn file
    document.getElementById('output').innerText = 'File đã được tải lên: ' + file.name;

    // --- QUAN TRỌNG: Dòng này sẽ làm nút tải xuống hiện ra ---
    const downloadBtn = document.getElementById('downloadBtn');
    downloadBtn.style.display = 'inline-block'; 
    // ---------------------------------------------------------

    // Sự kiện khi nhấn nút tải xuống
    downloadBtn.onclick = function() {
        const { jsPDF } = window.jspdf;
        const doc = new jsPDF();

        // Nội dung giả lập (sau này bạn sẽ thay bằng nội dung thực từ file)
        doc.text("Đây là file đã được chuyển đổi!", 10, 10);
        doc.save('converted.pdf'); 
    };
});
