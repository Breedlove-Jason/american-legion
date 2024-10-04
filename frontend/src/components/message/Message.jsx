import { MessageWrapper } from './Message.styles';
import PropTypes from 'prop-types';

const Message = ({ isSuccess, children }) => {
  return <MessageWrapper isSuccess={isSuccess}>{children}</MessageWrapper>;
};
Message.propTypes = {
  isSuccess: PropTypes.bool,
  children: PropTypes.node.isRequired,
};
export default Message;
