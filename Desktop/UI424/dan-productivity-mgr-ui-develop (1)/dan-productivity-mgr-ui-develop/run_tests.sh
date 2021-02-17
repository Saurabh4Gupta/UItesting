#!/bin/bash
APP_NAME=$1
TEST_TYPE=$2
export APP_NAME="$APP_NAME"
export RP_LAUNCH_NAME="$APP_NAME - $TEST_TYPE in $ENV_NAME"
export RP_TEST_TYPE=$TEST_TYPE
export RP_PROJECT="media_ecosystem"
#echo 'installing selenium chrome binary'
#npm run start:selenium-standalone

if [ "$TEST_TYPE" = "full" ];
then timeout --preserve-status 15000 npx codeceptjs run --plugins allure --config=./codecept.conf.js ;
else timeout --preserve-status 300 npx codeceptjs run --grep "@$TEST_TYPE" --plugins allure --config=./codecept.conf.js  --steps; test_result=$?
fi
npx allure generate --output ./report ./output
echo "Uploading results to $STORAGE_CONTAINER_URL/$APP_NAME/$TEST_TYPE"
./azcopy login --service-principal --application-id $AZCOPY_SPA_CLIENT_ID --tenant-id $AZCOPY_SPA_TENANT_ID
./azcopy copy ./report $STORAGE_CONTAINER_URL/$ENV_NAME/$APP_NAME/$TEST_TYPE --recursive=true

exit $test_result

