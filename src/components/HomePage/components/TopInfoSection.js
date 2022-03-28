import {Box, Grid} from "@mui/material";
import Button from "@mui/material/Button";
import HikingIcon from "@mui/icons-material/Hiking";
import PoolIcon from "@mui/icons-material/Pool";
import DirectionsCarFilledIcon from "@mui/icons-material/DirectionsCarFilled";
import * as React from "react";
import Typography from "@mui/material/Typography";

function TopInfoSection() {
  return (
    <>
      <Box sx={{width: "100%"}}>
        <Grid container>
          <Grid item xs={6}>
            <Box sx={{width: "100%", margin: "auto",}}>
              <Box sx={{margin: "auto", paddingTop: "5rem", paddingX: "3rem"}}>
                <Typography sx={{fontSize: 35}} color="text.secondary" gutterBottom>
                  Let's discover the world together
                </Typography>
                <Typography sx={{fontSize: 16}} color="text.primary" gutterBottom>
                  Explore Beautiful places as a group and make the best out of
                </Typography>
                <Button variant="contained" sx={{
                  width: 'auto',
                  marginLeft:"1rem",
                  marginTop: '20px',
                  marginBottom: '10px',
                  borderRadius: '10px',
                }}>Explore Now</Button>

                <div className="moreDetails">
                  <div className="more" style={{display: 'flex', marginTop: '10px'}}>
                    <HikingIcon sx={{fontSize: "4rem"}}/>
                    <p id="small" style={{marginTop: '10px'}}>
                      1000+ Hiking
                    </p>
                  </div>
                  <div className="more" style={{display: 'flex', marginTop: '10px'}}>
                    <PoolIcon sx={{fontSize: "4rem"}}/>
                    <p id="small" style={{marginTop: '10px'}}>
                      500+ swimming
                    </p>
                  </div>
                  <div className="more" style={{display: 'flex', marginTop: '10px'}}>
                    <DirectionsCarFilledIcon sx={{fontSize: "4rem"}}/>
                    <p id="small" style={{marginTop: '10px'}}>
                      500+ Road Trips
                    </p>
                  </div>
                </div>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={6}>
            <Box sx={{paddingX: "10rem"}}>
              <img alt={""} id="storyset" style={{width: "100%"}} src={'/assets/test-svg.svg'}/>
            </Box>
          </Grid>

        </Grid>
      </Box>
    </>
  )
}

export default TopInfoSection;
