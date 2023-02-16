import AddIcon from '@mui/icons-material/Add';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import React, { useState } from 'react';
import { useSnapshot } from 'valtio';

import { GalleryState } from '../../states/Gallery';
import { CardForm } from '../Forms/CardForm';
import { ButtonStyled } from './Modals.styles';

interface IAddCardModal {
}

export const AddCardModal = (props: IAddCardModal) => {
    const gallerySnap = useSnapshot(GalleryState);
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const onSubmit = (e: any) => {
        e.preventDefault();
        gallerySnap.addCard(
            e.target.title?.value,
            e.target.subTitle?.value,
            e.target.description?.value,
        );
        handleClose();
    }
    return (
        <div>
            <ButtonStyled data-testid="add-card" variant="contained" onClick={handleOpen} endIcon={<AddIcon />}>
                Add new card
            </ButtonStyled>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <DialogTitle>Add new Card</DialogTitle>
                <DialogContent>
                    <CardForm onSubmit={onSubmit} />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button data-testid="submit-card" form="cardForm" type="submit">Create</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}