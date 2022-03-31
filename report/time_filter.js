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
  const response = timeFilter();
  return response;
}

export function timeFilter(){

  var url = `${env.Loadtest_URL}/v1/reports/learning_summary/time_filter?time_offset=28800&summary_type=live_class&org_id=${env.ORG_ID}`;
//  console.log(url);

  let res = http.get(url, defaultHeaders);

  Check(res);
//  console.log(res.body);
}