import React from "react";
// import devhub from "../assets/devhub.pnh";

function Dashboard() {
  return (
    <div>
      {/* <div className=" flex gap-4">
         <Link to="" className="text-4xl font-bold ">
          DevHub
        </Link>
        <img src={devhub} alt="Devhub icon" className="w-13 h-13" /> 
      </div> */}

      <div>
        <div className="bg-blue-700 border-2 rounded-2xl text-white p-8 text-left">
          <h1 className="text-3xl font-bold font-sans mb-3">
            Welcome back, John Doe!
          </h1>
          <p className="">Here's what's happening with your learning today</p>
        </div>

        <div>
          <img src="" alt="Graduation Badge" />
        </div>
      </div>

      <div className="flex">
        <div className="border-2">
          <div>
            <p>Courses in Progress</p>
            <h1 className="">3</h1>
          </div>

          <div>
            <img src="" alt="Opened Book" />
          </div>
        </div>

        <div className="border-2">
          <div>
            <p>Hours Learned</p>
            <h1>48</h1>
          </div>

          <div>
            <img src="" alt="Clock" />
          </div>
        </div>

        <div className="border-2">
          <div>
            <p>Certificate Earned</p>
            <h1>5</h1>
          </div>

          <div>
            <img src="" alt="Certificate Badge" />
          </div>
        </div>

        <div className=" border-2">
          <div>
            <p>Current Streak</p>
            <h1>12 days</h1>
          </div>

          <div>
            <img src="" alt="Rate Flow" />
          </div>
        </div>
      </div>

      <div className="">
        <div className="flex">
          <div>
            <div>
              <img src="" alt="finger print" />
            </div>
            <div>
              <h3>Learning Goals</h3>
              <p>Track your monthly objectives</p>
            </div>
          </div>

          <div>
            <p>View All</p>
          </div>
        </div>

        <div className="border-2 rounded-2xl">
          <h2>Complete React Advanced Course</h2>

          <div className="flex">
            <p className="text-gray-500">65%</p>
            <p className="text-blue-500">65%</p>
          </div>
        </div>

        <div className="border-2 rounded-2xl">
          <h2>Earn 3 Certificate</h2>

          <div className="flex">
            <p className="text-gray-500">2 of 3</p>
            <p className="text-blue-500">67%</p>
          </div>
        </div>

        <div className="border-2 rounded-2xl">
          <h2>Study 50 Hours This Month</h2>

          <div className="flex">
            <p className="text-gray-500">40 of 50</p>
            <p className="text-blue-500">80%</p>
          </div>
        </div>
      </div>

      <div className="flex gap-4 border-2 rounded-2xl p-5">
        <div className="border-2 rounded-2xl">
          <div className="flex">
            <div>
              <img src="" alt="Rate flow" />
            </div>

            <div>
              <h3>Recent Activity</h3>
              <p>Your latest learning achievements</p>
            </div>
          </div>

          <div className="flex">
            <div>
              <img src="" alt="Certificate" />
            </div>

            <div>
              <h3>Completed "React Hooks Deep Dive</h3>
              <p>2 hours ago</p>
            </div>
          </div>

          <div className="flex">
            <div>
              <img src="" alt="Opened Book" />
            </div>

            <div>
              <h3>Started "Advanced TypeScript Patterns" </h3>
              <p>5 hours ago</p>
            </div>
          </div>

          <div className="flex">
            <div>
              <img src="" alt="Star Badge" />
            </div>

            <div>
              <h3>Earned "7-Day Streak" badge</h3>
              <p>1 day ago</p>
            </div>
          </div>

          <div className="flex">
            <div>
              <img src="" alt="" />
            </div>

            <div>
              <h4>Joined "Web Development" discussion</h4>
              <p>2 days ago</p>
            </div>
          </div>
        </div>

        <div className="border-2 rounded-2xl">
          <div className="flex">
            <div>
              <img src="" alt="Notification bar" />
            </div>

            <div>
              <h2>Upcoming Events</h2>
              <p>Don't miss these live sessions</p>
            </div>
          </div>

          <div className="flex border-2 rounded-2xl">
            <div>
              <img src="" alt="Calender" />
            </div>

            <div>
              <h3>Live Q&A: React Performance</h3>
              <p>Today, 3:00 PM</p>
              <p>with Sarah Johnson</p>
            </div>
          </div>

          <div className="flex border-2 rounded-2xl">
            <div>
              <img src="" alt="Calender" />
            </div>

            <div>
              <h3>Workshop: Design System</h3>
              <p>Tomorrow, 10:00 AM</p>
              <p>with Mike Chen</p>
            </div>
          </div>

          <div className="flex border-2 rounded-2xl">
            <div>
              <img src="" alt="Calender" />
            </div>

            <div>
              <h3>Webinar: Career Tech</h3>
              <p>April 1, 2:00 PM</p>
              <p>with Emma Williams</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
