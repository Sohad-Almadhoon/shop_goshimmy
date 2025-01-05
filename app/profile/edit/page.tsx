import Card from '@/app/components/shared/Card'
import CustomInput from '@/app/components/shared/CustomInput';
import React from 'react'
import { BiUpload } from 'react-icons/bi';

const EditProfile = () => {
  return (
    <div className="flex justify-center items-center my-5">
      <Card className="text-left">
        <span>Edit Profile</span>
        <img
          src="/images/profile-img.png"
          alt=""
          className="w-32 rounded-full"
        />
        <BiUpload />
        <span>Upload new photo</span>
        <form action="">
          <div>
            {" "}
            <label htmlFor="">Username</label>
            <CustomInput placeholder="Username" />
          </div>
          <div>
            {" "}
            <label htmlFor="">First Name</label>
            <textarea name="" id=""></textarea>
          </div>
        </form>
      </Card>


    </div>
  );
}

export default EditProfile