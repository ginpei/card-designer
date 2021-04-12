import Link from "next/link";
import { loginPath } from "../../../../pages/login";
import { BasicLayout } from "../../layouts/BasicLayout";

export const HomePage: React.FC = () => {
  return (
    <BasicLayout title="Home Page">
      <div className="HomePage">
        <h1>HomePage</h1>
        <p>
          <Link href={loginPath()}>Login</Link>
        </p>
      </div>
    </BasicLayout>
  );
};
