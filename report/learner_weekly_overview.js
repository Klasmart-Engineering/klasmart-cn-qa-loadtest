import { sleep } from 'k6';
import http from 'k6/http';
import * as env from '../utils/env.js';
import {
  defaultHeaders,
  Check,
  Options,
  dateTimestamp
} from '../utils/common.js';

export const options = Options;

export default function main() {
  const response = learnerWeeklyOverview();
  return response;
}

export function learnerWeeklyOverview(){
//  var url = `${env.Loadtest_URL}/v1/reports/learner_weekly_overview?time_range=${dateTimestamp(7)}-${env.S_TIME_STAMP}&org_id=${env.ORG_ID}`;
  var url = `${env.Loadtest_URL}/v1/reports/learner_weekly_overview?time_range=1646841600-1652949129&org_id=${env.ORG_ID}`;
//  console.log(url);
  let res = http.get(url, defaultHeaders);
  Check(res);
//  console.log(res.body);
}