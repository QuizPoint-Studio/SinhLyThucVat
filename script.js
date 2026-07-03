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
        document.getElementById('output').innerText = 'File đã được tải lên: ' + file.name;
        // Thêm logic chuyển đổi ở đây
    };
    reader.readAsArrayBuffer(file);
});
