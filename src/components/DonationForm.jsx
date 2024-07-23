import axios from 'axios';
import React, { useState } from 'react';

const DonationForm = ({fetchData}) => {

    const [newDonation, setNewDonation] = useState ({
        'name': '',
        'donation': ''
    })

    const handleChange = (e) => {
        const {name, value} = e.target;
        setNewDonation(prev => ({
            ...prev,
            [name]: value
        }))
        console.log(newDonation);
    }

    const postDonation = async () => {
        try {
            await axios.post(`http://54.151.54.110:8000/api/donate/`, newDonation)
            fetchData()
            setNewDonation({
                'name':'',
                'donation':''
            })

        } catch (error){
            console.log(error);
        }
    }


  return (
    <div>
      <input type="text" name='name' placeholder="Enter your name here" className="input input-bordered input-info w-full max-w-xs" 
        onChange={handleChange} value={newDonation.name}
      />
      <input type="text" name='donation' placeholder="Enter amount here" className="input input-bordered input-info w-full max-w-xs ml-2" 
        onChange={handleChange} value={newDonation.donation}
        onKeyDown={(e) => {
            if (e.key === 'Enter'){
                postDonation();
            }
        }}
      />

      <button className="btn btn-neutral ml-2" onClick={postDonation}>Add a donation</button>
    </div>
  )
}

export default DonationForm
