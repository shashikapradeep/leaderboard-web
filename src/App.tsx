import './App.css';
import {store} from "./app/store";
import {ThemeProvider} from "@mui/material";
import light from "./themes/light";
import {RouterProvider} from "react-router-dom";
import {router} from "./navigation/route";
import {Provider} from "react-redux";
function App() {
  return (
      <Provider store={store}>
        <ThemeProvider theme={light}>
          <RouterProvider router={router()}/>
        </ThemeProvider>
      </Provider>
  );
}

export default App;
