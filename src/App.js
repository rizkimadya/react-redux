import logo from "./logo.svg";
import "./App.css";
import { Provider } from "react-redux";
import store from "./store";
import Todos from "./components/Todos";
import Form from "./components/Form";

function App() {
	return (
		<Provider store={store}>
			<div className="App">
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<p>Belajar Redux</p>
					<Form />
					<Todos />
				</header>
			</div>
		</Provider>
	);
}

export default App;
