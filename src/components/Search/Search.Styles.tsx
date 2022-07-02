import styled from 'styled-components';

const StyledSearch = styled.div`
  width: 330px;
`;

const StyledInput = styled.input`
  width: 100%;
  height: 40px;
  background: ${({ theme }) => theme.bgColors.group3};
  float: left;
  padding: 8px;
  border: none;
  border-radius: 4px;
  font-size: 14px;
  font-weight: 600;
  outline: 0;
  border-radius: 50px;
  border: 2px solid transparent;

  &:focus {
    color: #444;
    border: 2px solid #419fd9;
    background: ${({ theme }) => theme.bgColors.group6};
  }
`;

export { StyledSearch, StyledInput };
