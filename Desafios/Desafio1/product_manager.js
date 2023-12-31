
// Creo la clase "Product"
class Product{
    constructor({title, description, price, thumbnail, id, code, stock}){
        this.id = id
        this.title = title
        this.description = description
        this.thumbnail = thumbnail
        this.code = code
        this.stock = stock 
        this.price = price 

        if (!(this.title.length > 1)) {
            throw new Error('Debe incluir el titulo', this.title);
        }
        if (!(this.description.length > 1)) {
            throw new Error('Debe incluir la descripcion', this.description);
        }
        if (!(this.thumbnail.length > 1)) {
            throw new Error('Debe incluir la imagen', this.thumbnail);
        }
        if (!(this.thumbnail.length > 1)) {
            throw new Error('Debe incluir el codigo', this.code);
        }
        if (!(typeof this.stock === 'number')) {
            throw new Error('Debe incluir el stock', this.stock);
        }
        if (!(typeof this.price === 'number')) {
            throw new Error('Debe incluir el price', this.price);
        }

    }
}

// Creo la clase ProductManager con los metodos: addProduc, getProductById y getProducts
class ProductManager{

    constructor(){
        this.products = []
        this._idControl = []
        this._codeControl = []
    }

    _new_id = () => {
        return this._idControl.length + 1
    }

    _verify_code = (code) => {

        if (this._codeControl.includes(code)) {
            throw new Error('Ya existe un producto registrado bajo el codigo: ' + code);
        }
        return true
    }

    addProduct = ({title, description, price, thumbnail, code, stock}) => {
        try {
            this._verify_code(code)
            let id = this._new_id()
            let product = new Product(
                {
                    title, 
                    description, 
                    thumbnail, 
                    price,
                    code, 
                    stock,
                    id
                }
            )
            this.products.push({...product})
            this._idControl.push(id)
            this._codeControl.push(code)
            console.log(`se agrego el producto con el id: ${id}`)
        } catch (error) {
            console.error("No fue posible agregar el producto " + error);
        }
    }

    getProductById = (id) => {
        console.log("Buscar producto por id: ", id)

        let found_product = this.products.filter((product) => {
            return product.id === id
        })

        if (!found_product.length) {
            console.error("Not found")
            return {}
        }
        console.log(found_product)
        return found_product
    }

    getProducts = () => {
        console.log("Obtener productos")
        return this.products
    }
}

let productManager = new ProductManager();



console.log("--------------------- OBTENER PRODUCTOS ------------------------------")
console.log(productManager.getProducts())


// Agrego un producto de prueba
console.log("-------------------------- AGREGAR PRODUCTO ------------------------------")
productManager.addProduct({
        title: "producto prueba",
        description: "Este es un producto prueba",
        price:200,
        thumbnail: "Sin imagen",
        code: "abc123",
        stock: 25
    }
)

console.log("--------------------- OBTENER PRODUCTOS ------------------------------")
console.log(productManager.getProducts())

console.log("-------------------------- AGREGAR PRODUCTO ------------------------------")
productManager.addProduct({
        title: "producto de prueba",
        description: "Este es un producto de prueba",
        price:200,
        thumbnail: "Sin imagen",
        code: "abc123",
        stock: 25
    }
)


console.log("--------------------- OBTENER PRODUCTOS ------------------------------")
console.log(productManager.getProducts())

console.log("--------------------- BUSCAR -----------------------------------")
productManager.getProductById(id=1)
productManager.getProductById(id=4)