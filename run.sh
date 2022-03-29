#!/bin/bash
    
for file in `ls ./**/*.js`;do
k6 run "$file"
done