import { sleep } from 'k6';
import http from 'k6/http';
import * as env from '../utils/env.js';
import {
  defaultHeaders,
  Check,
  Options,
  dateTimestamp
} from '../utils/common.js';
import { schedulesLessonPlans } from './schedules_lesson_plans.js';

export const options = Options;

export default function main() {
  const response = students();
  return response;
}

export function students(){
  let plan_id = schedulesLessonPlans();
  var url = `${env.Loadtest_URL}/v1/reports/students?teacher_id=2b6f5510-0342-471c-8aea-92291f66610b&class_id=bae3617d-8bbc-4253-b397-1d597340c7b9&lesson_plan_id=${plan_id}&status=all&sort_by=desc&org_id=${env.ORG_ID}`;
//  console.log(url);

  let res = http.get(url, defaultHeaders);

  Check(res);
//  console.log(res.body);
}