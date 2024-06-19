const StatusCode = {
    OK: 200,
    Created: 201,
    BadRequest: 400,
    Unauthorized: 401,
    Forbidden: 403,
    NotFound: 404,
    InternalServerError: 500
};

class HttpResponse {
    constructor(statusCode, body = null) {
    this.statusCode = statusCode;
    this.body = body;
    }
}

class HttpRequest {
    constructor(url, body = null) {
    this.url = url;
    this.body = body;
    }
}

module.exports = { StatusCode, HttpResponse, HttpRequest };
