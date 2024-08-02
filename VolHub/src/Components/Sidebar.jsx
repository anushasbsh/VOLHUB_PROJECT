import { Avatar, Box, Text } from "@chakra-ui/react";
import { RiDashboardFill } from "react-icons/ri";
import { CiHeart } from "react-icons/ci";
import { SiSparkpost } from "react-icons/si";
import { IoMdLogOut } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import logoImage from '../assets/Images/sidelogo.png';
import { BsFillChatSquareTextFill } from "react-icons/bs";
import PropTypes from 'prop-types';
import { UsedbContext } from "../Services/UseContext";

function Sidebar({ onnotificationClick, onChatClick, onProfileClick, onPostClick, onDashClick }) {
  const navigate = useNavigate();

  const {logout} = UsedbContext()
  const handleLogout = () => {
    localStorage.removeItem('userToken');
    logout();
    navigate('/');
  };

  const handleLogoClick = () => {
    navigate('/');
  };

  return (
    <Box
      width="220px"
      height="100vh"
      borderRight="1px solid #dcdcdc"
      bg="#1d2c3b"
      color="#ffffff"
      display="flex"
      flexDirection="column"
      fontFamily="sans-serif" 
    >
      {/* Logo */}
      <Box
        bgImage={`url(${logoImage})`}
        bgSize="cover"
        bgPosition="center"
        marginLeft={5}
        width="60%"
        height="60px"
        mt={5}
        onClick={handleLogoClick}
        cursor="pointer"
      />

      {/* Menu */}
      <Box as="nav" mt={5} px={4} flex="1">
        <Box
          display="flex"
          alignItems="center"
          gap={3}
          py={3}
          borderRadius="md"
          _hover={{ bg: "#4a4a4a" }}
          cursor="pointer"
          onClick={onDashClick}
        >
          <RiDashboardFill size="30px" color="#f2e9e4" />
          <Text fontSize="lg" fontWeight="400" color="#f2e9e4" marginLeft={0}>
            Dashboard
          </Text>
        </Box>
        <Box
          display="flex"
          alignItems="center"
          gap={3}
          py={3}
          borderRadius="md"
          _hover={{ bg: "#4a4a4a" }}
          cursor="pointer"
          onClick={onPostClick}
        >
          <SiSparkpost size="30px" color="#f2e9e4" />
          <Text fontSize="lg" fontWeight="400" color="#f2e9e4" marginLeft={0}>
            Posts
          </Text>
        </Box>
        <Box
          display="flex"
          alignItems="center"
          gap={3}
          py={3}
          borderRadius="md"
          _hover={{ bg: "#4a4a4a" }}
          cursor="pointer"
          onClick={onnotificationClick}
        >
          <CiHeart size="30px" color="#f2e9e4" />
          <Text fontSize="lg" fontWeight="400" color="#f2e9e4" marginLeft={0}>
            Notifications
          </Text>
        </Box>
        <Box
          cursor="pointer"
          display="flex"
          alignItems="center"
          gap={3}
          _hover={{ bg: "#4a4a4a" }}
          borderRadius="lg"
          p={3}
          ml={-2.5}
          onClick={onChatClick}
        >
          <BsFillChatSquareTextFill size="30px" color="#f2e9e4" />
          <Text
            fontSize="lg"
            fontWeight="400"
            color="#f2e9e4"
            marginLeft={0}
          >
            Chats
          </Text>
        </Box>

        {/* Spacer */}
        <Box flex="1" />

    {/* Profile and Logout */}
<Box mt={280} display="flex" flexDirection="column" alignItems="center" ml={-90}>
  <Box
    display="flex"
    alignItems="center"
    gap={3}
    py={3}
    borderRadius="md"
    _hover={{ bg: "#4a4a4a" }}
    cursor="pointer"
    width = "100%"
    ml={170}
    onClick={onProfileClick}
  >
    <Avatar
      src="https://e0.pxfuel.com/wallpapers/105/23/desktop-wallpaper-compromised-character-gaming-profile-dark-cute-cartoon-boys-thumbnail.jpg"
      size="md"
      borderColor="none"
      borderWidth="2px"
    />
    <Text fontSize="lg" fontWeight="400" color="#f2e9e4">
      Profile
    </Text>
  </Box>
  <Box
    display="flex"
    alignItems="center"
    gap={3}
    py={3}
    ml={100}
    borderRadius="md"
    _hover={{ bg: "#4a4a4a" }}
    cursor="pointer"
    onClick={handleLogout}
    width="100%"  // Added width to ensure it's long enough
    maxWidth="200px" // Optional: to set a maximum width if needed
  >
    <IoMdLogOut size="30px" color="#f2e9e4" />
    <Text fontSize="lg" fontWeight="400" color="#f2e9e4">
      Log Out
    </Text>
  </Box>
</Box>

        </Box>
      </Box>
 
  );
}

Sidebar.propTypes = {
  onnotificationClick: PropTypes.func.isRequired,
  onChatClick: PropTypes.func.isRequired,
  onProfileClick: PropTypes.func.isRequired,
  onPostClick: PropTypes.func.isRequired,
  onDashClick: PropTypes.func.isRequired,
};

export default Sidebar;
