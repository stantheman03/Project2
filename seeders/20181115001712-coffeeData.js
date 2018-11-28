'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
   
      return queryInterface.bulkInsert('Coffee', [{
        name: 'Caffee Latte',
        CoffeeType: 'Latte',
        roast:'Light',
        price: 4.15
        
      },
      {
        name: 'Caffee Mocha',
        CoffeeType: 'Mocha',
        roast:'Medium',
        price: 4.65
        
      },
      {
        name: 'White Chocolate Mocha',
        CoffeeType: 'Mocha',
        price: 4.75,
        roast:'Medium'
        
      },
      {
        name: 'Freshly Brewed Coffee',
        CoffeeType: 'Changes Daily',
        price: 2.45,
        roast:'Light/Medium/Dark'
     
        
      },
      {
        name: 'Cinnamon Dolce Latte',
        CoffeeType: 'Espresso',
        roast:'Medium',
        price: 4.65
      },
      {
        name: 'Skinny Vanilla Latte',
        CoffeeType: 'Latte',
        roast:'dark',
        price: 4.65
        
      },
      {
        name: 'Caramel Macchiato',
        CoffeeType: 'Espresso',
        roast:'Light',
        price: 4.75
      },
      {
        name: 'Caramel Flan Latte',
        CoffeeType: 'Latte',
        roast:'Medium',
        price: 4.75
        
      },
      {
        name: 'Flat White',
        CoffeeType: 'Espresso',
        roast:'Dark',
        price: 3.75
        
      },   {
        name: 'Skinny Peppermint Mocha',
        CoffeeType: 'Mocha',
        roast:'Light',
        price: 4.95
      },
      {
        name: 'Mocha Frappuccino',
        CoffeeType: 'Mocha',
        roast:'Medium',
        price: 4.75
        
      },
      {
        name: 'Vanilla Bean Crème Frappuccino',
        CoffeeType: 'Espresso',
        roast:'Dark',
        price: 3.75
        
      },
    
    ]);  
  
  },

  down: (queryInterface, Sequelize) => {
    
     
      return queryInterface.bulkDelete('Coffee', null, {});
    
  }
};