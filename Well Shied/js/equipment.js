
// 为按钮添加点击事件监听器 alert('检测到摄像头是否添加该设备');

// 获取按钮和弹框元素
var button = document.getElementById('add_btn');
var modal = document.getElementById('myModal');
var span = document.getElementsByClassName("close")[0];
var yesbut = document.getElementById('yes-but');
var nobut = document.getElementById('no-but');
// 为按钮添加点击事件监听器
button.addEventListener('click', function() {

    alert('检测到摄像头是否添加该设备');
    alert('是否打开该设备');
    modal.style.display = "block";
});

// 为关闭按钮添加点击事件监听器
span.addEventListener('click', function() {
    modal.style.display = "none";
});
yesbut.addEventListener('click', function() {
    modal.style.display = "none";

});
nobut.addEventListener('click', function() {
    modal.style.display = "none";
});

// 当用户点击弹框以外的区域时关闭弹框
window.addEventListener('click', function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
});