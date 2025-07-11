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
import {
  BannerButtonGroup,
  baseButtonStyle,
  BannerPlayButton,
  BannerInfoButton,
  Container,
  Banner,
  BannerImage,
  BannerOverlay,
  BannerGradient,
  BannerContent,
  BannerTitle,
  BannerDescription,
  ContentWrapper,
  SectionTitle,
  Row,
  RowContainer,
  ScrollButton
} from "../../style.ts/Home";
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
