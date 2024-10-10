import Image from "next/image";

import loader from '/public/loader-primary.svg';

import { Container } from "./style";

const LoaderContainer: React.FC = () => {
  return (
    <Container>
      <Image
        width={100}
        height={100}
        src={loader}
        alt="Loading"
        className="spin"
        priority
      />
    </Container>
  );
};

export default LoaderContainer;
export { Container };
