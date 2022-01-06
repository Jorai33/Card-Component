import styled from "styled-components";
import equilibrium from "../src/images/image-equilibrium.jpg";
import avatar from "../src/images/image-avatar.png";
import GlobalStyle from "./globalStyle";

// React Component (SVG into React)
import Ethereum from "./components/Ethereum";
import Clock from "./components/Clock";
import Eye from "./components/Eye";

const Main = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #0d192c;
  display: grid;
  justify-content: center;
  align-items: center;
`;

const Card = styled.div`
  width: 22rem;
  height: 37rem;
  background-color: #15263f;
  box-shadow: 0px 25px 50px rgba(0, 0, 0, 0.0952917);
  border-radius: 15px;

  display: flex;
  flex-direction: column;
  align-items: center;

  @media only screen and (max-width: 600px) {
    width: 20rem;
    height: 34rem;
  }
`;

const Container = styled.div`
  width: 19rem;
  height: 100%;

  @media only screen and (max-width: 600px) {
    width: 17rem;
  }
`;

const Image = styled.div`
  width: 100%;
  height: 19rem;
  background-image: url(${equilibrium});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 8px;

  margin-top: 1.5rem;

  @media only screen and (max-width: 600px) {
    height: 17rem; 
  }

`;

const HoverImage = styled.div`
  width: 100%;
  height: 100%;
  background-color: #00FFF8;
  opacity: 0.5;
  visibility: hidden;

  display: flex;
  align-items: center;
  justify-content: center;

  ${Image}:hover &{
    visibility: visible;
  }

`;

const Title = styled.div`
  font-family: "Outfit", sans-serif;
  font-weight: 600;
  font-size: 22px;
  line-height: 28px;
  color: white;
  margin-top: 1.5rem;
  margin-bottom: 1rem;

  &:hover{
    cursor: pointer;
    color: #00FFF8;
  }
`;

const Description = styled.div`
  color: #8bacd9;
  font-family: "Outfit", sans-serif;
  font-weight: 300;
  font-size: 18px;
  line-height: 26px;
  margin-bottom: 1.5rem;
`;

const Money = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1.5rem;
`;

const Price = styled.div`
  color: #00fff8;
  font-family: "Outfit", sans-serif;
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  display: flex;
  align-items: center;
`;

const Time = styled.div`
  color: #8bacd9;
  font-family: "Outfit", sans-serif;
  font-weight: normal;
  font-size: 16px;
  line-height: 20px;

  display: flex;
  align-items: center;
`;

const Line = styled.div`
  width: 100%;
  height: 1px;
  background: #2e405a;
  margin-bottom: 1rem;
`;

const Artist = styled.div`
  color: #ffffff;
  font-family: "Outfit", sans-serif;
  font-weight: normal;
  font-size: 16px;
  line-height: 20px;

  display: flex;
  align-items: center;

  img {
    width: 2rem;
    height: 2rem;
    border: 1px solid white;
    border-radius: 50%;
    margin-right: 1rem;
  }

  span {
    color: #8bacd9;
    padding-right: 0.2rem;
  }
`;

const ArtistName = styled.div`
  &:hover{
    color: #00FFF8;
    cursor: pointer;
  }
`;

function App() {
  return (
    <>
    <GlobalStyle />
    <Main>
      <Card>
        <Container>
          <Image>
            <HoverImage >
              <Eye />
            </HoverImage>           
          </Image>
          <Title>Equilibrium #3429</Title>
          <Description>
            Our Equilibrium collection promotes balnce and calm.
          </Description>
          <Money>
            <Price>
              <Ethereum style={{ marginRight: "0.2rem" }} />
              0.041 ETH
            </Price>

            <Time>
              <Clock style={{ marginRight: "0.2rem" }} />3 days left
            </Time>
          </Money>
          <Line />
          <Artist>
            <img src={avatar} alt="avatar" />
            <span>Creation of</span>
            <ArtistName>
              Jules Wyvern
            </ArtistName> 
          </Artist>
        </Container>
      </Card>
    </Main>
    </>
  );
}

export default App;
