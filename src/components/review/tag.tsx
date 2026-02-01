import { Checkbox } from "antd";
import tagOptions from "../../constants/tag-options-constant";
import type { TagSelectorPropsType } from "../../types/tag-selector-type";

const tagSelector=({value=[],onChange}:TagSelectorPropsType)=>{
    const handleChange=(checkedValues:string[])=>{
        onChange?.(checkedValues);
    };
    return (
        <Checkbox.Group
        options={tagOptions}
        value={value}
        onChange={handleChange}
        />
    );
};
export default tagSelector;