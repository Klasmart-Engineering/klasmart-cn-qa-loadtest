#!/bin/bash
    
for file in `ls ./**/*.js`;do
k6 run "$file" 2>&1> "./output/$file.txt-`date`.txt"
done
for file in `ls ./*.js`;do
k6 run "$file" 2>&1> "./output/$file.txt-`date`.txt"
done