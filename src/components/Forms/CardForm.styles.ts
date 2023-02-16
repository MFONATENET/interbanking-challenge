import { Box } from '@mui/material';
import styled from 'styled-components';

import { colors } from '../../theme/colors';

export const CardFormStyled = styled(Box)`
  background-color: ${colors.white};
  margin-top: 20px;
  .form-grid, .card-form {
    display: flex;
  }
  .form-grid {
    text-align: center;
  }
`;

