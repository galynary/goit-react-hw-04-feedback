import styled from '@emotion/styled';
/*import { theme } from '../../constants/theme';*/
export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  padding: 10px 22px;
  background-color: #406c5e;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  .Button:hover,
  .Button:focus {
    background-color: #034556;
  }
`;
export const WrapperButton = styled.div`
  margin: 0 auto;
  padding: 10px 0;
  display: flex;
  gap: 30px;
`;
