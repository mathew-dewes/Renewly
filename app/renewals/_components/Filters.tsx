import { Location, RenewalType } from "@prisma/client";
import LocationDropDown from "./dropDowns/LocationDropDown";
import RenewalTypeDropDown from "./dropDowns/RenewalTypeDropDown";
import TimeFrameDropDown from "./dropDowns/TimeFrameDropDown";


export default function Filters({location, assetType, time}:
    {location: Location | null, assetType: RenewalType | null, time: string | null}
){
    return (
                  <div className="flex gap-5">
                    <div className="flex items-center gap-2">
                  <p className="text-center font-medium">Location: </p>
                        <LocationDropDown location={location} />
                    </div>
                    <div className="flex items-center gap-2">
                                <p className="text-center font-medium">Renewal type</p>
                        <RenewalTypeDropDown type={assetType}/>
                    </div>
                    <div className="flex items-center gap-2">
                                <p className="text-center font-medium">Time frame</p>
                        <TimeFrameDropDown timeFrame={time}/>
                    </div>
                  
              
              
                                  </div>
    )
}