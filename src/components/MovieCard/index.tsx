import React, { useState } from 'react';
import styled from 'styled-components';

interface MovieCardProps {
  src: string;
  alt: string;
  title: string;
}

const MovieCard: React.FC<MovieCardProps> = ({ src, alt, title }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <Wrapper
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <BaseThumbnail>
        <img src={src} alt={alt} />
      </BaseThumbnail>

      {hovered && (
        <ExpandedCard>
          <PreviewImage src={src} alt={alt} />
          <Title>{title}</Title>
          <Controls>
            <CircleButton>▶</CircleButton>
            <CircleButton>＋</CircleButton>
            <CircleButton>👍</CircleButton>
          </Controls>
          <ProgressText>총 115분 중 4분</ProgressText>
        </ExpandedCard>
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

const ExpandedCard = styled.div`
  position: absolute;
  top: -120px;
  left: 0;
  width: 340px;
  height: 280px;
  background: #181818;
  border-radius: 4px;
  padding: 16px;
  z-index: 100;
  transition: all 0.3s ease;
`;

const PreviewImage = styled.img`
  width: 100%;
  height: 150px;
  object-fit: cover;
  border-radius: 4px;
`;

const Title = styled.h3`
  margin-top: 12px;
  color: white;
  font-size: 1.2rem;
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

const ProgressText = styled.div`
  font-size: 0.8rem;
  color: #aaa;
  margin-top: 10px;
`;