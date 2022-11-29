import { useContext, useEffect, useState } from 'react';
import { EnvironmentVariables } from '../environmentVariables';
import axios from 'axios';

export const useFetchGameById = (id) => {
  const [game, setGame] = useState(null);
  const [error, setError] = useState(null);
  const [gameLoading, setGameLoading] = useState(false);
  const { DATA_SOURCE_NETWORK_URL } = useContext(EnvironmentVariables);

  const fetchGame = async () => {
    try {
      // this appears no both hooks, can be refactored away
      if (!DATA_SOURCE_NETWORK_URL) {
        return setError(new Error('Network data source URL is missing.'));
      }
      setGameLoading(true);
      const response = await axios.get(
        `${DATA_SOURCE_NETWORK_URL}/services/racinginfo/v1/api/games/${id}`
      );
      setGame(response.data);
    } catch (capturedError) {
      /**
       * log the error to sentry, kibana ...
       * for example:
       * log({type: 'error', message: 'failed to fetch game', data: {capturedError, userId, gameId: id})
       */
      setError(capturedError);
    } finally {
      setGameLoading(false);
    }
  };

  useEffect(() => {
    fetchGame();
  }, []);

  const gameError = error && 'Failed to fetch game.';

  return { game, gameError, gameLoading };
};
