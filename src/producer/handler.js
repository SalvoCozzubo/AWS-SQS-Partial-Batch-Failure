const { SQSClient, SendMessageBatchCommand } = require('@aws-sdk/client-sqs');

const client = new SQSClient({});

module.exports.index = async () => {
  const MessageBody = 'Body';

  const Entries = Array(10)
    .fill({})
    .map((item, index) => ({ MessageBody, Id: `id${index}` }));

  const params = {
    Entries,
    QueueUrl: process.env.QUEUE_URL,
  };

  return client.send(new SendMessageBatchCommand(params));
};
