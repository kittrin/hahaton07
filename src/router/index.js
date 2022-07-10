import Login from "../pages/Login";
import Sales from "../pages/Sales";
import Cashback from "../pages/Cashback";
import Coupons from "../pages/Coupons";
import Shops from "../pages/Shops";
import MainPage from "../pages/MainPage";
import Search from "../pages/Search";
import MapPage from "../pages/MapPage";
import Profile from "../pages/Profile";
import Cam from "../pages/Cam";

export const routes = [
    {path: '/login', component: Login},
    {path: '/sales', component: Sales},
    {path: '/cashback', component: Cashback},
    {path: '/coupons', component: Coupons},
    {path: '/main', component: MainPage },
    {path: '/shops', component: Shops},
    {path: '/search', component: Search},
    {path: '/map', component: MapPage},
    {path: '/profile', component: Profile},
    {path: '/camera', component: Cam}
]