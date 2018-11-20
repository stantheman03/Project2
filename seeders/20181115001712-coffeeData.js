'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
   
      return queryInterface.bulkInsert('Coffee', [{
        name: 'Short Black',
        CoffeeType: 'Espresso',
        roast:'Light',
        price: 1.99
        
      },
      {
        name: 'Doppio',
        CoffeeType: 'Double Espresso',
        roast:'Medium',
        price: 1.99
        
      },
      {
        name: 'Shorty',
        CoffeeType: 'Short Macchiato',
        price: 1.99,
        roast:'Medium'
        
      },
      {
        name: 'Heavy',
        CoffeeType: 'Long Macchiato',
        price: 1.99,
        roast:'medium dark roasts'
     
        
      },
      {
        name: 'Long Black',
        CoffeeType: 'Americano',
        roast:'dark',
        price: 1.99
    
        
      },
      {
        name: 'Cafe',
        CoffeeType: 'Cafe Latte',
        roast:'Medium',
        price: 1.99
      },
      {
        name: 'Afternoon Delight',
        CoffeeType: 'Mocha',
        roast:'dark',
        price: 1.99
        
      },
      {
        name: 'Sweet Teeth',
        CoffeeType: 'Affogato',
        roast:'Light',
        price: 1.99
      },
      {
        name: 'New Zealand Black',
        CoffeeType: 'Flat White',
        roast:'Medium',
        price: 1.99
        
      },
      {
        name: 'Breakfast Starter',
        CoffeeType: 'Ristretto',
        roast:'Dark',
        price: 1.99
        
      }
    
    ]);  
  
  },

  down: (queryInterface, Sequelize) => {
    
     
      return queryInterface.bulkDelete('Coffee', null, {});
    
  }
};