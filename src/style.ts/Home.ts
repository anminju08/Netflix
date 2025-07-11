import styled from "styled-components";

export const BannerButtonGroup = styled.div`
  display: flex;
  gap: 12px;
  margin-top: 20px;
`;

export const baseButtonStyle = `
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

export const BannerPlayButton = styled.a`
  ${baseButtonStyle}

  &::before {
    content: '▶';
    font-size: 1.2rem;
  }
`;

export const BannerInfoButton = styled.button`
  ${baseButtonStyle}

  &::before {
    content: 'ℹ️';
    font-size: 1.2rem;
  }
`;
export const Container = styled.div`
  background-color: black;
  color: white;
  min-height: 100vh;
  width: 100vw;
  margin: 0;
  box-sizing: border-box;
  
`;

export const Banner = styled.div`
  width: 100%;
  height: 80vh;
  position: relative;
`;

export const BannerImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 0;
`;

export const BannerOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.45);
  z-index: 1;
`;

export const BannerGradient = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 40%;
  background: linear-gradient(to bottom, rgba(0,0,0,0) 60%, rgba(0,0,0,1) 100%);
  z-index: 2;
`;

export const BannerContent = styled.div`
  position: absolute;
  bottom: 100px;
  left: 50px;
  max-width: 500px;
  z-index: 3;
`;

export const BannerTitle = styled.h1`
  font-size: 3rem;
  margin-bottom: 20px;
`;

export const BannerDescription = styled.p`
  font-size: 1.5rem;
`;

export const ContentWrapper = styled.div`
  padding: 0 40px 20px 40px;
  margin-top: -30px;
  padding-right: 60px;
  position: relative;
  z-index: 1;
`;

export const SectionTitle = styled.h2`
  margin-top: 40px; 
  margin-bottom: 10px;
  font-size: 1.5rem;
  padding-left: 20px;
`;

export const Row = styled.div`
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

export const RowContainer = styled.div`
  position: relative;
  overflow: visible;
`;

export const ScrollButton = styled.button`
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