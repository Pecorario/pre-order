import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Background = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  z-index: 4;
`;

export const Wrapper = styled(motion.div)`
  width: fit-content;
  border-radius: 12px;
  border: 1px solid ${({ theme }) => theme.colors.translucentText};
  background: white;
  z-index: 10;

  &::before {
    content: '';
    width: 20px;
    height: 20px;
    background: white;
    border-left: 1px solid ${({ theme }) => theme.colors.translucentText};
    border-top: 1px solid ${({ theme }) => theme.colors.translucentText};
    display: block;
    transform: rotate(45deg);
    position: absolute;
    top: -11px;
    right: 2.5rem;
  }
`;

export const Line = styled.div`
  display: flex;
  padding: 0px 20px;
  align-items: center;
  opacity: 0.7;
  transition: all 0.2s ease-in-out;
  height: 40px;

  :not(:last-child) {
    border-bottom: 1px solid ${({ theme }) => theme.colors.translucentText};
  }

  cursor: pointer;

  :hover {
    opacity: 1;
  }
`;

export const Label = styled.p`
  color: ${({ theme }) => theme.colors.mainText};
  font-size: 0.8rem;
`;

export const Icon = styled.div`
  display: flex;
  align-items: center;
  margin-right: 10px;

  svg {
    width: 14.8px;
    height: 14.8px;
  }
`;
