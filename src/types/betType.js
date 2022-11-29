import PropTypes, { arrayOf, shape } from 'prop-types';

const videoType = shape({
  mediaId: PropTypes.string,
  timestamp: PropTypes.instanceOf(Date)
});

export const videosType = arrayOf(videoType);
