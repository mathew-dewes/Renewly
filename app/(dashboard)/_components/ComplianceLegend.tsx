export default function ComplianceLegend(){

    return (
                      <div className="flex gap-2 mt-2">
<div className="flex items-center gap-2">
    <div className="h-2 w-2 rounded-full bg-[#00C49F]"/><p className="text-xs lg:text-sm">Compliant</p>
</div>
<div className="flex items-center gap-2">
    <div className="h-2 w-2 rounded-full bg-[#FFBB28]"/><p className="text-xs lg:text-sm">Due soon</p>
</div>
<div className="flex items-center gap-2">
    <div className="h-2 w-2 rounded-full bg-[#ff1a1a]"/><p className="text-xs lg:text-sm">Over due</p>
</div>
                </div>
    )
}