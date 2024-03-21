import {useEffect, useRef, useState} from "react";
import {useLoginMutation, useRegistrationMutation} from "../../../features/auth/authApiSlice";
import {NavigateFunction} from "react-router-dom";

const UseUserPass = (navigate: NavigateFunction) => {
    const userRef = useRef(null);
    const errRef = useRef(null);
    const [user, setUser] = useState('');
    const [pass, setPass] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const [login, {isLoading}] = useLoginMutation();
    const [registration] = useRegistrationMutation();

    useEffect(() => {
        // @ts-ignore
        userRef.current.focus()
        const token = localStorage.getItem('accessToken')
        if (token) {
            navigate('/taskslist')
        }
    }, [])

    useEffect(() => {
        setErrMsg('')
    }, [user, pass]);


    return {
        userRef,
        errRef,
        user,
        setUser,
        pass,
        setPass,
        errMsg,
        setErrMsg,
        login,
        registration,
        isLoading
    }
};

export default UseUserPass;