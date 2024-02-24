import { S3Client} from '@aws-sdk/client-s3'
import { handler } from '../../src/index'

jest.mock('@aws-sdk/client-s3', () => ({
    S3Client: jest.fn().mockImplementation(() => ({
        send: jest.fn()
    })),
    GetObjectCommand: jest.fn()
}))

beforeEach(() => {
    handler //ToDo: mock event and context 
})

describe("index", () => {
    it("s3 get file", () => {
        expect(S3Client).toHaveBeenCalledTimes(1)
    })
})