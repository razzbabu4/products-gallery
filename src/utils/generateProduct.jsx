import { faker } from '@faker-js/faker';
import { v4 as uuidv4 } from 'uuid'; // Import UUID function

export const generateProducts = (count = 20) => {
  const categories = ['Electronics', 'Clothing', 'Furniture', 'Books', 'Toys', 'Groceries'];

  return Array.from({ length: count }, () => ({
    id: uuidv4(), // Use UUID package
    name: faker.commerce.productName(),
    price: parseFloat(faker.commerce.price(10, 500, 2)),
    category: faker.helpers.arrayElement(categories),
    popularity: faker.number.int({ min: 1, max: 5 }),
    image: faker.image.urlLoremFlickr({ category: 'product' }),
    description: faker.lorem.sentence(),
  }));
};
