import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import {
  FooterWrapper,
  FooterSocialWrapper,
  FooterSocialIcons,
  P,
} from "../elements"

export const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      facebook: file(relativePath: { eq: "socialfacebook.svg" }) {
        publicURL
      }
      twitter: file(relativePath: { eq: "socialtwitter.svg" }) {
        publicURL
      }
      linkedin: file(relativePath: { eq: "sociallinkedin.svg" }) {
        publicURL
      }
      github: file(relativePath: { eq: "socialgithub.svg" }) {
        publicURL
      }
    }
  `)
  return (
    <FooterWrapper>
      <FooterSocialWrapper>
        <FooterSocialIcons>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={data.facebook.publicURL} alt="facebook logo" />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={data.twitter.publicURL} alt="twitter logo" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={data.linkedin.publicURL} alt="linkedin logo" />
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={data.github.publicURL} alt="github logo" />
          </a>
        </FooterSocialIcons>
        <P size="xSmall" color="dark3">
          © 2021. All right reserved
        </P>
      </FooterSocialWrapper>
    </FooterWrapper>
  )
}
