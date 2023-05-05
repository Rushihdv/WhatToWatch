import { StarFill, StarHalf, Star as StarEmpty } from "react-bootstrap-icons"

export function FiveStarRating({ rating }) {

    const StarList = []

    const Starfill = Math.floor(rating)
    const Starhalf = rating - parseInt(rating) >= 0.5;
    const emptyStar = 5 - rating - (Starhalf ? 1 : 0)

    for (let i = 0; i < Starfill; i++) {
        StarList.push(< StarFill key={"star-fill" + i} />)
    }

    if (Starhalf) {
        StarList.push(< StarHalf key={"star-half"} />)
    }

    for (let i = 0; i < emptyStar; i++) {
        StarList.push(< StarEmpty key={"star-empty" + i} />)
    }


    return <div>
        {StarList}
    </div>
}