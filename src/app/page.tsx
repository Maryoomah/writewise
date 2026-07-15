import Link from "next/link";
export default function Home() {
  return (
    <>
      <section className="min-h-screen flex items-center justify-center">
        <div className="max-w-3xl mx-auto text-center">
          
          <h1 className="uppercase font-extrabold text-5xl md:text-6xl ">
            Write <span className="text-blue-900 ">Wise</span> 
          </h1>
          <div className="">
            <h4 className="text-base md:text-xl mt-4 italic ">AI-assisted Writing Revision</h4>
            <p className="text-base md:text-lg mt-4">
           Helping learners understand and implement teacher feedback through AI-guided revision.
            </p>
          </div>
          <div className="flex flex-col items-center gap-4 text-white mt-8">
            <Link href="/login"className="inline-block bg-blue-800 py-2 px-3 rounded-lg">Login to your dashboard</Link>
            <Link href="/register" className="inline-block bg-blue-800 py-2 px-3 rounded-lg">New User? Create Account</Link>
          </div>
        </div>
      </section>
    </>
  );
}
