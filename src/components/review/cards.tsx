import {Card,Rate,Tag,Button,Space,Divider, Flex } from"antd";
import type { ReviewCardsPropsType } from "../../types/review-cards-type";

const reviewCards=({
    data,
    onEdit,
    onDelete,
}:ReviewCardsPropsType)=>{
    return (
        <Flex
        vertical
        align="center"
        gap={16}
        style={{width:"100%"}}
        >
        {data.map((review,index)=>(
            <Card
            key={index}
        
            title={review.name}
            
            style={{marginBottom:16,width:"100%",maxWidth:420}}
      
            >
                <p>
                    <strong>Product Name:</strong>{review.name}
                </p>
                <p>
                    <strong>Product SKU:</strong>{review.sku}
                </p>
                <p>
                    <strong>Purchase Date:</strong>{review.date}
                </p>
                <Divider/>
                <div>
                    <p>
                        <strong>Overall:</strong>{" "}
                        <Rate disabled value={review.ratings.overall}/>
                    </p>
                    <p>
                        <strong>Quality:</strong>{" "}
                        <Rate disabled value={review.ratings.quality}/>
                    </p>
                    <p>
                        <strong>Value:</strong>{" "}
                        <Rate disabled value={review.ratings.value}/>
                    </p>
                    {review.ratings.delivery>0 &&(
                        <p>
                        <strong>Delivery:</strong>{" "}
                        <Rate disabled value={review.ratings.delivery}/>
                    </p>
                    )}
                    {review.ratings.service>0 && (
                        <p>
                        <strong>Service:</strong>{" "}
                        <Rate disabled value={review.ratings.service}/>
                    </p>
                    )}
                </div>
                <Divider/>
                <p>
                    <strong>Review Title:</strong>{review.title}
                </p>
                <p>
                    <strong>Detailed Review:</strong>{review.detail}
                </p>
                <p>
                    <strong>Review Type</strong>{" "}
                    {review.reviewType}
                </p>
                {review.tags.length>0 && (
                    <>
                    <Divider/>
                    <div>
                        <strong>Tags:</strong>{" "}
                        {review.tags.map(tag=>(
                            <Tag key={tag}>{tag}</Tag>
                        ))}
                    </div>
                    </>
                )}
                <Divider/>
                <p>
                    <strong>Recommend This Product:</strong>{" "}
                    {review.recommend}
                </p>
                <p>
                    <strong>Woud Buy Again:</strong>{" "}
                    {review.wouldBuyAgain? "Yes":"No"}
                </p>
                <p>
                    <strong>Make Review Public:</strong>{" "}
                    {review.makeReviewPublic?"Yes":"No"}
                </p>
                <p>
                    <strong>Agree To Terms:</strong>{" "}
                    {review.agreeToTerms?"Yes":"No"}
                </p>
                <Divider/>
                <Space>
                    <Button
                    type="primary"
                    onClick={()=>onEdit(index)}
                    >
                        Edit
                    </Button>
                    <Button
                    danger
                    onClick={()=>onDelete(index)}
                    >
                       Delete
                    </Button>
                </Space>

            </Card>
        ))}
        </Flex>
    )
}
export default reviewCards;