import { Avatar, Box, Text } from "@chakra-ui/react";
import { RiDashboardFill } from "react-icons/ri";
import { CiHeart } from "react-icons/ci";
import { SiSparkpost } from "react-icons/si";
import { IoMdLogOut } from "react-icons/io";
import logoImage from '../../assets/Images/logo.png'; // Adjust the path as needed

function Sidebar() {
  return (
    <Box
      width="250px" // Adjust width as needed
      height="100vh"
      borderRight="1px solid #dcdcdc"
      bg="#2a2a2a" // Dark background
      color="white"
      display="flex"
      flexDirection="column"
    >
      {/* -----------logo------ */}
      <Box
        bgImage={`url(${logoImage})`}
        bgSize="cover"
        bgPosition="center"
        width="100%"
        height="60px"
        mt={5}
      />

      {/*-------menu-------  */}
      <Box as="nav" mt={5} px={4}>
        <Box
          display="flex"
          alignItems="center"
          gap={3}
          py={3}
          borderRadius="md"
          _hover={{ bg: "#4a4a4a" }} // Darker hover effect
          cursor="pointer"
        >
          <RiDashboardFill size="30px" color="#f39c12" /> {/* Orange */}
          <Text fontSize="lg" fontWeight="semibold" color="#f39c12"> {/* Orange */}
            Dashboard
          </Text>
        </Box>

        <Box
          display="flex"
          alignItems="center"
          gap={3}
          py={3}
          borderRadius="md"
          _hover={{ bg: "#4a4a4a" }} // Darker hover effect
          cursor="pointer"
        >
          <SiSparkpost size="30px" color="#f39c12" /> {/* Orange */}
          <Text fontSize="lg" fontWeight="semibold" color="#f39c12"> {/* Orange */}
            Posts
          </Text>
        </Box>

        <Box
          display="flex"
          alignItems="center"
          gap={3}
          py={3}
          borderRadius="md"
          _hover={{ bg: "#4a4a4a" }} // Darker hover effect
          cursor="pointer"
        >
          <CiHeart size="30px" color="#f39c12" /> {/* Orange */}
          <Text fontSize="lg" fontWeight="semibold" color="#f39c12"> {/* Orange */}
            Notifications
          </Text>
        </Box>

        <Box
          mt="auto"
          mb={4}
          display="flex"
          alignItems="center"
          gap={3}
          py={3}
          borderRadius="md"
          _hover={{ bg: "#4a4a4a" }} // Darker hover effect
          cursor="pointer"
        >
          <Avatar
            src="https://e0.pxfuel.com/wallpapers/105/23/desktop-wallpaper-compromised-character-gaming-profile-dark-cute-cartoon-boys-thumbnail.jpg"
            size="md"
          />
          <Text fontSize="lg" fontWeight="semibold" color="white">
            Profile
          </Text>
        </Box>

        <Box
          display="flex"
          alignItems="center"
          gap={3}
          py={3}
          borderRadius="md"
          _hover={{ bg: "#4a4a4a" }} // Darker hover effect
          cursor="pointer"
        >
          <IoMdLogOut size="30px" color="#f39c12" /> {/* Orange */}
          <Text fontSize="lg" fontWeight="semibold" color="#f39c12"> {/* Orange */}
            Log Out
          </Text>
        </Box>
      </Box>
    </Box>
  );
}

export default Sidebar;
