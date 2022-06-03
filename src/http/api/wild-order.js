import serviceAxios from "@/http/index";

/**
 * 获取所有野账信息请求封装
 * @param params
 * @returns {*}
 */
export function getAllWildOrderInfo(params ={}) {
    return serviceAxios(
        {
            method: 'GET',
            url: '/wild-order/getAll',
            params: params
        }
    )
}

/**
 * 获取野帐信息并分页请求封装
 * @param params 请求参数，需要pageNum，和pageSize
 * @returns {*}
 */
export function findWildOrderByPage(params = {}) {
    return serviceAxios(
        {
            method: 'GET',
            url: '/wild-order/page',
            params: params
        }
    )
}

/**
 * 更新野账信息请求封装
 * @param params
 * @returns {*}
 */
export function updateWildOrder(params = {}) {
    return serviceAxios(
        {
            method: 'POST',
            url: '/wild-order/update',
            data: params
        }
    )
}

export function deleteWorkOrderAndWildBill(params = {}) {
    return serviceAxios(
        {
            method: 'POST',
            url: '/wild-order/delete',
            data: params
        }
    )
}

export function addWorkOrderAndWildBill(params = {}) {
    return serviceAxios(
        {
            method: 'POST',
            url: '/wild-order/add',
            data: params
        }
    )
}

export function searchWorkOrderAndWildBillByNumber(params = {}) {
    return serviceAxios(
        {
            method: 'GET',
            url: '/wild-order/search',
            params: params
        }
    )
}

