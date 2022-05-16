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
  const response = liveClasses();
  return response;
}

export function liveClasses(){

  var url = `${env.Loadtest_URL}/v1/reports/learning_summary/outcomes?assessment_id=61f39c4fda9f846f258c3923&student_id=537e703d-4b53-4159-b504-65e8c4f45c98&org_id=${env.ORG_ID}`;
//  console.log(url);

  let res = http.get(url, defaultHeaders);

  Check(res);
//  console.log(res.body);
}

