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

  var url = `${env.Loadtest_URL}/v1/reports/learning_summary/outcomes?assessment_id=62429e007a70b6815f795510&student_id=17a28338-3b88-4bac-ab15-cce3887af357&org_id=${env.ORG_ID}`;
//  console.log(url);

  let res = http.get(url, defaultHeaders);

  Check(res);
  console.log(res.body);
}

