
import axios from 'axios';
const url ='http://localhost:3000'


export const SignUp=async(data)=>
{
    try
    {
        const res= await axios.post(`${url}/volhub/post`,data);
         
        console.log(res);

    }
    catch(err)
    {
        console.log(err);
    }
}