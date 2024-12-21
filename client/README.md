# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)


/* App.css */

.container {
  font-family: 'Arial, sans-serif';
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.header {
  font-size: 24px;
  margin-bottom: 10px;

  border-radius: 15px;
}

/* Styles to Resturant List  */


/* RestaurantList.css */

.container {
  font-family: 'Arial, sans-serif';
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.header {
  font-size: 32px;
  margin-bottom: 20px;
  background-color: rgba(255, 112, 56, 0.92);
  color: white;
  padding: 10px;
}

.filter-container {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin-bottom: 20px;
}

.filter-container label {
  font-size: 18px;
  color: #555;
}

.filter-input {
  padding: 8px;
  font-size: 16px;
}

.restaurant-card-container {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
}


/* RestaurantCard.css */

.card {
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 12px;
  margin: 10px;
  width: 200px;
  cursor: pointer;
  transition: transform 0.3s ease-in-out;
}

.card:hover {
  transform: scale(1.05);
}

.image-container {
  overflow: hidden;
  border-radius: 8px;
  margin-bottom: 10px;
  height: 150px;
  /* Set a fixed height for the image container */
}

.restaurant-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  /* Maintain the aspect ratio and cover the container */
  border-radius: 8px;
}

/* Responsive Styles */
@media screen and (max-width: 600px) {
  .card {
      width: 100%;
  }
}



/* Dish Card  */
.dish-card {
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 12px;
  margin: 10px;
  width: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  transition: transform 0.3s ease-in-out;
}

.dish-card:hover {
  transform: scale(1.05);
}

img {
  width: 100%;
  /* Set the width to fill the container */
  height: 100px;
  /* Set the fixed height for the image */
  object-fit: cover;
  /* Maintain the aspect ratio and cover the container */
  border-radius: 8px;
  margin-bottom: 10px;
}

h3 {
  margin-bottom: 8px;
}

p {
  margin-bottom: 8px;
}

button {
  margin-top: 8px;
  padding: 8px;
  cursor: pointer;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 4px;
}

/* Responsive Styles */
@media screen and (max-width: 600px) {
  .dish-card {
      width: 100%;
  }
}


/* CART  */
.cart-container {
  position: fixed;
  top: 10px;
  right: 10px;
  width: 200px;
  border: 2px solid rgba(255, 112, 56, 0.92);
  border-radius: 10px;
  height: fit-content;
  padding: 5px 10px;
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  overflow-y: auto;
  z-index: 1000;
}

.cart-container button {
  background-color: rgba(255, 112, 56, 0.92);
  color: white;
  border: none;
  border-radius: 10px;
}

h2 {
  margin-bottom: 10px;
  margin-left: 20px;
}

.cart-content {
  padding: 16px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
}



#pre-orders {
  background-color: rgba(255, 112, 56, 0.92);
  color: aliceblue;
  font-size: 20px;
  padding: 5px 10px;
  border-radius: 10px;
  cursor: pointer;
}



/* Previous orders  */
/* PreviousOrders.css */

.previous-orders-container {
  max-width: 600px;
  margin: 20px auto;
  padding: 20px;
  position: absolute;
  background-color: rgba(255, 112, 56, 0.92);
  color: white;
  border-radius: 10px;
}

.orders-list {
  list-style: none;
  padding: 0;
}

.order-card {
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 15px;
  margin-bottom: 15px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease-in-out;
}

.order-card:hover {
  transform: scale(1.02);
}

.order-card h3 {
  color: #333;
  margin-bottom: 10px;
}

.order-details {
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  color: #666;
}