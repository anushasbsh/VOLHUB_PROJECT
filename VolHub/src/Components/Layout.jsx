import { Box} from "@chakra-ui/react"
import Notification from "./Notification";
import Sidebar from "./Sidebar";
import { useEffect, useState } from "react";
import Dashboard from "./Volunteer/Dashboard";
import OrgProfile from "./Organisation/OrgProfile";
import Profile from "./Volunteer/Profile";
import OrgDashboard from "./Organisation/OrgDashboard";
import Post from "./Post";
import { UsedbContext } from "../Services/UseContext";
import { getUser } from "../Services/api";
import Application from "./Application";
import { socket } from "../Services/Socket";
import Chatdrawer from "./ChatDrawer";


function Layout() {
    const [isToggled, setIsToggled] = useState(false);
    const [isnotification,setisnotification] = useState(false);
    const [isChat,setisChat]=useState(false);
    const [isDash,setisDash]=useState(true);
    const [ispost,setispost]=useState(false);
    const [isevent,setisEvent]=useState(false);
    const [isprofile,setisprofile]=useState(false);
    

    const{isVolunteer,user,setdbUser}=UsedbContext();

    useEffect(() => {
     
  
      socket.on('connect', () => {
        console.log('Socket connected');
      });
  
      // socket.on('disconnect', () => {
      //   console.log('Socket disconnected');
      // });
      socket.on('notification', (data) => {
        console.log(data);
      });
    
    }, []);
    
    useEffect(()=>
      {
        const getuser=async()=>
        {
         const u= await getUser(user.email);
         setdbUser(u);
        }
        getuser();
      },[setdbUser, user.email])

    const onDashClick=()=>
        {
          setisDash(true);
          setispost(false);
          setisprofile(false); 
          setisEvent(false);
        }
    
        const onEventClick=()=>
        {
          setisDash(false);
          setisEvent(true);
          setispost(false);
          setisprofile(false);      
    
        }
    
        const onPostClick=()=>
        {
          setisDash(false);
          setispost(true);
          setisprofile(false);      
          setisEvent(false);
        }
    
        const onProfileClick=()=>
        {
          setisDash(false);
          setispost(false);
          setisprofile(true); 
          setisEvent(false);
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
              onEventClick={onEventClick}
              onPostClick={onPostClick}
              onProfileClick={onProfileClick}
               />
         </Box>
         {/* -----Dashboard----- */}
         <Box className="w-full h-screen overflow-auto">
         {isDash&&(isVolunteer?<Dashboard/>:<OrgDashboard/>)}
          {ispost&&(<Post setIsToggled={setIsToggled} isToggled={isToggled}/>)}
          {isevent&&<Application />}
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