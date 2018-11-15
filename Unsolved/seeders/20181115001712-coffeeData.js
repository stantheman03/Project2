'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
   
      return queryInterface.bulkInsert('Coffee', [{
        name: 'Short Black',
        CoffeeType: 'Espresso',
        roast:'Light',
        price: 1.99,
        productId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
        
      },
      {
        name: 'Doppio',
        CoffeeType: 'Double Espresso',
        roast:'Medium',
        price: 1.99,
        productId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
        
      },
      {
        name: 'Shorty',
        CoffeeType: 'Short Macchiato',
        price: 1.99,
        roast:'Medium',
        productId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
        
      },
      {
        name: 'Heavy',
        CoffeeType: 'Long Macchiato',
        price: 1.99,
        roast:'medium dark roasts',
        productId: 4,
        createdAt: new Date(),
        updatedAt: new Date()
        
      },
      {
        name: 'Long Black',
        CoffeeType: 'Americano',
        roast:'dark',
        price: 1.99,
        productId: 5,
        createdAt: new Date(),
        updatedAt: new Date()
        
      },
      {
        name: 'Cafe',
        CoffeeType: 'Cafe Latte',
        roast:'Medium',
        price: 1.99,
        productId: 6,
        createdAt: new Date(),
        updatedAt: new Date()
        
      },
      {
        name: 'Afternoon Delight',
        CoffeeType: 'Mocha',
        roast:'dark',
        price: 1.99,
        productId: 7,
        createdAt: new Date(),
        updatedAt: new Date()
        
      },
      {
        name: 'Sweet Teeth',
        CoffeeType: 'Affogato',
        roast:'Light',
        price: 1.99,
        productId: 8,
        createdAt: new Date(),
        updatedAt: new Date()
        
      },
      {
        name: 'New Zealand Black',
        CoffeeType: 'Flat White',
        roast:'Medium',
        price: 1.99,
        productId: 9,
        createdAt: new Date(),
        updatedAt: new Date()
        
      },
      {
        name: 'Breakfast Starter',
        CoffeeType: 'Ristretto',
        roast:'Dark',
        price: 1.99,
        productId: 10,
        createdAt: new Date(),
        updatedAt: new Date()
        
      }
    
    ]);  
  
  },

  down: (queryInterface, Sequelize) => {
    
     
      return queryInterface.bulkDelete('Coffee', null, {});
    
  }
};