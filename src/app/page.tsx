import Image from "next/image";
import styles from "./page.module.css";

import Scarecrow from "../../public/assets/image/Scarecrow.png";

export default function Home() {
  return (
    <div className="container">
      <header className="header">
        <div className="header_logo">404 not found</div>
      </header>

      <div className="contain ">
        <Image className="img" src={Scarecrow} alt="image" />

        <div className="contain_info">
          <h2 className="title">I have bad news for you</h2>
          <p className="description">
            The page you are looking for might be removed or is temporarily
            unavailable
          </p>
          <div className="button">Back to homepage</div>
        </div>
      </div>

      <div className="footer">
        created by{" "}
        <a
          className="font-bold"
          href="https://devchallenges.io/portfolio/CristopherVA"
        >
          CristopherVA
        </a>{" "}
        - devChallenges.io
      </div>
    </div>
  );
}
