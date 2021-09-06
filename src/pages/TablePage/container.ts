import { connect } from "react-redux";
import { Dispatch } from "redux";
import { getDataAction } from "@/actions/DataAction";
import TablePage from "./component";

const mapStateToProps = ({ data }) => ({
  data: data.data,
  isPending: data.isPending,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  getDataAction: (page, limits) => dispatch(getDataAction(page, limits)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TablePage);
