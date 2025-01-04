// prisma/seed.ts
import { PrismaClient } from '@prisma/client';

// initialize Prisma Client
const prisma = new PrismaClient();

async function main() {
  //   // create dummy templates
  //   id        String      @id @default(uuid) @unique
  //   name      String      @unique
  //   location  String      @unique
  //   creator   String
  //   crypto    String
  //   communityOrigin   String
  //   memeRating Int @default(0)
  //   ranking   int

  const template1 = await prisma.templateMetadata.upsert({
    where: { name: 'npc' },
    update: {},
    create: {
      name: 'npc',
      location: '/templates/npc',
      creator: 'Brent',
      crypto: 'BTC',
      communityOrigin: 'pbs',
      memeRating: 1,
      ranking: 2,
    },
  });
  //
  //   const template2 = await prisma.templateMetadata.upsert({
  //     where: { name: 'expanding brain' },
  //     update: {},
  //     create: {
  //
  //       name: 'expanding brain',
  //       location: '/templates/expandingbrain/expandingBrain.jpg',
  //       creator: 'Skyler',
  //       crypto: 'eth',
  //       communityOrigin: 'Big Brain Land',
  //       memeRating: 2,
  //       ranking: 1
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
  //     const template3 = await prisma.template.upsert({
  //       where: { name: 'theylive' },
  //       update: {},
  //       create: {
  //         id: 'NPCORIGINAL',
  //         name: 'NPC',
  //         location: '/templates/NPC.jpg'
  //       }
  //  });
}

// execute the main function
main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    // close Prisma Client at the end
    await prisma.$disconnect();
  });
