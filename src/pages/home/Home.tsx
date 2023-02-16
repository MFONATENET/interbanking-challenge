import { Box, Grid, Typography } from '@mui/material';
import { useSnapshot } from 'valtio';

import { CustomCard } from '../../components/Card/CustomCard';
import { AddCardModal } from '../../components/Modals/AddCardModal';
import { CustomSearch } from '../../components/Search/CustomSearch';
import { GalleryState, GetFilterGalleryHook } from '../../states/Gallery';
import { HomePage } from './Home.styles';


export const Home = () => {
  const gallerySnap = useSnapshot(GalleryState);
  const filtered = GetFilterGalleryHook();
  return (
    <HomePage>
      <Typography variant="h2" component="div" className="home-title">
        Interbanking Challenge
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={8} xl={9}>
          <CustomSearch></CustomSearch>
        </Grid>
        <Grid item xs={12} sm={6} md={4} xl={3} className="home-grid-button">
          <AddCardModal />
        </Grid>
      </Grid>
      <Box className="gallery">
        <Grid container spacing={{ xs: 2, md: 3, xl: 4 }} columns={{ xs: 4, sm: 8, md: 12, xl:16 }}>
          {filtered.map((value, index) => (
            <Grid item xs={4} sm={4} md={4} xl={4} key={index}>
              <CustomCard {...value} ></CustomCard>
            </Grid>
          ))}
          {filtered.length === 0 && 
            <Typography variant="h5" component="div" className="norow-title">
              { gallerySnap.searchTerm ? 
                  `No cards were found for the word '${gallerySnap.searchTerm}'.` :
                  'No cards found, please create one.'
              }
            </Typography>
          }
        </Grid>
      </Box>
    </HomePage>
  );
}