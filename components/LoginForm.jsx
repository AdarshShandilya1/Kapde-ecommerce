"use client"
import { useState } from "react"
import { Button } from "@nextui-org/react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { signIn } from "next-auth/react"

export default function LoginForm() {
  const router = useRouter()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const res = await signIn("credentials", {
        email,
        password,
        redirect: false,
      })
      if(res.error){
        setError("Invalid Credentials")
        return
      }
      router.replace("admin")
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div className="pt-[calc(81.6px)]">
      <div className="w-5/6 md:w-[550px] m-auto mt-16 border px-6 py-10 rounded-md shadow-xl ">
        <p className="w-fit mx-auto text-4xl font-[1000] ">Login</p>
        <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-6">
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
            Login
          </Button>
        </form>
        <p className="mt-4 text-center">
          Don't have an account ?<Link href={"/register"}> Register</Link>
        </p>
      </div>
    </div>
  )
}
