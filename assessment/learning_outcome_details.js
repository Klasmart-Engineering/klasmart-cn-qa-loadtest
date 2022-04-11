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
  const response = learningOutcomeDetails();
};

export  function learningOutcomeDetails() {
  var url = `${env.Loadtest_URL}/v1/learning_outcomes/6253d03a9711135747becb43?org_id=${env.ORG_ID}`;
  // console.log(url);
  let res = http.get(url, defaultHeaders);
  Check(res);
  // console.log(res.body);
}