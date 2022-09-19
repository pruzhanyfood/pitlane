
import SimpleImageSlider from "react-simple-image-slider";
// material
import { Grid, Button, Container, Stack, Typography } from '@mui/material';
// components
import Page from '../components/Page';
import Iconify from '../components/Iconify';
import { BlogPostCard, BlogPostsSort, BlogPostsSearch } from '../sections/@menu/blog';
// mock

// ----------------------------------------------------------------------

const images = [
  { url: `${process.env.PUBLIC_URL}/static/slider/01.png` },
  { url: `${process.env.PUBLIC_URL}/static/slider/02.png` },
  { url: `${process.env.PUBLIC_URL}/static/slider/03.png` },
];


// ----------------------------------------------------------------------

export default function Slides() {
  return (
    <Page title="PitLane: Мы рекомендуем" sx={{
      bgcolor: 'black',
      display: 'flex',
      justifyContent: 'center',
    }}>
      <SimpleImageSlider
        width={"70vh"}
        height={"100vh"}
        // bgColor={"black"}
        images={images}
        showBullets={false}
        showNavs={false}
        // useGPURender={false}
        autoPlay
        autoPlayDelay={45}
        slideDuration={2.0}
      />
    </Page>
  );
}
