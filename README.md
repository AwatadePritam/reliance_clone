# Reliance Clone

This project is a clone of the Reliance website created using React. It aims to replicate the functionality and design of the original website with some modifications. The project utilizes various libraries and tools for state management, routing, asynchronous data fetching, and styling.

## Technologies Used

- **React:** A JavaScript library for building user interfaces.
- **Redux:** A predictable state container for JavaScript apps.
- **React Router DOM:** Declarative routing for React.
- **Redux Thunk:** Middleware for Redux to handle asynchronous actions.
- **Axios:** Promise-based HTTP client for the browser and Node.js.
- **Chakra UI:** A simple, modular, and accessible component library for React.
- **React Icons:** A collection of popular icons as React components.

## Features

### State Management with Redux

Redux is used for advanced state management, allowing efficient handling of application state across components.

### Routing with React Router DOM

React Router DOM is employed for handling navigation within the application, ensuring smooth transitions between different pages.

### Asynchronous Data Fetching with Redux Thunk

Redux Thunk middleware enables asynchronous actions in Redux, facilitating the fetching of product details from an external API.

### Styling with Chakra UI and React Icons

Chakra UI provides a set of customizable, accessible components for styling the application, while React Icons offers a wide range of icons as React components.

## Pages

### Home Page

The home page displays a list of products available on the website. Each product card is clickable, leading to the dynamic route of the single product.

### Single Product Page

This page dynamically fetches and displays the details of a single product when the user clicks on its card from the home page.

### Cart Page

The cart page shows all products added to the user's cart. Users can increase the quantity of each product or remove them from the cart. Access to the cart page is restricted to logged-in users.

### Authentication

Users need to log in to access the cart page. If not logged in, they will be redirected to the login page.


