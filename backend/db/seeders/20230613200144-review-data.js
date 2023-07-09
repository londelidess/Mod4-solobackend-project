"use strict";

/** @type {import('sequelize-cli').Migration} */
let options = {};
if (process.env.NODE_ENV === "production") {
  //production only work render=>NODE_ENV .Users
  options.schema = process.env.SCHEMA; // define your schema in options object
}
module.exports = {
  async up(queryInterface, Sequelize) {
    options.tableName = "Reviews";
    await queryInterface.bulkInsert(
      options,
      [
        {
          spotId: 1,
          userId: 1,
          review: "This was an awesome spot 1!",
          stars: 5,
        },
        {
          spotId: 2,
          userId: 1,
          review: "This was an awesome spot 2!",
          stars: 5,
        },
        {
          spotId: 3,
          userId: 1,
          review: "This was an awesome spot 3!",
          stars: 5,
        },
        {
          spotId: 4,
          userId: 1,
          review: "This was an awesome spot 4!",
          stars: 5,
        },
        {
          spotId: 5,
          userId: 1,
          review: "This was an awesome spot 5!",
          stars: 5,
        },
        {
          spotId: 6,
          userId: 1,
          review: "This was an awesome spot 6!",
          stars: 5,
        },
        {
          spotId: 1,
          userId: 2,
          review: "This was an awesome spot 1 from user 2!",
          stars: 5,
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    options.tableName = "Reviews";
    return queryInterface.bulkDelete(options);
  },
};
