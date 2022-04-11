import { sleep } from 'k6';
import http from 'k6/http';
import * as env from '../utils/env.js';
import {
  defaultHeaders,
  Check,
  Options
} from '../utils/common.js';
import { shortcode } from './shortcode.js';

export const options = Options;

export default function main() {
  const response = learningOutcomeSave();
};

export  function learningOutcomeSave() {
  let shortcodeId = shortcode();

  var url = `${env.Loadtest_URL}/v1/learning_outcomes?org_id=${env.ORG_ID}`;
  console.log(url);
  let data = {
      "outcome_name":"test",
      "shortcode": `${shortcodeId}`,
      "assumed":false,
      "program":[
          "4591423a-2619-4ef8-a900-f5d924939d02"
      ],
      "subject":[
          "36c4f793-9aa3-4fb8-84f0-68a2ab920d5a"
      ],
      "developmental":[
          "6933de3e-a568-4d56-8c01-e110bda22926"
      ],
      "skills":[
          "bea9244e-ff17-47fc-8e7c-bceadf0f4f6e"
      ],
      "age":[
          "bb7982cd-020f-4e1a-93fc-4a6874917f07"
      ],
      "grade":[
          "3e7979f6-7375-450a-9818-ddb09b250bb2"
      ],
      "sets":[
  
      ],
      "keywords":[
          "456"
      ],
      "description":"231321",
      "score_threshold":0.8
  }
  
  let res = http.post(url, JSON.stringify(data), defaultHeaders);
  // console.log(res.body);
  Check(res);
  return res.json().outcome_id;
}