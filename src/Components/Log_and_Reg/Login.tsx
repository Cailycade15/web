import React, { useEffect, useState } from 'react';

import cl from "./Log_and_Reg.module.css"
import { useNavigate } from 'react-router-dom';

import {localStorageUserData} from "../../Data_Structures/globalVariables"
import {localStorageToken} from "../../Data_Structures/globalVariables"
import { localStorageLoginData } from '../../Data_Structures/globalVariables';


const Login = () => {

    const [emailUser, setEmailUser] = useState<string>("")
    const [passwordUser, setPasswordUser] = useState<string>("")
    const [openEye, setOpenEye] = useState<boolean>(false);

    const navigate = useNavigate();

    // Проыверка на наличие данных входа
    useEffect(() => {
        const loginData = localStorage.getItem(localStorageLoginData);
        const token = localStorage.getItem(localStorageToken);
        if(loginData === "true" && token !== null)
        {
            console.log("Wait and Login");
            setTimeout(function() {
                navigate("/")
            }, 3000)
            
        }
    }, [])


    // Функция для входа
    const Login = (userEmail: string, userPassword: string) => {
        fetch('http://localhost:8080/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: userEmail,
                password: userPassword
            })})
            .then(response => {
                if (!response.ok) {
                    throw new Error('Ошибка сети: ' + response.status);
                    return;
                }
                console.log(response)
                return response.json();
            })
            .then(data => {
                // console.log('Полученные данные:', data.userId.name);
                localStorage.setItem(localStorageToken, data.token as string)
                
                const checkbox = document.getElementById("remember_me") as HTMLInputElement | null;
                if(checkbox && checkbox.checked){ //Проверяем если пользователь нажал "remember_me"
                    // Сохраняем данные для входа
                    localStorage.setItem(localStorageLoginData, "true")
                }
                // Сохраняем данные пользователя для дальнейшего использования
                    localStorage.setItem(localStorageUserData,  
                        JSON.stringify({
                            email: data.userId.email,
                            name: data.userId.name,
                            role: data.userId.role
                        })
                    )
                navigate("/")
            })
            .catch(error => {
                console.error('Произошла ошибка:', error);
            });
    }












    const SignIn = (userEmail: string, userPassword: string, e: React.FormEvent<HTMLFormElement>) => {
         e.preventDefault();
        
        Login(userEmail, userPassword)
    }


    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value.replace(/\s/g, "");
        setEmailUser(value);
    }
    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value.replace(/\s/g, "");
        setPasswordUser(value);
    }

  return (
    <div className={cl.center}>
        <form className={cl.form} onSubmit={(e) => SignIn(emailUser, passwordUser, e)}>
            <h1>Authorization</h1>

            <div className={cl.flex_column}>
                <label>Email </label>
            </div>
            <div className={cl.inputForm}>
                <svg height={20} viewBox="0 0 32 32" width={20} xmlns="http://www.w3.org/2000/svg"><g id="Layer_3" data-name="Layer 3"><path d="m30.853 13.87a15 15 0 0 0 -29.729 4.082 15.1 15.1 0 0 0 12.876 12.918 15.6 15.6 0 0 0 2.016.13 14.85 14.85 0 0 0 7.715-2.145 1 1 0 1 0 -1.031-1.711 13.007 13.007 0 1 1 5.458-6.529 2.149 2.149 0 0 1 -4.158-.759v-10.856a1 1 0 0 0 -2 0v1.726a8 8 0 1 0 .2 10.325 4.135 4.135 0 0 0 7.83.274 15.2 15.2 0 0 0 .823-7.455zm-14.853 8.13a6 6 0 1 1 6-6 6.006 6.006 0 0 1 -6 6z" /></g></svg>
                <input 
                    type="email" 
                    className={cl.input} 
                    placeholder="Enter your Email" 
                    value={emailUser}
                    onChange={(e) => handleEmailChange(e)}
                    required
                    />
            </div>

            <div className={cl.flex_column}>
                <label>Password </label>
            </div>
                
            <div className={cl.inputForm}>
                <svg height={20} viewBox="-64 0 512 512" width={20} xmlns="http://www.w3.org/2000/svg"><path d="m336 512h-288c-26.453125 0-48-21.523438-48-48v-224c0-26.476562 21.546875-48 48-48h288c26.453125 0 48 21.523438 48 48v224c0 26.476562-21.546875 48-48 48zm-288-288c-8.8125 0-16 7.167969-16 16v224c0 8.832031 7.1875 16 16 16h288c8.8125 0 16-7.167969 16-16v-224c0-8.832031-7.1875-16-16-16zm0 0" /><path d="m304 224c-8.832031 0-16-7.167969-16-16v-80c0-52.929688-43.070312-96-96-96s-96 43.070312-96 96v80c0 8.832031-7.167969 16-16 16s-16-7.167969-16-16v-80c0-70.59375 57.40625-128 128-128s128 57.40625 128 128v80c0 8.832031-7.167969 16-16 16zm0 0" /></svg>        
                <input 
                    type={!openEye === true ? "password" : "text"}
                    className={cl.input} 
                    placeholder="Enter your Password" 
                    value={passwordUser}
                    onChange={(e) => handlePasswordChange(e)}
                    required
                />


                {
                openEye === true 
                ?
                    <svg 
                        onClick={() => setOpenEye(false)}
                        className={cl.eye} 
                        viewBox="0 0 576 512" 
                        width="24" height="24" 
                        xmlns="http://www.w3.org/2000/svg">
                        <path d="M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z" />
                    </svg>
                :
                    <svg
                        onClick={() => setOpenEye(true)} 
                        className={`${cl.eye}w-6 h-6 text-gray-800 dark:text-white`} 
                        aria-hidden="true" xmlns="http://www.w3.org/2000/svg" 
                        width="24" height="24" 
                        fill="currentColor" 
                        viewBox="0 0 24 24">
                        <path d="m4 15.6 3.055-3.056A4.913 4.913 0 0 1 7 12.012a5.006 5.006 0 0 1 5-5c.178.009.356.027.532.054l1.744-1.744A8.973 8.973 0 0 0 12 5.012c-5.388 0-10 5.336-10 7A6.49 6.49 0 0 0 4 15.6Z"/>
                        <path d="m14.7 10.726 4.995-5.007A.998.998 0 0 0 18.99 4a1 1 0 0 0-.71.305l-4.995 5.007a2.98 2.98 0 0 0-.588-.21l-.035-.01a2.981 2.981 0 0 0-3.584 3.583c0 .012.008.022.01.033.05.204.12.402.211.59l-4.995 4.983a1 1 0 1 0 1.414 1.414l4.995-4.983c.189.091.386.162.59.211.011 0 .021.007.033.01a2.982 2.982 0 0 0 3.584-3.584c0-.012-.008-.023-.011-.035a3.05 3.05 0 0 0-.21-.588Z"/>
                        <path d="m19.821 8.605-2.857 2.857a4.952 4.952 0 0 1-5.514 5.514l-1.785 1.785c.767.166 1.55.25 2.335.251 6.453 0 10-5.258 10-7 0-1.166-1.637-2.874-2.179-3.407Z"/>
                    </svg>
                }


            </div>

            <div className={cl.flex_row}>
                <div>
                    <input type="checkbox"  id="remember_me"/>
                    <label>Remember me </label>
                </div>
                <div className={cl.span}>Forgot password?</div>
                {/* <span className={cl.span}>Forgot password?</span> */}
            </div>

            <button className={cl.button_submit}>
                Sign In
            </button>
            
            <div className={cl.p}>
                Don't have an account? 
                <div onClick={() => navigate("/register")} className={cl.span}>Sign Up</div>
            </div>
        </form>
    </div>
  );
}

export default Login;
