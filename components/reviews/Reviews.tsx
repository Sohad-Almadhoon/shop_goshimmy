import { dummyReviews } from '@/app/helpers/data'
import React from 'react'
import Review from './Review'
import { Button } from '../ui/button'

const Reviews = () => {
  return (
    <div className='min-h-screen'>
      {dummyReviews.map(item => <Review key={item.id} {...item} />)}
      <Button variant='outline' className='flex justify-center mt-12 mx-auto'>See more </Button>
    </div>
  )
}

export default Reviews