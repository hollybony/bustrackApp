import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import SignUp from '../components/SignUp'
import { registerUser } from '../actions/signUpActions';
//TODO remove extra curly braces
const mapStateToProps = (state) => {
  return {
    signUp: state.signUp
  }
};

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    registerUser
  }, dispatch)
);

// function mapDispatchToProps (dispatch) {
//   return {
//     fetchData: () => dispatch(fetchData())
//   }
// }

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignUp);
