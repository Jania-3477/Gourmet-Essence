const recetas = [
    {
      titulo: "Paella de Mariscos",
      descripcion: "Un plato tradicional español con arroz, mariscos frescos y especias.",
      imagen: "images/paella.jpg",
      enlace: "receta-paella.html"
    },
    {
      titulo: "Tarta de Manzana",
      descripcion: "Un postre clásico con manzanas caramelizadas y masa crujiente.",
      imagen: "images/tarta-manzana.jpg",
      enlace: "receta-tarta-manzana.html"
    },
    {
      titulo: "Sopa de Tomate y Albahaca",
      descripcion: "Una sopa ligera y saludable, perfecta para cualquier época del año.",
      imagen: "images/sopa-tomate.jpg",
      enlace: "receta-sopa-tomate.html"
    }
  ];


const recetasContainer = document.querySelector('.recetas');


recetas.forEach(receta => {
  
  const recetaItem = document.createElement('div');
  recetaItem.classList.add('receta');

  recetaItem.innerHTML = `
    <img src="${receta.imagen}" alt="${Paella}">
    <h3>${receta.titulo}</h3>
    <p>${receta.descripcion}</p>
    <a href="${receta.enlace}" class="btn-detalles">Ver Receta</a>
  `;


  recetasContainer.appendChild(recetaItem);
});
  