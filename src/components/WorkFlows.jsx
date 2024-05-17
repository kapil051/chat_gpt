import { Side } from "./Side"
import { WorkNav } from "./WorkNav"
import { WorkCard } from "./WorkCard"

export function Workflows() {
    return (
        <div className="h-screen w-screen flex">

            <div className="flex-none w-1/5 resize-x overflow-auto bg-white">
                <Side />
            </div>

                <div className=" flex-1">
                    <WorkNav  heading={"All Workflows"} ></WorkNav>
                    <WorkCard heading={"Compony Research Enrichment"}></WorkCard>
                </div>

        </div>
    )
}



