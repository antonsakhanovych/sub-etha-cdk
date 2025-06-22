#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { SubEthaCdkStack } from '../lib/sub-etha-cdk-stack';

const app = new cdk.App();
new SubEthaCdkStack(app, 'SubEthaCdkStack', {
  env: {
    account: '788946907378',
    region: 'us-east-1',
  }
});