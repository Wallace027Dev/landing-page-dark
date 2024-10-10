import styled from 'styled-components';

// Define a interface para as propriedades do HeaderPar
interface HeaderParProps {
  isScrolled: boolean; // Adiciona a propriedade isScrolled do tipo boolean
}

export const HeaderPar = styled.header<HeaderParProps>`
  padding: 24px 72px;
  position: fixed; /* Fixa o cabeçalho no topo */
  top: 0;
  left: 0;
  right: 0;
  background: ${({ isScrolled, theme }) => (isScrolled ? theme.colors.blues.dark : 'transparent')};
  transition: background 0.5s ease 0.2s;
  z-index: 1000; /* Mantém o cabeçalho acima de outros elementos */
`;

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 650px) {
    flex-direction: column;
    justify-content: center;

    img {
      width: 230px;
      height: auto;
    }
  }
`;

export const Nav = styled.nav `
  @media (max-width: 1024px) {
    display: none;
  }
`;

export const LinkList = styled.ul `
  list-style: none;
  display: flex;
  align-items: center;
  gap: 20px;

  a {
    color: ${({ theme }) => theme.colors.secondary};
    text-decoration: none;
    font-weight: bold;
  }
`;

export const LinksContainer = styled.div `
  i {
    margin-right: 15px;
    font-size: 1.25rem;
  }

  a {
    display: inline-block;
    background: ${({ theme }) => theme.colors.background};
    border-color: ${({ theme }) => theme.colors.button};
    border-radius: 3px;
    color: #FFF;
    font-weight: 500;
    text-decoration: none;
    padding: 8.5px 10px;

    &:hover {
      background: ${({ theme }) => theme.colors.buttonHover};
      transition: .4s;
    }
  }
`;
