import '../../styles/login.css';

interface StateProps {
  setShowLoginForm: React.Dispatch<React.SetStateAction<boolean>>;
}

const Login = (props: StateProps) => {
  const { setShowLoginForm } = props;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    setShowLoginForm(false);
  };
  return (
    <div className="form-background">
      <form className="login-form" onSubmit={handleSubmit}>
        <h1>Login</h1>
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button className="button-submit-login pulse" type="submit">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
