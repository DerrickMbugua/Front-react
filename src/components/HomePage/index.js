import '../../home.css';
import * as React from 'react';
import {useEffect, useState} from 'react';
import {
  Button,
  Card,
  Chip,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow
} from "@mui/material";
import {Book} from "@mui/icons-material";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import VisibilityIcon from '@mui/icons-material/Visibility';
import {Link} from "react-router-dom";

export default function HomePage() {
  const [books, setBooks] = useState([]);
  useEffect(
    () => {
      fetch('https://topup-mama.herokuapp.com/api/books')
        .then(response => response.json())
        .then(
          (data) => {
            setBooks(data)
            console.log(data)
          }
        )
    }, [])
  return (
    <Box textAlign={'center'}>
      <Typography fontSize={60} fontWeight={'lighter'}>Books</Typography>
      <Grid container justifyContent={'center'}>
        <Grid item xs={10} md={8}>
          <Card>
            <TableContainer>
              <Table sx={{minWidth: 650}} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell>No. of Comments</TableCell>
                    <TableCell>Authors</TableCell>
                    <TableCell/>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {books.map((book) => (
                    <TableRow
                      key={book.name}
                      sx={{'&:last-child td, &:last-child th': {border: 0}}}
                    >
                      <TableCell>
                        <Book/> {book.name}
                      </TableCell>
                      <TableCell>
                        {book.comments_count}
                      </TableCell>
                      <TableCell>
                        {book.authors.map(
                          ({name}) => {
                            return <Chip label={name} variant={'outlined'}/>
                          }
                        )}
                      </TableCell>
                      <TableCell>
                        <Link to={`/${book.id}`}>
                          <Button variant={'outlined'} startIcon={<VisibilityIcon/>}>View</Button>
                        </Link>
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
