import axios from 'axios';
import React, { useState } from 'react';
import { MdDelete, MdEditNote, MdOutlineCheckBox, MdOutlineCheckBoxOutlineBlank } from "react-icons/md";

const Table = ({ adopt, setAdopt, isLoading }) => {

    const [editText, setEditText] = useState({
        'id': null,
        'body': ''
    })

    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://127.0.0.1:8000/api1/adopt/${id}/`);
            const newList = adopt.filter(add => add.id !== id);
            setAdopt(newList);
        } catch (error) {
            console.log(error);
        }
    }

    const handleEdit = async (id, value) => {
        try {
            const response = await axios.patch(`http://127.0.0.1:8000/api1/adopt/${id}/`, value);
            const newList = adopt.map(add => add.id === id ? response.data : add);
            setAdopt(newList);
        } catch (error) {
            console.log(error);
        }
    }

    const handleCheckbox = (id, currentValue) => {
        handleEdit (id, {
            'completed': !currentValue
        });
    }

    const handleChange = (e) => {
        setEditText( prev => ({
            ...prev,
            'body': e.target.value
        }));
        console.log(editText);
    }

    const handleEditClick = (kid) => {
        setEditText(kid); // set the whole kid object to state, including id
    }

    return (
        <div className='py-2'>
            <table className='w-11/12 max-w-4xl'>
                <thead className='border-b-2 border-black'>
                    <tr>
                        <th className='p-3 text-sm font-semibold tracking-wide text-left'>Checkbox</th>
                        <th className='p-3 text-sm font-semibold tracking-wide text-left'>Available</th>
                        <th className='p-3 text-sm font-semibold tracking-wide text-left'>Age</th>
                        <th className='p-3 text-sm font-semibold tracking-wide text-left'>Origin</th>
                        <th className='p-3 text-sm font-semibold tracking-wide text-left'>Status</th>
                        <th className='p-3 text-sm font-semibold tracking-wide text-left'>Adoptor</th>
                        <th className='p-3 text-sm font-semibold tracking-wide text-left'>Date created</th>
                        <th className='p-3 text-sm font-semibold tracking-wide text-left'>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {isLoading ? (
                        <tr>
                            <td colSpan="5" className="p-3 text-center">Loading...</td>
                        </tr>
                    ) : (
                        adopt.map((kidsList, index) => (
                            <tr key={kidsList.id} className='border-b border-black'>
                                <td className='p-3' title={kidsList.id}>
                                    <span onClick={() => handleCheckbox(kidsList.id, kidsList.completed)} className='inline-block cursor-pointer'>
                                        {kidsList.completed ? <MdOutlineCheckBox /> : <MdOutlineCheckBoxOutlineBlank />}
                                    </span>
                                </td>
                                <td className='p-3 text-sm'>{kidsList.body}</td>
                                <td className='p-3 text-sm'>{kidsList.age}</td>
                                <td className='p-3 text-sm'>{kidsList.country}</td>
                                <td className='p-3 text-sm text-center'>
                                    <span className={`p-1.5 text-xs font-medium tracking-wider rounded-md ${kidsList.completed ? 'bg-green-300' : 'bg-red-300'}`}>
                                        {kidsList.completed ? 'Adopted' : 'Available'}
                                    </span>
                                </td>
                                <td className='p-3 text-sm'>{kidsList.adopted_by}</td>
                                <td className='p-3 text-sm'>{new Date(kidsList.adopted_at).toLocaleString()}</td>
                                <td className='p-3 text-sm font-medium grid grid-flow-col items-center mt-5'>
                                    <span className='text-xl cursor-pointer'>
                                        <label htmlFor="my_modal_6" className="btn" onClick={() => handleEditClick(kidsList)}><MdEditNote /></label>
                                    </span>
                                    <span className='text-xl cursor-pointer'><MdDelete onClick={() => handleDelete(kidsList.id)} /></span>
                                </td>
                            </tr>
                        ))
                    )}
                </tbody>
            </table>
  
            <input type="checkbox" id="my_modal_6" className="modal-toggle" />
            <div className="modal" role="dialog">
            <div className="modal-box">
                <h3 className="text-lg font-bold">Edit kids status</h3>
                <input type="text" placeholder="Type here" onChange={handleChange} className="input input-bordered w-full mt-8 " />
                <div className="modal-action">
                    <label htmlFor="my_modal_6" onClick={() => handleEdit(editText.id, editText)} className="btn btn-primary">Edit</label>
                    <label htmlFor="my_modal_6" className="btn">Close!</label>
                </div>
            </div>
            </div> 

        </div>
    );
}

export default Table;
