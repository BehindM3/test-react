<h1 align="center" font-size="18px"> Proyecto: Curso react </h1>

<p >Este proyecto tiene como objetivo diseñar un sitio web, mas precisamente un e-Commerce de productos tecnologicos, por medio del uso de <strong>React</strong> como libreria principal implementada con Vite.</p>

<h2>Diseño: </h2> 
<ul>
  <li><strong>Home:</strong> <p>Al cual podremos acceder por medio del icono o nombre del sitio (COM-E), donde se vistaran todos los productos sin ningun tipo de filtro.</p></li>
  <br>
  <li><strong>Headset, Mouse, Keyboards:</strong> <p>Son tres (3) rutas distintas, cada una aplicando el filtro correspondiente a los productos, para que asi se puedan listar los que corresponden a esa categoria.</p></li>
  <br>
  <li><strong>More Detail:</strong> <p>Ruta encargada de redirigirnos a la informacion detallada del producto seleccionado, a esta ruta se accede desde el Link asociado debajo de cada Item en la card correspondiente a cada uno. <strong>Esta ruta nos mostrara una pantalla de carga.</strong></p></li>
  <br>
  <li><strong>Cart:</strong> <p>El "Cart" esta dividido en dos tipos: 
  <ol>
      <li><strong>CartAside:</strong> <p>Carrito lateral se puede encontrar en todas las pestñas del sitio web, con el fin de poder acceder a los productos del carrito de forma rapida, esta pestaña lateral posee un boton que nos redirige a la <strong>pagina del carrito</strong> (PageCart) real.</p></li>
      <li><strong>PageCart:</strong> <p>Pagina dedicada a mostrar todos lo carritos y que nos redirigira directamente al formulario de checkout, para termianr con la compra, cuando el carrito se encuentra vacio esta pagina nos lo hara saber.</p></li>
  </ol>  
  <br>
  </p>
  <li><strong>Rutas error:</strong> <p>Rutas encargadas de captar errores, solo existen dos casos:
    <ul>
      <li><p>
        400-Bad Request: Se muestra cuando se intenta de ingresar a la ruta "/detail/:idProduct", con un idProduct no valido.
      </p></li>
      <li><p>
        404-Bad Request: Se seteo bajo el Link "*".
      </p></li>
    </ul>
  </p></li>
  
</ul>