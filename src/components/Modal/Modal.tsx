import React, {FormEvent, useState} from 'react';
import {useCreateTaskMutation} from "../../features/auth/authApiSlice";

interface ModalProps {
    reference: any,
    setShow: React.Dispatch<React.SetStateAction<boolean>>
}

const Modal = ({reference, setShow}: ModalProps) => {
    const [createTask] = useCreateTaskMutation();
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('')
    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        const result = await createTask({title, description})
        setShow(false);
    }
    return (
        <div
            className="z-10 flex items-center justify-center backdrop-blur-sm bg-gray-800 bg-opacity-40 absolute top-0 bottom-0 right-0 left-0">
            <div ref={reference}
                 className='rounded border bg-white p-[10px] w-[320px] h-[250px]'>
                <form className="space-y-6" onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="title" className="block text-sm font-medium leading-6 text-gray-900">Title
                        </label>
                        <div className="mt-2">
                            <input onChange={(e) => setTitle(e.target.value)} value={title} id="title"
                                   name="title"
                                   type="text" autoComplete="title" required
                                   className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6"/>
                        </div>
                    </div>

                    <div>
                        <div className="flex items-center justify-between">
                            <label htmlFor="description"
                                   className="block text-sm font-medium leading-6 text-gray-900">Description</label>

                        </div>
                        <div className="mt-2">
                            <input value={description} onChange={(e) => setDescription(e.target.value)} id="description" name="description" type="text" autoComplete="description"
                                   required
                                   className="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6"/>
                        </div>
                    </div>

                    <div>
                        <button type="submit"
                                className="flex w-full justify-center rounded-md bg-gray-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600">Create
                            task
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Modal;