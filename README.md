

# Aplicación clásica de angular.

- creamos el módulo de heroes
  creamos 2 componentes.

- creamos el componente de counter.
  propiedades.
  método.


- levantar el proyecto con ng serve

- hemos visto directiva *ngFor y *ngIf

- RouterLink y RouterLinkActive.

---- Vamos a crear un módulo que se va a llamar shared.
ng g m shared --routing

Luego crearemos un componente dentro de shared que se va a llamar 
sidemenu

ng g c shared/sidemenu

hay que fijarse en este punto que el componente sidemenu está en el módulo shared y que se puede exportar fuera.

Hay que importar desde el módulo app.module el módulo shared.

En app.html vamos a hacer referencia al sidemenu


Para navegar entre las páginas.
Hay que activar RouterLink ( mecanismo de angular para la navegacion) , RouterLinkActive ( mecanismo de angular para controlar la página activa) .
Vemos con loadChildren el LazyLoad.



En el html y ts del componente sidemenu, hacemos el menu




por último actualizar el fichero de rutas principal y subrutas en caso de que haga falta que si que lo hemos hecho.




