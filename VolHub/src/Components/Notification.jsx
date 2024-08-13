import { useEffect, useState } from "react";
import { UsedbContext } from "../Services/UseContext";
import { Get_v_Notification, getUserById, org_v_Notification, Status_Notification } from "../Services/api";
import { Avatar, Box, Button, Text } from "@chakra-ui/react";
import { CiClock2 } from "react-icons/ci";
import { BiMessageRoundedX, BiSolidMessageRoundedCheck } from "react-icons/bi";

function Notification() {
    const { dbUser, isVolunteer } = UsedbContext();
    const [notification, setNotification] = useState([]);

    useEffect(() => {
        const getAllNotification = async () => {
            if (isVolunteer) {
                const notifications = await Get_v_Notification(dbUser?.id);
                const updatedNotifications = await Promise.all(
                    notifications.map(async (item) => {
                        const user = await getUserById(item.organizerid);
                        item.avatar = user.avatar;
                        item.name = user.name;
                        return item;
                    })
                );
                setNotification(updatedNotifications);
            } else {
                const notifications = await org_v_Notification(dbUser?.id);
                const updatedNotifications = await Promise.all(
                    notifications.map(async (item) => {
                        const user = await getUserById(item.volunteerid);
                        item.avatar = user.avatar;
                        item.name = user.name;
                        return item;
                    })
                );
                setNotification(updatedNotifications);
            }
        };

        getAllNotification();

    }, [dbUser?.id, isVolunteer]);

    const onAccept = async (item) => {
        await Status_Notification(item?.id, "Accepted");
    };

    const onReject = async (item) => {
        await Status_Notification(item?.id, "Rejected");
    };

    // Helper function to determine notification text based on type
    const getNotificationText = (type) => {
        switch (type) {
            case 'Accepted':
                return 'Organizer has approved your application';
            case 'Rejected':
                return 'Organizer has not approved your application';
            case 'Pending':
                return 'Your application is pending';
            default:
                return 'Notification status unknown';
        }
    };

    return (
        <>
            <Box className="m-5">
                <Text className="text-center font-bold text-3xl text-[#4d2408]">
                    Notifications ({notification.length})
                </Text>
                <Box 
                    className="mt-5 p-4 border rounded-lg bg-white"
                    maxH="500px" 
                    overflowY="auto"
                >
                    {notification?.map((item, index) => (
                        <Box key={index} mb={3}>
                            <Box className="flex items-center p-3 rounded-lg hover:bg-gray-100 gap-5">
                                <Avatar src={item.avatar} />
                                <Text className="text-primary font-pmedium" fontSize={18}>
                                    {getNotificationText(item.notifytype)}
                                </Text>
                                {isVolunteer ? (
                                    <Box className="ml-auto">
                                        {item.notifytype === 'Pending' ? <CiClock2 size={'30px'} />
                                            : item.notifytype === 'Accepted' ? <BiSolidMessageRoundedCheck size={'30px'} color="green" /> 
                                            : <BiMessageRoundedX size={'30px'} color="red" />}
                                    </Box>
                                ) : (
                                    item.notifytype === 'Pending' ? (
                                        <Box className="ml-auto flex gap-3">
                                            <Button colorScheme="green" onClick={() => onAccept(item)}>Accept</Button>
                                            <Button colorScheme="red" onClick={() => onReject(item)}>Reject</Button>
                                        </Box>
                                    ) : item.notifytype === 'Accepted' ? (
                                        <Box className="ml-auto flex gap-3">
                                            <BiSolidMessageRoundedCheck size={'30px'} color="green" />
                                            <Text>Approved</Text>
                                        </Box>
                                    ) : (
                                        <Box className="ml-auto flex gap-3">
                                            <BiMessageRoundedX size={'30px'} color="red" />
                                            <Text>Rejected</Text>
                                        </Box>
                                    )
                                )}
                            </Box>
                        </Box>
                    ))}
                </Box>
            </Box>
        </>
    );
}

export default Notification;
