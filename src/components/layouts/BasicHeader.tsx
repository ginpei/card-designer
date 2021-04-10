import Link from "next/link";
import styles from "./BasicHeader.module.scss";

export const BasicHeader: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className="u-container">
        <div className="inner">
          <Link href="/">Card designer</Link>
        </div>
      </div>
    </div>
  );
};
