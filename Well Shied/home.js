document.getElementById('img_btn').addEventListener('click', function(e) {
    document.getElementById('imageUpload').click();

});

    document.getElementById('imageUpload').addEventListener('change', function(e) {
    var file = e.target.files[0];
    if (file) {

    // 在这里，你可以对图片进行进一步的处理，比如预览或上传到服务器
    console.log('文件已选择:', file);
    handleFiles(file);
}
});
    // 在 home.js 文件中
    document.addEventListener('DOMContentLoaded', function() {
        var dropzone = document.getElementById('dropzone');
        var fileInput = document.getElementById('imageUpload');

        // 为拖拽区域添加事件监听器
        ['dragover', 'dragenter', 'drop'].forEach(function(eventName) {
            dropzone.addEventListener(eventName, function(e) {
                e.stopPropagation();
                e.preventDefault();
                if (eventName === 'drop') {
                    var files = e.dataTransfer.files;
                    handleFiles(files);
                }
            });
        });

        // 为选择文件链接添加点击事件监听器
        chooseFilesLink.addEventListener('click', function(e) {
            e.preventDefault(); // 阻止链接的默认行为
            fileInput.click(); // 触发文件选择对话框
        });

        // 为上传按钮添加点击事件监听器
        uploadBtn.addEventListener('click', function(e) {
            e.preventDefault(); // 阻止按钮的默认行为（如果有的话）
            fileInput.click(); // 触发文件选择对话框
        });

        // 为文件输入元素添加change事件监听器
        fileInput.addEventListener('change', function(e) {
            var files = e.target.files;
            handleFiles(files);
        });
    });
    function handleFiles(files) {
        var preview = document.getElementById('preview');
      /*  preview.innerHTML = ''; // 清空预览区域*/
        Array.from(files).forEach(function (file) {
            if (file.type.match('image.*')) {
                var reader = new FileReader();
                reader.onload = (function (theFile) {
                    return function (e) {
                        var img = document.createElement('img');
                        img.src = e.target.result;
                        img.style.maxWidth = '100px';
                        img.style.maxHeight = '100px';
                        preview.appendChild(img);
                    };
                })(file);
                reader.readAsDataURL(file);
            } else {
                alert('请上传图片文件！');
            }
        });
    }