import styled from 'styled-components';

import { colors } from '../../theme/colors';

export const HomePage = styled.div`
    min-height: 100vh;
    background-color: ${colors.flowerPrimary};
    padding: 5px;
    .home-title {
        color: ${colors.white};
    }
    .norow-title {
        color: ${colors.white};
        margin: 30px;
    }
    .home-grid-button {
        text-align: center;
        margin-top: 10px;
    }
    .gallery {
        display: flex;
        margin-top: 10px;
    }
`;
