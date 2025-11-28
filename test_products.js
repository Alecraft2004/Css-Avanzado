const fetch = require('node-fetch'); // Or use native fetch if node version supports it

async function checkProducts() {
    try {
        const response = await fetch('http://localhost:4000/api/productos');
        const products = await response.json();
        
        console.log('Total products:', products.length);
        products.forEach(p => {
            console.log(`ID: ${p.id}, Title: ${p.titulo}, CatID: ${p.categoria_id}, SubCatID: ${p.subcategoria_id}, SubCatID(camel): ${p.subcategoriaId}`);
        });
    } catch (error) {
        console.error('Error:', error);
    }
}

checkProducts();
