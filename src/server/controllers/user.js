const { checkPassword, hashPassword } = require('../utils/bcrypt');
const { registerSchema, loginSchema } = require('../utils/joi');
const { createToken } = require('../utils/jwt');
const { prisma } = require('../utils/prisma');

const { HTTP_RESPONSE } = require('../config');

const createUser = async (req, res) => {
    const { error } = registerSchema.validate(req.body);

    if (error) return res.status(HTTP_RESPONSE.BAD_REQUEST.CODE).json({ error: error.details[0] });

    let { email, password } = req.body;

    password = await hashPassword(password);

    try {
        let createdUser = await prisma.user.create({
            data: {
                email,
                password,
            },
        });

        if (createdUser) {
            delete createdUser.password; //delete password before creating token with id as we are returning both the created user object without the password and the token

            const token = `Bearer ${createToken(createdUser.id)}`;

            return res.status(HTTP_RESPONSE.CREATED.CODE).json({ data: createdUser, token: token });
        }
    } catch (error) {
        console.log(error);
        return res.status(HTTP_RESPONSE.INTERNAL_ERROR.CODE).json({ error: HTTP_RESPONSE.INTERNAL_ERROR.MESSAGE });
    }
};

const authenticateUser = async (req, res) => {
    const { error } = loginSchema.validate(req.body);

    if (error) {
        return res.status(HTTP_RESPONSE.BAD_REQUEST.CODE).json({ error: error.details[0] });
    }

    const { email, password } = req.body;

    try {
        let selectedUser = await prisma.user.findUnique({
            where: {
                email,
            },
        });

        if (!selectedUser)
            return res.status(HTTP_RESPONSE.UNAUTHORIZED.CODE).json({ error: HTTP_RESPONSE.UNAUTHORIZED.MESSAGE });

        const checkedPassword = checkPassword(selectedUser.password, password);

        if (!checkedPassword)
            return res.status(HTTP_RESPONSE.UNAUTHORIZED.CODE).json({ error: HTTP_RESPONSE.UNAUTHORIZED.MESSAGE });

        delete selectedUser.password; //delete password before creating token with id as we are returning both the created user object without the password and the token
        const token = `Bearer ${createToken(selectedUser.id)}`;
        return res.status(HTTP_RESPONSE.CREATED.CODE).json({ data: selectedUser, token: token });
    } catch (error) {
        console.log(error);
        return res.status(HTTP_RESPONSE.INTERNAL.CODE).json({ error: HTTP_RESPONSE.INTERNAL.MESSAGE });
    }
};

const getUserFromJWT = (req, res) => {
    let { user } = req;

    delete user.password;

    res.json({ data: user });
}

module.exports = {
    authenticateUser,
    createUser,
    getUserFromJWT
};