export const HTTP_RESPONSE = {
    OK: { CODE: 200 },
    CREATED: { CODE: 201 },
    BAD_REQUEST: { MESSAGE: 'Bad Request', CODE: 400 },
    UNAUTHORIZED: { MESSAGE: 'Unauthorized', CODE: 401 },
    FORBIDDEN: { MESSAGE: 'Forbidden', CODE: 403 },
    NOT_FOUND: { MESSAGE: 'Not found', CODE: 404 },
    INTERNAL_ERROR: { MESSAGE: 'Internal server error', CODE: 500 },
};
 
export const SECRET = process.env.SECRET;

export const SERVER_STATUS = {
    STARTED: 'Server started on port',
    HELLO: 'Hello World!',
};
