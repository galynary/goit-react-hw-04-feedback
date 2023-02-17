import styled from '@emotion/styled';
/*import { theme } from '../../constans/theme';*/

export const Button = styled.button` 
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${props => props.theme.typography.text};
  width: 150px;
  height: 40px;
  background-color: ${props => props.theme.colors.blue};
  color:${props => props.theme.colors.white};
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
.Button:hover,
.Button:focus {
  background-color:${props => props.theme.colors.green}`;
