import Head from "next/head";
import { BasicHeader } from "./BasicHeader";

export const BasicLayout: React.FC<{ title: string }> = ({
  children,
  title,
}) => {
  return (
    <div className="BasicLayout">
      <Head>
        <title>{title}</title>
      </Head>
      <BasicHeader />
      {children}
    </div>
  );
};
