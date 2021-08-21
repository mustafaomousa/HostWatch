'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Vehicles', [
      {
        year: 2019,
        make: 'Audi',
        model: 'Q8',
        startingMileage: 27000,
        picturesUrl: '',
        userId: 1,
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete('Vehicles', {
      userId: { [Op.in]: [1] }
    }, {});
  }
};