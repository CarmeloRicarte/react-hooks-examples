import { useContext } from "react";
import { UserContext } from "./context/UserContext";

export const LoginPage = () => {
  const { user, setUser } = useContext(UserContext);
  return (
    <>
      <h1>LoginPage</h1>
      <hr />
      <pre aria-label="user-info">{JSON.stringify(user, null, 3)}</pre>

      <button
        data-testid="login-button"
        type="button"
        className="btn btn-primary"
        onClick={() =>
          setUser({
            id: 1,
            name: "John Doe",
            email: "johndoe@example.com",
          })
        }
      >
        Set User
      </button>
    </>
  );
};
