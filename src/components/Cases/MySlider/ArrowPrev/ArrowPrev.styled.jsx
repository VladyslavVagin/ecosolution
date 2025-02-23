import styled from "styled-components";

export const ArrowStyled = styled.div`
  position: absolute;
  top: -92px;
  right: 78px;
  z-index: 20;

  svg {
    fill: transparent;
    stroke: var(--main-dark);
  }

  @media screen and (min-width: 768px) {
    top: -100px;
    right: 90px;
    cursor: pointer;
  }

  @media screen and (min-width: 1280px) {
    top: -214px;
    right: 114px;

    svg {
      width: 84px;
      height: 84px;
      min-width: 84px;
      min-height: 84px;
      transition: stroke var(--hover-effect);
    }

    &:hover {
      svg {
        stroke: var(--accent-color);
      }
    }
  }
`;
