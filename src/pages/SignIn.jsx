import React from 'react'

import '../App.css'

import Navbar from '../components/organisms/Navbar'
import Card from '../components/organisms/Card'

const signinField = [
  {
    name: "name",
    label: "Nama Lengkap",
    type: "text",
    placeholder: "John Doe"
  },
  {
    name: "email",
    label: "E-Mail",
    type: "email",
    placeholder: "JohnDoe@gmail.com"
  },
  {
    name: "gender",
    label: "Jenis Kelamin",
    type: "select",
    options: [ 
      { label: "Wanita", value: "woman" },
      { label: "Pria", value: "man" }
    ]
  },
  {
    name: "password",
    label: "Kata Sandi",
    type: "password",
    placeholder: "Password"
  },
  {
    name: "passwordConfirmation",
    label: "Konfirmasi Kata Sandi",
    type: "password",
    placeholder: "Password"
  }
];


function Signin() {
  return (
    <>
      <Navbar />
      <Card
        title="Masuk ke Akun"
        text="Yuk, lanjutin belajarmu di videobelajar."
        fields={signinField}
        btnText1="Daftar"
        btnText2="Masuk"
        options={signinField}
      />
    </>
  )
}

export default Signin;