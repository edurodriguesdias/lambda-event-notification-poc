# AWS Lambda and S3 Event Notification POC

This repository contains a proof of concept (POC) demonstrating event notification setup between AWS Lambda and AWS S3.

## Proposal
In this POC, we'll showcase the setup of a Lambda function configured to be triggered whenever a new object is uploaded to a designated S3 bucket. 
Upon triggering, the Lambda function will automatically process the content of the uploaded file, enabling actions such as data transformation, validation, or integration with other services. 

![image](https://github.com/edurodriguesdias/lambda-event-notification-poc/assets/24960126/e7f1f1ba-ea85-4995-851f-ec7f4f57e4d4)


## Prerequisites

- An AWS account with appropriate permissions to create Lambda functions, S3 buckets, and IAM roles.
- AWS CLI installed and configured with your AWS account credentials.
- Node.js and npm installed locally.
- Basic knowledge of AWS Lambda, S3, and event-driven architectures.


## Stack
* AWS S3
    * Event Notification Config
* AWS Cloudformation
* AWS Lambda
