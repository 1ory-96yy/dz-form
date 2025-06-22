const form = document.getElementById('orderForm');
        const orderSummary = document.getElementById('orderSummary');
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            const book = document.getElementById('bookSelect').value;
            const quantity = document.getElementById('quantity').value;
            const name = document.getElementById('customerName').value;
            const date = document.getElementById('deliveryDate').value;
            const address = document.getElementById('address').value;
            orderSummary.innerHTML = `
                <p>${name}, дякуємо за замовлення.</p>
                <p>${quantity} екземпляр(ів) книги "${book}" буде доставлено ${date} за адресою: ${address}.</p>
            `;
            orderSummary.style.display = 'block';
            form.reset();
        });