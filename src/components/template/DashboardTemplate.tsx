import CustomButton from "../atomic/CustomButtom/CustomButton";
import SpinnerLoader from "../atomic/Loader/SpinnerLoader";

const DashboardTemplate = () => {
    return <div>
        <h2>"Dashboard"</h2>
        <CustomButton label={"Hello"}/>
        <SpinnerLoader/>
    </div>;
};

export default DashboardTemplate;
