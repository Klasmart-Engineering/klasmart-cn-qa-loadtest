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
  var url = `${env.Loadtest_URL}/v1/reports/students?teacher_id=17a28338-3b88-4bac-ab15-cce3887af357&class_id=facc1eaa-0f7c-4f97-9346-3fd945a7d4f4&lesson_plan_id=${plan_id}&status=all&sort_by=desc&org_id=${env.ORG_ID}`;
//  console.log(url);

  let res = http.get(url, defaultHeaders);

  Check(res);
//  console.log(res.body);
}
