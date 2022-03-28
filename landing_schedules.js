import { sleep } from 'k6';
import http from 'k6/http';
import * as env from './utils/env.js';
import {
  StudentHeaders,
  Check,
  Options
} from './utils/common.js';
import { schedulesTimeView } from './schedules/schedules_time_view.js'
import { schedulesFilter } from './schedules/schedules_filter.js'
export const options = Options;

export default function main() {
  schedulesTimeView();
  schedulesFilter();
}