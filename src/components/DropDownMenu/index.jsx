import React from 'react';

// Style
import { Wrapper, Line, Label, Icon, Background } from './style';

const DropDownMenu = ({ options, handleClose, ...rest }) => {
  const handleClickAndClose = (func) => () => {
    func();
    handleClose();
  };

  return (
    <>
      <Background onClick={handleClose} />
      <Wrapper
        key={`"dropDownMenu"${options[0].label}+`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        {...rest}
      >
        {options.map((item) => {
          return (
            <Line key={item.label} onClick={handleClickAndClose(item.onClick)}>
              {item.icon && <Icon>{item.icon}</Icon>}
              <Label>{item.label}</Label>
            </Line>
          );
        })}
      </Wrapper>
    </>
  );
};

DropDownMenu.defaultProps = {
  options: [
    {
      icon: '',
      label: 'Item',
      onClick: () => {},
    },
  ],
};

export default DropDownMenu;
