import http from './httpCommon';

const baseUrl = '/member';

const getListMember = () => {
    return http.get(`${baseUrl}`)
}

const getMemberById = (id) => {
    return http.get(`${baseUrl}/${id}`)
}

// const createMember = (payload) => http.post(`${baseUrl}`, payload);

// const updateMember = (id, payload) => http.put(`${baseUrl}/${id}`, payload)

// const deleteMember = (id) => http.delete(`${baseUrl}/${id}`)

export { getListMember }
// export { getListMember , getMemberById, createMember, updateMember, deleteMember }