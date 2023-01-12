import { configureStore } from '@reduxjs/toolkit';
import  articles from '../slices/articlesSlice'; 

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

const store = configureStore({
    reducer: {articles},
    middleware: getDefaultMiddleware => getDefaultMiddleware(),
})
export default store;