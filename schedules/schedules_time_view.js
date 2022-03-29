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
  const response = schedulesTimeView();
};

export  function schedulesTimeView() {
  var url = `${env.Loadtest_URL}/v1/schedules_time_view/list?org_id=${env.ORG_ID}`;
<<<<<<< Updated upstream
  // console.log(url);
=======
//  console.log(url);
>>>>>>> Stashed changes
  let data = {
    "view_type": "full_view",
    "time_at": 0,
    "start_at_ge": 1641916800,
    "end_at_le": 1643212740,
    "time_zone_offset": 28800,
    "order_by": "start_at",
    "time_boundary": "union"
    }

  let res = http.post(url, JSON.stringify(data), defaultHeaders);
//  console.log(res.status);
  Check(res);

}