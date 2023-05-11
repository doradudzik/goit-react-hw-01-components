import React from 'react';
import PropTypes from 'prop-types';
import css from './FriendList.module.css';

const friendStatus = status => {
  if (status === false) {
    return '#ff0000';
  } else {
    return '	#008000';
  }
};

const FriendList = ({ friends }) => (
  <ul className={css.friendList}>
    {friends.map(friend => (
      <li className={css.item} key={friend.id}>
        <span
          className={css.status}
          style={{ backgroundColor: friendStatus(friend.isOnline) }}
        >
          {friend.isOnline}
        </span>
        <img
          className={css.avatar}
          src={friend.avatar}
          alt="User avatar"
          width="48"
        />
        <p className={css.name}>{friend.name}</p>
      </li>
    ))}
  </ul>
);
FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ).isRequired,
};

export default FriendList;
