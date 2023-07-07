import instance from "common/config/api"

const categoriasServices = {
    buscar:async ()=>{
        const response = await instance.get('categorias')
        return response.data
    }
}

export default categoriasServices