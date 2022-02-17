import { Card, Col } from "react-bootstrap"
import './style.css'
export interface UserReviewProps {
  profile: any;
  comment: string;
  name: string;
}


export const UserReview: React.FC<UserReviewProps> = (userReviewItem) => {
  return (
    <Col className="col-review">
    <Card className="card-review">
      <Card.Img variant="top" src={userReviewItem.profile} className="img-card"/>
      <Card.Body>
        <Card.Title>{userReviewItem.name}</Card.Title>
        <Card.Text  >
        {userReviewItem.comment}
        </Card.Text>
      </Card.Body>
    </Card>
  </Col>
  )
}