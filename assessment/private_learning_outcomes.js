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
  const response = privateLearningOutcomes();
};

export  function privateLearningOutcomes() {
  var url = `${env.Loadtest_URL}/v1/private_learning_outcomes?publish_status=draft&page=1&order_by=-updated_at&page_size=20&assumed=-1&org_id=${env.ORG_ID}`;
  // console.log(url);
  let res = http.get(url, defaultHeaders);
  Check(res);
  // console.log(res.body);
}