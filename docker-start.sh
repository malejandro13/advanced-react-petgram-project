#!/usr/bin/env bash

docker run -it --rm -v ${PWD}:/usr/src/app -w /usr/src/app -p 8080:8080 node:latest npm run start