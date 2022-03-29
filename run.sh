#!/bin/bash
    
for file in `ls ./**/*.js`;do
k6 run "$file" 2>&1> "./output/`basename $file`-`date`.txt"
done
for file in `ls ./*.js`;do
k6 run "$file" 2>&1> "./output/$file-`date`.txt"
done