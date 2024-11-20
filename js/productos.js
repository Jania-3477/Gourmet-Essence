
const productos = [
    {
      nombre: "Salchichón Ibérico",
      precio: "$60,000 - $130,000 por kilo",
      descripcion: "Embutido elaborado con carne magra de cerdo ibérico, especias y pimienta negra.",
      imagen: "img/Salchichon-iberico-de-bellota.jpg"
    },
    {
      nombre: "Tacos de Jamón Ibérico",
      precio: "$70,000 - $150,000 por bandeja (200 g)",
      descripcion: "Trozos de jamón ideales para aperitivos o recetas gourmet.",
      imagen: "img/virutas-jamon-iberico.jpg"
    },
    {
      nombre: "Paleta Ibérica de Bellota",
      precio: "$200,000 - $800,000 por kilo",
      descripcion: "Más económica que el jamón ibérico, pero con un sabor igualmente exquisito.",
      imagen: "img/paleta-de-bellota-100-iberica.jpg"
    },
    {
      nombre: "Lomo Ibérico",
      precio: "$50,000 - $100,000 por pieza (500 g)",
      descripcion: "Lomo de cerdo adobado y curado, con sabor intenso y textura tierna.",
      imagen: "img/lomo-iberico.jfif"
    },
    {
      nombre: "Café de Origen",
      precio: "$30,000 - $70,000 por paquete (500 g)",
      descripcion: "Granos de café de alta calidad, disponibles enteros o molidos.",
      imagen: "img/cafe-molido.jpg"
    },
    {
      nombre: "Té Matcha Japonés",
      precio: "$50,000 - $120,000 por lata (40 g)",
      descripcion: "Matcha de alta calidad para preparar el té tradicional japonés.",
      imagen: "img/Te-matcha.webp"
    },
    {
      nombre: "Infusiones de Frutas Premium",
      precio: "$20,000 - $50,000 por caja (20 bolsitas)",
      descripcion: "Combinación de frutas seleccionadas para una infusión refrescante.",
      imagen: "img/infusiones.jfif"
    },
    {
      nombre: "Jugo de Frutas Orgánicas",
      precio: "$15,000 - $30,000 por botella (330 ml)",
      descripcion: "Jugo natural de frutas prensado en frío, sin aditivos.",
      imagen: "img/jugos-en-frio.png"
    },
    {
      nombre: "Galletas de Avena con Chocolate Negro",
      precio: "$15,000 - $30,000 por caja (300 g)",
      descripcion: "Deliciosas galletas de avena con trozos de chocolate negro.",
      imagen: "img/Galletas-con-chocolate-negro.jfif"
    },
    {
      nombre: "Bombones de Coco y Almendra",
      precio: "$20,000 - $40,000 por caja (12 unidades)",
      descripcion: "Bombones rellenos de coco y almendra, perfectos para regalar.",
      imagen: "img/bonbones-coco.jfif"
    },
    {
      nombre: "Yogurt Liofilizado con Frutas",
      precio: "$15,000 - $30,000 por paquete",
      descripcion: "Yogurt liofilizado con trozos de frutas, ideal para llevar.",
      imagen: "img/Yogurt-liofilizado.png"
    },
    {
      nombre: "Barras de Granola Artesanales",
      precio: "$5,000 - $10,000 por unidad",
      descripcion: "Barras de granola caseras, perfectas para un snack saludable.",
      imagen: "img/Granola.jpg"
    },
    {
      nombre: "Aceite de Oliva Virgen Extra",
      precio: "$50,000 - $100,000 por botella (500 ml)",
      descripcion: "Aceite de oliva virgen extra de España o Italia, de primera calidad.",
      imagen: "img/aceite_de_oliva.jfif"
    },
    {
      nombre: "Aceite de Aguacate Premium",
      precio: "$40,000 - $80,000 por botella (250 ml)",
      descripcion: "Aceite de aguacate premium para aderezos o cocina gourmet.",
      imagen: "img/aceite_familia.png"
    }
  ];
  
  
  const productList = document.querySelector('.product-list');
  
  
  const renderizarProductos = () => {
    productos.forEach(producto => {
      const productItem = document.createElement('div');
      productItem.classList.add('producto');
      productItem.innerHTML = `
        <img src="${producto.imagen}" alt="${producto.nombre}">
        <h3>${producto.nombre}</h3>
        <p>${producto.descripcion}</p>
        <p><strong>${producto.precio}</strong></p>
      `;
      productList.appendChild(productItem);
    });
  };
  

  renderizarProductos();
  

   

  
