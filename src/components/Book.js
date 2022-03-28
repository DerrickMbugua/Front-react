import * as React from 'react';
import {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import Box from "@mui/material/Box";
import {Card, Grid, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";

export default function Book() {
  const [book, setBook] = useState({});
  const [characters, setCharacters] = useState([]);
  const [comments, setComments] = useState([]);

  const {id} = useParams();
  useEffect(
    () => {
      fetch(`https://topup-mama.herokuapp.com/api/books/${id}`)
        .then(response => response.json())
        .then(
          (data) => {
            setBook(data)
            //console.log(data)
          }
        )
      fetch(`https://topup-mama.herokuapp.com/api/books/${id}/characters`)
        .then(response => response.json())
        .then(
          (data) => {
            setCharacters(data.data)
            //console.log(data)
          }
        )
      fetch(`https://topup-mama.herokuapp.com/api/books/${id}/comments`)
        .then(response => response.json())
        .then(
          (data) => {
            setComments(data)
            //console.log(data)
          }
        )
    }, []
  )

  return (
    <Box>
      <h1>{book.name}</h1>
      <Grid container justifyContent={'center'}>
        <Grid item xs={6}>
          <Card sx={{margin:"1rem"}}>
            <TableContainer>
              <Table sx={{minWidth: 650}} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell sx={{fontWeight: "bold", fontSize: 20}}>Characters</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {characters.map((character) => (
                    <TableRow
                      key={character.id}
                      sx={{'&:last-child td, &:last-child th': {border: 0}}}
                    >
                      <TableCell>
                        {character.name}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Card>
        </Grid>
        <Grid item xs={6}>
          <Card sx={{margin:"1rem"}}>
            <TableContainer>
              <Table sx={{minWidth: 650}} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell sx={{fontWeight: "bold", fontSize: 20}}>Comments</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {comments.map((comment) => (
                    <TableRow
                      key={comment.id}
                      sx={{'&:last-child td, &:last-child th': {border: 0}}}
                    >
                      <TableCell>
                        {comment.name}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Card>
        </Grid>
      </Grid>
    </Box>
  )
}
