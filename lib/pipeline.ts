import * as cdk from 'aws-cdk-lib'
import * as pipelines from 'aws-cdk-lib/pipelines'
import { Construct } from 'constructs';


export class SubEthaPipelineStack extends cdk.Stack {
    constructor(scope: Construct, id: string, props?: cdk.StackProps) {
        super(scope, id, props);

        const pipeline = new pipelines.CodePipeline(this, "SubEthaPipeline", {
            pipelineName: "SubEthaPipeline",
            synth: new pipelines.ShellStep('Synth', {
                input: pipelines.CodePipelineSource.gitHub('antonsakhanovych/sub-etha-cdk', 'master'),
                commands: [
                    'npm ci',
                    'npm run build',
                    'npm cdk synth'
                ]
            })
        })
    }
}