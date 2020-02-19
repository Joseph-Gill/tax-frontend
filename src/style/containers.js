import styled from 'styled-components/macro'


export const AppContainer = styled.div`
  display: flex;
  align-items: center;
  height: 100vh;
  width: 100vw;
  position: relative;
  overflow: hidden;
`;

export const LoaderContainer = styled.div`
  position: absolute;
  z-index: 999;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0,0,0,0.43);
  border-radius: 8px;
`;

export const DashboardContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  align-items: flex-end;
`;

export const ColumnsContainer = styled.div`
  width: 89%;
  display: flex;
  justify-content: flex-start;
  overflow-x: auto;
  margin-left: 200px;
  padding: 10px;
  margin-bottom: 7px;
`;
