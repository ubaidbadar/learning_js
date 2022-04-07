// document.getElementById('product-form').onsubmit = function(event) {
//     event.preventDefault();
//     console.log(event.target);
// }

const products = [];


document.getElementById('product-form').onsubmit = event => {
    event.preventDefault();
    const product = {
        name: event.target.name.value,
        price: event.target.price.value,
        description: event.target.description.value
    }
    products.push(product);
    console.log(products);
    showProducts();
}


function showProducts() {
    const tbody = document.getElementById('products-table');
    tbody.innerHTML = '';
    for (let i = 0; i < products.length; i = i + 1) {
        const product = products[i];
        tbody.innerHTML += `
            <tr>
                <td>${product.name}</td>
                <td>${product.price}</td>
                <td>${product.description}</td>
            </tr>
        `
    }
}