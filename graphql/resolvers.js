import { productosDao } from "../persistencia/daos/index.js";
import { usuariosDao } from "../persistencia/daos/index.js";

export const resolvers = {
    Query: {
        products: async()=>{
            console.log(await productosDao.getAll())
            return await productosDao.getAll()
        },
        deleteProduct: async(_, { name } )=>{
            await productosDao.deleteByName(name);
            return `${name} ha sido eliminado`;
        },
        getProduct: async(_, { name } )=>{
            const result = await productosDao.getByName(name);
            console.log(result[0]);
            return result[0];
        },
        getUsers: async()=>{           
            return await usuariosDao.getAll();
        }
    },
    Mutation: {
        createProduct: async(_, { input } )=>{
            await productosDao.saveProduct(input);
            return input;
        },
        updateProduct: async(_, { input } )=>{
            await productosDao.updateProduct(input.name, input.title, input.codigo, input.stock, input.foto, input.precio);
            return input;
        }
    }
}
