import styled from 'styled-components';
import { Button } from '@mui/material';

export const Container = styled(Button)<{ component: 'label' }>`
  &.css-1e6y48t-MuiButtonBase-root-MuiButton-root {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #24222a;
    padding: 20px;
    border-radius: 10px;
    margin: 20px;
    color: #fff;
    width: 100%;
    box-sizing: border-box;
    
    &:hover {
      background-color: #302E38;
    }
  }
  
  &:hover {
    cursor: pointer;  
  }
  
  .title {
    font-size: 16px;
    margin: 20px;
  }
  
  .desc {
    font-size: 14px;
    margin: 20px;
  }
`;
