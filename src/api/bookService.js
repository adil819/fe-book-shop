import http from './httpCommon';

const baseUrl = '/book';

const getListBook = () => {
    return http.get(`${baseUrl}`)
}

const getBookById = (id) => {
    return http.get(`${baseUrl}/${id}`)
}

export { getListBook , getBookById }