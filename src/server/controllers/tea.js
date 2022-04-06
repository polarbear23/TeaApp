const { prisma } = require('../utils/prisma');

const getAllTea = async (req, res) => {

    const allTea = await prisma.tea.findMany();

    return res.json({ data: allTea })
}

const init = async (req, res) => {
    try {
        const createdTeas = await prisma.tea.createMany({
            data: req.body
        });
        return res.json({ data: createdTeas });
    }
    catch (error) {
        console.error(error);

    }
}


module.exports = { getAllTea, init }