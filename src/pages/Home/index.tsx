import { useState } from 'react';
import { useBoolean, useInfiniteScroll, useRequest } from 'ahooks';
import { Button, Snackbar } from '@mui/material';
import { REGISTER_LINK } from '../../common/constants';
import { ConfigKeys } from '../../common/config-keys';
import { openTab } from '../../utils/open-tab';
import { useSwitchConfig } from '../../hooks/useConfig';
import { getVideoLink } from '../../services/requests/get-video-link';
import { VideoList } from './VideoList';
import { Banner } from './Banner';
import { HomePage } from './styles';

export function Home() {
  const [open, { setTrue, setFalse }] = useBoolean();
  const [message, setMessage] = useState('');
  const enableRegister = useSwitchConfig(ConfigKeys.ENABLE_REGISTERING);

  const { data } = useRequest(
    getVideoLink,
    {
      onError(err) {
        setTrue();
        setMessage(String(err));
      },
    },
  );

  const { data: list, loadMore, noMore } = useInfiniteScroll(
    (currentData) => {
      if (!data) {
        return Promise.resolve({
          list: [],
          next: -1,
          prev: -1,
          total: 0,
        });
      }

      const total = data?.length;
      const pageSize = 5;
      const next = currentData?.next ?? 1;
      const prev = currentData?.prev ?? 0;
      const prevIndex = prev * pageSize;
      const nextIndex = Math.min(next * pageSize, total);
      const nextData = [...data].slice(prevIndex, nextIndex);

      return Promise.resolve({
        next: nextIndex === total ? -1 : next + 1,
        prev: prev + 1,
        list: nextData,
        total,
      });
    },
    {
      reloadDeps: [data],
      isNoMore: (data) => data?.next === -1,
    },
  );

  return (
    <HomePage>
      <Snackbar
        autoHideDuration={3000}
        open={open}
        message={message}
        onClose={setFalse}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      />
      <Banner />
      {enableRegister && (
        <Button
          className="register-button"
          disableElevation
          variant="contained"
          size="medium"
          onClick={() => {
            openTab(REGISTER_LINK);
          }}
        >
          报名链接
        </Button>
      )}
      <div className="recent-video">近期视频</div>
      {list && <VideoList videos={list?.list} />}
      {noMore
        ? (
          <div className="no-more-hint">
            已经到底了~
          </div>
        )
        : (
          <Button
            className="load-more-button"
            disableElevation
            variant="contained"
            size="small"
            onClick={() => {
              loadMore();
            }}
          >
            加载更多
          </Button>
        )}
    </HomePage>
  );
}
