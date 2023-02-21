import { ChangeMenuColor } from "../../hooks/ChangeMenuColor"

export default function Work(){
    ChangeMenuColor();
    return(
        <div className="portfolio-page">
            <div>project 1</div>
            <div>project 2</div>
            <div>project 3</div>
        </div>
    )
}