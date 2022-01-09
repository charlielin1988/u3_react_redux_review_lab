import Client from './';

export const GetDestintations = async () => {
  try {
    const res = await Client.get('/departments');
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const GetDestinationReviews = async (destinationId) => {
  try {
    const res = await Client.get(`/destinations/${destinationId}`);
    return res.data.Reviews;
  } catch (error) {
    throw error;
  }
};
