import { Container, Box } from '@mui/material';
import OrganizationChartView from '../app/views/organizationChart/OrganizationChartView';

const Home = () => {
  return (
    <Container maxWidth="lg">
      <Box sx={{ my: 1, height: '90vh' }}>
        <OrganizationChartView />
      </Box>
    </Container>
  );
};

export default Home;
