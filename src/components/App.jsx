import { Profile } from 'components/Profile/Profile'
import { Statistics } from './Statistics/Statistics';
import { FriendList } from './FriendList/FriendList';
import user from 'user.json';
import data from 'data.json';
import friends from 'friends.json';

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      <Profile events={ user } />
      <Statistics evt={data} />
      <FriendList friends={friends} />
    </div>
  );
};
