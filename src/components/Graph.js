import React from 'react';

const token =
	'https://services.asklora.ai/api-universe/universe/?fields=ticker,ticker_name,latest_price_change,currency,stock_image&page_size=50';

const Graph = axios.get(url, headers:{
  'Content-Type':'application/json',
  'Authorization':`Bearer ${token}`
  })
  
  return (
		<div className="graph">
			<h2>Click to see the Graph</h2>
			<p>({graph.Year})</p>
		</div>
	);

export default Graph;
