import { configureStore } from "@reduxjs/toolkit";
import shutdownSlice from "./shutdownSlice";
import themeSlice from "./themeSlice";
import maximizeSlice from "./maximizeSlice";
const siteStore = configureStore({
  reducer: {
    shutdown: shutdownSlice.reducer,
    theme: themeSlice.reducer,
    maximize:maximizeSlice.reducer,
  },
});
export default siteStore;
