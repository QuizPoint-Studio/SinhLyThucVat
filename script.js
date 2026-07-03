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

        // Đây là nơi bạn sẽ xử lý chuyển đổi file
        // Giả sử bạn đã chuyển đổi nội dung thành một chuỗi văn bản
        const textContent = 'Nội dung từ file đã chuyển đổi'; // Thay đổi theo nội dung thực tế

        // Hiển thị thông báo
        document.getElementById('output').innerText = 'File đã được tải lên: ' + file.name;

        // Hiển thị nút tải xuống
        document.getElementById('downloadBtn').style.display = 'block';

        // Thêm sự kiện cho nút tải xuống
        document.getElementById('downloadBtn').onclick = function() {
            const { jsPDF } = window.jspdf;
            const doc = new jsPDF();

            // Thêm nội dung vào PDF
            doc.text(textContent, 10, 10);
            doc.save('converted.pdf'); // Tên file tải xuống
        };
    };
    reader.readAsArrayBuffer(file);
});
