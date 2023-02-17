import styled from '@emotion/styled';
import { theme } from '../../constans/theme';

export const Section = styled.section`
    margin-bottom: ${props => props.theme.spacing(25)}px;
  }
  
  .section:last-child {
    margin-bottom: ${props => props.theme.spacing(0)}px;
  }`;

export const title = styled.title`
  font-size: ${props => props.theme.typography.title};
  margin-bottom: ${props => props.theme.spacing(25)}px;
`;
