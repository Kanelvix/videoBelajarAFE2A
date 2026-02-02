import React from 'react'

import '../App.css'
import Navbar from '../components/organisms/Navbar'
import Card from '../components/organisms/Card'

const loginField = [
  {
    name: "email",
    label: "E-Mail",
    type: "email",
    placeholder: "JohnDoe@gmail.com"
  },
  {
    name: "password",
    label: "Kata Sandi",
    type: "password",
    placeholder: "Password"
  }
];

function Login() {
  return (
    <>
      <Navbar page="logInSignIn" />
      <Card
        title="Masuk ke Akun"
        text="Yuk, lanjutin belajarmu di videobelajar."
        fields={loginField}
        btnText1="Masuk"
        btnText2="Daftar"
        toPage="signin"
      />
    </>
  )
}

export default Login;