import { Table } from "antd";
import type { ReviewTablePropsType } from "../../types/review-table-type";
import getReviewTableColumns from "./review-table-columns";
import tablePageSize from "../../constants/table-constant";
import type { ReviewType } from "../../types/review-type";
//import type { ReviewType } from "../../types/review-type";


const reviewTable=({
    data,
    onEdit,
    onDelete,
}: ReviewTablePropsType)=>{
    return (
        <div style={{overflowX:"auto"}}>
        <Table<ReviewType>
        rowKey={(_,index)=>String(index)}
        dataSource={data}
        columns={getReviewTableColumns({onEdit,onDelete})}
        size="middle"
        tableLayout="fixed"
        scroll={{x:1550}}
        bordered
        pagination={{pageSize:tablePageSize,showSizeChanger:false}}
        />
        </div>
    )
}
export default reviewTable;