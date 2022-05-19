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
  var url = `${env.Loadtest_URL}/v1/reports/student_usage/classes_assignments/facc1eaa-0f7c-4f97-9346-3fd945a7d4f4/unattended?org_id=${env.ORG_ID}`;
//  console.log(url);

  let data = {
  "type": "live",
  "durations": [
//    dateTimestamp(21) + '-' + dateTimestamp(14),
    "1646064000-1648742400",
    "1648742400-1651334400",
    "1651334400-1652954818"
  ]
}

//  console.log(JSON.stringify(data))
  let res = http.post(url, JSON.stringify(data), defaultHeaders);
  Check(res);
  console.log(res.body);
}



