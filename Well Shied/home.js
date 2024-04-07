
    document.getElementById('img_btn').addEventListener('click', function() {
    document.getElementById('imageUpload').click();
});

    document.getElementById('imageUpload').addEventListener('change', function(e) {
    var file = e.target.files[0];
    if (file) {
    // 在这里，你可以对图片进行进一步的处理，比如预览或上传到服务器
    console.log('文件已选择:', file);
}
});
