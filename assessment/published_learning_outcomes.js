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
  const response = publishedLearningOutcomes();
};

export  function publishedLearningOutcomes() {
  var url = `${env.Loadtest_URL}/v1/published_learning_outcomes?org_id=${env.ORG_ID}`;
  // console.log(url);
  let data = {
    "search_key":"",
    "assumed":-1,
    "page_size":-1,
    "publish_status":"published"
}
    let res = http.post(url, JSON.stringify(data), defaultHeaders);
  Check(res);
  // console.log(res.body);
}