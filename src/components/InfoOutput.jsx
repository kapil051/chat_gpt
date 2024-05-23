import { useEffect, useState } from "react";
import axios from "axios";
import { CompanyInfo } from "./ComponyInfo";
import { ComponyInfoGPT } from "./ComponyInfoGPT";
import { NewsComp } from "./NewsComp";

export function InfoOutput({ input }) {
    

    return (
        <div >

             <ComponyInfoGPT input={input} ></ComponyInfoGPT>
        
             <CompanyInfo input={input}></CompanyInfo>

             <NewsComp input={input}></NewsComp>

        </div>
    );

}
