import React from "react";
import { Flex, Box, Link } from "@chakra-ui/react";
import {Link as ReachLink } from "react-router-dom";

const Home = () => {
  return (
      <>
      <Flex p={"5em"}>
        <Box ms={"5em"} mt={"3em"}>
        <iframe style={{ borderRadius: '12px' }} src="https://open.spotify.com/embed/playlist/2yHn6GPB7rLGFTMscpwVPs?utm_source=generator&theme=0" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
        </Box>
      </Flex>

      </>
  );
};

export default Home;
