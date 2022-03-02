import { Row } from "react-bootstrap"
import { UserReview, UserReviewProps } from "../UserReview"
import "./styles.css"

interface ListUserReviewProps {
  list: UserReviewProps[]
}

export const ListUserReview: React.FC<ListUserReviewProps> = (listUserReview) => {
  return (
    <>
      {listUserReview.list.map((userReviewItem) => {
        return (
          <Row className="container-review">
            <UserReview name={userReviewItem.name} profile={userReviewItem.profile} comment={userReviewItem.comment} />
          </Row>
        )
      })}
    </>
  )
}