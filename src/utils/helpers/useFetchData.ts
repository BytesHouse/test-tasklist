import {useGetTasksMutation} from "../../features/auth/authApiSlice";
import {useEffect, useState} from "react";

export const useFetchData = () => {
    const [status, setStatus] = useState('PENDING')
    const [tasks, setTasks] = useState<any>();
    const [getTasks, {isLoading}] = useGetTasksMutation();

    useEffect(() => {
        const fetchData = async () => {
            const result = await getTasks(status);
            setTasks(result)
        }
        fetchData();
    }, [status]);


    return {status, setStatus, tasks, setTasks, getTasks, isLoading}
}