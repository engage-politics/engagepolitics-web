interface Map {
  [key: string]: string | undefined;
}

export const CandidateStatusNotifications: Map = {
  Live: 'Campaign is now receiving donations',
  Paused: 'Campaign is now paused',
  Pending: 'Campaign is now pending',
  Completed: 'Campaign has now been completed',
  Cancelled: 'Campaign has now been cancelled',
};
export const DefaultCandidateStatusNotification =
  'Candidate Status has been updated';

export const UserStatusNotifications: Map = {
  Live: 'Campaign is now live',
  Suspended: 'Campaign is now suspended',
};
export const DefaultUserStatusNotification = 'User Status has been updated';
