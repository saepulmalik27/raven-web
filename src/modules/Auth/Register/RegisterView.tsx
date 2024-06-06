import React from 'react'
import RegisterForm from './RegisterForm'



const RegisterView = () => {
  return (
    <main className="flex-1 bg-[url('/logo/image_2.svg')] bg-center bg-no-repeat flex flex-col justify-center items-center" >
      <div className='auth-box bg-white flex flex-col gap-4'>
        <h1 className='title-5'>Daftar</h1>
        <RegisterForm/>
      </div>
    </main>
  )
}

export default RegisterView