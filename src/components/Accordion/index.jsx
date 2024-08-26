import React, { useState, useRef, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import { AiFillPrinter } from 'react-icons/ai';

import Tooltip from '@mui/material/Tooltip';

// Assets
import { ReactComponent as ArrowIcon } from '@assets/svg/icons/accordion_arrow.svg';
import { ReactComponent as DeleteIcon } from '@assets/svg/icons/trash.svg';
import { ReactComponent as MoreInfoIcon } from '@assets/svg/icons/more_info.svg';

// Style
import {
  Wrapper,
  IconButton,
  Title,
  TitleWrapper,
  WrapperContent,
  StyledDropDown,
  WrapperIconDropDownContent,
  IconContent,
  Icon,
} from './style';

const Accordion = ({
  idx,
  title,
  width,
  maxHeight,
  keyAnimator,
  children,
  onClick,
  heading,
  startOpen,
  hasOptions,
  handleOpenDelete,
  isEditMode,
  handlePrint,
  hasPrintOption,
  openControl,
  overflow,
  ...props
}) => {
  const [open, setOpen] = useState(startOpen);
  const [openDropDown, setOpenDropDown] = useState(false);
  const refPartTopCard = useRef(null);
  const refPartBottomCard = useRef(null);
  const [heightPartOfTopCard, setheightPartOfTopCard] = useState(0);
  const [heightPartOfBottomCard, setheightPartOfBottomCard] = useState(0);

  const handleOpen = () => {
    if (openControl.click) setOpen((prevState) => !prevState);
    onClick();
  };

  const DropDownMenuOption = hasOptions && [
    {
      icon: <DeleteIcon />,
      label: 'Deletar',
      onClick: handleOpenDelete(idx),
    },
    hasPrintOption && {
      icon: <AiFillPrinter />,
      label: 'Imprimir',
      onClick: handlePrint(idx),
    },
  ];

  const handleDropDown = () => {
    setOpenDropDown((prevState) => !prevState);
  };

  const getNewSizeOfCard = () => {
    if (refPartTopCard.current) {
      setheightPartOfTopCard(refPartTopCard.current.clientHeight);
    }

    if (refPartBottomCard.current) {
      setheightPartOfBottomCard(refPartBottomCard.current.clientHeight);
    }
  };

  useEffect(() => {
    getNewSizeOfCard();
  }, []);

  useEffect(() => {
    window.addEventListener('resize', getNewSizeOfCard);
  }, []);

  useEffect(() => {
    if (isEditMode) {
      setOpen(true);
    }
  }, [isEditMode]);

  return (
    <Wrapper width={width}>
      <TitleWrapper open={open} onClick={handleOpen}>
        <Title>{title}</Title>
        <AnimatePresence key={`${keyAnimator}1`}>
          <IconButton
            initial="collapsed"
            animate={open ? 'open' : 'collapsed'}
            exit="collapsed"
            variants={{
              open: { rotate: 180 },
              collapsed: { rotate: 0 },
            }}
            transition={{ duration: 0.2 }}
          >
            <ArrowIcon />
          </IconButton>
        </AnimatePresence>
      </TitleWrapper>
      {heading}
      <AnimatePresence key={keyAnimator}>
        {((openControl.click && open) || openControl.value) && (
          <WrapperContent
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: {
                opacity: 1,
                height: 'auto',
                maxHeight,
                overflow,
              },
              collapsed: { opacity: 0, height: 0 },
            }}
            transition={{ duration: 0.2 }}
            {...props}
          >
            {children}
          </WrapperContent>
        )}
      </AnimatePresence>

      {hasOptions && (
        <WrapperIconDropDownContent
          heightPartOfTopCard={heightPartOfTopCard}
          heightPartOfBottomCard={heightPartOfBottomCard}
        >
          <IconContent onClick={handleDropDown}>
            <Tooltip title="Ações" placement="bottom">
              <Icon>
                <MoreInfoIcon />
              </Icon>
            </Tooltip>
          </IconContent>
          <AnimatePresence>
            {openDropDown && (
              <StyledDropDown
                handleClose={handleDropDown}
                options={DropDownMenuOption}
              />
            )}
          </AnimatePresence>
        </WrapperIconDropDownContent>
      )}
    </Wrapper>
  );
};

Accordion.defaultProps = {
  width: '600px',
  maxHeight: '',
  overflow: '',
  title: 'Sem título',
  keyAnimator: 'teste',
  startOpen: false,
  hasOptions: false,
  hasPrintOption: false,
  openControl: { click: true, value: false },
  onClick: () => {},
  handleOpenDelete: () => {},
  handlePrint: () => {},
};

export default Accordion;
