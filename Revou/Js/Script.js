
const tabButtons = document.querySelectorAll(".tab-btn");

const contents = document.querySelectorAll(".content");

tabButtons.forEach(button => {
  button.addEventListener("click", () => {

    tabButtons.forEach(btn => btn.classList.remove("active"));

    button.classList.add("active");


    const targetId = button.getAttribute("data-tab-target");

    contents.forEach(content => content.classList.remove("active"));


    document.getElementById(targetId).classList.add("active");
  });
});

  const form = document.getElementById("messageForm");
  const output = document.getElementById("output");

  form.addEventListener("submit", function(event) {
    event.preventDefault(); // biar ga reload

    
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

 
    output.innerHTML = `
      <h3>Pesan Terkirim!</h3>
      <p><strong>Nama:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Pesan:</strong> ${message}</p>
    `;

    
    form.reset();
  });

    const haloText = document.getElementById("haloText");

  // Teks yang akan ditampilkan
  const text = "Halo Semuanya";

  // Fungsi untuk animasi mengetik satu per satu
  let i = 0;
  function typeText() {
    if (i < text.length) {
      haloText.textContent += text.charAt(i);
      i++;
      setTimeout(typeText, 100); // kecepatan ketik
    } else {
      // setelah selesai ngetik, aktifkan animasi fadeIn
      haloText.style.animation = "fadeInUp 1s ease";
    }
  }

  // jalankan fungsi saat halaman dimuat
  window.onload = typeText;