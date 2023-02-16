import { Box, Button } from '@mui/material';
import styled from 'styled-components';

import { colors } from '../../theme/colors';

export const ModalBox = styled(Box)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: ${colors.white};
  width: 50%;
  border: 2px solid ${colors.black};
  padding: 4px;
  .custom-modal-title {
    // color: ${colors.white};
    text-align: center;
  }
`;

export const ButtonStyled = styled(Button)`
    background-color: ${colors.secondary} !important;
    color: ${colors.white};
    padding: 10px;
    text-align: center;
    -webkit-text-decoration: none;
    text-decoration: none;
    display: inline-block;
    margin: 0 10px 0 10px;
    cursor: pointer;
    border-radius: 30px;
    font-weight: bold;
`;
