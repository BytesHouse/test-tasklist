import {useGetTaskByIdMutation} from "../../features/auth/authApiSlice";
import {Link, useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import Preloader from "../../components/Preloader/Preloader";
import SecondaryButton from "../../components/SecondaryButton/SecondaryButton";
import PrimaryButton from "../../components/PrimaryButton/PrimaryButton";

const TaskPage = () => {
    const {id} = useParams();
    const [getTaskById, {isLoading}] = useGetTaskByIdMutation();
    const [task, setTask] = useState<any>();
    const navigate = useNavigate();
    useEffect(() => {
        const fetchTask = async () => {
            try {
                const result = await getTaskById(id);
                // @ts-ignore
                if(!result?.data) navigate("/taskslist");
                setTask(result);

            } catch (e) {
                console.log(e);
            }
        }
        fetchTask();
    }, []);
    if (isLoading) return <Preloader/>;
    return (
        <div className='h-full'>
            <div className="relative text-[18px] text-white bg-gray-800 h-full container mx-auto py-[20px] flex flex-col justify-center items-center gap-[10px]">
                <Link to='/tasklist' className='absolute top-0 left-6 text-[30px] text-white bg-gray-800 h-[100px] flex justify-center items-center'>Back</Link>
                <p><span className='font-bold'>id:</span> {task?.data?.id}</p>
                <p><span className='font-bold'>Title:</span> {task?.data?.title}</p>
                <p><span className='font-bold'>Description:</span> {task?.data?.description}</p>
                <p><span className='font-bold'>Status:</span> {task?.data?.status}</p>
                <p><span className='font-bold'>Created At:</span> {task?.data?.createdAt}</p>
                <div className='flex gap-[10px]'>
                    <SecondaryButton text='delete'/>
                    <PrimaryButton text='edit'/>
                </div>
            </div>
        </div>
    );
};

export default TaskPage;