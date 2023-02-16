import { Box, Grid, TextField } from '@mui/material';

import { CardFormStyled } from './CardForm.styles';

interface ICardForm {
    onSubmit: (e:any)=> void;
}

export const CardForm = (props: ICardForm) => {
    return (
        <CardFormStyled>
            <Box
                id="cardForm"
                className="card-form"
                component="form"
                noValidate
                autoComplete="off"
                onSubmit={props.onSubmit}
            >           
                <Grid container spacing={{ xs: 1, sm: 1, md: 2, xl: 3 }} className="form-grid">
                    <Grid item xs={12} sm={6} md={6} xl={6}>
                        <TextField id="title" label="Title" variant="outlined" />
                    </Grid>
                    <Grid item xs={12} sm={6} md={6} xl={6}>
                        <TextField id="subTitle" label="Subtitle" variant="outlined" />
                    </Grid>
                    <Grid item xs={12} sm={6} md={6} xl={6}>
                        <TextField id="description" label="Description" variant="outlined" className="description-field" />
                    </Grid>
                </Grid>
            </Box>
        </CardFormStyled>
    );
}