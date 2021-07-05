import styled, { css } from 'styled-components';
import img from './2.jpg';
const subColor = 'grey';
const mainColor = 'black';

const shrinkLabelStyles = css`
  top: -14px;
  font-size: 12px;
  color: ${mainColor};

`;

export const GroupContainer = styled.div`
  position: relative;
  background-image: url(${img});
  margin: 45px 0;
  input[type='password'] {
    letter-spacing: 0.3em;
  }
  input[type='password'] {
    letter-spacing: 0.3em;
  }
  input[type='text1'] {
    padding: 45px 16px;
  }
`;

export const FormInputContainer = styled.input`
  background: none;
  background-color: white;
  background-image: url('2.jpg');
  color: ${subColor};
  font-size: 18px;
  padding: 10px 10px 10px 5px;
  display: block;
  width: 100%;
  border: none;
  border-radius: 0;
  border-bottom: 1px solid ${subColor};
  margin: 25px 0;
  &:focus {
    outline: none;
  }
  &:focus ~ label {
    ${shrinkLabelStyles}
  }
`;

export const FormInputLabel = styled.label`
  color: ${subColor};
  font-size: 16px;
  font-weight: normal;
  position: absolute;
  width:100%;
  text-align: right;
  pointer-events: none;
  left: 5px;
  top: 10px;
  transition: 300ms ease all;
  &.shrink {
    ${shrinkLabelStyles}
  }
`;