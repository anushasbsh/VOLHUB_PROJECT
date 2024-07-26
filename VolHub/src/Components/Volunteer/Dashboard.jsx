import { useState } from 'react';
import { Box, Flex, Grid, Text } from '@chakra-ui/react';
import Sidebar from './Sidebar';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

function Dashboard() {
  // Define state variables
  const [eventsAttended] = useState(10); // Assuming these are static values for now
  const [timeSpent] = useState('25 hours');
  const [rewardsEarned] = useState('150 points');
  const [donationCollected] = useState('$500');

  // Sample data for the bar chart
  const chartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'], // Example months
    datasets: [
      {
        label: 'Events Attended',
        data: [5, 10, 7, 12, 8], // Example data
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  // Options for the bar chart
  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      tooltip: {
        callbacks: {
          label: (context) => `${context.dataset.label}: ${context.raw}`,
        },
      },
    },
  };

  return (
    <Flex h="100vh" bg="white">
      <Sidebar />
      <Flex flex="1" p="8" direction="column" gap="8" bg="white">
        {/* First Grid: 4 boxes with gradient backgrounds */}
        <Grid
          templateColumns={{ base: '1fr', md: 'repeat(4, 1fr)' }}
          gap="6"
          alignItems="stretch"
          justifyContent="space-between"
          h="30%" // Adjust the height as needed
        >
          <Box
            bg="linear-gradient(to right, #ff7e5f, #feb47b)" // Gradient background
            boxShadow="md"
            p="6"
            borderRadius="md"
            h="100%"
          >
            <Text fontSize="xl" fontWeight="bold" color="white">Number of Events Attended</Text>
            <Text fontSize="2xl" mt="4" color="white">{eventsAttended}</Text>
          </Box>
          <Box
            bg="linear-gradient(to right, #6a11cb, #2575fc)" // Gradient background
            boxShadow="md"
            p="6"
            borderRadius="md"
            h="100%"
          >
            <Text fontSize="xl" fontWeight="bold" color="white">Time Spent</Text>
            <Text fontSize="2xl" mt="4" color="white">{timeSpent}</Text>
          </Box>
          <Box
            bg="linear-gradient(to right, #00c6ff, #0072ff)" // Gradient background
            boxShadow="md"
            p="6"
            borderRadius="md"
            h="100%"
          >
            <Text fontSize="xl" fontWeight="bold" color="white">Rewards Earned</Text>
            <Text fontSize="2xl" mt="4" color="white">{rewardsEarned}</Text>
          </Box>
          <Box
            bg="linear-gradient(to right, #ff512f, #f09819)" // Gradient background
            boxShadow="md"
            p="6"
            borderRadius="md"
            h="100%"
          >
            <Text fontSize="xl" fontWeight="bold" color="white">Donation Collected</Text>
            <Text fontSize="2xl" mt="4" color="white">{donationCollected}</Text>
          </Box>
        </Grid>

        {/* Second Grid: 2 boxes */}
        <Grid
          templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)' }}
          gap="6"
          h="30%" // Adjust the height as needed
        >
          <Box bg="white" boxShadow="md" p="6" borderRadius="md" h="100%">
            <Text fontSize="xl" fontWeight="bold" color="black">Events Overview</Text>
            <Bar data={chartData} options={chartOptions} />
          </Box>
          <Box bg="white" boxShadow="md" p="6" borderRadius="md" h="100%">
            <Text fontSize="xl" fontWeight="bold" color="black">Recent Event Attended</Text>
            <Text fontSize="xl" mt="4" color="darkblue">
              {/* List of recent events */}
              SKCT-AVANTAA
            </Text>
          </Box>
        </Grid>
      </Flex>
    </Flex>
  );
}

export default Dashboard;
