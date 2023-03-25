import ReviewItem from "./ReviewItem.js";
import reviews from "./personal-reviews.js"

const PersonalReviewList = () => {
    return (`
           ${
        reviews.map(review => {
            return(ReviewItem(review));
        }).join('')
    }
`); }

export default PersonalReviewList;
