import React from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';

import QuizPage from './components/quiz/QuizPage';

function App() {
	return (
		<div>
			<BrowserRouter>
				<Link to="/quiz">random</Link><br />{/* Example Links */}
				<Link to={{ pathname: "/quiz", state: { category: { id: 1, name: "politics"} } }}>category</Link>

				<Switch>
					<Route path="/quiz" component={ QuizPage } />
				</Switch>
			</BrowserRouter>
		</div>
	)
}

export default App;
