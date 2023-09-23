const { PrismaClient } = require("@prisma/client");

const database = new PrismaClient();

async function main() {
  try {
    await database.category.createMany({
      data: [
        { name: "Web Development" },
        { name: "Mobile Application Development" },
        { name: "Data Science and Analytics" },
        { name: "Game Development" },
        { name: "Network and Cyber Security" },
        { name: "UI/UX Designer" },
        { name: "Software Test Automation" },
      ],
    });

    console.log("Success!");
  } catch (error) {
    console.log("Error seeding the database categories", error);
  } finally {
    await database.$disconnect();
  }
}

main();