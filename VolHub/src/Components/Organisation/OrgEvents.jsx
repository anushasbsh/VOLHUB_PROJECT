import { useState, useEffect } from 'react';
import { Button, Drawer, DrawerBody, DrawerFooter, DrawerHeader, DrawerOverlay, DrawerContent, DrawerCloseButton, FormControl, FormLabel, Input, useDisclosure } from '@chakra-ui/react';
import brochure1 from '../../assets/Images/Brochures/brochure1.png';
import brochure2 from '../../assets/Images/Brochures/brochure2.png';
import brochure3 from '../../assets/Images/Brochures/brochure3.png';

const brochureImages = {
  'AV': brochure1,
  'Conf': brochure2,
  'Aero': brochure3,
  'Symp': brochure2
};

function OrgEventsPage() {
  const [eventsData, setEventsData] = useState([
    {
      id: 1,
      title: 'Avantaa Techno Management Fest',
      brochure: brochure1,
      venue: 'Sri Krishna College of Technology, Coimbatore, Tamil Nadu, India',
    },
    {
      id: 2,
      title: 'International Conference (ICSIEM - 2024)',
      brochure: brochure2,
      venue: 'Sri Krishna College of Technology, Coimbatore, Tamil Nadu, India',
    },
    {
      id: 3,
      title: 'AeroModelling BootCamp- SKCT(2024)',
      brochure: brochure3,
      venue: 'Sri Krishna College of Technology, Coimbatore, Tamil Nadu, India',
    },
    {
      id: 4,
      title: 'KNOCKIA 16 - Technical Symposium',
      brochure: brochure2,
      venue: 'Sri Krishna College of Technology, Coimbatore, Tamil Nadu, India',
    },
  ]);

  const [formData, setFormData] = useState({
    title: '',
    brochure: null, // Changed to handle file input
  });

  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleInputChange = (e) => {
    const { name, value, type, files } = e.target;
    if (type === 'file') {
      setFormData({ ...formData, [name]: files[0] }); // Handle file input
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSave = () => {
    const newEvent = {
      id: eventsData.length + 1,
      title: formData.title,
      brochure: formData.brochure && formData.brochure instanceof File
        ? URL.createObjectURL(formData.brochure)  // Handle uploaded file
        : brochureImages['AV'],  // Default image
      venue: 'Sri Krishna College of Technology, Coimbatore, Tamil Nadu, India',
    };

    setEventsData([...eventsData, newEvent]);
    onClose(); // Close the drawer after saving
  };

  useEffect(() => {
    // Cleanup URLs
    return () => {
      eventsData.forEach(event => {
        if (event.brochure && event.brochure.startsWith('blob:')) {
          URL.revokeObjectURL(event.brochure);
        }
      });
    };
  }, [eventsData]);

  return (
    <div className="bg-[#f9feff] min-h-screen p-8 relative">
      <h1 className="text-3xl font-bold mb-8 text-[#4d2408]">Sri Krishna College of Technology, Coimbatore</h1>
  
      <Button
        position="fixed"
        top="4"
        right="4"
        colorScheme="blue"
        borderRadius="full"
        size="lg"
        onClick={onOpen}
        boxShadow="lg"
        backgroundColor="#f0f2f2"
        color="blue.500"
        fontSize="2xl"
        width="12"
        height="12"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        +
      </Button>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {eventsData.map((event) => (
          <div 
            key={event.id} 
            className="bg-[#ffffff] rounded-lg shadow-lg flex flex-col transition-transform transform hover:scale-105 hover:shadow-2xl cursor-pointer"
          >
            <img
              src={event.brochure}  // Display the correct image
              alt={event.title}
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <div className="flex-grow p-4 flex flex-col justify-between">
              <div>
                <h2 className="text-black font-bold mb-2">{event.title}</h2>
                <p className="text-black font-semibold pt-4">{event.venue}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Drawer */}
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Create a New Event</DrawerHeader>
          <DrawerBody>
            <FormControl mb="4">
              <FormLabel>Event Name</FormLabel>
              <Input name="title" placeholder="Event Name" onChange={handleInputChange} />
            </FormControl>
            <FormControl mb="4">
              <FormLabel>Brochure</FormLabel>
              <Input
                name="brochure"
                type="file"
                accept="image/*"
                onChange={handleInputChange}
              />
            </FormControl>           
          </DrawerBody>
          <DrawerFooter>
            <Button variant="outline" mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme="blue" onClick={handleSave}>Save</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </div>
  );
}

export default OrgEventsPage;
