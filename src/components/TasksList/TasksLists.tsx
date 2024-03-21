import {useFetchData} from "../../utils/helpers/useFetchData";
import TaskListItem from "../TaskListItem/TaskListItem";
import {Task} from "../../types/Task.types";
import Preloader from "../Preloader/Preloader";

export default function TasksLists() {
    const {tasks, isLoading} = useFetchData();
    const content = tasks?.data?.content;
    if(isLoading) return <Preloader/>
    return (
        content?.length
            ?
            <ul role="list" className="divide-y divide-gray-100">
                {tasks?.data?.content.map((task: Task) => {
                    const {id, title, status, createdAt} = task;
                    return <TaskListItem
                        key={id}
                        id={id}
                        title={title}
                        status={status}
                        createdAt={createdAt}
                    />
                })}
            </ul>
            :
            <p className='absolute -translate-y-[50%] -translate-x-[50%] top-[50%] left-[50%] text-[42px]'>
                You don't have any tasks
            </p>
    )
}
