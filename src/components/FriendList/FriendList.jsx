import PropTypes from 'prop-types'
export const FriendList = ({ friends, avatar, name, isOnline }) => {
    return <ul className="friend-list">
  
</ul>
}

FriendList.propTypes = {
    friends: PropTypes.array.isRequired,
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
}