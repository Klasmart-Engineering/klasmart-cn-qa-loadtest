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

  var url = `${env.Loadtest_URL}/v1/reports/learning_summary/live_classes?year=2022&week_start=${dateTimestamp(14)}&week_end=${dateTimestamp(7)}&school_id=&class_id=&student_id=cc9f16f5-bf27-484a-a397-c93029bcdae7&subject_id=&org_id=${env.ORG_ID}`;
//  console.log(url);

  let res = http.get(url, defaultHeaders);

  Check(res);
//  console.log(res.body);
}