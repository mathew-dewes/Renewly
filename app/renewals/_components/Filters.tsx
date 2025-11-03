import { Location, RenewalType } from "@prisma/client";
import LocationDropDown from "./dropDowns/LocationDropDown";
import RenewalTypeDropDown from "./dropDowns/RenewalTypeDropDown";
import TimeFrameDropDown from "./dropDowns/TimeFrameDropDown";


export default function Filters({location, assetType, time}:
    {location: Location | null, assetType: RenewalType | null, time: string | null}
){
    return (
                  <div className="flex gap-5 flex-wrap">
                    <LocationDropDown location={location} />
                    <RenewalTypeDropDown type={assetType}/>
                    <TimeFrameDropDown timeFrame={time}/>
                                  </div>
    )
}