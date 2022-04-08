const { prisma } = require('../utils/prisma');


const getAllOrders = async (req, res) => {
    const id = req.user.id;
    const allUserOrders = await prisma.order.findMany({
        where: {
            userId: id
        },
        include: {
            orderProducts: {
                include: {
                    product: true
                }
            },
        }
    });
    return res.json({ data: allUserOrders });
}

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

const upsertOrderProducts = async (req, res) => {
    const { orderId, productId } = req.body;

    const upsertedOrderProduct = await prisma.orderProducts.upsert({
        where: {
            orderId_productId: { orderId, productId }
        },
        update: {
            quantity: { increment: 1 },
        },
        create: {
            orderId: orderId,
            productId: productId,
            quantity: 1
        }
    });

    return res.json({ data: upsertedOrderProduct });
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


module.exports = {
    createOrder,
    updateOrder,
    upsertOrderProducts,
    getAllOrders
}