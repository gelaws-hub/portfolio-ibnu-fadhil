function sendMessageToWhatsapp() {
    const urlToWhatsapp = `https://wa.me/6285155198867?text=Halo, Saya ingin membuat sebuah animasi 3D untuk produk saya`;
  
    window.open(urlToWhatsapp, "_blank");
  }
  
  document.addEventListener("DOMContentLoaded", function() {
    const sendMessageBtn = document.getElementById('sendMessageBtn');
    sendMessageBtn.addEventListener('click', sendMessageToWhatsapp);
  });
  