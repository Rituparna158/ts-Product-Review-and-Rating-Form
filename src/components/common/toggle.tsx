import { FloatButton } from "antd";
import useThemeStore from "../../store/theme-store";

const themeToggle=()=>{
    const {dark,toggle}=useThemeStore();
    return (
        <FloatButton
        onClick={toggle}
        tooltip={dark?"Light mode":"Dark mode"}
        style={{left:24}}
        icon={
            <span style={{fontSize:18}}>
                {dark?"☀️":"🌙"}
            </span>
            }
        />
    );
};
export default themeToggle;