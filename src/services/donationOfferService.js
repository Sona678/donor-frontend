import api from "/axios/api"

const DONATION_URL = "/request";

const donationOfferService = {
    createDonationOffer: async (data) => {
        const response = await api.post(DONATION_URL, data);
        return response.data;
    },

    updateDonationOffer: async (id, data) => {
        const response = await api.put(`${DONATION_URL}/${id}`, data);
        return response.data;
    },

    deleteDonationOffer: async (id) => {
        const response = await api.delete(`${DONATION_URL}/${id}`);
        return response.data;
    },

    searchDonor: async (data) => {
        const response = await api.get(`${DONATION_URL}/search`,{
            params:data});
        return response.data;
    },

    getMyOffers: async () => {
        const response = await api.get(`${DONATION_URL}/me`);
        return response.data;
    },

    getOfferById: async (id) => {
        const response = await api.get(`${DONATION_URL}/${id}`);
        return response.data;
    }
};
export default donationOfferService
