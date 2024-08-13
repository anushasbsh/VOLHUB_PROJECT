import { Avatar, Box, Button, Image, Input, Text } from "@chakra-ui/react";
import CountUp from 'react-countup';
import { MdOutlinePermMedia, MdEvent, MdArticle } from "react-icons/md";
import { AiOutlineLike } from "react-icons/ai";
import { TfiCommentAlt } from "react-icons/tfi";
import { BiRepost } from "react-icons/bi";
import { IoIosShareAlt } from "react-icons/io";
import { useEffect, useRef, useState } from "react";
import ReactPlayer from "react-player";
import { GetPost, getUserById } from "../Services/api";
import { formatRelativeTime } from "../Services/Time";
import Create_S_Post from "./Create_S_Post";

function Post({ setIsToggled, isToggled }) {
  const [Posts, setPosts] = useState([]);
  const [createPost, setCreatePost] = useState(false);
  const [followStatus, setFollowStatus] = useState({});
  const [likeCounts, setLikeCounts] = useState({});
  const [commentBoxVisible, setCommentBoxVisible] = useState({});
  const [newComments, setNewComments] = useState({});
  const [comments, setComments] = useState({});

  const onCreate_s_post = () => {
    setCreatePost(!createPost);
  };

  useEffect(() => {
    const getPost = async () => {
      const post = await GetPost();
      const updatedpost = await Promise.all(
        post.map(async (item) => {
          const user = await getUserById(item.userid);
          item.avatar = user.avatar;
          item.name = user.name;
          return item;
        })
      );
      setPosts(updatedpost);
    };
    getPost();
  }, []);

  const handleFollowClick = (id) => {
    setFollowStatus((prevState) => ({
      ...prevState,
      [id]: !prevState[id], // Toggle follow status
    }));
  };

  const handleLikeClick = (postId) => {
    setLikeCounts((prevCounts) => ({
      ...prevCounts,
      [postId]: (prevCounts[postId] || 0) + 1,
    }));
  };

  const handleCommentSubmit = (postId) => {
    if (newComments[postId]) {
      setComments((prev) => ({
        ...prev,
        [postId]: [...(prev[postId] || []), newComments[postId]]
      }));
      setNewComments((prev) => ({ ...prev, [postId]: '' }));
    }
  };

  const videoref = useRef();

  return (
    <>
      <Box className="w-full h-full flex p-4 gap-4 bg-[#f2f4f5]">
        {/* l1 */}
        <Box className="w-4/12 flex gap-3 flex-col">
          {/* ---------profile banner----- */}
          <Box className="w-full h-[50vh] shadow-xl bg-white" borderRadius={10} boxShadow={2}>
            {/* -----------banner and image----- */}
            <Box
              bgImage="url('/public/b1.webp')"
              bgSize="cover"
              bgPosition="center"
              className="w-full h-20"
            />

            <Box className="absolute top-6 left-[400px]">
              <Avatar size={'xl'} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvJaoIeJQU_V9rL_ZII61whWyqSFbmMgTgwQ&s" />
            </Box>
            {/* --------------username and slogan--- */}
            <Box>
              <Text fontSize={'2xl'} className="mt-14 font-pextralight text-center">Anusha S B</Text>
              <Text fontSize={'1xl'} className="font-pextralight text-center">✨ Volunteering: A Pathway to Purpose ✨</Text>
            </Box>
            {/* /------------  folowing and followers--- */}
            <Box className="flex items-center justify-center mt-10 gap-5">
              <Box className="flex flex-col items-center">
                <CountUp start={0} end={6000} duration={2.75} separator=",">
                  {({ countUpRef }) => (
                    <Text fontSize={'3xl'} className="font-bold" ref={countUpRef} />
                  )}
                </CountUp>
                <Text fontSize={'xl'} className="font-pextralight text-center">Following</Text>
              </Box>

              <Box className="flex flex-col items-center">
                <CountUp start={0} end={2000} duration={2.75} separator=",">
                  {({ countUpRef }) => (
                    <Text fontSize={'3xl'} className="font-bold" ref={countUpRef} />
                  )}
                </CountUp>
                <Text fontSize={'xl'} className="font-pextralight text-center">Followers</Text>
              </Box>
            </Box>
            <Box className="flex justify-center mt-4 font-psemibold text-xl text-custompink" cursor={'pointer'}>My Profile</Box>
          </Box>
          {/* -----------request to follow---- */}
          <Box className="w-full h-[20vh] shadow-xl p-2 bg-white" borderRadius={10}>
            <Text className="text-2xl font-pbold">Requests</Text>
            <Box className="w-full mt-2 flex items-center p-2 rounded-xl">
              <Avatar />
              <Text className="ml-2 font-pextralight text-xl">
                Manish Devaraj
              </Text>
              <Button
                className={`ml-auto ${followStatus['request1'] ? 'bg-gray-500' : 'bg-custompink'} hover:opacity-50`}
                colorScheme="transparent"
                onClick={() => handleFollowClick('request1')}
              >
                {followStatus['request1'] ? 'Following' : 'Follow'}
              </Button>
            </Box>
          </Box>
        </Box>
        {/* l2 */}
        <Box className="w-6/12 overflow-y-auto no-scrollbar">
          {/* -----------create a post------- */}
          <Box onClick={() => onCreate_s_post()} className="flex flex-col shadow-lg rounded-lg p-4 gap-1 bg-white">
            {/* --------------header--------- */}
            <Box className="flex gap-3">
              <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvJaoIeJQU_V9rL_ZII61whWyqSFbmMgTgwQ&s" size={'md'} />
              <Box className="w-full" cursor={'pointer'}>
                <Input borderRadius={"200px"}
                  _focus={{ boxShadow: 'none', outline: 'none' }}
                  placeholder="What's on your mind?"
                  width={"500px"}
                  cursor={'pointer'}
                />
              </Box>
            </Box>
            {/* ----------------footer------- */}
            <Box className="flex gap-3 justify-center">
              <Button className="flex items-center">
                <MdOutlinePermMedia />
                <Text>media</Text>
              </Button>
              <Button>
                <MdEvent />
                <Text>event</Text>
              </Button>
              <Button>
                <MdArticle />
                <Text>article</Text>
              </Button>
            </Box>
          </Box>
          {/* --------------Post------------ */}
          {Posts.map((item, index) => (
            <Box className="mt-4 flex flex-col flex-grow gap-2 p-2 w-full rounded-lg shadow-lg bg-white" key={index}>
              {/* ----head---- */}
              <Box className="flex items-center gap-1">
                <Avatar src={item.avatar} name={item.name} />
                <Box>
                  <Text className="font-pblack text-gray-900">{item.name}</Text>
                  <Text className="font-pregular text-gray-100">{formatRelativeTime(Number(item?.time))}</Text>
                </Box>
                <Button className="ml-auto bg-custompink hover:opacity-50" colorScheme="transparent">Follow</Button>
              </Box>
              {/* --------body------ */}
              <Box className="p-3">
                <Text>{item?.msg}</Text>
                {item.type === "image" &&
                  <Image src={item.url} width={'full'} h={'full'} className="mt-3" />}
                {item.type === "video" &&
                  <ReactPlayer url={item.url} ref={videoref} />}
              </Box>
              {/* ---------footer---------- */}
              <Box className="flex mt-2 justify-center gap-28">
                {/* like */}
                <Box className="flex items-center gap-1 cursor-pointer" onClick={() => handleLikeClick(item.id)}>
                  <AiOutlineLike size={'30px'} color="red" />
                  <Text>{likeCounts[item.id] || 0}</Text>
                </Box>
                {/* comment */}
                <Box className="flex items-center gap-1 cursor-pointer" onClick={() => setCommentBoxVisible(prev => ({ ...prev, [item.id]: !prev[item.id] }))}>
                  <TfiCommentAlt size={'30px'} color="red" />
                </Box>
                {/* repost */}
                <BiRepost size={'30px'} color="red" />
                {/* Share */}
                <IoIosShareAlt size={'30px'} color="red" />
              </Box>
              {/* Comment Box and Display */}
              {commentBoxVisible[item.id] && (
                <Box className="mt-4 p-2 bg-white rounded-lg">
                  <Input
                    placeholder="Write a comment..."
                    value={newComments[item.id] || ''}
                    onChange={(e) => setNewComments(prev => ({ ...prev, [item.id]: e.target.value }))}
                    onKeyPress={(e) => {
                      if (e.key === 'Enter') {
                        handleCommentSubmit(item.id);
                        e.preventDefault();
                      }
                    }}
                  />
                  <Box className="mt-2">
                    {comments[item.id] && comments[item.id].map((comment, index) => (
                      <Box key={index} className="p-2 bg-white rounded-lg mb-2">
                        <Text>{comment}</Text>
                      </Box>
                    ))}
                  </Box>
                </Box>
              )}
            </Box>
          ))}
        </Box>
      </Box>
      {createPost && <Box className="bg-white absolute top-5 w-4/12 ml-96 h-[600px] mt-6 rounded-[50px] shadow-lg">
        <Create_S_Post onCreate_s_post={onCreate_s_post} />
      </Box>}
    </>
  );
}

export default Post;
