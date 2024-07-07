import { configureStore } from '@reduxjs/toolkit';
import gameStateSlice from './slices/gameStateSlice';
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore, REGISTER, FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE, } from 'redux-persist';
import {thunk}  from 'redux-thunk';


const persistConfig = {
    key: 'root',
    storage,
}

const persistedReducer = persistReducer(persistConfig, gameStateSlice)

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware)=> getDefaultMiddleware( {
        serializableCheck: {
            ignoredActions:  [REGISTER, FLUSH,
                REHYDRATE,
                PAUSE,
                PERSIST,
                PURGE]
        }}).concat(thunk)
});

export const persistor = persistStore(store)
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;