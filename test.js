const { addProduct,inputValidate } = require('./javascript.js');

// Mock localStorage
const localStorageMock = (function () {
    let store = {};
  
    return {
      getItem: function (key) {
        return store[key] || null;
      },
      setItem: function (key, value) {
        store[key] = value.toString();
      },
      removeItem: function (key) {
        delete store[key];
      },
      clear: function () {
        store = {};
      },
    };
  })();
  
  beforeEach(() => {
    global.localStorage = localStorageMock;
  });
  
  afterEach(() => {
    global.localStorage = null;
  });
  

// test('إضافة منتج جديد', () => {
//     const productName = ' car';
//     const productPrice = 5000;
//     const selectedCategory = 'Elctronics';

//     const result = addProduct(productName, productPrice, selectedCategory);

//     expect(result).toEqual({
//         name: productName,
//         price: productPrice,
//         category: selectedCategory
//     });
// });

test('return true ', () => {
  const productName = 'table';
  const productPrice = 10;
  const selectedCategory = 'ferniture';
  const result = inputValidate(productName, productPrice, selectedCategory);

  expect(result).toBe(true);
});

test('return false ', () => {
  const productName = '';
  const productPrice = 10;
  const selectedCategory = 'Category';

  const result = inputValidate(productName, productPrice, selectedCategory);

  expect(result).toBe(false);
});
