import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducers from './../reducers/index';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
	key: 'root',
	storage: storage,
};
const persistedReducer = persistReducer(persistConfig, reducers);

const middleware = [ thunk ];
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


export default (initialState) => {
	let store = createStore(persistedReducer, initialState, composeEnhancers(applyMiddleware(...middleware)));
	let persistor = persistStore(store);
	return { store, persistor };
};
// export default { persistor, store };
