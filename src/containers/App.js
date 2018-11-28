import opD from './../ducks/movie';
import App from '../components/App'
import connect from "react-redux/es/connect/connect";
const { fetchCountryList } = opD.operations;

const mapStateToProps = (state) => ({

})
const mapDispatchToProps = {
    fetchCountryList,
};

export default connect(mapStateToProps, mapDispatchToProps) (App);
