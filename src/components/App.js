import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Header from './Header';
// import HeaderHome from "./HeaderHome";
import Logout from './Logout';
import HomePage from './HomePage';
import ListProduct from './ListProduct';
import ListProductHome from './ListProductHome';
import AddProduct from './AddProduct';
import Login from './Login';
import EditProduct from './EditProduct';
import Register from './Register';
// import Query from './Query';

import axios from 'axios';
import Category from './categories/Category';

function App() {
	axios.defaults.baseURL = 'http://localhost:8080';
	return (
		<BrowserRouter>
			{/* <HeaderHome /> */}
			<Route
				exact
				path={'/'}
				render={() => {
					return window.location.replace('/home');
				}}
			/>
			<Route path="/home" component={HomePage} />
			<Route path="/home" component={ListProductHome} />
			{/* <Route path="/home" component={ListProductHome} /> */}
			{/* <Route exact path={'/products'}
              render={() => {
                return window.localStorage.getItem('token') !== 'undefined'
                  ? <Redirect to='./products' />
                  : <Redirect to='./login' />
              }} /> */}
			<Route exact path="/products" component={Header} />
			<Route exact path="/products" exact component={ListProduct} />

			<Route path="/add" component={Header} />
			<Route path="/add" component={AddProduct} />
			<Route path="/categories" component={Category} />

			<Route path="/login" component={HomePage} />
			<Route path="/login" component={Login} />

			<Route path="/logout" component={Header} />
			<Route path="/logout" component={Logout} />

			<Route path="/register" component={HomePage} />
			<Route path="/register" component={Register} />

			<Route path="/edit/:id" component={Header} />
			<Route path="/edit/:id" component={EditProduct} />
		</BrowserRouter>
	);
}

export default App;
