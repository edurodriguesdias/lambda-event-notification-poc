import type { APIGatewayProxyEventV2, APIGatewayProxyResultV2, Context } from 'aws-lambda'

type LambdaFunctionUrlEvent = APIGatewayProxyEventV2

export const handler = async (event: LambdaFunctionUrlEvent, context: Context) => {
    console.log('Event received', event)
    console.log('Context', context)
}