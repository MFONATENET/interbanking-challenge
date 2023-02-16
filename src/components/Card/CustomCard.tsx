import { CardContent, Typography } from '@mui/material';
import { ICard } from '../../interfaces/interfaces';

import { CustomCardStyled } from './CustomCard.styles';

export const CustomCard = (props: ICard) => {
    return (
        <CustomCardStyled>
            <CardContent data-testid={`card${props.id}`}>
                <Typography variant="h5" component="div">
                    {props.title}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    {props.subTitle}
                </Typography>
                <Typography variant="body2">
                    {props.description}
                </Typography>
            </CardContent>
        </CustomCardStyled>
    );
}