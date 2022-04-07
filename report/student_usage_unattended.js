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
  const response = studentUsageUnattended();
  return response;
}

export function studentUsageUnattended(){
  var url = `${env.Loadtest_URL}/v1/reports/student_usage/classes_assignments/bae3617d-8bbc-4253-b397-1d597340c7b9/unattende?org_id=${env.ORG_ID}`;
  let data = {
    // type: live, study, home_fun
      "type": "live",
      "durations": [
        dateTimestamp(21) + '-' + dateTimestamp(14),
        dateTimestamp(14) + '-' + dateTimestamp(7),
        dateTimestamp(7) + '-' + env.S_TIME_STAMP
      ]
    }

//  console.log(JSON.stringify(data))
  let res = http.post(url, JSON.stringify(data), defaultHeaders);
  Check(res);
//  console.log(res.body);
}