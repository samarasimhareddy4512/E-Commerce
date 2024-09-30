let productContainer = document.querySelector('.product-container');

let url = 'https://fakestoreapi.com/products';

function loadProducts() {
    fetch(url)
        .then((response) => response.json())
        .then((data) => displayProducts(data))
        .catch((error) => console.error('Error fetching products:', error));
}

function displayProducts(products) {
    productContainer.innerHTML = '';

    products.forEach((product) => {
        let productDiv = document.createElement('div');
        productDiv.classList.add('product');
        
        let img = document.createElement('img');
        img.src = product.image;
        img.alt = product.title;
        
        let category = document.createElement('p');
        category.innerText = `Category: ${product.category}`;
        
        let description = document.createElement('p');
        description.innerText = product.description;
        
        let price = document.createElement('p');
        price.innerText = `Price: $${product.price}`;
        
        let rating = document.createElement('p');
        rating.innerText = `Rating: ${product.rating.rate} (${product.rating.count} reviews)`;

        productDiv.appendChild(img);
        productDiv.appendChild(category);
        productDiv.appendChild(description);
        productDiv.appendChild(price);
        productDiv.appendChild(rating);

        productContainer.appendChild(productDiv);
    });
}

loadProducts();
