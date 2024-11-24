// Wrapper component for Icons.
// This was needed bcuz Icons dont work with Tailwind CSS only their 'sx' styling

import React from "react";
import { Box } from "@mui/material";

// const GlobalArrow = ({ children, sx = {} }) => {
//     return (
//       <Box
//       className="group-hover:translate-x-2 transition-transform duration-300"
//         sx={{
//           color: "rgba(255, 255, 255, 0.5)",
//         //   borderRadius: "4px",
//         transition: "color 0.3s ease-in-out, transform 0.2s ease-in-out",
//         "&:group-hover": {
//             color: "rgba(254 240 138)",
//           },
//           ...sx, // Allow for custom overrides
//         }}
//       >
//         {children}
//       </Box>
//     );
//   };


{/* <KeyboardArrowRightIcon fontSize="small" className="group-hover:translate-x-8 transition ease-in-out duration-300" /> */}


const GlobalArrow = ({ children, sx = {} }) => {
    return (
        <Box
        className="group-hover:translate-x-4 transition-transform duration-300 group-hover:text-yellow-200" // Tailwind group-hover
        sx={{
            color: "rgba(255, 255, 255, 0.5)",
            borderRadius: "4px",
            transition: "color 0.3s ease-in-out, transform 0.2s ease-in-out",
            "&:hover": {
                color: "rgba(254, 240, 138)",
            },
                ...sx, // Allow additional overrides
            }}
        >
            {children}
        </Box>
    );
};

export default GlobalArrow