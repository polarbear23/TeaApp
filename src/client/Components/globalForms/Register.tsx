import '../../styles/register.css';

interface StateProps {
  setShowRegisterForm: React.Dispatch<React.SetStateAction<boolean>>;
}

const Register = (props: StateProps) => {
  const { setShowRegisterForm } = props;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    setShowRegisterForm(false);
  };

  const handleClick = (): void => {
    setShowRegisterForm(false);
  };
  return (
    <div className="form-background" onClick={handleClick}>
      <form
        className="register-form"
        onClick={(e: React.MouseEvent<HTMLFormElement>) => {
          e.stopPropagation();
        }}
        onSubmit={handleSubmit}
      >
        <h1>Register</h1>
        <p>Register now to make your first purchase of tea!</p>
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button className="button-submit-register pulse" type="submit">
          Sign up
        </button>
      </form>
    </div>
  );
};

export default Register;
