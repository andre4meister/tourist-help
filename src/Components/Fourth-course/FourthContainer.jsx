import Fourth from "./Fourth";
import {connect} from "react-redux";
import {downloadWorkAC} from "../../Redux/fourth-reducer";

let mapStateToProps = (state) => {
    console.log(state.subjects)
    return {
        subjects: state.subjects,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        downloadWork: () => {
            let action = downloadWorkAC();
            dispatch(action);
        }
    }
}

let FourthContainer = connect(mapStateToProps,mapDispatchToProps)(Fourth);

export default FourthContainer;