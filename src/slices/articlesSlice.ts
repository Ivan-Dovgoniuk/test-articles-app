
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import { useHttp } from "../customHooks/http.hook";
import { IArticle } from "../Types/types";


type InitialState ={
    articlesLoadingStatus:string,
    articles:IArticle[],
    numberOfArticles:number
}

 const initialState:InitialState = {
    articlesLoadingStatus:'idle',
    articles:[],
    numberOfArticles:0
}

export const getArticles = createAsyncThunk(
    'articles/getArticles',
    async () => {
            const {request} = useHttp();
            return await request(`https://api.spaceflightnewsapi.net/v3/articles`,'GET')
    }
);

const articlesSlice = createSlice({
    name: 'articles',
    initialState,
    reducers: {  
        getNumberOfArticles:(state,action:{payload:number})=>{
            state.numberOfArticles = action.payload
   },
    },   extraReducers: (builder) => {
        builder
            .addCase(getArticles.pending, state => {state.articlesLoadingStatus = 'loading'})
    
            .addCase(getArticles.fulfilled, (state, action) => {
                state.articlesLoadingStatus = 'idle';  
                state.articles = action.payload
            })
    
            .addCase(getArticles.rejected, state => {
                state.articlesLoadingStatus = 'error';
            })
            .addDefaultCase((state, action) => {})
    }
    
});

const {actions,reducer} = articlesSlice;

export default reducer;
export const {
    getNumberOfArticles
 } = actions;
