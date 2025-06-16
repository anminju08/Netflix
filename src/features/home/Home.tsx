import React from 'react';
import styled from 'styled-components';
import movie1 from "../../assets/movie1.svg";
import movie2 from "../../assets/movie2.svg";
import movie3 from "../../assets/movie3.svg";
import movie4 from "../../assets/movie4.svg";
import movie5 from "../../assets/movie5.svg";


const movieImages = [
  movie1,
  movie2,
  movie3,
  movie4,
  movie5,
];

export default function Home() {
  return (
    <Container>
      <Banner>
        <BannerContent>
          <BannerTitle>넷플릭스 오리지널</BannerTitle>
          <BannerDescription>
            이번 주 가장 인기 있는 시리즈와 영화를 만나보세요
          </BannerDescription>
        </BannerContent>
      </Banner>

      <ContentWrapper>
        <SectionTitle>한국이 만든 콘텐츠</SectionTitle>
        <Row>
          {movieImages.map((src, idx) => (
            <Thumbnail key={idx}>
              <ThumbnailImage src={src} alt={`Movie ${idx + 1}`} />
            </Thumbnail>
          ))}
        </Row>

        <SectionTitle>{}님이 시청중인 콘텐츠</SectionTitle>
        <Row>
          {movieImages.map((src, idx) => (
            <Thumbnail key={idx}>
              <ThumbnailImage src={src} alt={`Movie ${idx + 1}`} />
            </Thumbnail>
          ))}
        </Row>

        <SectionTitle>지금 뜨는 콘텐츠</SectionTitle>
        <Row>
          {movieImages.map((src, idx) => (
            <Thumbnail key={idx}>
              <ThumbnailImage src={src} alt={`Movie ${idx + 1}`} />
            </Thumbnail>
          ))}
        </Row>
      </ContentWrapper>
    </Container>
  );
}

const Container = styled.div`
  background-color: black;
  color: white;
  min-height: 100vh;
  width: 100%;
  margin: 0;
  box-sizing: border-box;
`;

const Banner = styled.div`
  width: 100%;
  height: 80vh;
  background-color: yellow;
  position: relative;
`;

const BannerContent = styled.div`
  position: absolute;
  bottom: 100px;
  left: 50px;
  max-width: 500px;
`;

const BannerTitle = styled.h1`
  font-size: 3rem;
  margin-bottom: 20px;
`;

const BannerDescription = styled.p`
  font-size: 1.5rem;
`;

const ContentWrapper = styled.div`
  padding: 20px;
  margin-top: -100px;
  position: relative;
  z-index: 1;
`;

const SectionTitle = styled.h2`
  margin-top: 20px;
  margin-bottom: 10px;
  font-size: 1.5rem;
`;

const Row = styled.div`
  display: flex;
  gap: 10px;
  overflow-x: auto;
  padding-bottom: 10px;
`;

const Thumbnail = styled.div`
  min-width: 310px;
  height: 180px;
  background-color: #333;
  border-radius: 2px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ThumbnailImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  background-color: #333;
  &:hover {
    transform: scale(1.05);
    transition: transform 0.3s ease;
  }
`; 