import { sleep } from 'k6';
import http from 'k6/http';
import * as env from '../utils/env.js';
import {
  defaultHeaders,
  Check,
  Options,
  randomNum
} from '../utils/common.js';

export const options = Options;

export default function main() {

  const response = createFolder();

};

export function createFolder() {
  let folder_name = randomNum(1, 10000) + " add folder" + env.MS_TIME_STAMP;
//  console.log(folder_name);
  let url = `${env.Loadtest_URL}/v1/folders?org_id=${env.ORG_ID}`;
  let data = {
      "name": folder_name,
      "description": "Description",
      "keywords": [
        "Keywords"
      ],
      "owner_type": 1,
      "parent_id": "",
      "partition": "plans and materials"
  }
//  console.log(JSON.stringify(data))

  let res = http.post(url, JSON.stringify(data), defaultHeaders);
//  console.log(res.json().id);
  Check(res);

  return res.json().id;
};

