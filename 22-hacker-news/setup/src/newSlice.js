import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  loading: true,
  value: 0,
  news: [],
  query: "react",
  page: 1,
  numberPage:50
};
export const getFetchNews = createAsyncThunk(
  "news/getFetchNews",
  async (name, thunkApi) => {
    let url = `https://hn.algolia.com/api/v1/search?`;
    let queryUrl = `query=${thunkApi.getState().new.query}`;
    let pageUrl = `&page=${thunkApi.getState().new.page}`;
    try {
      let res = await axios(`${url}${queryUrl}${pageUrl}`);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const newSlice = createSlice({
  name: "news",
  initialState,
  reducers: {
    setQuery: (state, action) => {
      state.query = action.payload;
      console.log(action);
    },
    incrementPage: (state) => {
      state.page += 1;
    },
    decrementPage: (state) => {
      if (state.page >= 1) {
         state.page -= 1;
      }
    },
    removeItem: (state, action) => {
      state.news = state.news.filter(
        (item) => item.objectID !== action.payload
      );
    },
  },
  extraReducers: {
    [getFetchNews.pending]: (state) => {
      state.loading = true;
    },
    [getFetchNews.fulfilled]: (state, action) => {
      state.loading = false;
      state.numberPage = action.payload.nbPages
      state.news = action.payload.hits;
    },
    [getFetchNews.rejected]: (state) => {
      state.loading = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const { increment, setQuery, removeItem, incrementPage, decrementPage } =
  newSlice.actions;

export default newSlice.reducer;
