import serviceAxios from "@/http/index";

export function userLogin(params = {}) {
    return serviceAxios(
        {
            method: 'GET',
            url: '/users',
            params: params
        }
    )
}

export function userRigister(params ={}) {
    return serviceAxios(
        {
            method: 'POST',
            url: '/users',
            data: params
        }
    )
}

export function userGetAll(params ={}) {
    return serviceAxios(
        {
            method: 'GET',
            url: '/users/getAll',
            params: params
        }
    )
}

export function userUpdate(params ={}) {
    return serviceAxios(
        {
            method: 'POST',
            url: '/users/update',
            data: params
        }
    )
}

export function deleteUser(params ={}) {
    return serviceAxios(
        {
            method: 'GET',
            url: '/users/delete',
            params: params
        }
    )
}

export function getUserInfoPage(params ={}) {
    return serviceAxios(
        {
            method: 'GET',
            url: '/users/page',
            params: params
        }
    )
}
