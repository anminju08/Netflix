import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';

interface MovieCardProps {
  src: string;
  alt: string;
  title: string;
}

const MovieCard: React.FC<MovieCardProps> = ({ src, alt }) => {
  const [hovered, setHovered] = useState(false);
  const [cardPos, setCardPos] = useState<{top: number, left: number} | null>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (hovered && wrapperRef.current) {
      const rect = wrapperRef.current.getBoundingClientRect();
      let left = rect.left + window.scrollX;
      if (left + 500 > window.innerWidth) {
        left = window.innerWidth - 500 - 16; 
      }
      setCardPos({
        top: rect.top - 350,
        left,
      });
    }
  }, [hovered]);

  return (
    <Wrapper
      ref={wrapperRef}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <BaseThumbnail>
        <img src={src} alt={alt} />
      </BaseThumbnail>

      {hovered && cardPos && (
        <ExpandedCardFixed style={{ top: cardPos.top, left: cardPos.left }}>
          <PreviewImage src={src} alt={alt} />
          <Controls>
            <CircleButton1
    href="https://www.youtube.com/watch?v=1gfBxtwic-0"
    target="_blank"
    rel="noopener noreferrer"
  >▶</CircleButton1>
            <CircleButton>＋</CircleButton>
            <CircleButton>👍</CircleButton>
          </Controls>
          <ProgressText>총 115분 중 4분</ProgressText>
          <ProgressBarWrapper>
  <ProgressFilled style={{ width: '20%' }} /> 
</ProgressBarWrapper>
        </ExpandedCardFixed>
      )}
    </Wrapper>
  );
};

export default MovieCard;

const Wrapper = styled.div`
  position: relative;
  min-width: 280px;
  height: 160px;
  margin-right: 16px;
  overflow: visible;  
  z-index: 1;

  &:hover {
    z-index: 20;
  }
`;

const BaseThumbnail = styled.div`
  width: 100%;
  height: 100%;
  background-color: #222;
  border-radius: 6px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;


const ExpandedCardFixed = styled.div`
  position: fixed;
  width: 330px;
  height:360px;
  background: #181818;
  border-radius: 4px;
  overflow: hidden;
  z-index: 1000;
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.6);
  transition: all 0.3s ease;
`;

const PreviewImage = styled.img`
  width: 100%;
  height: 150px;
  object-fit: cover;
  display: block;
`;


const Controls = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 12px;
`;

const CircleButton = styled.button`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: #fff;
  border: none;
  font-size: 1rem;
  cursor: pointer;
`;
const CircleButton1 = styled.a`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: #fff;
  border: none;
  font-size: 1rem;
  cursor: pointer;
`;

const ProgressText = styled.div`
  font-size: 0.8rem;
  color: #aaa;
  margin-top: 10px;
`;
const ProgressBarWrapper = styled.div`
  width: 100%;
  height: 4px;
  background-color: #333;
  border-radius: 2px;
  margin-top: 10px;
  overflow: hidden;
`;

const ProgressFilled = styled.div`
  height: 100%;
  background-color: red;
  width: 0%;
  transition: width 0.3s ease;
`;