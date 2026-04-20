import axios from "axios"

export const axiosInstance = axios.create({});

export const apiConnector = (method, url, bodyData, headers, params) => {
    // For FormData (file uploads), don't set Content-Type header
    // Let the browser set it with the correct boundary
    const config = {
        method: `${method}`,
        url: `${url}`,
        data: bodyData ? bodyData : null,
        params: params ? params : null,
    }

    // Only set headers if bodyData is not FormData
    if (headers) {
        if (bodyData instanceof FormData) {
            // For FormData, only add non-Content-Type headers
            const filteredHeaders = { ...headers }
            delete filteredHeaders['Content-Type']
            config.headers = filteredHeaders
        } else {
            config.headers = headers
        }
    }

    return axiosInstance(config)
}