import React, {useState} from 'react';
import Button from '@material-ui/core/Button';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import {green} from '@material-ui/core/colors';
import { AutoRotatingCarousel, Slide } from 'material-auto-rotating-carousel';
import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';
import './Facts.scss';

const AutoRotatingCarouselModal = ({ handleOpen, setHandleOpen, isMobile }) => {
    return (
      <div>
        {/* <Button onClick={() => setHandleOpen({ open: true })}>Open carousel</Button> */}
        <AutoRotatingCarousel
          label="Back"
          open={handleOpen.open}
          onClose={() => setHandleOpen({ open: false })}
          onStart={() => setHandleOpen({ open: false })}
          autoplay={false}
          mobile={isMobile}
          style={{ position: "absolute" }}
        >
          <Slide
            media={
              <img src="https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=409&q=80" alt="Fact 1 Plant"/>
            }
            mediaBackgroundStyle={{ backgroundColor: green[400] }}
            style={{ backgroundColor: green[600] }}
            title="Fact 1"
            subtitle="The earth has more than 80,000 species of edible plants."
          />
          <Slide
            media={
              <img src="https://images.unsplash.com/photo-1536147116438-62679a5e01f2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80" alt="Fact 2 Plant" />
            }
            mediaBackgroundStyle={{ backgroundColor: green[400] }}
            style={{ backgroundColor: green[600] }}
            title="Fact 2"
            subtitle="90 percent of the foods humans eat come from just 30 plants."
          />
          <Slide
            media={
              <img src="https://images.unsplash.com/photo-1514053026555-49ce8886ae41?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80" alt="Fact 3 Plant" />
            }
            mediaBackgroundStyle={{ backgroundColor: green[400] }}
            style={{ backgroundColor: green[600] }}
            title="Fact 3"
            subtitle="Nutrition doesn't factor into the crops we do mass produce."
          />
          <Slide
            media={
              <img src="https://images.unsplash.com/photo-1520412099551-62b6bafeb5bb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80" alt="Fact 4 Plant" />
            }
            mediaBackgroundStyle={{ backgroundColor: green[400] }}
            style={{ backgroundColor: green[600] }}
            title="Fact 4"
            subtitle="70,000 plant species are utilized for medicine."
          />
          <Slide
          media={
            <img src="https://images.unsplash.com/photo-1552479440-f55c5af2f2b6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=333&q=80" alt="Fact 5 Plant" />
          }
          mediaBackgroundStyle={{ backgroundColor: green[400] }}
          style={{ backgroundColor: green[600] }}
          title="Fact 5"
          subtitle="Only one percent of rainforest plants have been studied for medicinal potential."
        />             
        </AutoRotatingCarousel>
      </div>
    );
  };

export default function Facts() {
    const [handleOpen, setHandleOpen] = useState({ open: false });
    const handleClick = () => {
      setHandleOpen({ open: true });
    };
    const matches = useMediaQuery("(max-width:600px)");



    return (
        <div className="facts">
            <NavBar />
            <Button onClick={handleClick}>Click here to access the facts</Button>
            <AutoRotatingCarouselModal
              isMobile={matches}
              handleOpen={handleOpen}
              setHandleOpen={setHandleOpen}
            />
            <Footer />
        </div>
    )
}
