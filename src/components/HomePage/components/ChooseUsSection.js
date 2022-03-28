import * as React from "react";
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import {Card, Grid} from "@mui/material";

const ChooseCard = ({title, children, isMain}) => (
  <Card sx={{borderRadius: "1rem",margin:"2rem"}}>
    <CardContent sx={{textAlign: "center"}}>
      <Typography sx={{fontSize: isMain ? 30: 18 }} color="text.secondary" gutterBottom>
        {title}
      </Typography>
      {children}
    </CardContent>
  </Card>
);

function ChooseUsSection() {
  return (
    <>
      <Grid container>
        <Grid spacing={4} item xs={12}>
          <ChooseCard title={"Why Choose Us"} isMain>
            <p>
              We offer you a platform to create, invite and
              share events and tours that you would like to attend to with groups of friends and plan with ease
            </p>
          </ChooseCard>
        </Grid>
        <Grid item xs={4}>
          <ChooseCard title={"Unique Destinations"}>
            <p>
              Looking for unique destinations? Then maybe a trip to one of the areas you've not been to before
            </p>
          </ChooseCard>
        </Grid>
        <Grid item xs={4}>
          <ChooseCard title={"Worth of Money"}>
            <p> Plan an event with a group of friends share the cost and plan effeciently</p>
          </ChooseCard>
        </Grid>
        <Grid item xs={4}>
          <ChooseCard title={"Make new friends"}>
            <p> Invite people to the events you create and get to make new friends</p>
          </ChooseCard>
        </Grid>
      </Grid>
    </>
  )
}


export default ChooseUsSection
