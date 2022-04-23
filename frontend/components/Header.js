import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import Nav from './Nav';

const LogoStyle = styled.h1`
  background-color: var(--red, red);
  font-size: 4rem;
  margin-left: 2rem;
  position: relative;
  transform: skew(-7deg);
  z-index: 2;
  a {
    color: var(--white, white);
    text-decoration: none;
    text-transform: uppercase;
    padding: 0.5rem 1rem;
  }
`;

const HeaderStyle = styled.header`
  .bar {
    border-bottom: 10px solid var(--black);
    display: grid;
    grid-template-columns: auto 1fr;
    justify-content: space-between;
    align-items: center;
  }
  .sub-bar {
    display: grid;
    grid-template-columns: 1fr auto;
    border-bottom: 1px solid var(--black, black);
  }
`;

function Header() {
  return (
    <HeaderStyle>
      <div className="bar">
        <LogoStyle>
          <Link href="/">Sick bits</Link>
        </LogoStyle>
      </div>
      <div className="sub-bar">
        <Nav />
      </div>
    </HeaderStyle>
  );
}

export default Header;
