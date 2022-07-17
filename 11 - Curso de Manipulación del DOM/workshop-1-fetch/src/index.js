/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/

const urlBase = 'https://platzi-avo.vercel.app';
const appNode = document.querySelector('#app');

const formatPrice = price => {
    
    const newPrice = window.Intl.NumberFormat('en-EN', {
        style: 'currency',
        currency: 'USD'
    }).format('1.15');

    return newPrice;
}

window
    .fetch(`${urlBase}/api/avo`)
    .then(resp => resp.json() )
    .then(responseJson => {
        const todosLosItems = [];

        responseJson?.data.forEach(item => {
            const imagen = document.createElement('img');
            imagen.src = `${urlBase}${item.image}`;

            const title = document.createElement('h2');
            title.textContent = formatPrice(item.name);
            title.className = 'text-2xl';

            const price = document.createElement('div');
            price.textContent = `${item.price}`;

            const container = document.createElement('div');
            container.append(imagen, title, price);

            todosLosItems.push(container);
        });
        appNode.append(... todosLosItems);
    });