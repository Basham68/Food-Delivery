export const categoryList = [
  {
    id: 1,
    name: 'Pizza',
    image: require('../assets/categories/icons8-pizza-96.png'),
  },
  {
    id: 2,
    name: 'Cup Cake',
    image: require('../assets/categories/icons8-cupcake-emoji-96.png'),
  },
  {
    id: 3,
    name: 'Hamburger',
    image: require('../assets/categories/icons8-hamburger-96.png'),
  },
  {
    id: 4,
    name: 'Spaghetti',
    image: require('../assets/categories/icons8-spaghetti-96.png'),
  },
  {
    id: 5,
    name: 'Takeout-Box',
    image: require('../assets/categories/icons8-takeout-box-96.png'),
  },
  {
    id: 6,
    name: 'Beverages',
    image: require('../assets/categories/icons8-tropical-drink-96.png'),
  },
  {
    id: 7,
    name: 'Fish',
    image: require('../assets/categories/icons8-tropical-fish-96.png'),
  },
  {
    id: 8,
    name: 'Burger',
    image: require('../assets/categories/icons8-cupcake-emoji-96.png'),
  },
  {
    id: 9,
    name: 'Mexican',
    image: require('../assets/categories/icons8-hamburger-96.png'),
  },
  {
    id: 10,
    name: 'Indian',
    image: require('../assets/categories/icons8-spaghetti-96.png'),
  },
];

export const featuredList = [
  {
    id: 1,
    title: 'Hot and Spicy',
    description:
      'Experience the best hot and spicy dishes from top restaurants.',
    image: require('../assets/categories/icons8-cupcake-emoji-96.png'),
    restaurants: [
      {
        id: 101,
        name: 'Spicy House',
        image: require('../assets/restaurants/kfc.webp'),
        description: 'The best spicy food in town.',
        address: '123 Spicy St, Food City, FC 12345',
        lat: 38.2145602,
        lng: -85.5324269,
        stars: 4.5,
        reviews: 120,
        category: 'Spicy',
        dishes: [
          {
            id: 201,
            name: 'Spicy Chicken Wings',
            description: 'Hot and crispy chicken wings with a spicy kick.',
            price: 9.99,
            image: require('../assets/dishes/1.jpeg'),
          },
          {
            id: 202,
            name: 'Spicy Beef Tacos',
            description: 'Tacos filled with spicy beef and fresh toppings.',
            price: 12.99,
            image: require('../assets/dishes/2.jpeg'),
          },
        ],
      },
      {
        id: 102,
        name: 'Heat Wave',
        image: require('../assets/restaurants/fast.webp'),
        description: 'A fiery experience for spice lovers.',
        address: '456 Heat Ave, Spice City, SC 67890',
        lat: 40.7128,
        lng: -74.006,
        stars: 4.7,
        reviews: 95,
        category: 'Spicy',
        dishes: [
          {
            id: 203,
            name: 'Spicy Ramen',
            description:
              'Ramen noodles in a spicy broth with vegetables and meat.',
            price: 14.99,
            image: require('../assets/dishes/3.jpeg'),
          },
          {
            id: 204,
            name: 'Spicy Fried Rice',
            description: 'Fried rice with a blend of spices and hot peppers.',
            price: 10.99,
            image: require('../assets/dishes/4.jpeg'),
          },
        ],
      },
    ],
  },
  {
    id: 2,
    title: 'Pizza Delight',
    description: 'Delicious pizzas with a variety of toppings and flavors.',
    image: require('../assets/restaurants/papa.jpg'),
    restaurants: [
      {
        id: 103,
        name: 'Pizza Palace',
        image: require('../assets/restaurants/papa.jpg'),
        description: 'A palace for pizza lovers.',
        address: '789 Pizza Blvd, Pie Town, PT 54321',
        lat: 37.7749,
        lng: -122.4194,
        stars: 4.8,
        reviews: 150,
        category: 'Pizza',
        dishes: [
          {
            id: 205,
            name: 'Margherita Pizza',
            description:
              'Classic Margherita pizza with fresh mozzarella and basil.',
            price: 11.99,
            image: require('../assets/dishes/5.jpeg'),
          },
          {
            id: 206,
            name: 'Pepperoni Pizza',
            description: 'Pizza topped with spicy pepperoni and cheese.',
            price: 13.99,
            image: require('../assets/dishes/6.jpeg'),
          },
        ],
      },
      {
        id: 104,
        name: 'Cheesy Bites',
        image: require('../assets/restaurants/download.jpeg'),
        description: 'Cheesy pizzas with a burst of flavors.',
        address: '321 Cheese St, Crust City, CC 98765',
        lat: 34.0522,
        lng: -118.2437,
        stars: 4.6,
        reviews: 80,
        category: 'Pizza',
        dishes: [
          {
            id: 207,
            name: 'Cheese Burst Pizza',
            description: 'Pizza with a burst of cheese and delicious toppings.',
            price: 15.99,
            image: require('../assets/dishes/7.jpeg'),
          },
          {
            id: 208,
            name: 'BBQ Chicken Pizza',
            description: 'Pizza topped with BBQ chicken, onions, and cheese.',
            price: 14.99,
            image: require('../assets/dishes/8.jpeg'),
          },
        ],
      },
    ],
  },
];
