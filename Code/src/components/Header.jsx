// Packages & Frameworks
import styled from "styled-components";

// Style
const HeaderC = styled.article`
  text-align: center;
  padding-top: 115px;
  padding-bottom: 100px;
  position: relative;
  z-index: 2;

  h1 {
    font-size: 2rem;
    margin: 0;
    color: #303756;
    font-weight: bolder;
    padding-bottom: 15px;
  }

  p {
    color: #9fa5b9;
  }
`;

// Component
const Header = () => (
  <HeaderC>
    <h1>Simple, traffic-based pricing</h1>
    <p>Sign-up for our 30-day trial. No credit card required.</p>
  </HeaderC>
);

export default Header;
