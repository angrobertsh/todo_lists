import { connect } from 'react-redux';
import Card from './card';
import * as COLUMN_ACTIONS from '../../actions/column_actions';

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => ({
  moveRight: (cardId) => dispatch(COLUMN_ACTIONS.moveRight(cardId)),
  moveLeft: (cardId) => dispatch(COLUMN_ACTIONS.moveLeft(cardId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Card);
