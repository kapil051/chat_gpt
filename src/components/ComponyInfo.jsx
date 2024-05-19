import { useState, useEffect } from "react";
import axios from "axios";

export function CompanyInfo({ input }) {

    const [companyInfo, setCompanyInfo] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            try {

                const response = await axios.get(
                    "https://cloud.iexapis.com/stable/stock/amzn/quote?token=pk_c6a9892222de49aba3924fd8653eeade"
                );
                setCompanyInfo(response.data);

            } catch (error) {
                console.log(error);
            }
        };

        fetchData();
    }, []);

    if (!companyInfo) {
        return <div>Loading...</div>;
    } else {
        return (
            <div>
                {companyInfo && (
                    <div className="content">
                        <h2>Company Information</h2>
                         <div>companyName: {companyInfo.companyName}</div>
                         <div>companyName: {companyInfo.avgTotalVolume}</div>
                         <div>companyName: {companyInfo.calculationPrice}</div>
                         <div>companyName: {companyInfo.close}</div>
                         <div>companyName: {companyInfo.currency}</div>
                         <div>companyName: {companyInfo.high}</div>
                         <div>companyName: {companyInfo.low}</div>
                         <div>companyName: {companyInfo.open}</div>
                         <div>companyName: {companyInfo.symbol}</div>
                         <div>companyName: {companyInfo.volume}</div>
                         <div>companyName: {companyInfo.week52High}</div>
                         <div>companyName: {companyInfo.isUSMarketOpen?(<>ture</>):(<>false</>)}</div>

                       
                    </div>
                )}
            </div>
        );
    }
};
