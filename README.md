# Online Store App

## How to Run

1. Clone the repository: `https://github.com/dBezb/online-market`
2. Install dependencies: npm install
3. Run the application: npm start

## Project Overview

_The Online Store App is a modern e-commerce platform designed to provide users with a seamless shopping experience. It incorporates essential features such as product browsing, cart management, favorite items selection, and user authentication. The application aims to showcase best practices in React development and state management using Redux._

## Technologies Used

- **React:** _The application is built using React, a powerful and efficient JavaScript library for building user interfaces. React's component-based architecture allows for the creation of reusable and modular UI elements._

- **JavaScript:** _Various functionalities and utility functions are implemented in JavaScript to enhance the application's features._

- **Redux Toolkit:** _Redux is employed for state management, ensuring a centralized and predictable state container. The use of Redux Toolkit simplifies the implementation of Redux logic, making the codebase more maintainable._

- **React Router:** _Navigation is handled with React Router, enabling users to seamlessly move between different sections of the application without page reloads._

- **Axios:** _The axios library facilitates HTTP requests, enabling the app to interact with a backend server for data retrieval and updates._

- **CSS Modules:** _Component styling is organized using CSS modules, ensuring scoped and maintainable styles._

## Project Structure

- **_`src/components`:_** _Contains React components that compose the application's pages and UI elements, such as Home, Cart, Favorites, etc._

- **_`src/features`:_** _Manages the application state with Redux. The user, products, and categories slices handle user data, product information, and category details._

- **_`src/utils`:_** _Hosts utility functions for common tasks, including array shuffling (shuffle), URL construction (buildUrl), and numeric summation (sumBy)._

- **_`src/styles`:_** _Component styling is organized using CSS modules, ensuring scoped and maintainable styles._

- **_`public`:_** _Contains static assets, including images and fonts._

- **_`index.js`:_** _The main entry point of the application, initializing React and rendering the root component._

## Functionality

### Header

The Header component is a fundamental element in the Online Store App, offering key features for navigation and user interaction. It is structured as follows:

- **Logo:** Displays the app logo, serving as a link to the Home page.

- **User Information:** Shows the user's avatar and name. Clicking opens the user's profile (for logged-in users) or the Sign Up/In form (for guests).

- **Search Bar:** Includes a real-time search input for product discovery. Dynamically updates displayed products based on user input, with suggestions shown below.

- **Navigation Links:**

  - **Home:** Main landing page.
  - **Cart:** Navigate to the Cart page.
  - **Favorites:** Directs to the Favorites page.

- **Cart and Favorites Icons:** Quick access to Cart and Favorites, with the cart icon indicating the item count.

### Home

- Displays a promotional poster and various product sections, including trending items and categories.
- Utilizes Redux to fetch and display products, categorized and filtered appropriately.

### Product Page

- Provides detailed information about a specific product.
- Users can view product images, description, and pricing.
- Allows users to adjust the quantity of items and add them to the shopping cart.
- Utilizes React Router for navigation to the product details page.

### Cart

- Allows users to view and manage items in their shopping cart.
- Supports adding, removing, and adjusting the quantity of items.
- Displays the total price of items in the cart.

### Authentication

- Users can sign up, log in, and log out.
- Utilizes JWT authentication for secure user sessions.

### Profile

- Provides a form for users to update their profile information.
- Requires user authentication to access.

## Showcase

**Home page:**
<div>

https://github.com/dBezb/online-market/assets/130229787/3086ba2f-8548-4860-9b68-49ac9ed3745e

</div>

**If you click on the profile picture, you will see registration (If not registered):**
![signupscreen](https://github.com/dBezb/online-market/assets/130229787/b4025d65-bb3b-46a3-b5a7-da34b28491a0)

**Also if you are registered and click on the icon you will be transferred to the personal profile data editor:**
![signupeditscreen](https://github.com/dBezb/online-market/assets/130229787/b97ad322-fd27-4f95-90f2-98a6a8ed0e43)

**Product category selection option:**
![categoriesfirststepscreen](https://github.com/dBezb/online-market/assets/130229787/3889581d-cb21-40c6-b6ea-a1fa0b47bc96)
![categoriessecondscreen](https://github.com/dBezb/online-market/assets/130229787/62352fde-7fbd-4e05-805f-2f87ab022df0)

**Product page:**
![productpagescreen](https://github.com/dBezb/online-market/assets/130229787/1adade66-44aa-4800-8d7c-04222447e322)
![productpagesecondscreen](https://github.com/dBezb/online-market/assets/130229787/c2b0771d-b7fd-4a9e-bbf4-73bc02fc838a)

**We can also add a product to your cart or favourites:**
- Favourites:
![favourites](https://github.com/dBezb/online-market/assets/130229787/67d5ea7b-e498-4a16-b29f-558e31669cb2)
- Cart: ![cartscreen](https://github.com/dBezb/online-market/assets/130229787/41748d8b-0bdd-48ba-8855-bbc103a91f05)

**Search Bar:**
![search](https://github.com/dBezb/online-market/assets/130229787/293585ae-922f-4bbf-9a87-a5631c90d931)

