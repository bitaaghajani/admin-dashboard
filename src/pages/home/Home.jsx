
import Navbar from "../../components/navbar/Navbar"
import Sidebar from "../../components/sidebar/Sidebar"
import Widget from "../../components/widget/Widget"
import "./home.scss"
import Featured from "../../components/featured/Featured"
import Chart from "../../components/chart/Chart"
import BasicTable from "../../components/table/BasicTable"
const Home = () =>{
    return (
        <div className="home">
            <Sidebar />
            <div className="homeContainer">
                <Navbar />
                <div className="widgets">
                <Widget type="user"/>
                <Widget type="order"/>
                <Widget type="balance"/>
                <Widget type="earning"/>
                </div>
               <div className="charts">
                        <Featured />
                        <Chart />
               </div>
               <div className="listContainer">
                <div className="listTitle">Latest Transactions</div>
                <BasicTable />
               </div>
            </div>
        </div>
    )
}
export default Home