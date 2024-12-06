import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const BASE_URL = "https://fe-react-agency-api-dash.vercel.app/blog";

// Async Thunks
export const fetchBlogs = createAsyncThunk(
  "blogs/fetchBlogs",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${BASE_URL}/get-all`);
      console.log("response.data", response.data);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || "Failed to fetch blogs");
    }
  }
);

export const createBlog = createAsyncThunk(
  "blogs/createBlog",
  async (blogData, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${BASE_URL}/create`, blogData);
      return response.data.data; // Return the blog data from response
    } catch (error) {
      return rejectWithValue(error.response?.data || "Failed to create blog");
    }
  }
);

export const updateBlog = createAsyncThunk(
  "blogs/updateBlog",
  async ({ id, blogData }, { rejectWithValue }) => {
    try {
      const response = await axios.put(`${BASE_URL}/update/${id}`, blogData);
      return response.data.data; // Return updated blog data
    } catch (error) {
      return rejectWithValue(error.response?.data || "Failed to update blog");
    }
  }
);

export const deleteBlog = createAsyncThunk(
  "blogs/deleteBlog",
  async (id, { rejectWithValue }) => {
    try {
      await axios.delete(`${BASE_URL}/delete/${id}`);
      return id;
    } catch (error) {
      return rejectWithValue(error.response?.data || "Failed to delete blog");
    }
  }
);

// Slice
const blogsSlice = createSlice({
  name: "blogs",
  initialState: {
    list: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Fetch Blogs
      .addCase(fetchBlogs.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchBlogs.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.list = action.payload;
      })
      .addCase(fetchBlogs.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })

      // Create Blog
      .addCase(createBlog.fulfilled, (state, action) => {
        state.list.push(action.payload);
      })

      // Update Blog
      .addCase(updateBlog.fulfilled, (state, action) => {
        const index = state.list.findIndex(
          (blog) => blog.id === action.payload.id
        );
        if (index !== -1) state.list[index] = action.payload;
      })

      // Delete Blog
      .addCase(deleteBlog.fulfilled, (state, action) => {
        state.list = state.list.filter((blog) => blog.id !== action.payload);
      });
  },
});

export default blogsSlice.reducer;
