import http from './httpCommon';

const baseUrl = '/book';

const getListBook = () => {
    return http.get(`${baseUrl}`)
}

export { getListBook }