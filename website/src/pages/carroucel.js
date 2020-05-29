import React from "react";
import { MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBView, MDBContainer } from
"mdbreact";

const CarouselPage = () => {
  return (
    <MDBContainer>
      <MDBCarousel
        activeItem={1}
        length={3}
        showControls={true}
        showIndicators={true}
        className="z-depth-1"
      >
        <MDBCarouselInner>
          <MDBCarouselItem itemId="1">
            <MDBView>
              <webviewm
                className="d-block w-100 embed-responsive embed-responsive-21by9"
               
                alt="First slide"
              
                />
               <iframe className="embed-responsive-item d-block w-100 d-block h-800 " 
               src="https://www.youtube.com/embed/WKN701td5mQ" frameborder="0" 
               allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"/>
                     


            </MDBView>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="2">
            <MDBView>
            <iframe className="embed-responsive-item d-block w-100 d-block h-800 " 
               src="https://www.youtube.com/embed/WKN701td5mQ" frameborder="10" 
               allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"/>

            </MDBView>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="3">
            <MDBView>
              <img
                className="d-block w-100 "
                src="https://mdbootstrap.com/img/Photos/Slides/img%20(70).jpg"
                alt="Third slide"
              />
            </MDBView>
          </MDBCarouselItem>
        </MDBCarouselInner>
      </MDBCarousel>
    </MDBContainer>
  );
}

export default CarouselPage;