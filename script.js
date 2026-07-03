document.getElementById('convertBtn').addEventListener('click', function() {
    const fileInput = document.getElementById('fileInput');
    const file = fileInput.files[0];

    if (!file) {
        alert('Vui lòng chọn một file để chuyển đổi.');
        return;
    }

    const reader = new FileReader();
    reader.onload = function(event) {
        const fileContent = event.target.result;

        // Giả sử bạn đã chuyển đổi nội dung thành một chuỗi văn bản
        const textContent = 'Nội dung từ file đã chuyển đổi'; // Thay đổi theo nội dung thực tế

        // Hiển thị thông báo
        document.getElementById('output').innerText = 'File đã được tải lên: ' + file.name;

        // Hiển thị nút tải xuống
        const downloadBtn = document.getElementById('downloadBtn');
        downloadBtn.style.display = 'block';

        // Thêm sự kiện cho nút tải xuống
        downloadBtn.onclick = function() {
            const { jsPDF } = window.jspdf;
            const doc = new jsPDF();

            // Thêm nội dung vào PDF
            doc.text(textContent, 10, 10);
            doc.save('converted.pdf'); // Tên file tải xuống
        };
    };
    reader.readAsArrayBuffer(file);
});
