import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import bdo from '../images/bdo.jpg'
import bpi from '../images/bpi.png'
import Paypal from '../images/Paypal.png'
import westernunion from '../images/westernunion.png'

export default function Review() {
  return (
    <React.Fragment>
      <Typography variant="h4" marginTop={2}>
        Payment Partners
      </Typography>
      <Typography variant="h7" gutterBottom>
        Please pay exact amount only
      </Typography>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={6}>
        <Card sx={{ maxWidth: 150, marginLeft: 2, marginTop: 2  }}>
      <CardActionArea>
      <CardMedia
         image={require('../images/bdo.jpg')} // require image
         title="Contemplative Reptile"
         style={styles.mediaBank} // specify styles
            />
        <CardContent>
          <Typography gutterBottom variant="h7" component="div">
          Katrina U. Howe
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Account #: 004330385417
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </Grid>
    <Grid item xs={6}>
        <Card sx={{ maxWidth: 150, marginTop: 2    }}>
      <CardActionArea>
      <CardMedia
         image={require('../images/bpi.png')} // require image
         title="Contemplative Reptile"
         style={styles.mediaBank} // specify styles
            />
        <CardContent>
          <Typography gutterBottom variant="h7" component="div">
          Katrina Medina Umandap
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Account #: 9789604573
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </Grid>
    <Grid item xs={6}>
        <Card sx={{ maxWidth: 150, marginTop: 2,  marginLeft: 2 }}>
      <CardActionArea>
      <CardMedia
         image={require('../images/Paypal.png')} // require image
         title="Contemplative Reptile"
         style={styles.mediaPaypal} // specify styles
            />
        <CardContent>
          <Typography gutterBottom variant="h7" component="div">
          Two Monkey Tours
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Scan the Paypal QR
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </Grid>
    <Grid item xs={6}>
        <Card sx={{ maxWidth: 150, marginTop: 2, }}>
      <CardActionArea>
      <CardMedia
         image={require('../images/westernunion.png')} // require image
         title="Contemplative Reptile"
         style={styles.mediaPaypal} // specify styles
            />
        <CardContent>
          <Typography gutterBottom variant="h7" component="div">
          For details, email me at
          </Typography>
          <Typography variant='body2' color="text.secondary">
          kach.howe@two monkeystravel.com
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </Grid>
      </Grid>
      
    </React.Fragment>
  );
}

const styles = {
  mediaBank: {
    height: 0,
    paddingTop: '56.25%', // 16:9,
    marginTop:'30',
  },
  mediaPaypal: {
    height: 150,
    paddingTop: '56.25%', // 16:9,
    marginTop:'30',
  }
};
