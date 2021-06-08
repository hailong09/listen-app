
import {createSlice} from '@reduxjs/toolkit'
export const searchSlice = createSlice({
    name: 'search',
    initialState:{
        categories: [],
        searchValue: "a",
        categoryName: "",
        result: {}
        
    },
    reducers: {
        getCategories: (state, action) => {
            state.categories = action.payload
        },
        getSearchResult: (state, action) => {
            state.searchValue = action.payload
        },
        getCategoryName: (state, action) => {
            state.categoryName = action.payload
        },
        getAfterSearch: (state, action) => {
            state.result = action.payload
        }
    }
})

export const {getCategories, getSearchResult, getCategoryName, getAfterSearch} = searchSlice.actions

export const CategoriesSelector = state => state.search.categories

export const  categoryName = state => state.search.categoryName
export const searchFound = state => state.search.searchValue
export const resultSelector = state => state.search.result
export default searchSlice.reducer