import { useContext, useState } from 'react';
import axios from 'axios';

import { EnvironmentVariables } from '../environmentVariables';

export const useFetchBetsByType = () => {
  const [bets, setBets] = useState(null);
  const [error, setError] = useState(null);
  const [betsLoading, setBetsLoading] = useState(false);
  const { DATA_SOURCE_NETWORK_URL } = useContext(EnvironmentVariables);

  const fetchBets = async (id) => {
    try {
      if (!DATA_SOURCE_NETWORK_URL) {
        return setError(new Error('Network data source URL is missing.'));
      }
      setBetsLoading(true);
      const response = await axios.get(
        `${DATA_SOURCE_NETWORK_URL}/services/racinginfo/v1/api/products/${id}`
      );
      setBets(response.data.results);
    } catch (capturedError) {
      /**
       * log the error to sentry, kibana ...
       * for example:
       * log({type: 'error', message: 'failed to fetch bets', data: {capturedError, userId})
       */
      setError(capturedError);
    } finally {
      setBetsLoading(false);
    }
  };

  const betsError = error && 'Failed to fetch products.';

  return { bets, betsError, betsLoading, fetchBets };
};
