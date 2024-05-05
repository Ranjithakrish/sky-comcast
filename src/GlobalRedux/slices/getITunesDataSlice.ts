import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Action
export const fetchITuneData = createAsyncThunk("fetchITuneData", async () => {
  const response = await fetch('https://itunes.apple.com/us/rss/topalbums/limit=100/json');
  return response.json();
});

interface DataState {
  isLoading: boolean;
  data: any[] | null;
  isError: boolean;
}

const initialState: DataState = {
  isLoading: false,
  data: null,
  isError: false,
};

const getDataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchITuneData.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchITuneData.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(fetchITuneData.rejected, (state) => {
      state.isLoading = false;
      state.isError = true;
    });
  },
});

export default getDataSlice.reducer;
