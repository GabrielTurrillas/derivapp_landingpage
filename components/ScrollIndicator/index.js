import styled from 'styled-components';

const ScrollIndicator = () => {
  return (
    <Contaienr>
      <Center />
    </Contaienr>
  );
}

export default ScrollIndicator;

const Contaienr = styled.div`
  display:flex;
  padding:2px 0;
  justify-content:center;
  height:35px;
  width:23px;
  border:4px solid #757575;
  background:transparent;
  border-radius:50px;
`
const Center = styled.div`
  height:13px;
  width:9px;
  background:#757575;
  border-radius:50px;
`