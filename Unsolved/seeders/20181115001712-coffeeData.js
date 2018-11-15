'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
   
      return queryInterface.bulkInsert('Coffee', [{
        name: 'Short Black',
        CoffeeType: 'Espresso',
        roast:'Light',
        price: 1.99,
        createdAt: new Date(),
        updatedAt: new Date()
        
      },
      {
        name: 'Doppio',
        CoffeeType: 'Double Espresso',
        roast:'Medium',
        price: 1.99,
        createdAt: new Date(),
        updatedAt: new Date()
        
      },
      {
        name: 'Shorty',
        CoffeeType: 'Short Macchiato',
        price: 1.99,
        roast:'Medium',
        createdAt: new Date(),
        updatedAt: new Date()
        
      },
      {
        name: 'Heavy',
        CoffeeType: 'Long Macchiato',
        price: 1.99,
        roast:'medium dark roasts',
        createdAt: new Date(),
        updatedAt: new Date()
        
      },
      {
        name: 'Long Black',
        CoffeeType: 'Americano',
        roast:'dark',
        price: 1.99,
        createdAt: new Date(),
        updatedAt: new Date()
        
      },
      {
        name: 'Cafe',
        CoffeeType: 'Cafe Latte',
        roast:'Medium',
        price: 1.99,
        createdAt: new Date(),
        updatedAt: new Date()
        
      },
      {
        name: 'Afternoon Delight',
        CoffeeType: 'Mocha',
        roast:'dark',
        price: 1.99,
        createdAt: new Date(),
        updatedAt: new Date()
        
      },
      {
        name: 'Sweet Teeth',
        CoffeeType: 'Affogato',
        roast:'Light',
        price: 1.99,
        createdAt: new Date(),
        updatedAt: new Date()
        
      },
      {
        name: 'New Zealand Black',
        CoffeeType: 'Flat White',
        roast:'Medium',
        price: 1.99,
        createdAt: new Date(),
        updatedAt: new Date()
        
      },
      {
        name: 'Breakfast Starter',
        CoffeeType: 'Ristretto',
        roast:'Dark',
        price: 1.99,
        createdAt: new Date(),
        updatedAt: new Date()
        
      }
    
    ]);  
  
  },

  down: (queryInterface, Sequelize) => {
    
     
      return queryInterface.bulkDelete('Coffee', null, {});
    
  }
};