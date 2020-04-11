#!/usr/bin/env bash

docker run -it --rm -v ${PWD}:/usr/src/app -w /usr/src/app -p 5000:5000 node:latest npm run serve:dev