import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import SignIn from '../components/SignIn'
import { loadToken } from '../actions/signInActions';

// const mapStateToProps = state => ({
//   signIn: state.signIn
// });

const mapStateToProps = (state) => {
  return {
    signIn: state.signIn
  }
};


const mapDispatchToProps = dispatch => (
  bindActionCreators({
    loadToken
  }, dispatch)
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignIn);

