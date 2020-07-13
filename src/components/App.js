import React, { useReducer, useEffect } from 'react';

import Header from './Header';
import Search from './Search';
import { initialState, reducer } from '../store/reducer';
import axios from 'axios';

const token = 'https://services.asklora.ai/user-api/token-auth/';

const App = () => {
	const [dispatch] = useReducer(reducer, initialState);

	useEffect(() => {
		axios.get(token).then((jsonResponse) => {
			dispatch({
				type: 'SEARCH_GRAPHS_SUCCESS',
				payload: jsonResponse.data.Search,
			});
		});
	}, []);

	const search = (searchValue) => {
		dispatch({
			type: 'SEARCH_GRAPHS_REQUEST',
		});

		axios(
			`https://services.asklora.ai/api-universe/universe/?fields=ticker,ticker_name,latest_price_change,currency,stock_image&page_size=50 ${searchValue}`
		).then((jsonResponse) => {
			if (jsonResponse.data.Response === 'True') {
				dispatch({
					type: 'SEARCH_GRAPHS_SUCCESS',
					payload: jsonResponse.data.Search,
				});
			} else {
				dispatch({
					type: 'SEARCH_GRAPHS_FAILURE',
					error: jsonResponse.data.Error,
				});
			}
		});
	};

	return (
		<div className="App">
			<div className="m-container">
				<Header text="Search" />
				<Search search={search} />
				<div className="graphs" />
			</div>
		</div>
	);
};

export default App;
