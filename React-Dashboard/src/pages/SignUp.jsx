import user_icon from "../assets/user.png";
import email_icon from "../assets/email.png";
import password_icon from "../assets/password.png";

function SignUp() {
  return (
    <div
      className="flex justify-center size- 40 max-auto
    h-155 p-6 "
    >
      <form
        action=""
        className="p-10 text-center bg-gray-200 border-double w-120"
      >
        <h2 className="text-3xl font-bold text-black mb-4 ">Sign Up</h2>

        <div className="text-left">
          <div className="mb-3">
            <img src={user_icon} alt="user-icon" className="w-6 h-6" />
            <label for="full-name">Full Name: </label>
            <br />
            <input
              type="text"
              name="full-name"
              placeholder="Full Name"
              //  value={}
              //  onChange={}
              className="border-2"
            />
          </div>

          <div className="mb-3">
            <img src={email_icon} alt="email-icon" className="w-6 h-6" />
            <label for="email">Eamil: </label>
            <br />
            <input
              type="email"
              name="email"
              placeholder="Email"
              //  value={}
              //  onChange={}
              className="border-2"
            />
          </div>

          <div className="mb-3">
            <img src={password_icon} alt="password-icon" className="w-6 h-6" />
            <label for="password">Password: </label>
            <br />
            <input
              type="password"
              name="password"
              placeholder="Password"
              //  value={}
              //  onChange={}
              className=" border-2"
            />
          </div>

          <div className="mb-3">
            <img src={password_icon} alt="password-icon" className="w-6 h-6" />
            <label for="confirm-password">Confirm Password: </label>
            <br />
            <input
              type="password"
              name="confirmpassword"
              placeholder="Confirm Password"
              //  value={}
              //  onChange={}
              className="border-2"
            />
          </div>

          <button className="mb-3 border-2 p-2 bg-gray-300 cursor-pointer">
            Sign Up
          </button>

          <p className="mb-3 ">Already have an account?... </p>
        </div>
      </form>
    </div>
  );
}
export default SignUp;
