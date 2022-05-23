# Sport shop

**[Sport Shop App](https://pdybowski.github.io/shop/) is a single page application created with React, React Redux & Typescript**.

Sport Gen Shop is the fullstack shop application with sport clothes.

Backend of the application is deployed on: https://shop-coders-camp.herokuapp.com/

## Table of contents

1.  [Installation](#1-installation)
2.  [Stack](#2-stack)
3.  [Features](#3-features)
4.  [Authors](#4-authors)
5.  [Additonal informations](#5-additional-informations)

## 1. Installation

1. Clone the app:

`git clone https://github.com/pdybowski/shop.git`

2. Install packages:

`npm install`

3. Run application:

`npm run start`

## 2. Stack

Frontend of the app is created with:

- [React 17.0.2](https://reactjs.org/) and React [packages](https://github.com/pdybowski/healthy-food/blob/master/package.json)

- [React Redux ^8.0.1](https://react-redux.js.org/)

- [Typescript](https://www.typescriptlang.org/)

- [Webpack 5.70.0](https://webpack.js.org/)

- [Prettier 2.6.1](https://prettier.io/)

- [storybook 6.4.19](https://storybook.js.org/)

- [gh-pages ^3.2.3](https://pages.github.com/)

Backend of the app is created with:

- [Mongoose 6.2.8](https://mongoosejs.com/)

- [Express 4.17.3](https://expressjs.com/)

- [Dotenv 16.0.0](https://www.npmjs.com/package/dotenv)

- [Zod 3.14.4](https://github.com/colinhacks/zod)

- [Ts-node ^10.7.0](https://www.npmjs.com/package/ts-node)

- [jsonwebtoken ^8.5.1](https://www.npmjs.com/package/jsonwebtoken)

- [bcryp ^5.0.1](https://www.npmjs.com/package/bcrypt)

## 3. Features

Sport Gen Shop is an example of the application for managing the sales process of sportswear. Main data source for the application is the [database](https://shop-coders-camp.herokuapp.com/) with products, divided into main categories and product types.

<details><summary>Frontend features</summary>

- Presentation of the products divided into main categories: Sport types, Woman / Man / Children clothes, Brands, Bestsellers
- Filtering products based on the product name and price
- Selection of the product size
- Adding product to the cart
- Cart management - adding / removing products from the cart
- Payment process
</details>

<details><summary>Backend features</summary>

- Providing models for: product, brand, sport, shirt, shoe and pants
- Providing controllers for creating, updating, finding and deleting products
- Providing controller for buying process
- Providing controller for fetching page resource data
- Products routes
- Page resource route
- Schemas validation
</details>

## 4. Authors

- **Mentor:** [Piotr Dybowski](https://github.com/pdybowski)

- [Iwona Gorbacz](https://github.com/igorbacz)

- [Justyna Gładysz](https://github.com/jusgladysz)

- [Patrycja Starzec](https://github.com/patrycjastarzec)

- [Tomasz Prządka](https://github.com/altNameForStudying)

## 5. Additional Informations

This project was created during the CodersCamp, 2021/2022 edition. To read more, please check: [CodersCamp](https://www.coderscamp.edu.pl/), [CodersCamp Github](https://github.com/CodersCamp2021).

