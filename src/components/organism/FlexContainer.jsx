import Caption from "../atoms/Caption";
import Cards from "../molecules/Cards";
import Table from "../molecules/Table";

function FlexContainer() {
    return ( 
        <div className="container-dashboard">
            <Caption msn={"Dashboard"} />
            <Cards/>
            <Table/>
        </div>
     );
}

export default FlexContainer;