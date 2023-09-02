import CustomButton from "../atomic/CustomButtom/CustomButton";
import SpinnerLoader from "../atomic/Loader/SpinnerLoader";
import {Counter} from "../../features/counter/Counter";

const DashboardTemplate = () => {
    return <div>
        <h2>"Dashboard"</h2>
        <CustomButton label={"Hello"}/>
        <SpinnerLoader/>
        <Counter/>
    </div>;
};

export default DashboardTemplate;
