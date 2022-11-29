import { useFetchBetsByType } from '../hooks';
import { Bet } from '../components';

export const HomePage = () => {
  const { fetchBets, bets, betsError, betsLoading } = useFetchBetsByType();

  return (
    <div>
      <label htmlFor="cars">Choose a bet type:</label>

      <select
        name="betTypes"
        id="betTypes"
        onChange={(event) => {
          fetchBets(event.target.value);
        }}>
        <option value="V75">V75</option>
        <option value="V86">V86</option>
        <option value="GS75">GS75</option>
      </select>

      {betsError && <div>{betsError}</div>}
      {betsLoading && <div>loading bets ...</div>}

      <br />
      <br />
      {bets && bets.map((bet) => <Bet bet={bet} key={bet.id} />)}
    </div>
  );
};
