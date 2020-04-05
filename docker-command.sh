#!/usr/bin/env bash

ARG=${@}
docker run -it --rm -v ${PWD}:/usr/src/app -w /usr/src/app node:latest $ARG