import {
  AmplifyAuthenticator,
  AmplifySignIn,
  AmplifySignOut,
  AmplifySignUp,
} from "@aws-amplify/ui-react";
import { useAuth } from "../../../data/login";
import { BasicLayout } from "../../layouts/BasicLayout";

export const LoginPage: React.FC = () => {
  const [user] = useAuth();

  return (
    <BasicLayout title="Login">
      {user ? (
        <div>
          <p>You have logged in as {user.attributes.email}.</p>
          <LogoutForm />
        </div>
      ) : (
        <LoginForm />
      )}
    </BasicLayout>
  );
};

const LoginForm: React.FC = () => {
  return (
    <AmplifyAuthenticator>
      <AmplifySignIn
        slot="sign-in"
        formFields={[{ type: "email" }, { type: "password" }]}
      />
      <AmplifySignUp
        slot="sign-up"
        formFields={[{ type: "email" }, { type: "password" }]}
      />
    </AmplifyAuthenticator>
  );
};

const LogoutForm: React.FC = () => {
  return (
    <div
      style={{
        boxSizing: "border-box",
        margin: "auto",
        padding: "35px 40px",
        width: "28.75rem",
      }}
    >
      <AmplifySignOut />
    </div>
  );
};
