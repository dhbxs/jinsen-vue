import serviceAxios from "@/http/index";

export function getAllFile(params = {}) {
    return serviceAxios(
        {
            method: 'GET',
            url: '/file/getAll',
            params: params
        }
    )
}