document.addEventListener('DOMContentLoaded', function() {
    // 获取元素引用
    var dropzone = document.getElementById('dropzone');
    var fileInput = document.getElementById('imageUpload');
    var chooseFilesLink = document.querySelector('img-btn');
    var uploadBtn = document.getElementById('uploadBtn');
    var chooseFilesBtn = document.getElementById('img-btn');

    // 为选择文件链接和按钮添加点击事件监听器
    [chooseFilesLink, chooseFilesBtn].forEach(function(element) {
        element.addEventListener('click', function(e) {
            e.preventDefault(); // 阻止链接或按钮的默认行为
            fileInput.click(); // 触发文件选择对话框
        });
    });

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

    // 为文件输入元素添加change事件监听器
    fileInput.addEventListener('change', function(e) {
        var files = e.target.files;
        handleFiles(files);
    });

    // 处理文件选择的函数
    function handleFiles(files) {
        // 遍历文件数组并处理每个文件
        for (var i = 0; i < files.length; i++) {
            var file = files[i];
            console.log('文件名:', file.name);
            console.log('文件类型:', file.type);
            console.log('文件大小:', file.size / 1024 / 1024, 'MB'); // 转换为MB
            // 这里可以添加更多处理逻辑，比如预览图片或上传文件
        }
    }
});