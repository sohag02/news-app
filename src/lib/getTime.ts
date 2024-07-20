// utils/timeAgo.js
import { formatDistanceToNow } from 'date-fns';

export const timeAgo = (date: string) => {
  return formatDistanceToNow(new Date(date));
};
