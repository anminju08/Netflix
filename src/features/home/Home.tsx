import styled from 'styled-components';
import movie1 from "../../assets/thumnail/movie1.svg";
import movie2 from "../../assets/thumnail/movie2.svg";
import movie3 from "../../assets/thumnail/movie3.svg";
import movie4 from "../../assets/thumnail/movie4.svg";
import movie5 from "../../assets/thumnail/movie5.svg";
import banner from "../../assets/thumnail/banner.svg";
import MovieCard from "../../components/MovieCard";

const movieImages = [
  movie1,
  movie2,
  movie3,
  movie4,
  movie5,
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
        </BannerContent>
      </Banner>

      <ContentWrapper>
      <SectionTitle>한국이 만든 콘텐츠</SectionTitle>
<Row>
  {movieImages.map((src, idx) => (
    <MovieCard
      key={`korean-${idx}`}
      src={src}
      alt={`Korean Movie ${idx + 1}`}
      title={`한국영화 ${idx + 1}`}
    />
  ))}
</Row>

<SectionTitle>어워드 수상 영화</SectionTitle>
<Row>
  {movieImages.map((src, idx) => (
    <MovieCard
      key={`korean-${idx}`}
      src={src}
      alt={`Korean Movie ${idx + 1}`}
      title={`한국영화 ${idx + 1}`}
    />
  ))}
</Row>

<SectionTitle>몰아보기 추천</SectionTitle>
<Row>
  {movieImages.map((src, idx) => (
    <MovieCard
      key={`korean-${idx}`}
      src={src}
      alt={`Korean Movie ${idx + 1}`}
      title={`한국영화 ${idx + 1}`}
    />
  ))}
</Row>

<SectionTitle>보고 또 봐도 좋은 명작</SectionTitle>
<Row>
  {movieImages.map((src, idx) => (
    <MovieCard
      key={`korean-${idx}`}
      src={src}
      alt={`Korean Movie ${idx + 1}`}
      title={`한국영화 ${idx + 1}`}
    />
  ))}
</Row>

<SectionTitle>흥미진진한 시리즈</SectionTitle>
<Row>
  {movieImages.map((src, idx) => (
    <MovieCard
      key={`korean-${idx}`}
      src={src}
      alt={`Korean Movie ${idx + 1}`}
      title={`한국영화 ${idx + 1}`}
    />
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
  padding-right:10px;
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
    overflow-x: visible;
  overflow-y: visible; 
  position: relative;  
  gap:-20xpx;
  padding: 0 40px 10px 40px;
  margin-left: -20px;
`;