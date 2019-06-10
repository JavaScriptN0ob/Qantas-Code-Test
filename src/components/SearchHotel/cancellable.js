export const FREE_CANCELLATION = 'FREE_CANCELLATION';

function cancellable({ cancellationType }) {
  return cancellationType === FREE_CANCELLATION;
}

export default cancellable;
