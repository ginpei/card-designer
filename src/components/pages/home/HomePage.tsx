import Link from "next/link";
import { loginPath } from "../../../../pages/login";
import { BasicLayout } from "../../layouts/BasicLayout";

export const HomePage: React.FC = () => {
  return (
    <BasicLayout title="Home Page">
      <div className="HomePage">
        <div className="u-container">
          <h1>HomePage</h1>
          <p>
            <Link href={loginPath()}>Login</Link>
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus
            officia laborum nobis maxime possimus totam magni obcaecati aut
            impedit accusamus aliquid atque fugiat, excepturi animi harum nulla
            sed suscipit reprehenderit!
          </p>
          <p>
            Dolore magni error eligendi in neque amet quam dolorum, deserunt
            reiciendis nisi quae possimus. Eos explicabo tempore voluptatum
            laborum, reiciendis debitis obcaecati inventore alias incidunt id
            minus libero soluta quas.
          </p>
          <p>
            Ipsa optio illo quos nemo doloremque debitis! Nemo architecto
            minima, dolor earum maiores cupiditate atque vitae ad rem nesciunt
            sapiente eveniet sequi eius dolorum doloribus? Facere illo corrupti
            earum libero?
          </p>
          <p>
            Quod id asperiores consectetur, assumenda provident nesciunt
            laboriosam laborum ad, iure mollitia expedita sequi in voluptatibus
            voluptas ullam velit, cupiditate similique commodi debitis?
            Necessitatibus, voluptas iste adipisci recusandae autem consequatur.
          </p>
          <p>
            Fugit blanditiis sed deleniti maxime neque earum debitis laudantium
            fuga, necessitatibus ipsum pariatur omnis nemo laborum vel, odit
            qui, aspernatur cupiditate magni ut vero placeat libero nam
            voluptates? Illo, iste!
          </p>
          <p>
            Fugit, magnam culpa a deleniti quod quibusdam cumque provident illum
            ab repellat nisi doloremque dolore sit illo laudantium! Eligendi
            autem quos impedit at! Ad, incidunt? Nam doloribus modi magni
            quaerat.
          </p>
          <p>
            Culpa expedita autem, dignissimos nemo error ullam hic, fuga tempore
            unde quas voluptates illo cupiditate distinctio quo atque.
            Distinctio sed aliquam autem dolore mollitia? Odit vitae aperiam
            obcaecati mollitia eos!
          </p>
          <p>
            Enim facere consequatur quas est. Exercitationem maiores voluptates
            tempore cupiditate explicabo labore ut odio veritatis quibusdam
            nisi, quo, cumque quia! Excepturi dolorem saepe molestias cumque
            mollitia minus voluptas odit voluptate.
          </p>
          <p>
            Quos necessitatibus saepe consequuntur, soluta repellendus
            praesentium dolore modi quia ea aperiam, impedit vel consequatur
            ipsa odit adipisci nemo cupiditate deleniti asperiores corporis
            voluptatibus. Cupiditate vitae voluptate fugit recusandae dicta.
          </p>
          <p>
            Asperiores alias reiciendis modi! Libero fuga porro minus dolorum
            cumque amet enim, debitis quod maiores quam veniam temporibus quas
            dignissimos ex impedit quos totam, nulla nam voluptatum ut labore
            repellendus.
          </p>
        </div>
      </div>
    </BasicLayout>
  );
};
