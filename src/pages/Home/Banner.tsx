import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useInterval } from 'ahooks';
import cls from 'classnames';
import { BANNER_INTERVAL } from '../../common/constants';
import { useConfig } from '../../hooks/useConfig';
import { ConfigKeys } from '../../common/config-keys';
import { isJson } from '../../utils/is-json';
import { BannerWrapper } from './styles';

export const useBannerList = () => useConfig(ConfigKeys.BANNER, (value): string[] => {
  if (isJson(value)) {
    const json = JSON.parse(value);
    return Array.isArray(json) ? json : [];
  }
  return [];
});

export const Banner = () => {
  const bannerList = useBannerList();
  const [index, setIndex] = useState<number>(0);

  const bannerLength = bannerList.length;
  useInterval(() => {
    setIndex((index + 1) % bannerLength);
  }, BANNER_INTERVAL);

  if (bannerLength <= 0) {
    return null;
  }

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

