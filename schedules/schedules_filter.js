import { sleep } from 'k6';
import http from 'k6/http';
import * as env from '../utils/env.js';
import {
  defaultHeaders,
  Check,
  Options
} from '../utils/common.js';

export const options = Options;

export default function main() {
  const response = schedulesFilter();
};

export  function schedulesFilter() {
  var url = `${env.Loadtest_URL}/v1/schedules_filter/programs?org_id=${env.ORG_ID}`;
<<<<<<< Updated upstream
  // console.log(url);
=======
//  console.log(url);
>>>>>>> Stashed changes
  let res = http.get(url, defaultHeaders);
  Check(res);

}