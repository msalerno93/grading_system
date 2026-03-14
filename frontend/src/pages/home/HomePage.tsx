import { Box, Typography, Card, CardActionArea } from "@mui/material";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <Box
      sx={{
        textAlign: "center",
        paddingTop: "60px",
        fontFamily: "Poppins, sans-serif",
      }}
    >
      {/* Title */}
      <Typography
        variant="h2"
        sx={{
          fontWeight: 900,
          color: "#ff5353",
          fontSize: "3rem",
          letterSpacing: "1px",
          marginBottom: "40px",
        }}
      >
        Welcome to our Grading System!
      </Typography>

      {/* Tile Container */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: "40px",
          flexWrap: "wrap",
          marginTop: "20px",
        }}
      >
        {/* Teachers Tile */}
        <Card
          sx={{
            width: 220,
            borderRadius: "18px",
            boxShadow: "0 6px 18px rgba(0,0,0,0.15)",
            background: "linear-gradient(135deg, #ff8a00, #e52e71)",
            color: "#fff",
            transition: "0.3s ease",
            "&:hover": {
              transform: "scale(1.05)",
              boxShadow: "0 8px 22px rgba(0,0,0,0.25)",
            },
          }}
        >
          <CardActionArea component={Link} to="/teachers">
            <Box sx={{ padding: "30px 10px" }}>
              <Typography sx={{ fontSize: "3rem" }}>👩‍🏫</Typography>
              <Typography
                variant="h5"
                sx={{
                  fontWeight: 700,
                  marginTop: "10px",
                  fontFamily: "Poppins, sans-serif",
                }}
              >
                Teachers
              </Typography>
            </Box>
          </CardActionArea>
        </Card>

        {/* Subjects Tile */}
        <Card
          sx={{
            width: 220,
            borderRadius: "18px",
            boxShadow: "0 6px 18px rgba(0,0,0,0.15)",
            background: "linear-gradient(135deg, #ff8a00, #e52e71)",
            color: "#fff",
            transition: "0.3s ease",
            "&:hover": {
              transform: "scale(1.05)",
              boxShadow: "0 8px 22px rgba(0,0,0,0.25)",
            },
          }}
        >
          <CardActionArea component={Link} to="/subjects">
            <Box sx={{ padding: "30px 10px" }}>
              <Typography sx={{ fontSize: "3rem" }}>📚</Typography>
              <Typography
                variant="h5"
                sx={{
                  fontWeight: 700,
                  marginTop: "10px",
                  fontFamily: "Poppins, sans-serif",
                }}
              >
                Subjects
              </Typography>
            </Box>
          </CardActionArea>
        </Card>

        {/* Students Tile */}
        <Card
          sx={{
            width: 220,
            borderRadius: "18px",
            boxShadow: "0 6px 18px rgba(0,0,0,0.15)",
            background: "linear-gradient(135deg, #ff8a00, #e52e71)",
            color: "#fff",
            transition: "0.3s ease",
            "&:hover": {
              transform: "scale(1.05)",
              boxShadow: "0 8px 22px rgba(0,0,0,0.25)",
            },
          }}
        >
          <CardActionArea component={Link} to="/students">
            <Box sx={{ padding: "30px 10px" }}>
              <Typography sx={{ fontSize: "3rem" }}>🎓</Typography>
              <Typography
                variant="h5"
                sx={{
                  fontWeight: 700,
                  marginTop: "10px",
                  fontFamily: "Poppins, sans-serif",
                }}
              >
                Students
              </Typography>
            </Box>
          </CardActionArea>
        </Card>
      </Box>
    </Box>
  );
};

export default HomePage;
