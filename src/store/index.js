import { combineReducers, configureStore } from "@reduxjs/toolkit"
import userReducer from "./userSlice";
import storage from 'redux-persist/lib/storage';
import {FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, 
    REGISTER, persistReducer, persistStore } from 'redux-persist';

export const rootReducer = combineReducers({
    user: userReducer
});

const persistConfig = {
    key: "root",
    storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer)


export const store = configureStore({
    reducer: persistedReducer,
        middleware: getDefaultMiddleware => getDefaultMiddleware(
            { 
                serializableCheck:{
                    ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
                }
            }
        )
})

export const persistor = persistStore(store);

// Redux 스토어를 설정
// persist 시키기 위해 상태를 로컬 스토리지에 저장하고 복원하도록 설정

