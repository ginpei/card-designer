import { LoginPage } from "../src/components/pages/login/LoginPage";

export function loginPath(): string {
  return "/login";
}

const LoginRoute: React.FC = () => {
  return <LoginPage />;
};

export default LoginRoute;
