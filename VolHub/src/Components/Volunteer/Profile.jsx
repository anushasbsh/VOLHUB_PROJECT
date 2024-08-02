import { useState } from 'react';
import { Avatar, Box, Button, Flex, Grid, Input, Text, Select, Textarea, FormControl, FormLabel, FormErrorMessage, Drawer, DrawerBody, DrawerFooter, DrawerHeader, DrawerOverlay, DrawerContent, DrawerCloseButton, useDisclosure, useToast } from '@chakra-ui/react';

function Profile() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();  // Initialize the toast hook

  const [avatarSrc, setAvatarSrc] = useState('https://bootdey.com/img/Content/avatar/avatar7.png');
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    dob: '',
    street: '',
    city: '',
    state: '',
    zipCode: '',
    skills: '',
    experience: '',
    medicalCert: null,
    resume: null,
    areasOfInterest: '',
    linkedinURL: '',
    bankAccountHolderName: '',
    bankAccNo: '',
    bankIFSC: '',
    bankName: ''
  });
  const [errors, setErrors] = useState({});

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setAvatarSrc(reader.result);
        setFormData(prevData => ({
          ...prevData,
          avatar: file
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleFileChange = (event) => {
    const { name, files } = event.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: files[0]
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const validationErrors = {};

    // Basic validation
    if (!formData.fullName) validationErrors.fullName = "Full Name is required";
    if (!formData.email) validationErrors.email = "Email is required";
    if (!formData.phone) validationErrors.phone = "Phone number is required";
    if (!formData.dob) validationErrors.dob = "Date of Birth is required";
    if (!formData.street) validationErrors.street = "Street is required";
    if (!formData.city) validationErrors.city = "City is required";
    if (!formData.state) validationErrors.state = "State is required";
    if (!formData.zipCode) validationErrors.zipCode = "Zip Code is required";
    if (!formData.skills) validationErrors.skills = "Skills are required";
    if (!formData.experience) validationErrors.experience = "Experience is required";
    if (!formData.areasOfInterest) validationErrors.areasOfInterest = "Areas of Interest are required";
    if (!formData.linkedinURL) validationErrors.linkedinURL = "LinkedIn URL is required";
    // Bank details validation
    if (!formData.bankAccountHolderName) validationErrors.bankAccountHolderName = "Account Holder Name is required";
    if (!formData.bankAccNo) validationErrors.bankAccNo = "Account Number is required";
    if (!formData.bankIFSC) validationErrors.bankIFSC = "IFSC Code is required";
    if (!formData.bankName) validationErrors.bankName = "Bank Name is required";

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      // Open the drawer with the entered details
      onOpen();

      // Show success toast
      toast({
        title: "Profile Updated.",
        description: "Your profile details have been updated successfully.",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
    }
  };

  return (
    <Flex direction="column" minHeight="100vh" bg="#dcdee0">
      <Box flex="1" p="8">
        <Box
          maxWidth="1200px"
          mx="auto"
          bg="rgba(255, 255, 255, 0.8)"
          boxShadow="md"
          borderRadius="md"
          p="6"
          backdropFilter="blur(20000px)"
          border="1px solid rgba(255, 255, 255, 0.2)"
        >
          <form onSubmit={handleSubmit}>
                <Text color={"blue.500"} fontSize={"35"} fontWeight={"bold"} textDecorationLine={"underline"} ml={96}>Profile</Text>
            <Grid templateColumns={{ base: '1fr', lg: '1fr 3fr' }} gap={6} pt={5}>
              <Box textAlign="center">
                <Avatar size="xl" src={avatarSrc} mb="4" />
                <Button as="label" colorScheme="blue" cursor="pointer" mb="4" marginTop={1} marginLeft={5}>
                  Upload Your Image
                  <Input
                    type="file"
                    accept="image/png, image/jpeg"
                    onChange={handleImageUpload}
                    hidden
                  />
                </Button>
              </Box>

              <Box>
                <Text fontSize="lg" fontWeight="bold" color="blue.500" mb="3">Personal Details</Text>
                <Grid templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)' }} gap={4}>
                  <FormControl isInvalid={!!errors.fullName} mb="4">
                    <FormLabel color="black">Full Name</FormLabel>
                    <Input
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="Enter full name"
                      border="1px solid #0a0a0a"
                      borderColor="#cfd1d8"
                      color="black"
                      required
                    />
                    {errors.fullName && <FormErrorMessage>{errors.fullName}</FormErrorMessage>}
                  </FormControl>
                  <FormControl isInvalid={!!errors.email} mb="4">
                    <FormLabel color="black">Email</FormLabel>
                    <Input
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter email ID"
                      border="1px solid #cfd1d8"
                      borderColor="#cfd1d8"
                      color="black"
                      required
                    />
                    {errors.email && <FormErrorMessage>{errors.email}</FormErrorMessage>}
                  </FormControl>
                  <FormControl isInvalid={!!errors.phone} mb="4">
                    <FormLabel color="black">Phone</FormLabel>
                    <Input
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Enter phone number"
                      border="1px solid #cfd1d8"
                      borderColor="#cfd1d8"
                      color="black"
                      required
                    />
                    {errors.phone && <FormErrorMessage>{errors.phone}</FormErrorMessage>}
                  </FormControl>
                  <FormControl isInvalid={!!errors.dob} mb="4">
                    <FormLabel color="black">Date of Birth</FormLabel>
                    <Input
                      name="dob"
                      type="date"
                      value={formData.dob}
                      onChange={handleChange}
                      border="1px solid #cfd1d8"
                      borderColor="#cfd1d8"
                      color="black"
                      required
                    />
                    {errors.dob && <FormErrorMessage>{errors.dob}</FormErrorMessage>}
                  </FormControl>
                </Grid>

                <Text fontSize="lg" fontWeight="bold" color="blue.500" mt="8" mb="4">Address</Text>
                <Grid templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)' }} gap={4}>
                  <FormControl isInvalid={!!errors.street} mb="4">
                    <FormLabel color="black">Street</FormLabel>
                    <Input
                      name="street"
                      value={formData.street}
                      onChange={handleChange}
                      placeholder="Enter Street"
                      border="1px solid #cfd1d8"
                      borderColor="#cfd1d8"
                      color="black"
                      required
                    />
                    {errors.street && <FormErrorMessage>{errors.street}</FormErrorMessage>}
                  </FormControl>
                  <FormControl isInvalid={!!errors.city} mb="4">
                    <FormLabel color="black">City</FormLabel>
                    <Input
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      placeholder="Enter City"
                      border="1px solid #cfd1d8"
                      borderColor="#cfd1d8"
                      color="black"
                      required
                    />
                    {errors.city && <FormErrorMessage>{errors.city}</FormErrorMessage>}
                  </FormControl>
                  <FormControl isInvalid={!!errors.state} mb="4">
                    <FormLabel color="black">State</FormLabel>
                    <Input
                      name="state"
                      value={formData.state}
                      onChange={handleChange}
                      placeholder="Enter State"
                      border="1px solid #cfd1d8"
                      borderColor="#cfd1d8"
                      color="black"
                      required
                    />
                    {errors.state && <FormErrorMessage>{errors.state}</FormErrorMessage>}
                  </FormControl>
                  <FormControl isInvalid={!!errors.zipCode} mb="4">
                    <FormLabel color="black">Zip Code</FormLabel>
                    <Input
                      name="zipCode"
                      value={formData.zipCode}
                      onChange={handleChange}
                      placeholder="Enter Zip Code"
                      border="1px solid #cfd1d8"
                      borderColor="#cfd1d8"
                      color="black"
                      required
                    />
                    {errors.zipCode && <FormErrorMessage>{errors.zipCode}</FormErrorMessage>}
                  </FormControl>
                </Grid>

                <Text fontSize="lg" fontWeight="bold" color="blue.500" mt="8" mb="4">Skills and Experience</Text>
                <FormControl isInvalid={!!errors.skills} mb="4">
                  <FormLabel color="black">Skills</FormLabel>
                  <Textarea
                    name="skills"
                    value={formData.skills}
                    onChange={handleChange}
                    placeholder="Describe your skills"
                    border="1px solid #cfd1d8"
                    borderColor="#cfd1d8"
                    color="black"
                    required
                  />
                  {errors.skills && <FormErrorMessage>{errors.skills}</FormErrorMessage>}
                </FormControl>
                <FormControl isInvalid={!!errors.experience} mb="4">
                  <FormLabel color="black">Experience</FormLabel>
                  <Textarea
                    name="experience"
                    value={formData.experience}
                    onChange={handleChange}
                    placeholder="Describe your experience"
                    border="1px solid #cfd1d8"
                    borderColor="#cfd1d8"
                    color="black"
                    required
                  />
                  {errors.experience && <FormErrorMessage>{errors.experience}</FormErrorMessage>}
                </FormControl>

                <Text fontSize="lg" fontWeight="bold" color="blue.500" mt="8" mb="4">Additional Information</Text>
                <Grid templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)' }} gap={4}>
                  <FormControl isInvalid={!!errors.areasOfInterest} mb="4">
                    <FormLabel color="black">Areas of Interest</FormLabel>
                    <Select
                      name="areasOfInterest"
                      value={formData.areasOfInterest}
                      onChange={handleChange}
                      placeholder="Select your areas of interest"
                      border="1px solid #cfd1d8"
                      borderColor="#cfd1d8"
                      color="black"
                      required
                    >
                      <option value="Environment">Environment</option>
                      <option value="Education">Education</option>
                      <option value="Health">Health</option>
                      <option value="Community">Community</option>
                      <option value="Other">Other</option>
                    </Select>
                    {errors.areasOfInterest && <FormErrorMessage>{errors.areasOfInterest}</FormErrorMessage>}
                  </FormControl>
                  <FormControl isInvalid={!!errors.linkedinURL} mb="4">
                    <FormLabel color="black">LinkedIn URL</FormLabel>
                    <Input
                      name="linkedinURL"
                      type="url"
                      value={formData.linkedinURL}
                      onChange={handleChange}
                      placeholder="Enter LinkedIn URL"
                      border="1px solid #cfd1d8"
                      borderColor="#cfd1d8"
                      color="black"
                      required
                    />
                    {errors.linkedinURL && <FormErrorMessage>{errors.linkedinURL}</FormErrorMessage>}
                  </FormControl>
                  <FormControl isInvalid={!!errors.medicalCert} mb="4">
                    <FormLabel color="black">Upload Medical Certificate (Optional)</FormLabel>
                    <Input
                      type="file"
                      name="medicalCert"
                      onChange={handleFileChange}
                      border="1px solid #cfd1d8"
                      borderColor="#cfd1d8"
                    />
                  </FormControl>
                  <FormControl isInvalid={!!errors.resume} mb="4">
                    <FormLabel color="black">Upload Resume</FormLabel>
                    <Input
                      type="file"
                      name="resume"
                      onChange={handleFileChange}
                      border="1px solid #cfd1d8"
                      borderColor="#cfd1d8"
                    />
                  </FormControl>
                </Grid>

                <Text fontSize="lg" fontWeight="bold" color="blue.500" mt="8" mb="4">Bank Details</Text>
                <Grid templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)' }} gap={4}>
                  <FormControl isInvalid={!!errors.bankAccountHolderName} mb="4">
                    <FormLabel color="black">Account Holder Name</FormLabel>
                    <Input
                      name="bankAccountHolderName"
                      value={formData.bankAccountHolderName}
                      onChange={handleChange}
                      placeholder="Enter Account Holder Name"
                      border="1px solid #cfd1d8"
                      borderColor="#cfd1d8"
                      color="black"
                      required
                    />
                    {errors.bankAccountHolderName && <FormErrorMessage>{errors.bankAccountHolderName}</FormErrorMessage>}
                  </FormControl>
                  <FormControl isInvalid={!!errors.bankAccNo} mb="4">
                    <FormLabel color="black">Account Number</FormLabel>
                    <Input
                      name="bankAccNo"
                      value={formData.bankAccNo}
                      onChange={handleChange}
                      placeholder="Enter Account Number"
                      border="1px solid #cfd1d8"
                      borderColor="#cfd1d8"
                      color="black"
                      required
                    />
                    {errors.bankAccNo && <FormErrorMessage>{errors.bankAccNo}</FormErrorMessage>}
                  </FormControl>
                  <FormControl isInvalid={!!errors.bankIFSC} mb="4">
                    <FormLabel color="black">IFSC Code</FormLabel>
                    <Input
                      name="bankIFSC"
                      value={formData.bankIFSC}
                      onChange={handleChange}
                      placeholder="Enter IFSC Code"
                      border="1px solid #cfd1d8"
                      borderColor="#cfd1d8"
                      color="black"
                      required
                    />
                    {errors.bankIFSC && <FormErrorMessage>{errors.bankIFSC}</FormErrorMessage>}
                  </FormControl>
                  <FormControl isInvalid={!!errors.bankName} mb="4">
                    <FormLabel color="black">Bank Name</FormLabel>
                    <Input
                      name="bankName"
                      value={formData.bankName}
                      onChange={handleChange}
                      placeholder="Enter Bank Name"
                      border="1px solid #cfd1d8"
                      borderColor="#cfd1d8"
                      color="black"
                      required
                    />
                    {errors.bankName && <FormErrorMessage>{errors.bankName}</FormErrorMessage>}
                  </FormControl>
                </Grid>

                <Button type="submit" colorScheme="blue" ml="700" mt="8">Update Profile</Button>
              </Box>
            </Grid>
          </form>
        </Box>
      </Box>

      {/* Drawer to display profile details */}
      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay>
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Your Profile Details</DrawerHeader>
            <DrawerBody>
              <Text><b>Full Name:</b> {formData.fullName}</Text>
              <Text><b>Email:</b> {formData.email}</Text>
              <Text><b>Phone:</b> {formData.phone}</Text>
              <Text><b>Date of Birth:</b> {formData.dob}</Text>
              <Text><b>Street:</b> {formData.street}</Text>
              <Text><b>City:</b> {formData.city}</Text>
              <Text><b>State:</b> {formData.state}</Text>
              <Text><b>Zip Code:</b> {formData.zipCode}</Text>
              <Text><b>Skills:</b> {formData.skills}</Text>
              <Text><b>Experience:</b> {formData.experience}</Text>
              <Text><b>Areas of Interest:</b> {formData.areasOfInterest}</Text>
              <Text><b>LinkedIn URL:</b> {formData.linkedinURL}</Text>
              <Text><b>Account Holder Name:</b> {formData.bankAccountHolderName}</Text>
              <Text><b>Account Number:</b> {formData.bankAccNo}</Text>
              <Text><b>IFSC Code:</b> {formData.bankIFSC}</Text>
              <Text><b>Bank Name:</b> {formData.bankName}</Text>
            </DrawerBody>
            <DrawerFooter>
              <Button variant="outline" mr={3} onClick={onClose}>
                Close
              </Button>
            </DrawerFooter>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </Flex>
  );
}

export default Profile;
