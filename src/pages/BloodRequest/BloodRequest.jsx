import { useEffect, useState } from 'react'
import {Container} from '../../index.jsx'
import bloodRequestService from '../../../services/bloodRequestService'
import { PostCard } from '../../index.jsx'

const BloodRequest = () => {
  const [request,setRequest]=useState([])
  useEffect(()=>{
     bloodRequestService.getPendingRequest().then((requests)=>{
    if(requests){
      setRequest(requests)
    }
  })
  },[])

 
  return (
    <div className='w-full py-8'>
      <Container>
        <div className='flex flex-wrap'>
          {request.map((requests)=><div key={requests._id}>
            <PostCard type="receiver" request={requests}/>
          </div>)}
        </div>
      </Container>
    </div>
  )
}

export default BloodRequest