import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { SubEthaPipelineStack } from './pipeline';
// import * as sqs from 'aws-cdk-lib/aws-sqs';

export class SubEthaCdkStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    new SubEthaPipelineStack(this, "SubEthaPipelineStack");
  }
}
