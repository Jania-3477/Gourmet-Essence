let carrito = [];

const agregarAlCarrito = (idProducto) => {
 
  const producto = productos.find((producto) => producto.id === idProducto);

  
  if (producto) {
    carrito.push(producto);
    mostrarCarrito();
  }
};

const mostrarCarrito = () => {
  const carritoContainer = document.querySelector('.carrito');
  carritoContainer.innerHTML = '';

  let total = 0;
  
  carrito.forEach((producto, index) => {
    const productoDiv = document.createElement('div');
    productoDiv.classList.add('producto-carrito');
    productoDiv.innerHTML = `
      <img src="${producto.imagen}" alt="${producto.nombre}">
      <h3>${producto.nombre}</h3>
      <span>$${producto.precio}</span>
      <button onclick="eliminarDelCarrito(${index})">Eliminar</button>
    `;
    carritoContainer.appendChild(productoDiv);
    total += producto.precio;
  });

 
  const totalDiv = document.querySelector('.total');
  totalDiv.innerHTML = `Total: $${total.toFixed(2)}`;
};

const eliminarDelCarrito = (index) => {
  carrito.splice(index, 1);  
  mostrarCarrito();
};

const procederAlPago = () => {
  
  alert('Redirigiendo a la página de pago');
};
