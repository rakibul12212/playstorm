
import Navbar from './Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from './Footer/Footer';
import '../Layout/main.css'

const Main = () => {
    return (
        <div id='main-bg'>
           <Navbar></Navbar> 
           <Outlet></Outlet>
           <Footer></Footer>
        </div>
    );
};

export default Main;