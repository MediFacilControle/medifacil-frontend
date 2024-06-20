// const { HttpRequest } = require('../IHttpClient');
const authApi = require('../AxiosHttpClient');

export class GenericService {
  static BASE_URL = "http://localhost:5000";


  static async findAll(route, params) {
    try {
      const queryString = params.join("&");
      return await authApi.get(`${this.BASE_URL}/${route}?${queryString}`);
    } catch (e) {
      return e.response;
    }
  }

  static async findAllList(list, header) {
    try {
      return await authApi.get(`${this.BASE_URL}/${list}`, { headers: header });
    } catch (e) {
      return e.response;
    }
  }

  static async findAllListById(ids) {
    try {
      return await authApi.get(
        `${this.BASE_URL}/list/ids?${ids.map((id) => `ids=${id}`).join("&")}`,
      );
    } catch (e) {
      return e.response;
    }
  }

  static async filter(params) {
    try {
      return await authApi.get(`${this.BASE_URL}/filter`, { params });
    } catch (e) {
      return e.response;
    }
  }

  static async findOne(route, id) {
    try {
      return await authApi.get(`${this.BASE_URL}/${route}/${id}`);
    } catch (e) {
      return e.response;
    }
  }

  static async create(route, entity, headers) {
    try {
      return await authApi.post(`${this.BASE_URL}/${route}`, entity, {
        headers,
      });
    } catch (e) {
      return e.response;
    }
  }

  static async update(route, entity) {
    try {
      return await authApi.put(`${this.BASE_URL}/${route}`, entity);
    } catch (e) {
      return e.response;
    }
  }

  static async deleteOne(id) {
    try {
      return await authApi.delete(`${this.BASE_URL}/${id}`);
    } catch (e) {
      return e.response;
    }
  }

  static async deleteAll(ids) {
    try {
      return await authApi.delete(
        `${this.BASE_URL}?${ids.map((id) => `ids=${id}`).join("&")}`,
      );
    } catch (e) {
      return e.response;
    }
  }
}