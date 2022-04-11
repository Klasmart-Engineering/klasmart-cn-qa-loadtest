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
  const response = shortcode();
};

export  function shortcode() {
  var url = `${env.Loadtest_URL}/v1/shortcode?org_id=${env.ORG_ID}`;
  // console.log(url);
  let data = {
    "kind": "outcomes",
    }

  let res = http.post(url, JSON.stringify(data), defaultHeaders);
  // console.log(res.body);
  Check(res);
  // console.log(res.json().shortcode);
  return res.json().shortcode;

}