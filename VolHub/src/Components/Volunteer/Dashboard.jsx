import { useEffect, useState } from 'react';
import { Box, Flex, Grid, Text, Image, Link } from '@chakra-ui/react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, LineElement, PointElement } from 'chart.js';
import avantaa from "../../assets/Images/avantaa.png";
import { getUser } from '../../Services/api';
import { UsedbContext } from '../../Services/UseContext';
import { socket } from '../../Services/Socket';

ChartJS.register(CategoryScale, LinearScale, BarElement, LineElement, PointElement, Title, Tooltip, Legend);

function Dashboard() {
  const [eventsAttended, setEventsAttended] = useState(1);
  const [timeSpent, setTimeSpent] = useState('8 hours');
  const [rewardsEarned, setRewardsEarned] = useState('50 points');
  const [donationCollected, setDonationCollected] = useState('$20');

  const{dbUser}=UsedbContext();


  if(dbUser)
    {
      socket.emit('user_online', dbUser.id);
    }

  useEffect(() => {
    // Fetch data from the backend
    getUser()
      .then(data => {
        setEventsAttended(data.eventsAttended);
        setTimeSpent(data.timeSpent);
        setRewardsEarned(data.rewardsEarned);
        setDonationCollected(data.donationCollected);
      })
      .catch(error => {
        console.error('Error fetching dashboard data:', error);
      });
  }, []);

  const chartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
    datasets: [
      {
        label: 'Events Attended',
        data: [5, 10, 7, 12, 8],
        backgroundColor: (context) => {
          const chart = context.chart;
          const { ctx, chartArea } = chart;
          if (!chartArea) return null;
          return getGradient(ctx, chartArea);
        },
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 2,
        borderRadius: 8,
        barThickness: 50,
      },
    ],
  };

  const getGradient = (ctx, chartArea) => {
    const gradient = ctx.createLinearGradient(0, chartArea.bottom, 0, chartArea.top);
    gradient.addColorStop(0, 'rgba(75, 192, 192, 0.8)');
    gradient.addColorStop(1, 'rgba(75, 192, 192, 0.2)');
    return gradient;
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
        labels: {
          font: {
            size: 16,
            weight: 'bold',
          },
        },
      },
      tooltip: {
        callbacks: {
          label: (context) => `${context.dataset.label}: ${context.raw}`,
        },
        backgroundColor: '#fff',
        titleColor: '#333',
        bodyColor: '#666',
        borderColor: '#ddd',
        borderWidth: 1,
      },
      title: {
        display: true,
        text: 'Events Attended',
        font: {
          size: 20,
          weight: 'bold',
        },
        color: '#333',
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          font: {
            size: 14,
          },
        },
      },
      y: {
        grid: {
          borderColor: '#ddd',
        },
        ticks: {
          font: {
            size: 14,
          },
        },
      },
    },
  };

  return (
    <Flex minH="100vh" bg="#f9feff" direction="column" p="0" m="0">
      <Flex flex="1" p="8" direction="column" gap="8" bg="#f9feff">
        <Grid
          templateColumns={{ base: '1fr', md: 'repeat(4, 1fr)' }}
          gap="6"
          alignItems="stretch"
          justifyContent="space-between"
          h="30%"
        >
          <Box
            bg="linear-gradient(to right, #d15a15, #edbf9a)"
            boxShadow="xl"
            p="6"
            borderRadius="md"
            h="100%"
            transition="transform 0.3s"
            _hover={{ transform: 'scale(1.05)', boxShadow: '2xl' }}
          >
            <Text fontSize="xl" fontWeight="bold" color="white">Number of Events Attended</Text>
            <Text fontSize="2xl" mt="4" color="white">{eventsAttended}</Text>
          </Box>
          <Box
            bg="linear-gradient(to right, #0c9122,#a6e7c7)"
            boxShadow="xl"
            p="6"
            borderRadius="md"
            h="100%"
            transition="transform 0.3s"
            _hover={{ transform: 'scale(1.05)', boxShadow: '2xl' }}
          >
            <Text fontSize="xl" fontWeight="bold" color="white">Time Spent</Text>
            <Text fontSize="2xl" mt="4" color="white">{timeSpent}</Text>
          </Box>
          <Box
            bg="linear-gradient(to right,#d92b5f, #fb9da9)"
            boxShadow="xl"
            p="6"
            borderRadius="md"
            h="100%"
            transition="transform 0.3s"
            _hover={{ transform: 'scale(1.05)', boxShadow: '2xl' }}
          >
            <Text fontSize="xl" fontWeight="bold" color="white">Rewards Earned</Text>
            <Text fontSize="2xl" mt="4" color="white">{rewardsEarned}</Text>
          </Box>
          <Box
            bg="linear-gradient(to right, #18a198, #78f5f1)"
            boxShadow="xl"
            p="6"
            borderRadius="md"
            h="100%"
            transition="transform 0.3s"
            _hover={{ transform: 'scale(1.05)', boxShadow: '2xl' }}
          >
            <Text fontSize="xl" fontWeight="bold" color="white">Donation Collected</Text>
            <Text fontSize="2xl" mt="4" color="white">{donationCollected}</Text>
          </Box>
        </Grid>

        <Grid
          templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)' }}
          gap="6"
          h="50%"
        >
          <Box bg="white" boxShadow="xl" paddingLeft={6} pt={7} paddingBottom={20} borderRadius="md" h="100%">
            <Text fontSize="lg" fontWeight="bold" color="black">Events Overview</Text>
            <Bar data={chartData} options={chartOptions} />
          </Box>
          <Box bg="white" boxShadow="xl" p="6" borderRadius="10" h="100%">
            <Text fontSize="xl" fontWeight="bold" color="black">Recent Event Attended</Text>
            <Link
              href='https://avantaa.in/'
              isExternal
              fontSize="xl"
              color="#0e5fb5"
              fontWeight="500"
              _hover={{ textDecoration: 'underline' }}
            >
              SKCT-AVANTAA
            </Link>
            <Image
              src={avantaa}
              alt="Recent Event"
              mt="4"
              borderRadius="md"
              ml="20"
              boxSize="70%"
              objectFit="cover"
            />
          </Box>
        </Grid>
      </Flex>
    </Flex>
  );
}

export default Dashboard;