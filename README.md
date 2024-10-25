<h1 align="center" font-size="18px"> Proyecto: Curso react </h1>

<p >Este proyecto tiene como objetivo diseñar un sitio web, mas precisamente un e-Commerce de productos tecnologicos, por medio del uso de <strong>React</strong> como libreria principal implementada con Vite.</p>

<h2>Diseño: </h2> 
<ul>
  <li><strong>Home:</strong> <p>Al cual podremos acceder por medio del icono o nombre del sitio (COM-E), donde se vistaran todos los productos sin ningun tipo de filtro.</p></li>
  
  <li><strong>Headset, Mouse, Keyboards:</strong> <p>Son tres (3) rutas distintas, cada una aplicando el filtro correspondiente a los productos, para que asi se puedan listar los que corresponden a esa categoria.</p></li>
  
  <li><strong>More Detail:</strong> <p>Ruta encargada de redirigirnos a la informacion detallada del producto seleccionado, a esta ruta se accede desde el Link asociado debajo de cada Item en la card correspondiente a cada uno. <strong>Esta ruta nos mostrara una pantalla de carga.</strong></p></li>

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
