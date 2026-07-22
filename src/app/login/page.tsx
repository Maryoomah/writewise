import Link from "next/link"
import { login } from "./action"
export default function Login() {
    return (
        <>
        <section className=" flex items-center justify-center  min-h-screen">
            <div>
<h1 className="uppercase font-extrabold text-3xl md:text-4xl ">
            Write <span className="text-blue-900 ">Wise</span> 
          </h1>     
{/* form           */}
<form action={login} className="flex flex-col gap-4 mt-8 ">
    <label htmlFor="">Email Address </label>
    <input type="email" placeholder="Enter your email address" name="email" id="email" className="block border border-blue-700 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900"/>
<label htmlFor="">Password</label>
<input type="password" name="password" id="password" placeholder="Enter your password" className="block border border-blue-700 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900"/>
<button className="bg-blue-800 py-2 px-3 rounded-lg text-white cursor-pointer" type="submit">Login to dashboard</button>
<div className="flex items-center gap-4">

    <Link href="/forgot-password" className=" underline ">forgot password</Link>
    <Link href="/register"className=" underline ">new user? create account</Link>
</div>
</form>


       </div>

        </section>
        
        </>
    )
}