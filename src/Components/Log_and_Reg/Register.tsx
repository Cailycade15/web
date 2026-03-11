import React, { useState } from 'react';

import cl from "./Log_and_Reg.module.css"
import { useNavigate } from 'react-router-dom';
// import { json } from 'stream/consumers';


const Register = () => {

    const navigate = useNavigate();

    const [nameUser, setNameUser] = useState<string>("")
    const [surnameUser, setSurnameUser] = useState<string>("")
    const [phoneUser, setPhoneUser] = useState<string>("")
    const [emailUser, setEmailUser] = useState<string>("")
    const [passwordUser, setPasswordUser] = useState<string>("")
    const [repeatPasswordUser, setRepeatPasswordUser] = useState<string>("")


    const [openEye_Password, setOpenEye_Password] = useState<boolean>(false);
    const [openEye_RepeatPassword, setOpenEye_RepeatPassword] = useState<boolean>(false);

    const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value.replace(/\s/g, "");
        setNameUser(value);
    }
    const handleSurnameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value.replace(/\s/g, "");
        setSurnameUser(value);
    }
    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value.replace(/\s/g, "");
        setPasswordUser(value);
    }
    const handleRepeatPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value.replace(/\s/g, "");
        setRepeatPasswordUser(value);
    }
    
    const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        let value = e.target.value;

        // Удалить всё кроме цифр
        const digitsOnly = value.replace(/\D/g, '');

        // Удалить возможный начальный "373" у пользователя и обрезать до 8 цифр
        const cleanDigits = digitsOnly.startsWith('373') 
            ? digitsOnly.slice(3, 11)
            : digitsOnly.slice(0, 8);

        // Финальное значение с обязательным префиксом +373
        const finalValue = '+373' + cleanDigits;

        setPhoneUser(finalValue);
    };

    

    const SignUp = (nameUser: string, surnameUser: string, phoneUser:string, userEmail: string, userPassword: string, repeatPasswordUser: string, e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        if(passwordUser !== repeatPasswordUser){
            alert("Пароли не совпадают")
            return;
        }

        fetch('http://localhost:8080/users/create', 
        {
            method:'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: nameUser,
                surname: surnameUser,
                phone: phoneUser,
                email: userEmail,
                password: userPassword
            })
        })
        .then(response => {
            if(!response.ok){
                throw new Error('Ошибка сети: ' + response.status);
            }
            
            navigate("/")
        })
        
        
    }

  return (
    <div className={cl.center}>
        <form className={cl.form} onSubmit={(e) => SignUp(nameUser, surnameUser,  phoneUser, emailUser, passwordUser, repeatPasswordUser, e)}>
            <h1>Registration</h1>




            <div className={cl.flex_column}>
                <label>Name </label>
            </div>
            <div className={cl.inputForm}>
                <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="20" height="20" 
                    viewBox="0 0 48 48">
                    <g fill="none" stroke="currentColor" strokeLinecap="round" stroke-linejoin="round" stroke-width="4">
                        <circle cx="24" cy="11" r="7"/>
                        <path d="M4 41c0-8.837 8.059-16 18-16m9 17l10-10l-4-4l-10 10v4h4Z"/>
                    </g>
                </svg>
                <input 
                    type="text" 
                    className={cl.input} 
                    placeholder="Enter your Name" 
                    value={nameUser}
                    onChange={(e) => handleNameChange(e)}
                    required
                    />
            </div>





            <div className={cl.flex_column}>
                <label>Surname </label>
            </div>
            <div className={cl.inputForm}>
                <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="20" height="20" 
                    viewBox="0 0 48 48">
                    <g fill="none" stroke="currentColor" strokeLinecap="round" stroke-linejoin="round" stroke-width="4">
                        <circle cx="24" cy="11" r="7"/>
                        <path d="M4 41c0-8.837 8.059-16 18-16m9 17l10-10l-4-4l-10 10v4h4Z"/>
                    </g>
                </svg>
                <input 
                    type="text" 
                    className={cl.input} 
                    placeholder="Enter your Surname" 
                    value={surnameUser}
                    onChange={(e) => handleSurnameChange(e)}
                    required
                    />
            </div>








            <div className={cl.flex_column}>
                <label>Phone</label>
            </div>
            <div className={cl.inputForm}>
                <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="20" height="20" 
                    viewBox="0 0 24 24"
                    >
                    <path fill="currentColor" d="M18.4 20.75h-.23a16.73 16.73 0 0 1-7.27-2.58a16.58 16.58 0 0 1-5.06-5.05a16.72 16.72 0 0 1-2.58-7.29A2.3 2.3 0 0 1 3.8 4.1a2.32 2.32 0 0 1 1.6-.84H8a2.36 2.36 0 0 1 2.33 2a9.29 9.29 0 0 0 .53 2.09a2.37 2.37 0 0 1-.54 2.49l-.61.61a12 12 0 0 0 3.77 3.75l.61-.6a2.37 2.37 0 0 1 2.49-.54a9.57 9.57 0 0 0 2.09.53a2.35 2.35 0 0 1 2 2.38v2.4a2.36 2.36 0 0 1-2.35 2.36ZM8 4.75H5.61a.87.87 0 0 0-.61.31a.83.83 0 0 0-.2.62a15.17 15.17 0 0 0 2.31 6.62a15 15 0 0 0 4.59 4.59a15.34 15.34 0 0 0 6.63 2.36A.89.89 0 0 0 19 19a.88.88 0 0 0 .25-.61V16a.86.86 0 0 0-.74-.87a11.42 11.42 0 0 1-2.42-.6a.87.87 0 0 0-.91.19l-1 1a.76.76 0 0 1-.9.12a13.53 13.53 0 0 1-5.11-5.1a.74.74 0 0 1 .12-.9l1-1a.85.85 0 0 0 .19-.9a11.28 11.28 0 0 1-.6-2.42a.87.87 0 0 0-.88-.77Z"/>
                </svg>
                <input 
                    type="tel" 
                    pattern="\+373\d{8}"
                    maxLength={12}
                    className={cl.input} 
                    placeholder="Enter your Phone (+373)" 
                    value={phoneUser}
                    onChange={handlePhoneChange}
                    required
                    />
            </div>









            <div className={cl.flex_column}>
                <label>Email </label>
            </div>

            <div className={cl.inputForm}>
                <svg 
                    viewBox="0 0 32 32" 
                    width={20} height={20} 
                    xmlns="http://www.w3.org/2000/svg">
                    <g id="Layer_3" data-name="Layer 3">
                        <path d="m30.853 13.87a15 15 0 0 0 -29.729 4.082 15.1 15.1 0 0 0 12.876 12.918 15.6 15.6 0 0 0 2.016.13 14.85 14.85 0 0 0 7.715-2.145 1 1 0 1 0 -1.031-1.711 13.007 13.007 0 1 1 5.458-6.529 2.149 2.149 0 0 1 -4.158-.759v-10.856a1 1 0 0 0 -2 0v1.726a8 8 0 1 0 .2 10.325 4.135 4.135 0 0 0 7.83.274 15.2 15.2 0 0 0 .823-7.455zm-14.853 8.13a6 6 0 1 1 6-6 6.006 6.006 0 0 1 -6 6z" />
                    </g>
                </svg>
                <input 
                    type="email" 
                    className={cl.input} 
                    placeholder="Enter your Email" 
                    value={emailUser}
                    onChange={(e) => setEmailUser(e.target.value)}
                    required
                    />
            </div>














            <div className={cl.flex_column}>
                <label>Password </label>
            </div>
                
            <div className={cl.inputForm}>
                <svg height={20} viewBox="-64 0 512 512" width={20} xmlns="http://www.w3.org/2000/svg"><path d="m336 512h-288c-26.453125 0-48-21.523438-48-48v-224c0-26.476562 21.546875-48 48-48h288c26.453125 0 48 21.523438 48 48v224c0 26.476562-21.546875 48-48 48zm-288-288c-8.8125 0-16 7.167969-16 16v224c0 8.832031 7.1875 16 16 16h288c8.8125 0 16-7.167969 16-16v-224c0-8.832031-7.1875-16-16-16zm0 0" /><path d="m304 224c-8.832031 0-16-7.167969-16-16v-80c0-52.929688-43.070312-96-96-96s-96 43.070312-96 96v80c0 8.832031-7.167969 16-16 16s-16-7.167969-16-16v-80c0-70.59375 57.40625-128 128-128s128 57.40625 128 128v80c0 8.832031-7.167969 16-16 16zm0 0" /></svg>        
                <input 
                    type={!openEye_Password === true ? "password" : "text"}
                    className={cl.input} 
                    placeholder="Enter your Password" 
                    value={passwordUser}
                    onChange={(e) => handlePasswordChange(e)}
                    required
                />


                {
                openEye_Password === true 
                ?
                    <svg 
                        onClick={() => setOpenEye_Password(false)}
                        className={cl.eye} 
                        viewBox="0 0 576 512" 
                        width="24" height="24" 
                        xmlns="http://www.w3.org/2000/svg">
                        <path d="M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z" />
                    </svg>
                :
                    <svg
                        onClick={() => setOpenEye_Password(true)} 
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










            <div className={cl.flex_column}>
                <label>Repear Password </label>
            </div>
            <div className={cl.inputForm}>
                <svg height={20} viewBox="-64 0 512 512" width={20} xmlns="http://www.w3.org/2000/svg"><path d="m336 512h-288c-26.453125 0-48-21.523438-48-48v-224c0-26.476562 21.546875-48 48-48h288c26.453125 0 48 21.523438 48 48v224c0 26.476562-21.546875 48-48 48zm-288-288c-8.8125 0-16 7.167969-16 16v224c0 8.832031 7.1875 16 16 16h288c8.8125 0 16-7.167969 16-16v-224c0-8.832031-7.1875-16-16-16zm0 0" /><path d="m304 224c-8.832031 0-16-7.167969-16-16v-80c0-52.929688-43.070312-96-96-96s-96 43.070312-96 96v80c0 8.832031-7.167969 16-16 16s-16-7.167969-16-16v-80c0-70.59375 57.40625-128 128-128s128 57.40625 128 128v80c0 8.832031-7.167969 16-16 16zm0 0" /></svg>        
                <input 
                    type={!openEye_RepeatPassword === true ? "password" : "text"}
                    className={cl.input} 
                    placeholder="Repeat your Password" 
                    value={repeatPasswordUser}
                    onChange={(e) => handleRepeatPasswordChange(e)}
                    required
                />


                {
                openEye_RepeatPassword === true 
                ?
                    <svg 
                        onClick={() => setOpenEye_RepeatPassword(false)}
                        className={cl.eye} 
                        viewBox="0 0 576 512" 
                        width="24" height="24" 
                        xmlns="http://www.w3.org/2000/svg">
                        <path d="M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z" />
                    </svg>
                :
                    <svg
                        onClick={() => setOpenEye_RepeatPassword(true)} 
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










            {/* <div className={cl.flex_row}>
                <div>
                    <input type="checkbox" />
                    <label>Remember me </label>
                </div>
            </div> */}

            <button 
                className={cl.button_submit} 
                
            >
                Sign Up
            </button>
            
            <div className={cl.p}>
                Do you have an account? 
                <div onClick={() => navigate("/login")} className={cl.span}>Sign In</div>
            </div>
        </form>
    </div>
  );
}

export default Register;
