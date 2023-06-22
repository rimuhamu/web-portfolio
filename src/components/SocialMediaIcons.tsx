import { FC } from "react";

const SocialMediaIcons: FC = () => {
  return (
    <div className="flex justify-center md:justify-start my-10 gap-7">
      <a
        className="hover:opacity-50 trasition duration-500"
        href="https://github.com/rimuhamu"
        target="_blank"
        rel="norefferer"
      >
        <img
          className="w-[30px] h-[30px]"
          alt="github-link"
          src="assets/github.png"
        />
      </a>

      <a
        className="hover:opacity-50 trasition duration-500"
        href="https://www.linkedin.com/in/emir-risyad-aa917319b/"
        target="_blank"
        rel="norefferer"
      >
        <img alt="linkedin-link" src="assets/linkedin.png" />
      </a>

      <a
        className="hover:opacity-50 trasition duration-500"
        href="https://twitter.com/shiapony"
        target="_blank"
        rel="norefferer"
      >
        <img alt="twitter-link" src="assets/twitter.png" />
      </a>

      <a
        className="hover:opacity-50 trasition duration-500"
        href="https://www.instagram.com/risyademir/?hl=en"
        target="_blank"
        rel="norefferer"
      >
        <img alt="instagram-link" src="assets/instagram.png" />
      </a>
    </div>
  );
};

export default SocialMediaIcons;
