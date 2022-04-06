const { prisma } = require('../src/server/utils/prisma');
const { teas } = require('../src/server/utils/data')


const init = async () => {

    const createdTeas = await prisma.tea.createMany({
        data: teas
    });


}

const seed = async () => {
    await init();
}

seed()
    .catch(async (e) => {
        console.error(e);
        await prisma.$disconnect();
    })
    .finally(() => process.exit(1));