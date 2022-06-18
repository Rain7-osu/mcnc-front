import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import { Home } from '../pages/Home';
import { Register } from '../pages/Register';
import { CurrentCompetition } from '../pages/CurrentCompetition';
import { StatisticSheet } from '../pages/StatisticSheet';
import { HistoryCompetition } from '../pages/HistoryCompetition';
import { Layout } from './Layout';

export const Routes = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/register" component={Register} />
          <Route path="/competition/current" component={CurrentCompetition} />
          <Route path="/competition/history" component={HistoryCompetition} />
          <Route path="/sheet" component={StatisticSheet} />
          <Redirect to="/home" />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
};
