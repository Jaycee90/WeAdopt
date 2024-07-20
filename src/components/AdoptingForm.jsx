import axios from 'axios'
import React, { useState } from 'react'

const AdoptingForm = ({setAdopt, fetchData}) => {

    const [newKid, setNewKid] = useState({
        'body': ''
    })

    const handleChange = (e) => {
        setNewKid(prev => ({
            ...prev,
            'body': e.target.value
        }))
        console.log(newKid);
    }

    const postKid = async () => {
        try {
            await axios.post('http://127.0.0.1:8000/api/adopt/', newKid)
            fetchData() //display a new kid directly  
            //alert('Added successfully!')
            setNewKid({ 'body': '' }) //clear content in button
        } catch (error) {
            console.log(error)
        }
    }


  return (
    <div>
      <input type="text" placeholder="Enter a name of kid here" className="input input-bordered input-info w-full max-w-xs" 
        onChange={handleChange} value={newKid.body}
        /**Hit enter to add a kid */
        onKeyDown={(e) => {
            if (e.key === 'Enter'){
                postKid()
            }
        }}

      />
      <button className="btn btn-neutral ml-2" onClick={postKid}>Add a kid</button>
    </div>
  )
}

export default AdoptingForm
