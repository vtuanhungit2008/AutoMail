// Cấu hình EmailJS

emailjs.init("service_ib5bet6");  // Thay YOUR_USER_ID bằng User ID của bạn

document.getElementById("sendEmailForm").addEventListener("submit", function(event) {
  event.preventDefault();

  // Lấy địa chỉ email người nhận
  const toEmail = document.getElementById("toEmail").value;

  // Dữ liệu cần gửi
  const templateParams = {
    to_email: toEmail,
    title: "CV xin việc Frontend Developer",
    description: "Chào bạn, tôi gửi CV xin việc ứng tuyển vị trí Frontend Developer. Rất mong được hợp tác.",
    cv_link: "https://linktoyourcv.com"  // Link đến CV của bạn
  };

  // Gửi email thông qua EmailJS
  emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", templateParams)
    .then(function(response) {
      alert("CV đã được gửi thành công!");
    }, function(error) {
      alert("Có lỗi xảy ra khi gửi email. Vui lòng thử lại.");
    });
});
