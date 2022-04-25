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
  const response = assessments_live();
};

export  function assessments_live() {
  var url = `${env.Loadtest_URL}/v1/assessments_v2?query_key=&status=Started%2CDraft%2CComplete&page=1&order_by=-class_end_at&query_type=+&assessment_type=OnlineClass&page_size=20&org_id=${env.ORG_ID}`;
  // console.log(url);
  let res = http.get(url, defaultHeaders);
  Check(res);
   console.log(res.body);
}