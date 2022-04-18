import styled from '@emotion/styled';
import { Button, Container, Stack, Box } from '@mui/material';
import Link from 'next/link';

const Home = () => {
  return (
    <Container maxWidth='lg'>
      <Box
        sx={{
          my: 5,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
      <Stack spacing={2} direction='column'>
        <Link href='/organization-chart' passHref>
          <Button variant='contained'>
            Organization Chart
          </Button>
        </Link>
        <Link href='/pokedex' passHref>
          <Button variant='contained'>
            Pokedex
          </Button>
        </Link>
      </Stack>
      </Box>
    </Container>
  );
};

export default Home;
