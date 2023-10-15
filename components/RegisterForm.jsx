"use client"
import { useState } from "react"
import { Button } from "@nextui-org/react"
import Link from "next/link"
import { useRouter } from "next/navigation"

export default function RegisterForm() {
  const router = useRouter()
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!name || !email || !password) {
      setError("Please fill all the fields above to create a new account.")
      return
    } else {
      setError("")
    }
    try {
      const resUserExists = await fetch("api/userExists", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({email})
      })

      const {user} = await resUserExists.json()

      if(user){
        setError("User already exists.")
        return
      }

      const res = await fetch("api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password }),
      })
      if (res.ok) {
        const form = e.target
        form.reset()
        setEmail("")
        setName("")
        setPassword("")
        router.push("/login")
      } else {
        console.log("user registration failed")
      }
    } catch (error) {
      console.log("Error during registration:", error)
    }
  }
  return (
    <div className="flex items-center justify-center h-[calc(100vh-81.6px)]">
      <div className="w-5/6 md:w-[550px] m-auto border px-6 py-10 rounded-md shadow-xl ">
        <p className="w-fit mx-auto text-4xl font-[1000] ">Register</p>
        <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-6">
          <input
            className=" w-full border p-3 px-6 rounded-md placeholder-gray-900 ring-0 outline-none"
            type="text"
            value={name}
            placeholder="Name"
            onChange={(e) => {
              setName(e.target.value)
            }}
          ></input>
          <input
            className="  w-full border p-3 px-6 rounded-md placeholder-gray-900 ring-0 outline-none"
            type="text"
            value={email}
            placeholder="E-mail"
            onChange={(e) => {
              setEmail(e.target.value)
            }}
          ></input>
          <input
            className=" w-full border p-3 px-6 rounded-md placeholder-gray-900 ring-0 outline-none"
            type="password"
            value={password}
            placeholder="Password"
            onChange={(e) => {
              setPassword(e.target.value)
            }}
          ></input>
          {error && (
            <div className="bg-red-600 w-fit py-1 px-6 rounded-md text-white text-sm">
              {error}
            </div>
          )}

          <Button
            type="submit"
            className="bg-black text-white p-4 w-full rounded-md"
          >
            Create Account
          </Button>
        </form>
        <p className="mt-4 text-center">
          Already have account ?<Link href={"/login"}> Login</Link>
        </p>
      </div>
    </div>
  )
}
