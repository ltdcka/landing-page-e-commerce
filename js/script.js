const menu = document.querySelector(".menu")


const btnFilter = document.querySelectorAll(".produk-box ul li");
const imgItem = document.querySelectorAll(".produk-item");

btnFilter.forEach((btn) => {
    btn.onclick = () => {

        // hilangkan active pada semua tombol
        btnFilter.forEach(b => b.classList.remove("active"));

        // tambahkan active pada tombol yang diklik
        btn.classList.add("active");

        const btnText = btn.textContent.toLowerCase();  // all product, new, second

        imgItem.forEach(item => {
            const filter = item.getAttribute("data-filter");

            // sembunyikan semua item terlebih dahulu
            item.style.display = "none";

            // tampilkan jika tombol 'All Product'
            if (btnText === "all product") {
                item.style.display = "block";
            }
            // tampilkan jika data-filter == tombol
            else if (filter === btnText) {
                item.style.display = "block";
            }
        });
    };
});
