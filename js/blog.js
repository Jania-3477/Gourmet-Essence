const recetas = [
    {
      titulo: 'Receta de Tarta de Aceite de Oliva',
      descripcion: 'Una deliciosa receta de tarta utilizando aceite de oliva extra virgen.',
      imagen: '/img/Receta-aceite-oliva.jpg',
      ingredientes: ['Aceite de oliva', 'Harina', 'Azúcar', 'Huevos'],
      pasos: [
        'Mezcla los ingredientes secos.',
        'Agrega el aceite y mezcla bien.',
        'Hornea por 30 minutos a 180°C.'
      ]
    },
    {
      titulo: 'Jamón Ibérico con Melón',
      descripcion: 'Una receta fresca y deliciosa con jamón ibérico.',
      imagen: '/img/melon_con_jamon_57435_orig.jpg',
      ingredientes: ['Jamón ibérico', 'Melón', 'Aceite de oliva'],
      pasos: [
        'Corta el melón en trozos pequeños.',
        'Envuelve cada trozo con jamón.',
        'Agrega un toque de aceite de oliva y disfruta.'
      ]
    },
    {
      titulo: 'Galletas de Mermelada de Frutas',
      descripcion: 'Una receta simple y dulce utilizando mermelada de frutas.',
      imagen: '/img/galletas-de-navidad-linzer.jpg',
      ingredientes: ['Mermelada de frutas', 'Harina', 'Azúcar'],
      pasos: [
        'Precalienta el horno a 180°C.',
        'Mezcla todos los ingredientes y forma las galletas.',
        'Hornea por 15 minutos.'
      ]
    }
  ];
  
  const mostrarRecetas = () => {
    const recetasContainer = document.querySelector('.recetas');
    recetas.forEach((receta) => {
      const recetaDiv = document.createElement('div');
      recetaDiv.classList.add('receta');
      recetaDiv.innerHTML = `
        <img src="${receta.galletasgalletas-de-navidad-linzer.jpg}" alt="${receta.galletasgalletas}">
        <h3>${receta.titulo}</h3>
        <p>${receta.descripcion}</p>
        <h4>Ingredientes:</h4>
        <ul>
          ${receta.ingredientes.map(ingrediente => `<li>${ingrediente}</li>`).join('')}
        </ul>
        <h4>Pasos:</h4>
        <ol>
          ${receta.pasos.map(paso => `<li>${paso}</li>`).join('')}
        </ol>
      `;
      recetasContainer.appendChild(recetaDiv);
    });
  };
  
  mostrarRecetas();  
  
  