#!/bin/bash
    
for file in `ls ./**/*.js`;do
k6 run "$file" 2>&1> "./output/api-`date`.txt"
done
for file in `ls ./*.js`;do
k6 run "$file" 2>&1> "./output/$file-`date`.txt"
done