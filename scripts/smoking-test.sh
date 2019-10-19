#!/usr/bin/env bash

set -ue
set -o pipefail
cd $(dirname "$0")/..

ensure-it-works () {
  pushd $d
  yarn --mutex network && yarn lint:fix && yarn build && yarn test && yarn test:coverage
  popd
}

for d in node-lib web-nextjs browser-react browser-preact ; do
  echo "testing in '$d' . see 'TEST-$d.log' for result"
  ensure-it-works $d &> "TEST-$d.log" &
done

wait

tail -n 20 TEST-*.log
