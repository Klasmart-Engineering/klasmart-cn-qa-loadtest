import { sleep } from 'k6';
import http from 'k6/http';
import * as env from '../utils/env.js';
import {
  StudentHeaders,
  Check,
  Options
} from '../utils/common.js';

export const options = Options;

export default function main() {
  const response = schedulesFilter();
};

export  function schedulesFilter() {
  var url = `${env.Loadtest_URL}/v1/schedules_filter/programs?org_id=${env.STU_ORG_ID}`;
//  console.log(url);
  let res = http.get(url, StudentHeaders);
  Check(res);

}