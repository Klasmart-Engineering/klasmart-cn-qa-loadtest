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
  var url = `${env.Loadtest_URL}/v1/reports/teachers/17a28338-3b88-4bac-ab15-cce3887af357?&org_id=${env.ORG_ID}`;
//  console.log(url);

  let res = http.get(url, defaultHeaders);

  Check(res);
//  console.log(res.body);
}

