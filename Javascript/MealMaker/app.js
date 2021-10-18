const menu = {
    _courses : {
      appetizers: [],
      mains: [],
      desserts: [],
      },
    get appetizers() {
      return this._courses.appetizers
    },
    get mains() {
      return this._courses.mains
    },
    get desserts() {
      return this._courses.desserts
    },
    set appetizers(appetizers) {
      this._courses.appetizers = appetizers
    },
    set mains(mains) {
      this._courses.appetizers = mains
    },
    set desserts(desserts) {
      this._courses.appetizers = desserts
    },
    get courses() {
      return {
        appetizers: this.appetizers,
        mains: this.mains,
        desserts: this.desserts,
      };
    },
      addDishToCourse(courseName, dishName, dishPrice) {
          const dish = {
          name: dishName,
          price: dishPrice,
        };
        return this._courses[courseName].push(dish); 
        },
      
    getRandomDishFromCourse(courseName) {
      const dishes = this._courses[courseName]
      const randomIndex = Math.floor(Math.random()*dishes.length)
      return dishes[randomIndex]
    },
    generateRandomMeal() {
      const appetizer = this.getRandomDishFromCourse('appetizers')
      const main = this.getRandomDishFromCourse('mains');
      const dessert = this.getRandomDishFromCourse('desserts')
      const totalPrice = appetizer.price + main.price + dessert.price
      return `Your mean is ${appetizer.name}, ${main.name} and ${dessert.name}, and the total price is ${totalPrice}`
    }
    };
    
    menu.addDishToCourse('appetizers','salad',3.00);
    menu.addDishToCourse('appetizers','salad',6.00);
    menu.addDishToCourse('appetizers','salad',9.00);
    menu.addDishToCourse('mains','steak',12.00);
    menu.addDishToCourse('mains','salmon',15.00);
    menu.addDishToCourse('mains','tofu',18.00);
    menu.addDishToCourse('desserts','salad',21.00);
    menu.addDishToCourse('desserts','salad',24.00);
    menu.addDishToCourse('desserts','salad',27.00);
    
    const meal = menu.generateRandomMeal();
    console.log(meal);
    
    
    
    
    
    
    
    