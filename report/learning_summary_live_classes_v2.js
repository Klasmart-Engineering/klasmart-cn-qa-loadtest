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

  var url = `${env.Loadtest_URL}/v1/reports/learning_summary/live_classes_v2?year=2022&week_start=1642953600&week_end=1643558400&school_id=&class_id=&student_id=537e703d-4b53-4159-b504-65e8c4f45c98&subject_id=&org_id=${env.ORG_ID}`;
//  console.log(url);

  let res = http.get(url, defaultHeaders);

  Check(res);
  console.log(res.body);
}

