import React from 'react'
import Footer from '../components/footer'

export function FooterContainer() {
  return (
    <Footer>
      <Footer.Wrapper>
        <Footer.Row>
          <Footer.Column>
            <Footer.Title>Functions</Footer.Title>
            <Footer.Link href="#">Movies</Footer.Link>
            <Footer.Link href="#">Actors</Footer.Link>
            <Footer.Link href="#">Trailer</Footer.Link>
          </Footer.Column>
          <Footer.Column>
            <Footer.Title>Services</Footer.Title>
            <Footer.Link href="#">Find a Movie</Footer.Link>
            <Footer.Link href="#">Check Wishlist</Footer.Link>
          </Footer.Column>
          <Footer.Column>
            <Footer.Title>Contact Us</Footer.Title>
            <Footer.Link href="#">Privacy Policy</Footer.Link>
            <Footer.Link href="#">Career</Footer.Link>
            <Footer.Link href="#">Help</Footer.Link>
          </Footer.Column>
          <Footer.Column>
            <Footer.Title>Social</Footer.Title>
            <Footer.Link href="#">Facebook</Footer.Link>
            <Footer.Link href="#">Instagram</Footer.Link>
            <Footer.Link href="#">Youtube</Footer.Link>
            <Footer.Link href="#">Twitter</Footer.Link>
          </Footer.Column>
        </Footer.Row>
      </Footer.Wrapper>
    </Footer>
  )
}