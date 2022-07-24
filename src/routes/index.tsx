import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import { Home } from '../pages/Home';
import { Register } from '../pages/Register';
import { CurrentCompetition } from '../pages/CurrentCompetition';
import { StatisticSheet } from '../pages/StatisticSheet';
import { HistoryCompetition } from '../pages/HistoryCompetition';
import { UploadTryout } from '../pages/Tryout/UploadTryout';
import { Tryout } from '../pages/Tryout';
import { Layout } from './Layout';

export const Routes = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/home" component={Home} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/competition/current" component={CurrentCompetition} />
          <Route exact path="/competition/history" component={HistoryCompetition} />
          <Route exact path="/tryout/upload" component={UploadTryout} />
          <Route exact path="/tryout" component={Tryout} />
          <Route exact path="/sheet" component={StatisticSheet} />
          <Redirect to="/home" />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
};
