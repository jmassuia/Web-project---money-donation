import React from 'react';
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBRow, MDBCol, MDBView, MDBIcon } from 'mdbreact';

const CardExample = () => {
  return (
    <div className="container-fluid"><MDBRow>
       <MDBCol md='4'>
        <MDBCard narrow>
          <MDBView cascade>
            <MDBCardImage
              hover
              overlay='white-slight'
              className='card-img-top'
              src='https://mdbootstrap.com/img/Photos/Lightbox/Thumbnail/img%20(147).jpg'
              alt='food'
            />
          </MDBView>

          <MDBCardBody>
            <h5 className='pink-text'>
              <MDBIcon icon='utensils' /> Culinary
            </h5>

            <MDBCardTitle className='font-weight-bold'>
              Cheat day inspirations
            </MDBCardTitle>

            <MDBCardText>
              Sed ut perspiciatis unde omnis iste natus sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam.
            </MDBCardText>

            <MDBBtn color='unique'>Button</MDBBtn>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>


      <MDBCol md='4'>
        <MDBCard narrow>
          <MDBView cascade>
            <MDBCardImage
              hover
              overlay='white-slight'
              className='card-img-top'
              src='https://mdbootstrap.com/img/Photos/Lightbox/Thumbnail/img%20(147).jpg'
              alt='food'
            />
          </MDBView>

          <MDBCardBody>
            <h5 className='pink-text'>
              <MDBIcon icon='utensils' /> Culinary
            </h5>

            <MDBCardTitle className='font-weight-bold'>
              Cheat day inspirations
            </MDBCardTitle>

            <MDBCardText>
              Sed ut perspiciatis unde omnis iste natus sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam.
            </MDBCardText>

            <MDBBtn color='unique'>Button</MDBBtn>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>

      <MDBCol md='4'>
        <MDBCard narrow>
          <MDBView cascade>
            <MDBCardImage
              hover
              overlay='white-slight'
              className='card-img-top'
              src='https://mdbootstrap.com/img/Photos/Lightbox/Thumbnail/img%20(147).jpg'
              alt='food'
            />
          </MDBView>

          <MDBCardBody>
            <h5 className='pink-text'>
              <MDBIcon icon='utensils' /> Culinary
            </h5>

            <MDBCardTitle className='font-weight-bold'>
              Cheat day inspirations
            </MDBCardTitle>

            <MDBCardText>
              Sed ut perspiciatis unde omnis iste natus sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam.
            </MDBCardText>

            <MDBBtn color='unique'>Button</MDBBtn>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>

    </MDBRow></div>
  )
}

export default CardExample;