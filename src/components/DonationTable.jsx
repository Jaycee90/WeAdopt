import axios from 'axios';
import React, { useState } from 'react';
import { MdEditNote } from "react-icons/md";

export default function DonationTable({gift, setGift, isLoading}) {
    const [edit, setEdit] = useState({
        'id': null,
        'donation': ''
    });

    const handleEditing = async (id, value) => {
        try {
            const response = await axios.patch(`http://127.0.0.1:8000/api/donate/${id}/`, value);
            const newList = gift.map(add => add.id === id ? response.data : add);
            setGift(newList);
        } catch (error) {
            console.log(error);
        }
    }

    const handleChange = (e) => {
        setEdit( prev => ({
            ...prev,
            'donation': e.target.value
        }));
        console.log(edit);
    }

    const handleClick = (item) => {
        setEdit(item); 
    }


  return (
    <div className='py-2'>
      <table className='w-11/12 max-w-4xl'>
        <thead className='border-b-2 border-black'>
            <tr>
                <th className='p-3 text-sm font-semibold tracking-wide text-left'>Names</th>
                <th className='p-3 text-sm font-semibold tracking-wide text-left'>Donation</th>
                <th className='p-3 text-sm font-semibold tracking-wide text-left'>Currency</th>
                <th className='p-3 text-sm font-semibold tracking-wide text-left'>Action</th>
            </tr>
        </thead>

        <tbody>
            {
                isLoading ? (
                    <tr>
                        <td colSpan="5" className="p-3 text-center">Loading...</td>
                    </tr>
                ) : (
                    gift.map((inventory) => (
                        <tr key={inventory.id} className='border-b border-black'>
                            <td className='p-3 text-sm'>{inventory.name}</td>
                            <td className='p-3 text-sm'>{inventory.donation}</td>
                            <td className='p-3 text-sm'>{inventory.currency}</td>
                            <td className='p-3 text-sm font-medium grid grid-flow-col items-center mt-5'>
                                <span className='text-xl cursor-pointer'>
                                    <label htmlFor="my_modal_7" className="btn" onClick={() => handleClick(inventory)}><MdEditNote /></label>
                                </span>
                            </td>
                        </tr>
                    ))
                )
            }
        </tbody>
      </table>



        {/* Put this part before </body> tag */}
        <input type="checkbox" id="my_modal_7" className="modal-toggle" />
        <div className="modal" role="dialog">
        <div className="modal-box">
            <h3 className="text-lg font-bold">Edit amount</h3>
            <input type="text" placeholder="Type here" onChange={handleChange} className="input input-bordered w-full mt-8 " />
        </div>
        <div>
            <label htmlFor="my_modal_7" onClick={() => handleEditing(edit.id, edit)} className="btn btn-primary">Edit</label>
            <label htmlFor="my_modal_7" className="btn">Close</label>
        </div>
        </div>


    </div>
  )
}
