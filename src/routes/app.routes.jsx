import React, { useContext, Suspense, lazy } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import Spinner from "../app/shared/Spinner";
import Produtos from "../pages/ProdutosPage/Produtos";

import AuthContext from "../store/auth-context";

const Dashboard = lazy(() => import("../app/dashboard/Dashboard"));
const Sale = lazy(() => import("../pages/SalePage/Sale"));
const SaleHistory = lazy(() => import("../pages/SaleHistoryPage/SaleHistory"));

const MonitorSales = lazy(() => import("../pages/MonitorSalesPage"));
const Carteira = lazy(() => import("../pages/CarteiraPage/Carteira"));
const AdicionarCarteira = lazy(() =>
  import("../pages/CarteiraPage/AdicionarCarteira/AdicionarCarteira")
);

const AgendaVendas = lazy(() => import("../pages/AgendaPage"));
const CadastroAgenda = lazy(() =>
  import("../pages/AgendaPage/NovaAgenda/CadastroAgenda")
);

const RecomendacaoVendas = lazy(() => import("../pages/RecomendacaoPage"));
const CadastroRecomendacao = lazy(() =>
  import("../pages/RecomendacaoPage/NovaRecomendacao/CadastroRecomendacao")
);

const DicaVenda = lazy(() => import("../pages/DicaVendaPage"));
const CadastroDicaVenda = lazy(() =>
  import("../pages/DicaVendaPage/NovaDicaVenda/CadastroDicaVenda")
);

const Buttons = lazy(() => import("../app/basic-ui/Buttons"));

const Dropdowns = lazy(() => import("../app/basic-ui/Dropdowns"));

const BasicElements = lazy(() => import("../app/form-elements/BasicElements"));

const BasicTable = lazy(() => import("../app/tables/BasicTable"));

const Mdi = lazy(() => import("../app/icons/Mdi"));

const ChartJs = lazy(() => import("../app/charts/ChartJs"));

const Error404 = lazy(() => import("../app/error-pages/Error404"));
const Error500 = lazy(() => import("../app/error-pages/Error500"));

const Login = lazy(() => import("../app/user-pages/Login"));
const Register1 = lazy(() => import("../app/user-pages/Register"));

const ColabManager = lazy(() => import("../pages/ColabPage"));

const AppRoutes = () => {
  const authCtx = useContext(AuthContext);
  return (
    <Suspense fallback={<Spinner />}>
      <Switch>
        <Route exact path="/sale-history" component={SaleHistory} />
        <Route exact path="/sale-page" component={Sale} />
        <Route exact path="/sale-page/{Id}" component={Sale} />
        <Route exact path="/sale-monitor" component={MonitorSales} />
        <Route exact path="/agenda-list" component={AgendaVendas} />
        <Route exact path="/agenda-list/add" component={CadastroAgenda} />
        <Route exact path="/recomendacao-list" component={RecomendacaoVendas} />
        <Route
          exact
          path="/recomendacao-list/add"
          component={CadastroRecomendacao}
        />
        <Route exact path="/produtos-list" component={Produtos} />

        <Route exact path="/colab-manager" component={ColabManager} />

        <Route
          exact
          path="/"
          component={() => <Dashboard userEmail={authCtx.email} />}
        />
        <Route
          exact
          path="/dashboard"
          component={() => <Dashboard userEmail={authCtx.email} />}
        />
        <Route path="/customer-list" exact component={Carteira} />
        <Route path="/customer-list/add" exact component={AdicionarCarteira} />

        <Route path="/dica-venda-list" exact component={DicaVenda} />
        <Route
          path="/dica-venda-list/add"
          exact
          component={CadastroDicaVenda}
        />

        <Route path="/basic-ui/buttons" component={Buttons} />
        <Route path="/basic-ui/dropdowns" component={Dropdowns} />

        <Route path="/form-Elements/basic-elements" component={BasicElements} />

        <Route path="/tables/basic-table" component={BasicTable} />

        <Route path="/icons/mdi" component={Mdi} />

        <Route path="/charts/chart-js" component={ChartJs} />

        <Route path="/user-pages/login-1" component={Login} />
        <Route path="/user-pages/register-1" component={Register1} />

        <Route path="/error-pages/error-404" component={Error404} />
        <Route path="/error-pages/error-500" component={Error500} />

        <Redirect to="/dashboard" />
      </Switch>
    </Suspense>
  );
};

export default AppRoutes;
