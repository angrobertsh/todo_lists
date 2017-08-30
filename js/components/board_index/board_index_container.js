import { connect } from 'react-redux';
import BoardIndex from './board_index';
import * as COLUMN_ACTIONS from '../../actions/column_actions';

const mapStateToProps = state => ({
  cards: state.columns.cards
});

const mapDispatchToProps = dispatch => ({
  addCard: (body, colId) => dispatch(COLUMN_ACTIONS.addCard(body, colId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BoardIndex);
