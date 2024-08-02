import { createContext, useContext, useEffect, useState } from "react";
import { GoogleAuthProvider, onAuthStateChanged, signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth, googleprovider } from "./FirebaseConfig";
const dbContext = createContext();
export const UsedbContext = () => {return useContext(dbContext)};
export function UsedbContextProvider({children})
{
    const [isVolunteer,setisVolunteer] = useState(true);
    const [isLogin,setIsLogin] = useState(true);
    const [user,setuser]=useState(null);
    const [credentials,setcredentials]=useState(null);

    const navigate=useNavigate();

    useEffect(()=>
        {
            const unsubscribe=onAuthStateChanged(auth, async (currentUser)=>
                {
                    setuser(currentUser);
                    
                })
                return ()=>
                    {
                        unsubscribe();
                    }
                    
                },[])

    async function google()
     {
      signInWithPopup(auth, googleprovider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    setcredentials(credential);
    // const token = credential.accessToken;
    // console.log("Token: "+token);
    // // The signed-in user info.
    // const user = result.user;
    // console.log("user: "+user);

    navigate('/dashboard');

    // IdP data available using getAdditionalUserInfo(result)
    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    console.log('errorCode :'+errorCode )

    const errorMessage = error.message;
    console.log('errormessge'+errorMessage) 

    // The email of the user's account used.
    const email = error.customData.email;
    console.log(' email'+ email)

    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    console.log('credential'+credential)

    // ...
  });
     } 

    async function logout()
    {
        try {
            await auth.signOut();
            console.log('User signed out successfully!');
            // Optionally, redirect or perform other actions after logout
          } catch (error) {
            console.error('Error signing out:', error);
            // Handle errors appropriately (e.g., display an error message to the user)
          }
        
    }
    return <dbContext.Provider value={{isVolunteer,setisVolunteer,google,logout,isLogin,setIsLogin,user,credentials}}>
        {children}
    </dbContext.Provider>
}
