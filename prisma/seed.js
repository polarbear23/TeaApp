const { prisma } = require('../src/server/utils/prisma');
const { teas } = require('../src/server/utils/data')


const init = async () => {
    const createdTeasPromises = teas.map(async (tea) => {
        const createdTea = await prisma.tea.create({
            data: tea
        });
        return createdTea;
    })

    const finalPromise = Promise.all(createdTeasPromises);
    const result = await finalPromise;
    return result;
}

const createProducts = async (createdTeas) => {
    const createdProducts = [];
    for (let i = 0; i < createdTeas.length; i++) {
        const createdProduct = await prisma.product.create({
            data: {
                price: Math.floor(Math.random() * 2000), //generate random prices
                tea: {
                    connect: {
                        id: createdTeas[i].id
                    }
                }
            }
        });
        createdProducts.push(createdProduct);
    }
    return createProducts;
}

const seed = async () => {
    const createdTeas = await init();
    console.log("createdTeas", createdTeas);
    await createProducts(createdTeas);
}

seed()
    .catch(async (e) => {
        console.error(e);
        await prisma.$disconnect();
    })
    .finally(() => process.exit(1));