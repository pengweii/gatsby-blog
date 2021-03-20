import React from "react"
import { Container, FeatureImage, Content, ContentCard } from "../components"

const IndexPage = () => {
  return (
    <Container>
      <FeatureImage />
      <Content>
        <ContentCard
          date="2021-3-19"
          title="Hello this is title"
          excerpt="Hello this is title Hello this is title Hello this is title"
          slug="/test"
        />
      </Content>
    </Container>
  )
}
export default IndexPage
