const axios = require("axios");
const { HttpResponse, StatusCode } = require("./IHttpClient");

class HttpClient {
    async get(request) {
        try {
            const response = await axios.get(request.url);
            return new HttpResponse(response.status, response.data);
        } catch (error) {
            return new HttpResponse(error.response.status, error.response.data);
        }
    }

    async post(request) {
        try {
            const response = await axios.post(request.url, request.body);
            return new HttpResponse(response.status, response.data);
        } catch (error) {
            return new HttpResponse(error.response.status, error.response.data);
        }
    }

    async put(request) {
        try {
            const response = await axios.put(request.url, request.body);
            return new HttpResponse(response.status, response.data);
        } catch (error) {
            return new HttpResponse(error.response.status, error.response.data);
        }
    }
}

module.exports = HttpClient;
