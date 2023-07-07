import instance from "common/config/api"

const itensServices = {
    buscar:async ()=>{
        const response = await instance.get('itens')
        return response.data
    }
}

export default itensServices