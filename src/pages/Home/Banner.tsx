import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useInterval } from 'ahooks';
import cls from 'classnames';
import { BANNER_INTERVAL } from '../../common/constants';
import { BannerWrapper } from './styles';

const bannerList = [
  'https://mcnc-1305818561.cos.ap-shanghai.myqcloud.com/4k2022.png',
  'https://mcnc-1305818561.cos.ap-shanghai.myqcloud.com/7k2022.png',
  'https://mcnc-1305818561.cos.ap-shanghai.myqcloud.com/2021.png',
  'https://mcnc-1305818561.cos.ap-shanghai.myqcloud.com/2020.jpg',
  'https://mcnc-1305818561.cos.ap-shanghai.myqcloud.com/2019.jpg',
];

export const Banner = () => {
  const [index, setIndex] = useState<number>(0);

  useInterval(() => {
    setIndex((index + 1) % bannerList.length);
  }, BANNER_INTERVAL);

  return (
    <BannerWrapper>
      <div className="img-container">
        <Link to="/competition/current">
          {
            bannerList.map((img, i) => (
              <img
                key={img}
                className={cls('shown-img', {
                  'show': index === i,
                })}
                src={bannerList[i]}
                alt="banner"
              />
            ))
          }
          <img
            className="placeholder-img"
            src={bannerList[0]}
            alt="banner"
          />
        </Link>
      </div>
      <div className="buttons">
        {bannerList.map((img, i) => (
          <div
            key={img}
            className={cls('check-button', {
              'active': index === i,
            })}
            onClick={() => {
              setIndex(i);
            }}
          />
        ))}
      </div>
    </BannerWrapper>
  );
};

