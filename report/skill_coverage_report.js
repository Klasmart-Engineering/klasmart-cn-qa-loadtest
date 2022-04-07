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
  const response = skillCoverageReport();
  return response;
}

export function skillCoverageReport(){
  var url = `${env.Loadtest_URL}/v1/reports/teachers/2b6f5510-0342-471c-8aea-92291f66610b?&org_id=${env.ORG_ID}`;
//  console.log(url);

  let res = http.get(url, defaultHeaders);

  Check(res);
//  console.log(res.body);
}

