import React from 'react'
import Counter from './components/Counter';
import Github from './components/Github';

function App() {
  return (
    <div className="App">
		<h1>
			Hello React!
		</h1>
		<h2>
			Grayson O'Leary - s41d538
		</h2>
	  
		<hr />
			<Counter incBy = {1}/>
		<hr />
			<Counter incBy = {2} decBy={2}/>
		<hr />
			<Github />
	</div>
  );
}

export default App;
