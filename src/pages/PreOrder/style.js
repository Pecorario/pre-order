import { Checkbox } from '@components/index';
import styled, { css } from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  justify-content: center;

  padding: 3rem;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 1400px;
  height: 100%;

  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const Wrapper = styled.form`
  display: flex;
  flex-direction: column;
  flex: 1;

  overflow: auto;

  gap: 1.5rem;
  height: calc(100% - 3rem);
`;

export const WrapperAccordion = styled.form`
  display: flex;
  flex-direction: column;
  flex: 1;

  overflow: auto;

  gap: 1.5rem;
`;

export const InputWrapper = styled.div`
  margin-top: 10px;
  display: flex;
  width: 100%;
  align-items: center;
  gap: 10px;
`;

export const WrapperCheckbox = styled.div`
  margin-top: 24px;
`;

export const WrapperButton = styled.div`
  margin-top: 24px;
  display: flex;
  align-items: end;
  justify-content: end;

  flex: 1;
  /* height: 100%; */
`;

export const ContainerSamples = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;
