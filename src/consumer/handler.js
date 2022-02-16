module.exports.index = async (event) => {
  const failedIds = event.Records.reduce((acc, item, index) => {
    // half of records fail
    if (index % 2 === 0) {
      acc.push({ itemIdentifier: item.messageId });
    }

    return acc;
  }, []);

  return {
    batchItemFailures: failedIds,
  };
};
