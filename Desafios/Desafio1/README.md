# Programacion Backend CoderHouse
## Comision: 47310
## Profesor: Farid Sesin
## Tutor: Gabriel Cavasso

# Clases con ECMAScript y ECMAScript avanzado

## Consigna: 
<li>Realizar una clase “ProductManager” que gestione un conjunto de productos.</li>

## Aspectos a incluir
<li>Debe crearse desde su constructor con el elemento products, el cual será un arreglo vacío.</li>
<li>Cada producto que gestione debe contar con las propiedades:
- title (nombre del producto)
- description (descripción del producto)
- price (precio)
- thumbnail (ruta de imagen)
- code (código identificador)
- stock (número de piezas disponibles)
</li>
<li>Debe contar con un método “addProduct” el cual agregará un producto al arreglo de productos inicial.
- Validar que no se repita el campo “code” y que todos los campos sean obligatorios
- Al agregarlo, debe crearse con un id autoincrementable
</li>
<li>Debe contar con un método “getProducts” el cual debe devolver el arreglo con todos los productos creados hasta ese momento.</li>
<li>Debe contar con un método “getProductById” el cual debe buscar en el arreglo el producto que coincida con el id
- En caso de no coincidir ningún id, mostrar en consola un error “Not found”
</li>