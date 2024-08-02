import { Box} from "@chakra-ui/react"
import Notification from "./Volunteer/Notification";
import Sidebar from "./Sidebar";
import { useState } from "react";
// import Profile from "./Profile";
import Chatdrawer from "./Volunteer/Chatdrawer";
import Dashboard from "./Volunteer/Dashboard";
import OrgEventsPage from "./Organisation/OrgEvents";
import EventsPage from "./Volunteer/Events";
import OrgProfile from "./Organisation/OrgProfile";
import Profile from "./Volunteer/Profile";
import OrgDashboard from "./Organisation/OrgDashboard";

import { UsedbContext } from "../Services/UseContext";

function Layout() {
    const [isToggled, setIsToggled] = useState(false);
    const [isnotification,setisnotification] = useState(false);
    const [isChat,setisChat]=useState(false);
    const [isDash,setisDash]=useState(true);
    const [ispost,setispost]=useState(false);
    const [isprofile,setisprofile]=useState(false);

    const{isVolunteer}=UsedbContext();
    const onDashClick=()=>
        {
          setisDash(true);
          setispost(false);
          setisprofile(false); 
        }
    
        const onPostClick=()=>
        {
          setisDash(false);
          setispost(true);
          setisprofile(false);      
    
        }
    
        const onProfileClick=()=>
        {
          setisDash(false);
          setispost(false);
          setisprofile(true); 
          console.log('profile clic')
        }
    
    
        const onChatClick=()=>
        {
            setIsToggled(!isToggled);
            setisChat(!isChat);
    
        }
    
        const onnotificationClick=()=>
            {
              setIsToggled(!isToggled);
              setisnotification(!isnotification);
            }
            const onmainPageClick=()=>
              {
                if(isToggled&&( isnotification || isChat ))
                {
                setIsToggled(false);
                setisnotification(false);
                setisChat(false);
    
                }
              }

  return (
    <>

  <Box className={`flex ${isToggled ? 'blur-sm' : ''} `} onClick={onmainPageClick}>
        {/* side bar */}
         <Box className="w-2/12 ml-0">
         <Sidebar 
              onnotificationClick={onnotificationClick} 
              onChatClick={onChatClick}
              onDashClick={onDashClick}
              onPostClick={onPostClick}
              onProfileClick={onProfileClick}
               />
         </Box>
         {/* -----Dashboard----- */}
         <Box className="w-full h-screen overflow-auto">
         {isDash&&(isVolunteer?<Dashboard/>:<OrgDashboard/>)}
          {ispost&&(isVolunteer?<EventsPage/>:<OrgEventsPage/>)}
          {isprofile&&(isVolunteer? <Profile/>: <OrgProfile/>)}   
         
         </Box>    
  </Box>
    {isnotification&& <Box className="bg-white  absolute top-5 w-8/12 ml-80 h-[600px] mt-6 rounded-[50px] shadow-lg" >

    <Notification/>

    </Box>}
    {isChat&& <Box className="bg-white  absolute top-5 w-4/12 ml-96 h-[600px] mt-6 rounded-[50px] shadow-lg" >

    <Chatdrawer/>

    </Box>}
    </>
  )
}

export default Layout