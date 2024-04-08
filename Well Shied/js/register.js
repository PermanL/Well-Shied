// 获取按钮元素
var button = document.getElementById('register');

// 为按钮添加点击事件监听器
button.addEventListener('click', function() {
    alert('注册成功，自动登录');
    // 当按钮被点击时，显示一个弹框
    window.location.href = 'login_after_home.html';
});
function submitLogin() {

    // 假设你有一个表单元素，其ID为'loginForm'
    var form = document.getElementById('loginForm');
    var formData = new FormData(form);

    // 发送POST请求到后端进行验证
    fetch('/login', {
        method: 'POST',
        body: formData
    })
        .then(response => {
            if (response.ok) {
                // 登录成功，跳转到新页面
                window.location.href = 'dashboard.html';
            } else {
                // 登录失败，显示错误信息
                alert('登录失败，请检查您的用户名和密码。');
            }
        })
        .catch(error => {
            console.error('登录过程中发生错误：', error);
        });

    return false; // 阻止表单默认提交行为
}