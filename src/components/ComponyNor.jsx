
import { Side } from "./Side"
import { WorkNav } from "./WorkNav"
import { InfoInput } from "./InfoInput"
import { InfoOutput } from "./InfoOutput"
import { useState } from "react"


export function ComponyNor() {

         const [input,setInput]=useState("India");


    return (

        <div className=" h-screen w-screen flex">

            <div className="flex-none w-1/5 resize-x overflow-auto bg-white">
                <Side />
            </div>

            <div className="flex-1">
                 
                <WorkNav heading={"Workflows/Company Research Enrichment"}></WorkNav>
                <div className=" text-xl mt-6 ml-6">Run workflow.</div>
                <div className="mt-2 ml-6">Fill in the input to kick off your workflow.</div>
                 <InfoInput setInput={setInput} ></InfoInput>
                 <InfoOutput input={input} ></InfoOutput>
            </div>

        </div>
    )
}