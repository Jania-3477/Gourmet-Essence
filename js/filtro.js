
const categoriaSelect = document.getElementById('categoria');
const precioMinInput = document.getElementById('precio-min');
const precioMaxInput = document.getElementById('precio-max');
const aplicarFiltroButton = document.getElementById('aplicar-filtro');
const productosContenedor = document.getElementById('productos');


aplicarFiltroButton.addEventListener('click', aplicarFiltros);

function aplicarFiltros() {
    const categoriaSeleccionada = categoriaSelect.value;
    const precioMin = parseFloat(precioMinInput.value) || 0;
    const precioMax = parseFloat(precioMaxInput.value) || Infinity;

    
    const productosFiltrados = productos.filter(producto => {
        const cumpleCategoria = categoriaSeleccionada ? producto.categoria === categoriaSeleccionada : true;
        const cumplePrecio = producto.precio >= precioMin && producto.precio <= precioMax;

        return cumpleCategoria && cumplePrecio;
    });

    mostrarProductos(productosFiltrados);
}

function mostrarProductos(productos) {
    productosContenedor.innerHTML = '';

    if (productos.length === 0) {
        productosContenedor.innerHTML = '<p>No se han encontrado productos que coincidan con los filtros.</p>';
        return;
    }

    productos.forEach(producto => {
        const productoElement = document.createElement('div');
        productoElement.classList.add('producto');
        productoElement.innerHTML = `
            <img src="${producto.imagen}" alt="${producto.nombre}">
            <h3>${producto.nombre}</h3>
            <p>Precio: $${producto.precio}</p>
            <p>Categoría: ${producto.categoria}</p>
            <button class="agregar-carrito">Agregar al carrito</button>
        `;
        productosContenedor.appendChild(productoElement);
    });
}
const productos = [
    { id: 1, nombre: 'Aceite de Oliva', precio: 15, categoria: 'aceites', imagen: '/images/aceite.jpg' },
    { id: 2, nombre: 'Chocolate Oscuro', precio: 10, categoria: 'dulces', imagen: '/images/chocolate.jpg' },
    { id: 3, nombre: 'Jamon Ibérico', precio: 30, categoria: 'ibericos', imagen: '/images/jamon.jpg' },
    { id: 4, nombre: 'Cerveza Artesanal', precio: 8, categoria: 'bebidas', imagen: '/images/cerveza.jpg' }
];

mostrarProductos(productos);
