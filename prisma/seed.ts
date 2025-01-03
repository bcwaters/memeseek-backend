// prisma/seed.ts
import { PrismaClient } from '@prisma/client';

// initialize Prisma Client
const prisma = new PrismaClient();

async function main() {
//   // create two dummy recipes
//   const template1 = await prisma.template.upsert({
//     where: { name: 'yes chad' },
//     update: {},
//     create: {
//       id: 'yeschadoriginal',
//       name: 'yes chad',
//       location: '/templates/yeschad/YesChad.webp'
//     }
//   });
//
//   const template2 = await prisma.template.upsert({
//     where: { name: 'two buttons' },
//     update: {},
//     create: {
//       id: 'twobuttonsoriginal',
//       name: 'two buttons',
//       location: '/templates/twhobuttons/twoButtons.jpg'
//     }
//   });
//
//   const template3 = await prisma.template.upsert({
//     where: { name: 'expandingbrain' },
//     update: {},
//     create: {
//       id: 'expandingbrainoriginal',
//       name: 'expandingbrain',
//       location: '/templates/expandingbrain/expandingBrain.jpg'
//     }
//   });
//
//   console.log({ template1, template2, template3 });
//
    const template3 = await prisma.template.upsert({
      where: { name: 'theylive' },
      update: {},
      create: {
        id: 'NPCORIGINAL',
        name: 'NPC',
        location: '/templates/NPC.jpg'
      }
    });
}

// execute the main function
main()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    // close Prisma Client at the end
    await prisma.$disconnect();
  });
