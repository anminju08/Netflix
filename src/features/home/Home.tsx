import styled from 'styled-components';
import movie1 from "../../assets/thumnail/movie1.svg";
import movie2 from "../../assets/thumnail/movie2.svg";
import movie3 from "../../assets/thumnail/movie3.svg";
import movie4 from "../../assets/thumnail/movie4.svg";
import movie5 from "../../assets/thumnail/movie5.svg";
import movie6 from "../../assets/thumnail/movie6.svg";
import movie7 from "../../assets/thumnail/movie7.svg";
import movie8 from "../../assets/thumnail/movie8.svg";
import banner from "../../assets/thumnail/banner.svg";
import MovieCard from "../../components/MovieCard";

const movieImages = [
  movie1,
  movie2,
  movie3,
  movie4,
  movie5,
  movie6,
  movie7,
  movie8,

];

const banneres = banner;

export default function Home() {
  return (
    <Container>
      <Banner>
        <BannerImage src={banneres} alt="배너" />
        <BannerOverlay />
        <BannerGradient />
        <BannerContent>
          <BannerTitle>넷플릭스 오리지널</BannerTitle>
          <BannerDescription>
            이번 주 가장 인기 있는 시리즈와 영화를 만나보세요
          </BannerDescription>
          <BannerButtonGroup>
  <BannerPlayButton
    href="https://www.youtube.com/watch?v=1gfBxtwic-0"
    target="_blank"
    rel="noopener noreferrer"
  >
    재생
  </BannerPlayButton>

  <BannerInfoButton>
    상세정보
  </BannerInfoButton>
</BannerButtonGroup>
        </BannerContent>
      </Banner>

      <ContentWrapper>
      <SectionTitle>한국이 만든 콘텐츠</SectionTitle>
      <RowContainer>
        <Row className="movie-row">
          {movieImages.map((src, idx) => (
            <MovieCard
              key={`korean-${idx}`}
              src={src}
              alt={`Korean Movie ${idx + 1}`}
              title={`한국영화 ${idx + 1}`}
            />
          ))}
        </Row>
        <ScrollButton onClick={() => {
          const row = document.querySelector('.movie-row') as HTMLElement;
          if (row) {
            row.scrollBy({ left: 300, behavior: 'smooth' });
          }
        }}>
          &gt;
        </ScrollButton>
      </RowContainer>

      <SectionTitle>어워드 수상 영화</SectionTitle>
      <RowContainer>
        <Row className="award-row">
          {movieImages.map((src, idx) => (
            <MovieCard
              key={`award-${idx}`}
              src={src}
              alt={`Award Movie ${idx + 1}`}
              title={`어워드 영화 ${idx + 1}`}
            />
          ))}
        </Row>
        <ScrollButton onClick={() => {
          const row = document.querySelector('.award-row') as HTMLElement;
          if (row) {
            row.scrollBy({ left: 300, behavior: 'smooth' });
          }
        }}>
          &gt;
        </ScrollButton>
      </RowContainer>

      <SectionTitle>몰아보기 추천</SectionTitle>
      <RowContainer>
        <Row className="binge-row">
          {movieImages.map((src, idx) => (
            <MovieCard
              key={`binge-${idx}`}
              src={src}
              alt={`Binge Movie ${idx + 1}`}
              title={`몰아보기 ${idx + 1}`}
            />
          ))}
        </Row>
        <ScrollButton onClick={() => {
          const row = document.querySelector('.binge-row') as HTMLElement;
          if (row) {
            row.scrollBy({ left: 300, behavior: 'smooth' });
          }
        }}>
          &gt;
        </ScrollButton>
      </RowContainer>

      <SectionTitle>보고 또 봐도 좋은 명작</SectionTitle>
      <RowContainer>
        <Row className="classic-row">
          {movieImages.map((src, idx) => (
            <MovieCard
              key={`classic-${idx}`}
              src={src}
              alt={`Classic Movie ${idx + 1}`}
              title={`명작 ${idx + 1}`}
            />
          ))}
        </Row>
        <ScrollButton onClick={() => {
          const row = document.querySelector('.classic-row') as HTMLElement;
          if (row) {
            row.scrollBy({ left: 300, behavior: 'smooth' });
          }
        }}>
          &gt;
        </ScrollButton>
      </RowContainer>

      <SectionTitle>내가 찜한 컨텐츠</SectionTitle>
      <RowContainer>
        <Row className="classic-row">
          {movieImages.map((src, idx) => (
            <MovieCard
              key={`classic-${idx}`}
              src={src}
              alt={`Classic Movie ${idx + 1}`}
              title={`명작 ${idx + 1}`}
            />
          ))}
        </Row>
        <ScrollButton onClick={() => {
          const row = document.querySelector('.classic-row') as HTMLElement;
          if (row) {
            row.scrollBy({ left: 300, behavior: 'smooth' });
          }
        }}>
          &gt;
        </ScrollButton>
      </RowContainer>
      </ContentWrapper>
    </Container>
  );
}

const BannerButtonGroup = styled.div`
  display: flex;
  gap: 12px;
  margin-top: 20px;
`;

const baseButtonStyle = `
  background-color: white;
  color: black;
  font-weight: bold;
  font-size: 1.2rem;
  padding: 10px 24px;
  border-radius: 4px;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  text-decoration: none;
  transition: background-color 0.3s ease;
  border: none;

  &:hover {
    background-color: rgba(255, 255, 255, 0.75);
  }
`;

const BannerPlayButton = styled.a`
  ${baseButtonStyle}

  &::before {
    content: '▶';
    font-size: 1.2rem;
  }
`;

const BannerInfoButton = styled.button`
  ${baseButtonStyle}

  &::before {
    content: 'ℹ️';
    font-size: 1.2rem;
  }
`;
const Container = styled.div`
  background-color: black;
  color: white;
  min-height: 100vh;
  width: 100vw;
  margin: 0;
  box-sizing: border-box;
  
`;

const Banner = styled.div`
  width: 100%;
  height: 80vh;
  position: relative;
`;

const BannerImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 0;
`;

const BannerOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.45);
  z-index: 1;
`;

const BannerGradient = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 40%;
  background: linear-gradient(to bottom, rgba(0,0,0,0) 60%, rgba(0,0,0,1) 100%);
  z-index: 2;
`;

const BannerContent = styled.div`
  position: absolute;
  bottom: 100px;
  left: 50px;
  max-width: 500px;
  z-index: 3;
`;

const BannerTitle = styled.h1`
  font-size: 3rem;
  margin-bottom: 20px;
`;

const BannerDescription = styled.p`
  font-size: 1.5rem;
`;

const ContentWrapper = styled.div`
  padding: 0 40px 20px 40px;
  margin-top: -30px;
  padding-right: 60px;
  position: relative;
  z-index: 1;
`;

const SectionTitle = styled.h2`
  margin-top: 40px; 
  margin-bottom: 10px;
  font-size: 1.5rem;
  padding-left: 20px;
`;

const Row = styled.div`
  display: flex;
  overflow-x: auto;
  overflow-y:  visible;
  position: relative;
  gap: -8px;
  padding: 0 0 10px 20px;
  margin-left: 0;
  scrollbar-width: thin;
  scrollbar-color: #888 #222;
  &::-webkit-scrollbar {
    height: 8px;
  }
  &::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 4px;
  }
  &::-webkit-scrollbar-track {
    background: #222;
  }
`;

const RowContainer = styled.div`
  position: relative;
  overflow: visible;
`;

const ScrollButton = styled.button`
  position: absolute;
  top: 50%;
  right: -40px;
  transform: translateY(-50%);
  background: none;
  border: none;
  font-size: 2rem;
  color: white;
  cursor: pointer;
  opacity: 0.5;
  transition: opacity 0.3s ease;
  z-index: 10;

  &:hover {
    opacity: 1;
  }
`;