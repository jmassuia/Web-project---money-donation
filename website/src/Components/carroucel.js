import React from "react";
import { MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBView, MDBContainer } from
"mdbreact";

const CarouselPage = () => {
  return (
   <div className="container-fluid" > <MDBContainer>
      <MDBCarousel
        activeItem={1}
        length={3}
        showControls={true}
        showIndicators={false}
        className="z-depth-1"
        slide
      >
        <MDBCarouselInner>
          <MDBCarouselItem itemId="1">
            <MDBView>
              <iframe width="100%" height="620" src="https://www.youtube.com/embed/WKN701td5mQ" frameborder="0"
             allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen   
             
             alt="Second slide" />
            </MDBView>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="2">
            <MDBView>
            <iframe width="100%" height="620" src="https://www.youtube.com/embed/WKN701td5mQ" frameborder="0"
             allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen   
             
             alt="Second slide" />
            </MDBView>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="3">
            <MDBView>
            <iframe width="100%" height="620" src="https://www.youtube.com/embed/WKN701td5mQ" frameborder="0"
             allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen   
             
             alt="Second slide" />
            </MDBView>
          </MDBCarouselItem>
        </MDBCarouselInner>
      </MDBCarousel>
    </MDBContainer>
    </div>
    
  );
}

export default CarouselPage;