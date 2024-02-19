import type { S3Event, Context } from 'aws-lambda'
import { S3Client, GetObjectCommand } from '@aws-sdk/client-s3';
import { sdkStreamMixin } from '@aws-sdk/util-stream-node';

const s3 = new S3Client();

export const handler = async (event: S3Event, context: Context) => {

    const getObjectRequests = event.Records.map(record => {

        const objectParams = {
          Bucket: record.s3.bucket.name,
          Key: record.s3.object.key
        };
    
        const getObject = new GetObjectCommand(objectParams);
    
        return s3.send(getObject).then((data) => 
          sdkStreamMixin(data.Body).transformToString().then((objectString: string) => {
            console.info(objectString);
            return Promise.resolve(objectString);
          })
          .catch((err: any) => {
           console.error("Error consuming response stream:", err);
           return Promise.reject(err);
          })
          )
          .catch((err) => {
          console.error("Error to get Object", err);
          return Promise.reject(err);
        })
      });

      return Promise.all(getObjectRequests).then(() => {
        console.debug('File already processed!');
      });
}