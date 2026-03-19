import user_icon from "../assets/user.png";
import email_icon from "../assets/email.png";
import password_icon from "../assets/password.png";

function SignUp() {
  return (
    <div className="max-w-5xl mx-auto">
      <div className="header">
        <h2>SignUp Here </h2>
        <div className="underline"></div>
      </div>

      <div className="inputs">
        <div className="input">
          <img src={user_icon} alt="user-icon" className="w-6 h-6" />
          <input type="text" />
        </div>

        <div className="input">
          <img src={email_icon} alt="email-icon" className="w-6 h-6" />
          <input type="email" className="border-black-200" />
        </div>

        <div className="input">
          <img src={password_icon} alt="password-icon" className="w-6 h-6" />
          <input type="password" />
        </div>

        <div className="input">
          <img src="" alt="" />
          <input type="text" />
        </div>

        <div className="input">
          <img src="" alt="" />
          <input type="text" />
        </div>
      </div>
    </div>
  );
}

export default SignUp;
