async function ambilDataProduk() {
    try {
        const response = await fetch('https://fakestoreapi.com/products');
        const products = await response.json(); //menungggu untuk di jalankan 
        tampilkanProduk(products);
    } catch (error) {
        console.error('Error:', error);
        document.getElementById('data-product').innerHTML = '<p>Gagal memuat produk.</p>';
    }
}

function tampilkanProduk(products) {
    let html = '<div class="product-list">'; //membukus container daftar produk
    products.forEach(product => {
        html += `
    <div class="product-card">
      <img src="${product.image}" alt="${product.title}">
      <h4>${product.title}</h4>
      <h3>${product.description}</h3>
      <p>$${product.price}</p>
     
    </div>
  `;
    });
    html += '</div>';

    document.getElementById('data-product').innerHTML = html;
}

ambilDataProduk();