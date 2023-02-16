import { Box } from '@mui/material';
import styled from 'styled-components';
import { colors } from '../../theme/colors';

export const CustomSearchStyled = styled(Box)`
    background-color: ${colors.white};
    margin: 10px 0 10px 0;
    border-radius: 10px;
    .search-icon {
        color: ${colors.primary}
    }
    .search-input {
        width: -webkit-fill-available;
        fieldset {
            border: none;
        }
    }
    div:after {
        border-bottom: 2px solid ${colors.primary};
    }
`;