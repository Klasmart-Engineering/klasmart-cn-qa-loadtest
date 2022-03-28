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

  const response = createSaveLm();

//  return res.json().id;
};

export function createSaveLm() {
  let lm_name = "add lm" + env.MS_TIME_STAMP;

  let url = `${env.Loadtest_URL}/v1/contents?org_id=${env.ORG_ID}`;
  let data = {
    "name": lm_name,
    "thumbnail": "",
    "suggest_time": 0,
    "publish_scope": [
        "1d30ce69-fdaf-448c-9da4-b536e73ef8b9"
    ],
    "lesson_type": "",
    "self_study": false,
    "draw_activity": false,
    "description": "",
    "keywords": [],
    "source_type": "",
    "data": "{\"source\":\"623ac876039a209e69c39506\",\"input_source\":1}",
    "program": "7a8c5021-142b-44b1-b60b-275c29d132fe",
    "subject": [
        "b997e0d1-2dd7-40d8-847a-b8670247e96b"
    ],
    "age": [],
    "grade": [],
    "developmental": [
        "c68865b4-2ba3-4608-955c-dcc098291159"
    ],
    "skills": [
        "01191172-b276-449f-ab11-8e66e990941e"
    ],
    "parent_folder": "",
    "content_type": 1,
    "outcomes": [],
    "created_at": 0
    }
//  console.log(JSON.stringify(data))

  let res = http.post(url, JSON.stringify(data), defaultHeaders);
//  console.log(res.json().id);
  Check(res);

  return res.json().id;

};

