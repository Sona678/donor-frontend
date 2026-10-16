import { useEffect, useState } from 'react'
import {Container} from '../../index.jsx'
import donationOfferService from '../../../services/donationOfferService.js'
import { PostCard } from '../../index.jsx'

const DonationOffer = () => {
  const [offer,setOffer]=useState([])
  useEffect(()=>{
     donationOfferService.getPendingOffer().then((offers)=>{
    if(offers){
      setOffer(offers)
    }
  })
  },[])

 
  return (
    <div className='w-full py-8'>
      <Container>
        <div className='flex flex-wrap'>
          {offer.map((offers)=><div key={offers._id}>
            <PostCard type="donor" request={offers}/>
          </div>)}
        </div>
      </Container>
    </div>
  )
}

export default DonationOffer