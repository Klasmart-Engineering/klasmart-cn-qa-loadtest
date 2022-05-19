import { sleep } from 'k6';
import http from 'k6/http';
import * as env from '../utils/env.js';
import {
  defaultHeaders,
  Check,
  Options,
  monthsTimestamp
} from '../utils/common.js';

export const options = Options;

export default function main() {
  const response = learnerMonthlyOverview();
  return response;
}

export function learnerMonthlyOverview(){
//  let range = monthsTimestamp(1) + '-' + env.S_TIME_STAMP;
  let range = '1650297600-1652947923';

  var url = `${env.Loadtest_URL}/v1/reports/learner_monthly_overview?time_range=${range}&org_id=${env.ORG_ID}`;
  console.log(url);

  let res = http.get(url, defaultHeaders);

  Check(res);
//  console.log(res.body);
}