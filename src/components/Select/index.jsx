/* eslint-disable no-nested-ternary */
import React, { useState, useEffect, useRef } from 'react';
import { RiArrowDropDownLine } from 'react-icons/ri';
import ReactLoading from 'react-loading';

// Theme
import theme from '@styles/theme';

// Styles
import * as S from './style';

const Select = ({
  height,
  width,
  label,
  fontSize,
  fontSizeLabel,
  error,
  helperText,
  type,
  background,
  hasBorder,
  borderColor,
  endIcon,
  endIconWidth,
  endIconHeight,
  onClick,
  data,
  hasLabel,
  dataName,
  isAnalysisTable,
  isYearsAndPhase,
  isCollectionsResume,
  isNone,
  value,
  onChange,
  isLoading,
  dataKey,
  hasSearch,
  disabled,
}) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState('');
  const [search, setSearch] = useState('');
  const [foundItems, setFoundItems] = useState([]);
  const [isSearching, setIsSearching] = useState(false);

  const spaceTop = height + 25;
  const selectRef = useRef(null);
  const inputRef = useRef();

  const removeAccents = (word) => {
    return word.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  };

  const handleSelectItem = (item) => {
    setSelectedItem(item);
    setModalIsOpen(false);

    onChange(item.id || item.fase ? item.id || item.fase : 0);
  };

  const handleSearch = (e) => {
    setIsSearching(true);
    const valueSearch = e.target.value;

    if (valueSearch.trim() === '') {
      setFoundItems([...data]);
    } else {
      const findItems = data.filter((item) => {
        const itemWithoutAccents = removeAccents(item[dataKey]).toLowerCase();
        const searchWithoutAccents = removeAccents(valueSearch).toLowerCase();

        return itemWithoutAccents.includes(searchWithoutAccents);
      });

      setFoundItems([...findItems]);
      setSelectedItem('');
    }
    setSearch(valueSearch);
  };

  useEffect(() => {
    // if (!hasSearch) {
    let initialValue;

    if (isAnalysisTable && value === 0) {
      initialValue = { id: 0, name: 'TODOS' };
    } else {
      initialValue = data.find(
        (item) => item.id === value || item.fase === value
      );
    }

    setSelectedItem(initialValue);
    // }
  }, [data, value]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (selectRef.current && !selectRef.current.contains(event.target)) {
        setModalIsOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const handleClickArrow = (e) => {
    if (hasSearch) inputRef.current.focus();
    e.stopPropagation();
    setModalIsOpen(!modalIsOpen);
  };

  const handleClickWrapper = () => {
    if (hasSearch) {
      inputRef.current.focus();
      setModalIsOpen(true);
    } else {
      setModalIsOpen(!modalIsOpen);
    }
  };

  useEffect(() => {
    setFoundItems([...data]);
  }, []);

  return (
    <S.Wrapper width={width}>
      {hasLabel && (
        <S.Label fontSizeLabel={fontSizeLabel}>
          {label}{' '}
          {error && (
            <S.Error fontSizeLabel={fontSizeLabel}>*{helperText}</S.Error>
          )}
        </S.Label>
      )}
      <S.SelectWrapper
        background={background}
        height={height}
        fontSize={fontSize}
        hasBorder={hasBorder}
        borderColor={borderColor}
        isCollectionsResume={isCollectionsResume}
        modalIsOpen={modalIsOpen}
        onClick={disabled ? undefined : handleClickWrapper}
        ref={selectRef}
        disabled={disabled}
      >
        {hasSearch ? (
          <S.Input
            value={
              isLoading
                ? 'Carregando'
                : !selectedItem
                ? search
                : selectedItem?.nome ||
                  selectedItem?.name ||
                  selectedItem?.fase ||
                  selectedItem?.ano ||
                  selectedItem?.zone ||
                  'Selecione um item'
            }
            onChange={handleSearch}
            ref={inputRef}
            disabled={disabled}
          />
        ) : (
          <S.ItemSelected disabled={disabled}>
            {isLoading
              ? 'Carregando'
              : selectedItem?.nome ||
                selectedItem?.name ||
                selectedItem?.fase ||
                selectedItem?.ano ||
                selectedItem?.zone ||
                'Selecione um item'}
          </S.ItemSelected>
        )}

        {isLoading ? (
          <S.IconWrapper>
            <ReactLoading type="spin" color="#EB612C" width="20px" />
          </S.IconWrapper>
        ) : (
          <RiArrowDropDownLine
            size="25px"
            onClick={disabled ? undefined : handleClickArrow}
          />
        )}

        {/* {endIcon && ( */}
        {/* <S.EndIconWrapper
          endIconWidth={endIconWidth}
          endIconHeight={endIconHeight}
          type="button"
          onClick={onClick}
        >
          {endIcon}
        </S.EndIconWrapper> */}
        {/* )} */}
      </S.SelectWrapper>

      {modalIsOpen && (
        <S.SelectOptionsBox spaceTop={spaceTop}>
          {isNone && (
            <S.OptionCard
              key={1}
              isActive={selectedItem?.id === 0}
              onClick={() =>
                handleSelectItem({ id: 0, name: 'Selecione um cliente' })
              }
              fontSize={fontSize}
            >
              Selecione um cliente
            </S.OptionCard>
          )}
          {isAnalysisTable && data.length > 0 && (
            <S.OptionCard
              key={1}
              isActive={selectedItem?.id === 0}
              onClick={() => handleSelectItem({ id: 0, name: 'TODOS' })}
              fontSize={fontSize}
            >
              TODOS
            </S.OptionCard>
          )}

          {!isSearching ? (
            data.length > 0 ? (
              data.map((option, index) => {
                const isActive = selectedItem?.id === option?.id;

                return (
                  <S.OptionCard
                    isActive={isActive}
                    onClick={() => handleSelectItem(option)}
                    key={`${option.nome}-${option.id}` || index + 2}
                    fontSize={fontSize}
                  >
                    {option?.nome ||
                      option?.name ||
                      option?.fase ||
                      option?.ano ||
                      option?.zone}
                  </S.OptionCard>
                );
              })
            ) : (
              <S.OptionCard fontSize={fontSize}>
                Nenhum dado encontrado
              </S.OptionCard>
            )
          ) : foundItems.length > 0 ? (
            foundItems.map((option, index) => {
              const isActive = selectedItem?.id === option?.id;

              return (
                <S.OptionCard
                  isActive={isActive}
                  onClick={() => handleSelectItem(option)}
                  key={`${option.nome}-${option.id}` || index + 2}
                  fontSize={fontSize}
                >
                  {option?.nome ||
                    option?.name ||
                    option?.fase ||
                    option?.ano ||
                    option?.zone}
                </S.OptionCard>
              );
            })
          ) : (
            <S.OptionCard fontSize={fontSize}>
              Nenhum dado encontrado
            </S.OptionCard>
          )}
        </S.SelectOptionsBox>
      )}

      {/* {isNone && (
            <option key={1} value={0}>
              Selecione um cliente
            </option>
          )}
          {isAnalysisTable && (
            <option key={1} value={0}>
              TODOS
            </option>
          )}
          {data.map((item, idx) => {
            return (
              <option
                key={`${item.nome}-${item.id}` || idx + 2}
                value={item.id || item.fase}
              >
                {item.nome || item.name || item.fase || item.ano || item.zone}
              </option>
            );
          })} */}
    </S.Wrapper>
  );
};

Select.defaultProps = {
  height: '3.5rem',
  // width: '22.5rem',
  label: 'Senha',
  fontSize: '1rem',
  fontSizeLabel: '1rem',
  error: false,
  helperText: '',
  type: 'text',
  background: theme.colors.white,
  hasBorder: true,
  borderColor: '#d9d9d9',
  endIcon: false,
  endIconWidth: '16px',
  endIconHeight: '16px',
  hasLabel: true,
  isCollectionsResume: false,
  isNone: false,
  isLoading: false,
  hasSearch: false,
  onClick: () => {},
  disabled: false,
};

export default Select;
