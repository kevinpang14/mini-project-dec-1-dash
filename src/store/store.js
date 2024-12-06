import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";
import usersReducer from "./slices/usersSlice";
import blogsReducer from "./slices/blogsSlice";
// import portfolioReducer from "./slices/portfolioSlice";
// import testimoniReducer from "./slices/testimoniSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    users: usersReducer,
    blogs: blogsReducer,
    // portfolio: portfolioReducer,
    // testimoni: testimoniReducer,
  },
});

export default store;
