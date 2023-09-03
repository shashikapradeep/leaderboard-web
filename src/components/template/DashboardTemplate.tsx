import CustomButton from "../atomic/CustomButtom/CustomButton";
import SpinnerLoader from "../atomic/Loader/SpinnerLoader";
import {Counter} from "../../features/counter/Counter";
import AddLeaderTemplate from "./AddLeaderTemplate";

const DashboardTemplate = () => {
    return <div>
        <h2>"Dashboard"</h2>
        <CustomButton label={"Hello"}/>
        <SpinnerLoader/>
        <Counter/>
        <AddLeaderTemplate/>
    </div>;
};

export default DashboardTemplate;
