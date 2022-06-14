import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
export const getFetchQue = createAsyncThunk(
  "quiz/getFetchQue",
  async (name, thunkApi) => {
    const { category, difficulty, amount } = thunkApi.getState().quiz;
    const response = await axios(
      `https://opentdb.com/api.php?amount=${amount}&category=${category}&difficulty=${difficulty}&type=multiple`
    );

    return response.data;
  }
);

export const queSlice = createSlice({
  name: "quiz",
  initialState: {
    wating: true,
    loading: false,
    questions: [],
    count: 0,
    difficulty: "easy",
    category: "21",
    amount: 10,
    cateID: { sports: 21, politics: 24, history: 23 },
    score: 0,
    modal:false
  },
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    setDiffculty: (state, action) => {
      state.difficulty = action.payload;
    },
    setCategory: (state, action) => {
      state.category = action.payload;
    },
    setAmount: (state, action) => {
      state.amount = action.payload;
    },
    setCount: (state, action) => {
      if (action.payload) {
        state.score += 1;
      }
      if (state.count < state.questions.length - 1) {
        state.count += 1;
      } else {
        state.modal = true
      }
    },
    nextQues: (state) => {
      if (state.count < state.questions.length - 1) {
        state.count += 1;
      } else {
        state.modal = true
      }
    },
    closeModal :(state) => {
      state.score = 0
      state.count = 0
      state.wating = true;
      state.modal = false
    }
  },
  extraReducers: {
    [getFetchQue.pending]: (state) => {
      state.loading = true;
      state.wating = false;
    },
    [getFetchQue.fulfilled]: (state, action) => {
      state.questions = action.payload.results;
      state.loading = false;
      state.wating = false;
    },
    [getFetchQue.rejected]: (state, action) => {
      state.loading = false;
    },
  },
});

export const {
  increment,
  handleFetch,
  setDiffculty,
  setCategory,
  setAmount,
  setCount,
  nextQues,
  closeModal,
} = queSlice.actions;

export default queSlice.reducer;
