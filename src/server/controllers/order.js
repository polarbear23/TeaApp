const { prisma } = require('../utils/prisma');


const createOrder = async (req, res) => {

    const createdOrder = await prisma.order.create();

    res.json({ data: createdOrder });
}


exports.module = {
    createOrder
}