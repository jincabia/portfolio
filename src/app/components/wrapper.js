// Wrapper component for Icons.
// This was needed bcuz Icons dont work with Tailwind CSS only their 'sx' styling

import React from "react";
import { Box } from "@mui/material";

const GlobalIcon = ({ children, sx = {} }) => {
    return (
      <Box
        sx={{
          color: "rgba(255, 255, 255, 0.5)",
        //   opacity: 0.5,
          borderRadius: "4px",
          transition: "color 0.3s ease-in-out, transform 0.2s ease-in-out",
          "&:hover": {
            color: "rgba(254 240 138)",
            transform: "scale(1.25)",
          },
          ...sx, // Allow for custom overrides
        }}
      >
        {children}
      </Box>
    );
  };

export default GlobalIcon

// sx={{
//       color: "rgba(255, 255, 255, 0.5)", // White with 50% opacity                   
//       opacity: 0.5,
//       borderRadius: "4px", // Equivalent to `rounded-md`
//       transition: "color 0.3s ease-in-out, transform 0.2s ease-in-out",
//       "&:hover": {
//         transform: "scale(1.25)",
//         color: "rgba(254 240 138)",
//       },
//     }}