// 20 MAKANAN KHAS JAWA TIMUR
const makanan = [
    "Rawon", "Soto Lamongan", "Rujak Cingur", "Tahu Tek", "Lontong Balap",
    "Tahu Campur", "Pecel Madiun", "Sate Madura", "Nasi Krawu", 
    "Nasi Pecel Tulungagung", "Lodeh Kikil", "Sego Sambel", "Krengsengan",
    "Botok Tempe", "Ayam Lodho", "Nasi Goreng Jawa", "Semanggi Surabaya",
    "Soto Madura", "Bakso Malang", "Rawon Setan"
];

// 10 MINUMAN TRENDING
const minuman = [
    "Es Kopi Susu Gula Aren", "Matcha Latte", "Thai Tea", "Es Coklat Premium",
    "Es Lemon Tea", "Milkshake Oreo", "Es Yakult Lemon", "Es Cappuccino",
    "Brown Sugar Boba", "Es Soda Gembira"
];

// Auto-generate card makanan
const makananList = document.getElementById("makananList");

makanan.forEach((menu, i) => {
    makananList.innerHTML += `
        <div class="menu-card">
            <img src="https://source.unsplash.com/400x300/?${menu.replace(/ /g,'+')}" alt="${menu}">
            <h3>${i+1}. ${menu}</h3>
            <a href="https://google.com/search?q=${menu.replace(/ /g,'+')}" target="_blank">Lihat Menu</a>
        </div>
    `;
});

// Auto-generate card minuman
const minumanList = document.getElementById("minumanList");

minuman.forEach((menu, i) => {
    minumanList.innerHTML += `
        <div class="menu-card">
            <img src="https://source.unsplash.com/400x300/?${menu.replace(/ /g,'+')}" alt="${menu}">
            <h3>${i+1}. ${menu}</h3>
            <a href="https://google.com/search?q=${menu.replace(/ /g,'+')}" target="_blank">Lihat Menu</a>
        </div>
    `;
});
