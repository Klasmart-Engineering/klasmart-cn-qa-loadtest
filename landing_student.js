import { sleep } from 'k6';
import http from 'k6/http';
import * as env from './utils/env.js';
import {
  StudentHeaders,
  Check,
  Options
} from './utils/common.js';
import { schedulesTimeViewStudent } from './hub/schedules_time_view_student.js'
import { assessmentsForStudent } from './hub/assessments_for_student.js'
export const options = Options;

export default function main() {
  schedulesTimeViewStudent();
  assessmentsForStudent();
}