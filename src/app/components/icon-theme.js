import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  components: {
    MuiSvgIcon: {
      styleOverrides: {
        root: {
        color: "rgba(255, 255, 255, 0.5)",          
        opacity: 0.5,
          borderRadius: "4px",
          transition: "color 0.3s ease-in-out, transform 0.3s ease-in-out",
          "&:hover": {
            color: "rgba(254 240 138)",
            transform: "scale(1.25)",
          },
        },
      },
    },
  },
});

export default theme;
