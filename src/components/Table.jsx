import React from 'react';
import { MdDelete, MdEditNote, MdOutlineCheckBox, MdOutlineCheckBoxOutlineBlank } from "react-icons/md";

const Table = ({adopt, setAdopt, isLoading}) => {



  return (
    <div className='py-2'>
      <table className='w-11/12 max-w-4xl'>
        <thead className='border-b-2 border-black'>
            <tr>
            <th className='p-3 text-sm font-semibold tracking-wide text-left'>Checkbox</th>
            <th className='p-3 text-sm font-semibold tracking-wide text-left'>Available</th>
            <th className='p-3 text-sm font-semibold tracking-wide text-left'>Status</th>
            <th className='p-3 text-sm font-semibold tracking-wide text-left'>Date created</th> 
            <th className='p-3 text-sm font-semibold tracking-wide text-left'>Actions</th>
            </tr>
        </thead>
        <tbody>
            {isLoading ? <div>Loading..</div> :
                <>
                    {
                        adopt.map( (kidsList, index) => {
                            return (
                                <tr key={kidsList.id} className='border-b border-black'>
                                    <td className='p-3' title={kidsList.id}>
                                        <span className='inline-block cursor-pointer'>{kidsList.completed ? <MdOutlineCheckBox /> : <MdOutlineCheckBoxOutlineBlank />}</span>
                                    </td>
                                    {/**Pulling all kids names from backend */}
                                    <td className='p-3 text-sm'>{kidsList.body}</td>
                                    <td className='p-3 text-sm text-center'>
                                        <span className={`p-1.5 text-xs font-medium tracking-wider rounded-md ${kidsList.completed ? 'bg-green-300' : 'bg-red-300'}`}>{kidsList.completed ? 'Adopted' : 'Available'}</span>
                                    </td>
                                    <td className='p-3 text-sm'>{new Date(kidsList.adopted_at).toLocaleString()}</td>
                                    <td className='p-3 text-sm font-medium grid grid-flow-col items-center mt-5'>
                                        <span className='text-xl cursor-pointer'><MdEditNote/></span>
                                        <span className='text-xl cursor-pointer'><MdDelete/></span>
                                    </td>
                                </tr>
                            )
                        })         
                    }
                </>
            }
        </tbody>
      </table>
    </div>
  )
}

export default Table
