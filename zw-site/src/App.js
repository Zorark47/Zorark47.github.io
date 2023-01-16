import "./App.css";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";

function App() {
  return (
    <body>
      <div class="center">
        <h1>Zach Wang</h1>
        <img alt="Me!" src={require("./IMG_3557.jpg")} />
      </div>

      <div class="center">
        <h2>About Me</h2>
        <p>
          I am currently a 3rd year Computer Science student at the University
          of Virginia, with skills and experience in Python, Java, Javascript,
          C++, HTML, and CSS. I love using my computer science and programming
          skills to solve problems for clientle with diverse needs.
        </p>
      </div>

      <div>
        <h2>Portfolio</h2>
        <div class="flex-container">
          <Card sx={{ maxWidth: "15%" }}>
            <CardContent>
              <Typography variant="h5">Portfolio Website</Typography>
              <Typography color="text.secondary">2023</Typography>
              <br />
              <Typography variant="p">
                An exercise in JavaScript, React, HTML, and CSS where others can
                learn more about me
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                variant="contained"
                href="https://zorark47.github.io/"
                target="_blank"
              >
                View Website
              </Button>
              <Button
                variant="contained"
                href="https://github.com/Zorark47/Zorark47.github.io/tree/gh-pages"
                target="_blank"
              >
                View Code
              </Button>
            </CardActions>
          </Card>

          <Card sx={{ maxWidth: "15%" }}>
            <CardContent>
              <Typography variant="h5">Studdy Buddy Finder</Typography>
              <Typography color="text.secondary">2022</Typography>
              <br />
              <Typography variant="p">
                A robust Django (Python) Web App designed to help UVA students
                find study buddies in their classes
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                variant="contained"
                href="https://github.com/Zorark47/Studdy-Buddy-Project"
                target="_blank"
              >
                View Code
              </Button>
            </CardActions>
          </Card>

          <Card sx={{ maxWidth: "15%" }}>
            <CardContent>
              <Typography variant="h5">Studdy Buddy Finder</Typography>
              <Typography color="text.secondary">2021</Typography>
              <br />
              <Typography variant="p">
                My first foray into React - a simple app that retrieves wind
                turbine data from the USGS API
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                variant="contained"
                href="https://zorark47.github.io/"
                target="_blank"
              >
                View Website
              </Button>
              <Button
                variant="contained"
                href="https://github.com/Zorark47/final-project"
                target="_blank"
              >
                View Code
              </Button>
            </CardActions>
          </Card>
        </div>
      </div>

      <div>
        <h2>More Links</h2>
        <div>
          <ButtonGroup
            variant="contained"
            aria-label="outlined primary button group"
            size="large"
            class="center"
          >
            <Button
              href="https://www.linkedin.com/in/zach-wang-b89895205/"
              target="_blank"
              startIcon={<LinkedInIcon />}
            >
              LinkedIn
            </Button>
            <Button
              href="https://github.com/Zorark47"
              target="_blank"
              startIcon={<GitHubIcon />}
            >
              GitHub
            </Button>
            <Button
              href="https://drive.google.com/file/d/1bgzfZbC-1KUPgAYyKH0pPLHjRf8g12sW/view?usp=sharing"
              target="_blank"
              startIcon={<PictureAsPdfIcon />}
            >
              Resume
            </Button>
          </ButtonGroup>
        </div>
      </div>
    </body>
  );
}

export default App;
