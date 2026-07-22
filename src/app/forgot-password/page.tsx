import { forgotPassword } from "./action"
export default function ResetPassword() {
    return (
        <>
        <section className=" flex items-center justify-center  min-h-screen">
            <div>
<h1 className="uppercase font-extrabold text-3xl md:text-4xl ">
            Reset <span className="text-blue-900 ">Password</span> 
          </h1>     
          <p className="mt-3">Enter your email address and we'll send you a password reset link.</p>
{/* form           */}
<form action={forgotPassword} className="flex flex-col gap-4 mt-8 ">
    <label htmlFor="">Email Address </label>
    <input type="email" placeholder="Enter your email address" name="email" id="email" className="block border border-blue-700 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900"/>
<div className="flex items-center gap-4">

    <button       className="inline-block rounded-lg bg-blue-800 px-6 py-3 text-white hover:bg-blue-900 transition"
type="submit">Send Reset Link</button>
</div>
</form>


       </div>

        </section>
        
        </>
    )
}