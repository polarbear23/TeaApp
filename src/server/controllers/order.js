const { prisma } = require('../utils/prisma');


const createOrder = async (req, res) => {
    const id = req.user.id;
    const createdOrder = await prisma.order.create({
        data: {
            isConfirmed: false,
            user: {
                connect: {
                    id: id
                }
            },

        }
    });

    return res.json({ data: createdOrder });
}

const updateOrder = async (req, res) => {
    const { isConfirmed, orderProducts, orderId } = req.body;
    const updatedOrder = await prisma.order.update({
        where: {
            id: orderId
        },
        data: {
            isConfirmed: isConfirmed,
            orderProducts: {
                connectOrCreate: orderProducts
            }
        }
    });

    return res.json({ data: updatedOrder });
}


exports.module = {
    createOrder,
    updateOrder
}