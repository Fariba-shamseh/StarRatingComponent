import StarRating from "./StarRating.jsx";
import Test from './Test.jsx'

export default function App(){
    return(
        <>
            <StarRating maxRating={5} messages={["Terrible","Bad","Okay","Good","Amazing"]} defaultRating={3} />
            {/*<StarRating size={24} color="red" className="test" />*/}
            <Test />
        </>
    )
}

