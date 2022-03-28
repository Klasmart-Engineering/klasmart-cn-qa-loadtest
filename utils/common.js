import http from 'k6/http';
import { Counter } from 'k6/metrics';
import * as env from './env.js';
import { check } from 'k6';


export const defaultHeaders = {
    headers: {
      'Content-Type': 'application/json',
      cookie:
          'access=eyJhbGciOiJSUzUxMiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImExZmFhNTc1LWVhMGMtNGEzMC04YmI2LTViYjM3M2MwYjA5NCIsImVtYWlsIjoiYWxsMTEyNEB5b3BtYWlsLmNvbSIsImlzcyI6ImtpZHNsb29wIiwiZXhwIjoyNjQ2MDI4NjMzfQ.raNvDa8GkZTUEIZrswL9UxrLWTbO-YnjQsLoMiXL-Qh5198RXoS4UZPGkMCOjjwZzQ0AVnspg26V10CZBewZUl1_dFOKQuouX_2tQd5h_ZPY8vPz-4sKw1UTgGmNVv3g90M-oVrQnxxytAQ_gQtbPc1zEqz2B0d1TpEH-rG2UoB3J4V4jG8a1Kj5AMEyWHdZkjoz0fdypbDGw4G_B8SqJgz7J5CdbFJa2bXLk24qmmWyzJcj5CVBnuUeabiZkely3ybAUselLqaMJ8KpY9m58MYkVcPH9llyQNZq5UrlpeHxPAjYdZaif97fLtf7V20DmiIGOxXN-Dv2_t2XNcDr7Q',
    },
  };

export const StudentHeaders = {
    headers: {
      'Content-Type': 'application/json',
      cookie:
          'access=eyJhbGciOiJSUzUxMiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjEzYTgwNGQ3LWZiYmMtNGI2OS1hNzkzLWVhZmRkMTI3MjUwZCIsImVtYWlsIjoic3R1MTIyMWFAeW9wbWFpbC5jb20iLCJpc3MiOiJraWRzbG9vcCIsImV4cCI6MjY0NjAyODYzM30.N-T6PiFC8nQmxWJnSli2-TF9ShNjfZeQ9fZD_qs8ukI12qMuSt9h89q8N7AeXWSx3tV0fmaQOnrP0DxNRZr370NuQY_ffnuXVgN_TZffhZff2j0-XDexg46S_N6Yxr4oGcuhw2bQJayxiQHRq8r_0VmgMdJ_its3JI4y8ixgk5Dw47_lerFw-Rs28On_RE-6NcHA5xKWqFIixetzUEr4HUZ1j7yGgB7GKw6lCjrTnvbszk8ls21aIm9MXbgdIFWQuzU8NU62p86PwC_J3ht8MEAZgp05IQ1wPeXSzjT8h1ybbw9M2WEEhmbE6ntlsDAr4CuEnopkGTTvbEnEcqiKsA',
    },
  };

export const Options = {
  stages: [
    { duration: '2s', target: 1 },
//    { duration: '2m', target: 500 },
//    { duration: '1m', target: 800 },
  ],
  thresholds: {
    http_req_failed: ['rate<0.02'], // http errors should be less than 2%
    http_req_duration: ['p(95)<2000'], // 95% requests should be below 2s
  },
}

function batchCheck(res, expectedStatus = 200) {
  if (res.status !== expectedStatus) {
    console.error(res.status)
    console.error(JSON.stringify(res))
  }
}

//function batchCheck(res) {
//    check(res, {
//        'status is 200': (res) => res.status == 200,
//    });
//}

export const Check = batchCheck;

export function dateTimestamp(n){
  var d = new Date();
  d.setDate(d.getDate() - n);
  var dd = new Date(d.getFullYear(), d.getMonth(), d.getDay(), 0, 0, 0, 0);
  var ts = Math.round(dd/1000);
  return ts;
}






































