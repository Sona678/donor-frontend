import api from "/api/axios";

const REQUEST_URL = "/request";

const bloodRequestService = {
    createBloodRequest: async (data) => {
        const response = await api.post(REQUEST_URL, data);
        return response.data;
    },

    updateBloodRequest: async (id, data) => {
        const response = await api.put(`${REQUEST_URL}/${id}`, data);
        return response.data;
    },

    deleteBloodRequest: async (id) => {
        const response = await api.delete(`${REQUEST_URL}/${id}`);
        return response.data;
    },

    getPendingRequest: async () => {
        const response = await api.get('REQUEST_URL/pending');
        return response.data;
    },

    getMyRequests: async () => {
        const response = await api.get('REQUEST_URL/me');
        return response.data;
    },

    getRequestById: async (id) => {
        const response = await api.get(`${REQUEST_URL}/${id}`);
        return response.data;
    }
};

export default bloodRequestService;