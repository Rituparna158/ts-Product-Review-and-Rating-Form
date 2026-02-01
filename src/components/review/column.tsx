import {  Button, Tag,Rate } from 'antd';
import type { ColumnsType } from 'antd/es/table';

import type { ReviewType } from '../../types/review-type';
import type { ReviewTableColumnPropsType } from '../../types/review-table-column-types';

const getReviewTableColumns=({
    onEdit,
    onDelete,
}:ReviewTableColumnPropsType):ColumnsType<ReviewType>=>[
    {
        title:"Product Name",
        dataIndex:"name",
        key:"name",
    },
    {
        title:"Producut SKU",
        dataIndex:"sku",
        key:"sku",
    },
    {
        title:"Purchase Date",
        dataIndex:"date",
        key:"date"
    },
    {
        title:"Ratings",
        width:260,
        key:"ratings",
        render:(_,record)=>(
            <>
                <div>Overall:<Rate disabled value={record.ratings.overall} /></div>
                <div>Quality:<Rate disabled value={record.ratings.quality} /></div>
                <div>Value:<Rate disabled value={record.ratings.value} /></div>
                {record.ratings.delivery>0 && (
                    <div>Delivery:<Rate disabled value={record.ratings.delivery} /></div>
                )}
                {record.ratings.service>0 && (
                    <div>Service:<Rate disabled value={record.ratings.service} /></div>
                )}
            </>
        ),
    },
    {
        title:"Review Title",
        dataIndex:"title",
        key:"title"
    },
    {
        title:"Detailed Review",
        dataIndex:"detail",
        key:"detail",
        width:220,
        ellipsis:{
            showTitle:true
        }
    },
    {
        title:"Tags",
        key:"tags",
        width:200,
        render:(_,record)=>(
            <div style={{whiteSpace:"normal"}}>
            {record.tags.map(tag=>(
                <Tag key={tag}>{tag}</Tag>
            ))}
            </div>
        ),
    },
     {
        title:"Recommend Product",
        dataIndex:"recommend",
        key:"recommend",
    },
    {
        title:"Terms",
        key:"flags",
        render:(_,record)=>(
            <div>
                <div>Would Buy Again:{record.wouldBuyAgain?"Yes":"No"}</div>
                <div>Make Review Public:{record.makeReviewPublic?"Yes":"No"}</div>
                <div>Agree To Terms:{record.agreeToTerms?"Yes":"No"}</div>
            </div>
        ),
    },
    {
        title:"Actions",
        key:"actions",
        fixed:"right",
        width:120,
        render:(_,__,index)=>(
            <>
                <Button type="link" onClick={()=>onEdit(index)}>
                    Edit
                </Button>
                 <Button danger type="link" onClick={()=>onDelete(index)}>
                    Delete
                </Button>
                </>
            ),
    },
];
export default getReviewTableColumns;