import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Home from '../components/Home'
import { removeToken } from '../actions/signInActions';

const mapStateToProps = (state) => ({
    signIn: state.signIn
});


const mapDispatchToProps = dispatch => (
    bindActionCreators({
        removeToken
    }, dispatch)
);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home);

