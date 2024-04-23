import { Box, Link } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Navigation = () => {
  return (
    <Box p={4} bg="gray.100" display="flex" justifyContent="space-between">
      <Link as={RouterLink} to="/" px={2}>
        Home
      </Link>
      <Link as={RouterLink} to="/llms" px={2}>
        LLMs
      </Link>
      <Link as={RouterLink} to="/ai-ethics" px={2}>
        AI Ethics
      </Link>
      <Link as={RouterLink} to="/robotics" px={2}>
        Robotics
      </Link>
    </Box>
  );
};

export default Navigation;
