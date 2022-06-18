import styled from 'styled-components';

export const DocumentItem = styled.div`
  margin: 15px 0;
  
  .document-title {
    color: #ffffff;
    font-weight: bold;
    margin-bottom: 10px;
  }
  
  .sheets {
    display: flex;
    flex-direction: column;
    
    .sheet-item {
      margin: 2px 0;
      
      a {
        color: hsl(333, 40%, 80%);
      }
    }
  }
`;

export const DocumentListContainer = styled.div`
  width: 100%;
  margin-top: 25px;
`;
