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
  const response = assessments_homefun();
};

export  function assessments_homefun() {
  var url = `${env.Loadtest_URL}/v1/assessments_v2?query_key=&status=NotStarted%2CStarted%2CDraft%2CComplete&page=1&order_by=-create_at&query_type=+&assessment_type=OfflineStudy&page_size=20&org_id=${env.ORG_ID}`;
  // console.log(url);
  let res = http.get(url, defaultHeaders);
  Check(res);
  // console.log(res.body);
}