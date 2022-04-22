import { sleep } from 'k6';
import http from 'k6/http';
import * as env from '../utils/env.js';
import {
  StudentHeaders,
  Check,
  Options
} from '../utils/common.js';

export const options = Options;
export default function main() {
  const response = assessmentsForStudent();
};

export  function assessmentsForStudent() {
  var url = `${env.Loadtest_URL}/v1/assessments_for_student?complete_at_ge=1646895542&complete_at_le=1648105142&order_by=-complete_at&org_id=${env.STU_ORG_ID}&page=1&page_size=5&type=home_fun_study`;
//  console.log(url);

  let res = http.get(url, StudentHeaders);
//  console.log(res.status);
  Check(res);
  console.log(res.body);
}