import { useState } from 'react';
import { useRafInterval } from 'ahooks';
import cls from 'classnames';
import { BANNER_INTERVAL } from '../../common/constants';
import { BannerWrapper } from './styles';

const bannerList = [
  'https://mcnc-1305818561.cos.ap-shanghai.myqcloud.com/4k2022.png',
  'https://mcnc-1305818561.cos.ap-shanghai.myqcloud.com/7k2022.png',
  'https://mcnc-1305818561.cos.ap-shanghai.myqcloud.com/2021.png',
  'https://mcnc-1305818561.cos.ap-shanghai.myqcloud.com/2020.png',
  'https://mcnc-1305818561.cos.ap-shanghai.myqcloud.com/2019.jpg',
];

export const Banner = () => {
  const [index, setIndex] = useState<number>(0);

  useRafInterval(() => {
    setIndex((index + 1) % bannerList.length);
  }, BANNER_INTERVAL);

  return (
    <BannerWrapper>
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
    </BannerWrapper>
  );
};

