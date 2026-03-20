import user_icon from "../assets/user.png";
import email_icon from "../assets/email.png";
import password_icon from "../assets/password.png";

function SignUp() {
  return (
    <div>
      <form action="" className="">
        <h2 className="">Sign Up</h2>

        <div>
          <img src={user_icon} alt="user-icon" className="w-6 h-6" />
          <label for="full-name">Full Name: </label>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            //  value={}
            //  onChange={}
            className="border-2"
          />
        </div>

        <div>
          <img src={email_icon} alt="email-icon" className="w-6 h-6" />
          <label for="email">Eamil: </label>
          <input
            type="email"
            name="email"
            placeholder="Email"
            //  value={}
            //  onChange={}
            className="border-2"
          />
        </div>

        <div>
          <img src={password_icon} alt="password-icon" className="w-6 h-6" />
          <label for="password">Password: </label>
          <input
            type="password"
            name="password"
            placeholder="Password"
            //  value={}
            //  onChange={}
            className=" border-2"
          />
        </div>

        <div>
          <img src={password_icon} alt="password-icon" className="w-6 h-6" />
          <label for="confirm-password">Confirm Password: </label>
          <input
            type="password"
            name="confirmpassword"
            placeholder="Confirm Password"
            //  value={}
            //  onChange={}
            className="border-2"
          />
        </div>
      </form>
    </div>
  );
}
export default SignUp;
