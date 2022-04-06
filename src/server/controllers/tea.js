const { prisma } = require('../utils/prisma');

const getAllTea = async (req, res) => {

    const allTea = await prisma.tea.findMany();

    return res.json({ data: allTea })
}

const init = async (req, res) => {
    const { teas } = req.body;
    try {
        const createdTeas = await prisma.tea.createMany({
            data: teas
        });
        return res.json({ data: createdTeas });
    }
    catch (error) {
        console.error(error);

    }
}


module.exports = { getAllTea, init }