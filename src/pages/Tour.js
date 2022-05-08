import { BottomNavigation, Paper, Box, Typography } from "@mui/material";
import Container from "@mui/material/Container";
import CustomizedAccordions from "../components/Accordion";
import ImageCollage from "../components/ImageCollage";
import BasicModal from "../components/Modal";

const Tour = () => 
   <Container sx={{ width: 900 }}>
      <Typography variant="h3" component="h1" marginTop={3}>
         Explore the World in Vegas
      </Typography>
      <Box marginTop={3} sx={{ display: "flex" }}>
         <img src="https://media.timeout.com/images/105124791/750/422/image.jpg" alt="Image of the Las Vegas strip." height={325} />
         <ImageCollage />
      </Box>
      <Box>
         <Typography variant="h6" component="h4" marginTop={3}>
            About this ticket
         </Typography>
         <Typography variant="paragraph" component="p" marginTop={3}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eleifend porta nunc, et tempor purus ultricies nec. In dictum mauris eu aliquam efficitur. Quisque nec urna et quam mattis tristique. Aliquam quis orci lacus. Morbi a cursus sapien. Curabitur vitae.
         </Typography>
      </Box>
      <Box marginBottom={10}>
         <Typography variant="h6" component="h4" marginTop={3} marginBottom={2}>
            Frequently Asked Questions
         </Typography>
         <CustomizedAccordions />
      </Box>
      <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
         <BottomNavigation showLabels>
            <BasicModal />
         </BottomNavigation>
      </Paper>
   </Container>;

export default Tour;