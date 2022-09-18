import config from '../../config.js'
let usuariosDao
let productosDao
let carritosDao
switch (config.MODO_PERSISTENCIA) {
    case 'mongodb':
        const { default: CommonUser } = await import('./daoMongoDb.js')
        const { default: ProductosDaoMongoDb } = await import('./daoProductosMongoDb.js')
        const { default: carritoDaoMongoDb } = await import('./daoCarritoMongoDb.js')
        usuariosDao = new CommonUser()
        productosDao = new ProductosDaoMongoDb()
        carritosDao = new carritoDaoMongoDb();
        break
        
}
export { usuariosDao, productosDao, carritosDao }