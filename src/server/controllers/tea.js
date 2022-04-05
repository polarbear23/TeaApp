const { prisma } = require('../utils/prisma');

const getAllTea = async (req, res) => {

    const allTea = await prisma.tea.findMany();

    return res.json({ data: allTea })
}



module.exports = { getAllTea }