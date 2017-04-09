// let's go!

import React from 'react';
import { render } from 'react-dom';
import {BrowserRouter, Match, Miss} from 'react-router';

import App from './components/App';
import Storepicker from './components/Storepicker';
import NotFound from './components/NotFound';

const Root = () => {
	return (
		<BrowserRouter>
			<div>
				<Match exactly pattern="/" component={Storepicker} />
				<Match pattern="/store/:storeId" component={App} />
				<Miss component={NotFound} />	
			</div>
		</BrowserRouter>
	)
}

render(<Root/>, document.getElementById('main'));