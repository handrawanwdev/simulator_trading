import { FC } from "react";
import { useIntl } from "react-intl";
import { toAbsoluteUrl } from "../../../_metronic/helpers";
import { PageTitle } from "../../../_metronic/layout/core";
import {
  ListsWidget2,
  ListsWidget3,
  ListsWidget4,
  ListsWidget6,
  TablesWidget5,
  TablesWidget10,
  MixedWidget8,
  CardsWidget7,
  CardsWidget17,
  CardsWidget20,
  ListsWidget26,
  EngageWidget10,
} from "../../../_metronic/partials/widgets";
import { ToolbarWrapper } from "../../../_metronic/layout/components/toolbar";
import { Content } from "../../../_metronic/layout/components/content";
import { KTIcon } from "../../../_metronic/helpers";

import "./DashboardWrapper.css";

const DashboardPage: FC = () => (
  <>
    <ToolbarWrapper />
    <Content>
      <div className="row">
        <div className="col-lg-6 col-xxl-4">
          <div className="card">
            <div className="card-header">
              <h3 className="card-title">Pasangan Kripto</h3>
            </div>
            <div className="card-body">
              <div className="row">
                <div className="col-4">
                  <div className="fw-bolder text-gray-900">Pair</div>
                </div>
                <div className="col-4">
                  <div className="fw-bolder text-gray-900">Harga</div>
                </div>
                <div className="col-4">
                  <div className="fw-bolder text-gray-900">% Change (24h)</div>
                </div>
              </div>

              <div className="pair-crypto">
                <a href="#BTCUSDT" className="text-dark text-hover-primary">
                  <div className="row mt-3">
                    <div className="col-4">
                      <div className="text-gray-900">BTC/USDT</div>
                    </div>
                    <div className="col-4">
                      <div className="text-gray-900">
                        <span className="text-danger">$45,313</span>
                      </div>
                    </div>
                    <div className="col-4">
                      <div className="text-gray-900">
                        <span className="text-success">+2.5%</span>
                      </div>
                    </div>
                  </div>
                </a>
                <a href="#ETHUSDT" className="text-dark text-hover-primary">
                  <div className="row mt-3">
                    <div className="col-4">
                      <div className="text-gray-900">ETH/USDT</div>
                    </div>
                    <div className="col-4">
                      <div className="text-gray-900">
                        <span className="text-success">$3,313</span>
                      </div>
                    </div>
                    <div className="col-4">
                      <div className="text-gray-900">
                        <span className="text-danger">-2.5%</span>
                      </div>
                    </div>
                  </div>
                </a>
                <a href="#TRXUSDT" className="text-dark text-hover-primary">
                  <div className="row mt-3">
                    <div className="col-4">
                      <div className="text-gray-900">TRX/USDT</div>
                    </div>
                    <div className="col-4">
                      <div className="text-gray-900">
                        <span className="text-success">$0,1313</span>
                      </div>
                    </div>
                    <div className="col-4">
                      <div className="text-gray-900">
                        <span className="text-danger">-2.5%</span>
                      </div>
                    </div>
                  </div>
                </a>
                <a href="#BNBUSDT" className="text-dark text-hover-primary">
                  <div className="row mt-3">
                    <div className="col-4">
                      <div className="text-gray-900">BNB/USDT</div>
                    </div>
                    <div className="col-4">
                      <div className="text-gray-900">
                        <span className="text-success">$313</span>
                      </div>
                    </div>
                    <div className="col-4">
                      <div className="text-gray-900">
                        <span className="text-danger">-2.5%</span>
                      </div>
                    </div>
                  </div>
                </a>
                <a href="#ADAUSDT" className="text-dark text-hover-primary">
                  <div className="row mt-3">
                    <div className="col-4">
                      <div className="text-gray-900">ADA/USDT</div>
                    </div>
                    <div className="col-4">
                      <div className="text-gray-900">
                        <span className="text-success">$1,313</span>
                      </div>
                    </div>
                    <div className="col-4">
                      <div className="text-gray-900">
                        <span className="text-danger">-2.5%</span>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Content>
  </>
);

const DashboardWrapper: FC = () => {
  const intl = useIntl();
  return (
    <>
      <DashboardPage />
    </>
  );
};

export { DashboardWrapper };
