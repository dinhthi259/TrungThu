const wishes = [
"🌼 Có thể khi em thấy lời chúc này thì trung thu đã qua rồi.",
  "🌕 Nhưng mà anh vẫn chúc cho Minh Châu có một cái tết Trung Thu rực rỡ",
  "🍂 Trăng tròn tháng Tám của Đức Mẹ sẽ soi sáng những ước mơ đẹp nhất dành riêng cho Châu.",
  "🌸 Mong Minh Châu sẽ luôn thuận lợi trên con đường em đã chọn nha",
  "💫 Trung Thu này, chúc Minh Châu luôn được yêu thương, và gặt hái được nhiều thành công hơn",
  "🎑 Chúc cho Thầy, Mẹ và các Đấng Thiêng Liêng luôn soi dẫn và độ trì cho Minh Châu.",
  "🐇 Chúc Minh Châu có mùa Trung Thu trọn vẹn — vui vẻ, an lành và đầy tiếng cười.",
  "🌙 Chúc Minh Châu sẽ tỏa sáng như vầng trăng tối nay vậy. Bởi trăng đêm nay sáng nhất trong năm!",
  "🍵 Mong em sẽ luôn giữ nụ cười trên môi nha. Vì khi cười, trông Minh Châu rất xinh đó!!",
  "💚 Và cuối cùng là năm sau Minh Châu nhớ qua Trung hải chơi nha dinhthi để dành cho Minh Châu phần quà to nhất"
];

let index = 0;
const wishBox = document.getElementById("wishBox");

function showNextWish() {
  wishBox.textContent = wishes[index];
  index = (index + 1) % wishes.length;
}

showNextWish();
setInterval(showNextWish, 5000);
