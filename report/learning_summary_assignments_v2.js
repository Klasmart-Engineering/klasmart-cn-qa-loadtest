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
  const response = assignments();
  return response;
}

export function assignments(){

  var url = `${env.Loadtest_URL}v1/reports/learning_summary/assignments_v2?year=2022&week_start=1648396800&week_end=1649001600&school_id=&class_id=&student_id=17a28338-3b88-4bac-ab15-cce3887af357&subject_id=&org_id=${env.ORG_ID}`;
//  console.log(url);

  let res = http.get(url, defaultHeaders);

  Check(res);
  console.log(res.body);
}
