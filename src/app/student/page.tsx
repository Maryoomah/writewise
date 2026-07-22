import NavLink from "@/components/navlink";

export default function StudentDashboard() {
  return (
    <main>
   
      {/* Dashboard */}
<section className="min-h-screen bg-blue-100 p-8">        <h2 className="text-3xl font-bold">Welcome Back, Muhammad 👋</h2>
        {/* Dashboard Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          {/* Card 1 */}
          <div className="rounded-xl bg-white p-6 shadow space-y-2">
            <h3 className="text-xl font-semibold text-blue-900">My Classes</h3>

            <p className=" text-green-600 font-medium">English Writing 101 </p>
                        <p className="mt-3 font-medium">Instructor: Ms Maryam </p>

          </div>
             {/* Card 2 */}
          <div className="rounded-xl bg-white p-6 shadow space-y-2">
            <h3 className="text-xl font-semibold text-blue-900">
Pending Assignment            </h3>

            <p className=" text-green-600 font-medium">Argumentative Essay </p>
            <p>Due: 20 August</p>
          <div className="mt-6">
    <NavLink href="/student/assignments/submit">
        Submit →
    </NavLink>
</div>
          </div>
          {/* Card 2 */}
          <div className="rounded-xl bg-white p-6 shadow space-y-2">
            <h3 className="text-xl font-semibold text-blue-900">
Recent Feedback            </h3>

            <p className=" text-green-600 font-medium">Expository Essay </p>
            <p>Teacher Feedback Recieved</p>
                        <p>Ready for Revision</p>

            <div className="mt-6">
           <NavLink href="/student/assignments/feedback" >View Feedback</NavLink>

            </div>
          </div>
   {/* Card 2 */}
          <div className="rounded-xl bg-white p-6 shadow space-y-2 ">
            <h3 className="text-xl font-semibold text-blue-900">
Revision Progress            </h3>

            <p className=" text-green-600 font-medium">Revision Status: In Progress </p>
          
          </div>
        </div>
        <div className="mt-10 flex justify-center gap-4 flex-wrap">
    <NavLink href="/student/assignments/feedback">
        Continue Revision
    </NavLink>

    <NavLink href="/student/assignments/submit">
        Submit Assignment
    </NavLink>
</div>
      </section>
    </main>
  );
}
