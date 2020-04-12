import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import 'react-notifications/lib/notifications.css';
import configureStore from './store/index';
import { PersistGate } from 'redux-persist/lib/integration/react';
//components
import Index from './containers/index';

const { store, persistor } = configureStore({});

const App = () => {
	return (
		<Provider store={store}>
			<PersistGate persistor={persistor}>
				<Index />
			</PersistGate>
		</Provider>
	);
};

export default App;
