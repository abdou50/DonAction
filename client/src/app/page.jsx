"use client";
import { useCookies } from 'react-cookie';
import { useSession, SessionProvider } from 'next-auth/react'; // Import useSession and SessionProvider
import {Auth} from "./components/toggleForms"
import HomePage from './Home';
import Navbar from './components/Navbar';
import News from '../../pages/news';
import newsitems from './components/newsitems';
const Page = () => {
  const [cookies, setCookie, removeCookie] = useCookies(null);
  const signout = () => {
    removeCookie("email");
    removeCookie("token");
  };

  const token = cookies.token;
  const email = cookies.email;

  return (
    

    
     

       
<HomePage/>    

  )
};

export default Page