"use client"
import RegisterForm from "@/components/RegisterForm"
import { Button } from "@nextui-org/react"
import { signOut } from "next-auth/react"
import { useSession } from "next-auth/react"

export default function Admin() {
    const {data: session} = useSession()
  return (
    <div className="w-full flex justify-center h-[600px] items-center">
      <div className="mt-20 flex flex-col gap-4 w-fit bg-gray-200 p-4 rounded-md justify-center shadow-lg">
        <div> Name: {session?.user?.name}</div>
        <div> Email: {session?.user?.email}</div>
        <Button
          onClick={() => signOut()}
          className=" bg-black text-white p-2 rounded-md "
        >
          Logout
        </Button>
      </div>
    </div>
  )
}
