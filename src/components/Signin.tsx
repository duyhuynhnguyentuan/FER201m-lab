import React, {useEffect, useState,useCallback} from 'react';
import GoogleButton from "react-google-button"
import { UserAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router';
import Input from './Input';

const Signin = () => {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [variant, setVariant] = useState('login');
    const toggleVariant = useCallback(() => {
     setVariant((currentVariant) => currentVariant == 'login' ? 'register' : 'login');
    }, []);
    const {googleSignIn, user} = UserAuth();
    const navigate = useNavigate()
    const handleGoogleSignIn =async () =>{
        try{
            await googleSignIn();
        }catch(error){
            console.log(error)
        }
    };
    useEffect(()=>{
        if(user != null){
            navigate('/');
        }
    },[user])
    return(
        <div >
       
        
        {/*sign-in form starts here*/}
        <div className="flex justify-center">
            <div className="bg-black/80 px-16 py-16 self-center mt-2 lg:w-2/5 lg:max-w-md rounded-md w-full">
                <h2 className="text-white text-4xl
                mb-8 semi-bold">
                    {variant == 'login' ? 'Sign in' : 'Register'}
                </h2>
        <div className="flex flex-col gap-4">
            {variant == 'register' && (
            <Input
            id="name"
            onchange={(ev : any) => setName(ev.target.value)}
            /*the event object can have any type, and TypeScript does not enforce strict type checking for it*/
            value={name}
            lable="Name"
            type="text"
            />)}
            <Input
            id="email"
            onchange={(ev: any) => setEmail(ev.target.value)}
            value={email}
            lable="Email"
            type="email"
            />
            <Input
            id="password"
            onchange={(ev: any) => setPassword(ev.target.value)}
            value={password}
            lable="Password"
            type="password"
            />
            
        </div>
        <button className="bg-red-600 py-3 text-white rounded-md w-full mt-10 hover:bg-red-700 transition ">{variant == 'login' ? 'Login' : 'Create new account'}</button>
        <p className="text-neutral-500 mt-12">{variant == 'login'? 'First time using bro?' :'Already has an account?'}<span onClick={toggleVariant} className="text-white ml-1 hover:underline cursor-pointer">{variant == 'login' ? 'Create new account here' : 'Sign in now'}</span></p>
        <div>
      
            <div className=' w-full pt-5 items-center justify-center content-center'>
                <GoogleButton onClick={handleGoogleSignIn}/>
            </div>
        </div>
            </div>
        </div>
      
        </div>
    );
}

export default Signin;
