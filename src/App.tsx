import React from 'react';
import './App.css';
import { Header } from './components/Header/Header';
import SidebarMenu from './components/SidebarMenu/SidevarMenu';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from '../src/components/pages/Home';
import Reports from '../src/components/pages/Peports';
import Products from '../src/components/pages/Products';

function App() {
	return (
		<>
			<Router>
				<div
					style={{
						display: 'flex',
						justifyContent: 'space-between',
					}}>
					<SidebarMenu />
					<Header />
				</div>

				<Switch>
					<Route path='/' exact component={Home} />
					<Route path='/reports' component={Reports} />
					<Route path='/products' component={Products} />
				</Switch>
			</Router>
		</>
	);
}

export default App;
