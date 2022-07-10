import {BrowserRouter} from "react-router-dom";
import MainPage from "./pages/MainPage";
import HeaderApp from "./components/Header/HeaderApp";
import AppRouter from "./components/AppRouter";
import './App.css'

function App(){
    return(
        <BrowserRouter>
            <HeaderApp/>
            <AppRouter/>
        </BrowserRouter>
    )
}
export default App