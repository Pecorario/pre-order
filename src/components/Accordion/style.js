import styled from 'styled-components';
import { motion } from 'framer-motion';
import DropDownMenu from '../DropDownMenu';

export const Wrapper = styled.div`
  width: ${props => props.width};
  border: 1px solid ${({ theme }) => theme.colors.darkWhite};
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  position: relative;
  /* padding: 20px; */
`;

export const TitleWrapper = styled.div`
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* padding-bottom: ${({ open }) => (open ? 10 : 20)}px; */
`;

export const IconButton = styled(motion.div)`
  svg {
    width: 12px;
    height: 12px;
  }
`;

export const Title = styled.p`
  color: ${({ theme }) => theme.colors.mainText};
  font-weight: 600;
  font-size: 1rem;
`;

export const WrapperContent = styled(motion.div)`
  display: flex;
  flex-direction: column;

  padding: 20px;
  padding-top: 0;
`;

export const WrapperIconDropDownContent = styled.div`
  position: absolute;

  display: flex;
  justify-content: center;
  align-items: center;

  top: 12px;
  right: 60px;

  @media (max-width: 480px) {
    top: 14px;
    right: 50px;
  }
`;

export const IconContent = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Icon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 2.7rem;
  height: 2.7rem;
  border-radius: 50%;
  cursor: pointer;

  :hover {
    background-color: ${({ theme }) => theme.colors.lightGray};
  }
`;

export const StyledDropDown = styled(DropDownMenu)`
  position: absolute;
  top: calc(50% + 25px);
  right: calc(50% - 50px);

  @media (max-width: 800px) {
    right: calc(50% - 48px);
  }

  @media (max-width: 560px) {
    right: calc(50% - 45px);
  }

  @media (max-width: 480px) {
    right: calc(50% - 44px);
  }
`;
