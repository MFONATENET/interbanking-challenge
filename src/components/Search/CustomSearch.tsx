import CancelRoundedIcon from '@mui/icons-material/CancelRounded';
import SearchIcon from '@mui/icons-material/Search';
import { IconButton, InputAdornment, TextField } from '@mui/material';
import { useCallback } from 'react';
import { useSnapshot } from 'valtio';

import { GalleryState } from '../../states/Gallery';
import { CustomSearchStyled } from './CustomSearch.styles';

interface ISearch {
}

export const CustomSearch = (props: ISearch) => {
    const gallerySnap = useSnapshot(GalleryState);
    const handleOnChangeSearch = useCallback((e: any) => {
        gallerySnap.setTerm(e.target.value);
    }, [gallerySnap]);
    return (
        <CustomSearchStyled>
            <TextField
                type="text"
                className="search-input"
                placeholder="Type your search here"
                onChange={handleOnChangeSearch}
                value={gallerySnap.searchTerm}
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <IconButton
                                aria-label="toggle password visibility"
                                edge="end"
                            >
                                <SearchIcon className="search-icon"></SearchIcon>
                            </IconButton>
                        </InputAdornment>
                    ),
                    endAdornment: gallerySnap.searchTerm && (
                        <IconButton
                            aria-label="toggle password visibility"
                            onClick={() => gallerySnap.setTerm("")}
                        >
                            <CancelRoundedIcon />
                        </IconButton>
                    ),
                }}
            />
        </CustomSearchStyled>
    );
}