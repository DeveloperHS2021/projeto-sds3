import BarChat from "components/BarChart";
import DataTable from "components/DataTable";
import DonutChat from "components/DonutChart";
import Footer from "components/footer";
import NavBar from "components/NavBar";

const Dashboard = () => {
    return (
        <>
            <NavBar />

            <div className="container">
                <h1 className="text-primary py-3">((Dashboard Vendas))</h1>

                <div className="row px-3">
                    <div className="col-sm-6">
                        <h5 className="text-center text-secondary">Percentual atendimento</h5>
                        <BarChat />
                    </div>
                    <div className="col-sm-6">
                        <h5 className="text-center text-secondary">Percentual atendimento</h5>
                        <DonutChat />
                    </div>
                </div>
                <div className="py-2">
                    <h2 className="text-primary">Todas Vendas</h2>
                </div>

                <DataTable />
            </div>
            <Footer />
        </>
    );
}

export default Dashboard;