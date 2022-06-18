import { FooterWrapper } from './styles';

export const Footer = () => {
  return (
    <FooterWrapper>
      <div className="footer-team">
        Crz Team
      </div>
      <div className="footer-power">
        powered by&nbsp;
        <a href="https://space.bilibili.com/29146366" target="_blank" rel="noreferrer">Rain7</a>&nbsp;
        <a href="https://osu.ppy.sh/users/9787146" target="_blank" rel="noreferrer">(osu id: My Angel Yukee7)</a>
        ,&nbsp;
        <a href="https://space.bilibili.com/11689809" target="_blank" rel="noreferrer">Kuit</a>&nbsp;
        <a href="https://osu.ppy.sh/users/7304075" target="_blank" rel="noreferrer">(osu id: Kuiiiiteeee)</a>&nbsp;
      </div>
      <div className="icp">
        浙ICP备2021036334号-2
      </div>
    </FooterWrapper>
  );
};
