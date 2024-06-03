const productForm = document.getElementById('product-form');
    const productList = document.getElementById('product-list');

    productForm.addEventListener('submit', function(event) {
      event.preventDefault();

      const name = document.getElementById('name').value;
      const description = document.getElementById('description').value;
      const price = document.getElementById('price').value;
      const quantity = document.getElementById('quantity').value;
      const image = document.getElementById('image').files[0];

      const reader = new FileReader();
      reader.onload = function() {
        const imageURL = reader.result;

        const productItem = document.createElement('div');
        productItem.classList.add('product-item');
        productItem.innerHTML = `
          <img src="${imageURL}" alt="${name}">
          <div class="product-info">
            <h3>${name}</h3>
            <p>${description}</p>
            <p>Preço: R$ ${price}</p>
            <p>Quantidade: ${quantity}</p>
          </div>
        `;

        productList.appendChild(productItem);
      };

      reader.readAsDataURL(image);

      productForm.reset();
    });

    