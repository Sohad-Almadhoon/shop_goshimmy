import Card from '@/app/components/shared/Card'
import React from 'react'
import { BiUpload } from 'react-icons/bi';

const EditProfile = () => {
  return (
    <div>
      <Card>
        <span>Edit Profile</span>
        <img src="/images/profile-img.png" alt="" />
        <BiUpload />
        <span>Upload new photo</span>
        
      </Card>
    </div>
  );
}

export default EditProfile