import "../styles/Auth.css";
import XLogo from "../assets/XLogo.svg";

function Auth() {
  return (
    <div className="auth-container">
      <div className="auth-logo">
        <img src={XLogo} alt="X Icon" />
      </div>

      <div className="auth-content">
        <p className="auth-heading">Happening Now</p>
        <p className="auth-subheading">Join Today</p>

        <button className="auth-button">Create Account</button>

        <span className="auth-divider">OR</span>

        <p className="auth-login-text">Already have an account?</p>
        <button className="auth-button">Sign in</button>
      </div>
    </div>
  );
}

export default Auth;
