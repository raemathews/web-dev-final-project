const ReviewItem = (review) => {
    return(`
       <div class="card">
                <div class="card-body row">
                    <div class="col-8">
                        <h7 class="card-title-grey">${review.topic}</h7><br>
                        <h7 class="card-title"><b>${review.userName} </b>
                            <i class="fas fa-check-circle"></i>
                            <span class="card-title-grey">- ${review.time}</span></h7>
                        <p class="card-text">
                            <b>${review.title}</b></p>
                    </div>
                    <div class="col-4">
                        <img class="wd-photo"
                             src="${review.image}">
                    </div>
                </div>
            </div>
        `);
}
export default ReviewItem;