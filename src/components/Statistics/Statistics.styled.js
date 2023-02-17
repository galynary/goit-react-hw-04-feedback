import styled from '@emotion/styled';
/*import { theme } from '../../constans/theme';*/
export const Item = styled.p`
  color: ${props => props.theme.colors.black};
  padding: ${props => props.theme.spacing(25)}px;
  padding-left: 0;
  font-size: ${props => props.theme.typography.title};
`;
