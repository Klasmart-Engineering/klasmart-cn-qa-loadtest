import { sleep } from 'k6';
import http from 'k6/http';
import * as env from '../utils/env.js';
import {
  defaultHeaders,
  Check,
  Options
} from '../utils/common.js';
import { learningOutcomeSave } from './learning_outcomes_save.js';

export const options = Options;

export default function main() {
  const response = learningOutcomePublish();
};

export  function learningOutcomePublish() {
  let outcome_id = learningOutcomeSave()
  var url = `${env.Loadtest_URL}/v1/learning_outcomes/${outcome_id}/publish?org_id=${env.ORG_ID}`;
  console.log(url);
  let data = {
    "scope": "",
    }

  let res = http.put(url, JSON.stringify(data), defaultHeaders);
  // console.log(res.body);
  Check(res);


}