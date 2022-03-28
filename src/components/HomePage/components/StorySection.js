import Button from "@mui/material/Button";
import * as React from "react";
import {Box, Grid} from "@mui/material";

function StorySection() {
  return (
    <>
      <Box sx={{width: "100%"}}>
        <Grid container>
          <Grid item xs={6}>
            <Box sx={{width: "100%", margin: "auto",}}>
              <Box sx={{margin: "auto", paddingTop: "5rem", paddingX: "3rem"}}>

                <h4 id='center'>
                  Find Your Perfect Destination
                </h4>
                <p id='center'>
                  Find your next destination from the list of destinations in the explore page
                </p>
                <Button size="small"
                        variant="contained"
                        style={{
                          marginLeft: '40%',
                          marginRight: '20%',
                          marginTop: '20px',
                          marginBottom: '10px',
                          borderRadius: '10px',
                          backgroundColor: 'aqua',
                          color: 'black'
                        }}>Explore</Button>

              </Box>
            </Box>
          </Grid>
          <Grid item xs={6}>
            <Box sx={{paddingX: "10rem"}}>
              <img alt={""} id="storyset" style={{width: "100%"}} src={'/assets/travellers.png'}/>
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Box sx={{width: "100%"}}>
        <Grid container>
          <Grid item xs={6}>
            <Box sx={{paddingX: "10rem"}}>
              <img alt={""} id="storyset" style={{width: "100%"}} src={'/assets/add.png'}/>
            </Box>
          </Grid>
          <Grid item xs={6}>
            <Box sx={{width: "100%", margin: "auto",}}>
              <Box sx={{margin: "auto", paddingTop: "5rem", paddingX: "3rem"}}>
                <div>
                  <h4 id='center'>
                    Create And Add Friends
                  </h4>
                  <p id='center'>
                    Share your link across all platform and invite people to tour together.
                  </p>
                  <Button
                    size="small"
                    variant="contained"
                    style={{
                      marginLeft: '40%',
                      marginRight: '20%',
                      marginTop: '20px',
                      marginBottom: '10px',
                      borderRadius: '10px',
                      backgroundColor: 'InfoBackground',
                      color: 'black'
                    }}>
                    Explore
                  </Button>

                </div>

              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Box sx={{width: "100%"}}>
        <Grid container>
          <Grid item xs={6}>
            <Box sx={{width: "100%", margin: "auto",}}>
              <Box sx={{margin: "auto", paddingTop: "5rem", paddingX: "3rem"}}>
                <div>
                  <h4 id='center'>
                    Plan for the event
                  </h4>
                  <p id='center'>
                    Plan and manage the event easily, by getting reports on the people attending, the money raised, in
                    order
                    to plan effeciently
                  </p>
                  <Button size="small" variant="contained" style={{
                    marginLeft: '40%',
                    marginRight: '20%',
                    marginTop: '20px',
                    marginBottom: '10px',
                    borderRadius: '10px',
                    backgroundColor: 'InfoBackground',
                    color: 'black'
                  }}>Explore </Button>
                </div>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={6}>
            <Box sx={{paddingX: "10rem"}}>
              <img alt={""} id="storyset" style={{width: "100%"}} src={'/assets/Research.png'}/>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  )
}

export default StorySection
