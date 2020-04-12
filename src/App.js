import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import 'react-notifications/lib/notifications.css';
import configureStore from './store/index';
import { PersistGate } from 'redux-persist/lib/integration/react';


const { store, persistor } = configureStore({});

const App = ()=> {
		return (
			<Provider store={store}>
				<PersistGate persistor={persistor}>
					<div className="App">
					<div>
						Bienvenido a inicio
					</div>
					</div>
				</PersistGate>
			</Provider>
		);
}

export default App;
