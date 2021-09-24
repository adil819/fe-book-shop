import http from './httpCommon';

const baseUrl = '/book';

const getListBook = () => {
    return http.get(`${baseUrl}`)
}

const getBookById = (id) => {
    return http.get(`${baseUrl}/${id}`)
}

const createBook = (payload) => http.post(`${baseUrl}`, payload);

const updateBook = (id, payload) => http.put(`${baseUrl}/${id}`, payload)

const deleteBook = (id) => http.delete(`${baseUrl}/${id}`)

export { getListBook , getBookById, createBook, updateBook, deleteBook }