import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: calc(100vh - 132px);
  margin-top: 60px;
  
  iframe {
    width: 100%;
    height: 100%;
    border: none;
  }
`;
