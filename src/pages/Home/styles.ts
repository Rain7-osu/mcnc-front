import styled from 'styled-components';

export const BannerWrapper = styled.div`
  width: 100%;
  position: relative;
  
  .img-container {
    width: 100%;
    position: relative;

    img.shown-img {
      width: 100%;
      position: absolute;
      top: 0;
      background-size: 100% 100%;
      transition: opacity .5s ease-out;
      opacity: 0;

      &.show {
        opacity: 1;
      }
    }

    img.placeholder-img {
      width: 100%;
      opacity: 0;
    }
  }
  
  .buttons {
    display: flex;
    justify-content: center;
    gap: 10px;
    margin-top: 20px;
    
    .check-button {
      width: 10px;
      height: 10px;
      background-color: #a0a0a0;
      border-radius: 5px;
      
      &.active {
        background-color: #e9e9e9;
      }
      
      &:hover {
        background-color: #ffffff;
        cursor: pointer;
      }
    }
  }
`;

export const HomePage = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #24222a;
  margin-top: 20px;
  padding: 20px;
  box-sizing: border-box;
  
  .register-button {
    margin-top: 80px;
    color: #c2b8e0;
    background-color: #302e38;
    width: 100%;
    height: 64px;
    line-height: 64px;
    text-align: center;
    font-size: 28px;
    font-family: var(--osu-default-font);
    
    &:hover {
      color: #ffffff;
      background-color: #302e38;
    }
  }

  .load-more-button {
    margin-top: 80px;
    color: #c2b8e0;
    background-color: #302e38;
    width: 100%;
    height: 64px;
    line-height: 64px;
    text-align: center;
    font-size: 22px;
    font-family: var(--osu-default-font);

    &:hover {
      color: #ffffff;
      background-color: #302e38;
    }
  }
  
  .recent-video {
    color: #fff;
    font-size: 24px;
    margin: 80px 0 20px;
  }
  
  .no-more-hint {
    color: #ffffff;
  }
  
  .video-list {
    width: 100%;
    box-sizing: border-box;

    display: flex;
    flex-direction: column;
    
    .video-item {
      align-items: center;
      
      /* 设置宽高比例 */
      width: 100%;
      position: relative;
      height: 0;
      padding-bottom: 56%;
      margin: 20px 0;
      
      iframe {
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
      }
    }
  }
`;
