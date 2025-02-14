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
  const response = studentsAchievementOverview();
  return response;
}

export function studentsAchievementOverview(){
//  var url = `${env.Loadtest_URL}/v1/reports/students_achievement_overview?time_range=${dateTimestamp(7)}-${env.S_TIME_STAMP}&org_id=${env.ORG_ID}`;
//  let range = dateTimestamp(70) + '-' + env.S_TIME_STAMP;
  let range = '1646841600-1652956011';
  var url = `${env.Loadtest_URL}/v1/reports/students_achievement_overview?time_range=${range}&org_id=${env.ORG_ID}`;
//  console.log(range);
  let res = http.get(url, defaultHeaders);
  Check(res);
//  console.log(res.body);
}