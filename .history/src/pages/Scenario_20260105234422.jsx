import { useParams } from "react-router-dom";

export default function Scenario () {
    const {id} = useParams();
    const group = getGroup();

    if(id === 1){
        return group === ""
    }
    
}