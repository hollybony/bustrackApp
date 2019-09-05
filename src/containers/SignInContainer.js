import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import SignIn from '../components/SignIn'
import { loadToken } from '../actions/authActions';

// const mapStateToProps = state => ({
//   auth: state.auth
// });

const mapStateToProps = (state) => {
  return {
    auth: state.auth
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

