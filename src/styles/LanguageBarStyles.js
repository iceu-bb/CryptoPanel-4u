import styled from 'styled-components';

export const Wrapper = styled.div`
  position: absolute;
  top: 110px;
  right: 0;
  display: flex;
  will-change: transform;
  transition: transform 250ms cubic-bezier(1, -0.25, 1, 0.96);

  transform: ${({ open }) =>
    open ? 'translate3d(0, 0, 0)' : 'translate3d(220px, 0, 0)'};
  @media (max-width: 350px) {
    transform: ${({ open }) =>
      open ? 'translate3d(0, 0, 0)' : 'translate3d(180px, 0, 0)'};
  }
`;

export const Bar = styled.button`
  font-size: 1.6rem;
  width: ${({ open }) => (open ? '0' : '15px')};
  height: 45px;
  border: 1px solid purple;
  border-right: none;
  border-top-left-radius: 6px;
  border-bottom-left-radius: 6px;
  background-color: rgba(129, 9, 176, 0.9);
  cursor: ${({ open }) => !open && 'pointer'};
  box-shadow: none;
  transition: width 250ms cubic-bezier(1, -0.25, 1, 0.96);

  &:hover {
    width: ${({ open }) => !open && '17px'};
  }

  &:active {
    box-shadow: none;
  }
`;

export const Panel = styled.div`
  background-color: rgba(129, 9, 176, 0.9);
  width: 220px;
  max-height: 45px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid purple;
  border-right: none;
  will-change: opacity;
  transition: opacity 250ms cubic-bezier(1, -0.25, 1, 0.96);
  opacity: ${({ open }) => (open ? '1' : '0')};

  @media (max-width: 350px) {
    width: 180px;
  }
`;
