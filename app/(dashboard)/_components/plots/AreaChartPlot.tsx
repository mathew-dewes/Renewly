

import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';


const AreaChartPlot = () => {
  const data = [
    {
      "month": "JAN",
      "equipment": 122,
      "machinery": 44,
      "vehicles":123
    },
    {
      "month": "FEB",
      "equipment": 244,
      "machinery": 55,
      "vehicles":125
    },
    {
      "month": "MAR",
      "equipment": 111,
      "machinery": 22,
      "vehicles":55
    },
    {
      "month": "APR",
      "equipment": 122,
      "machinery": 33,
      "vehicles":122
    },
    {
      "month": "MAY",
      "equipment": 144,
      "machinery": 55,
      "vehicles":124
    },
    {
      "month": "JUN",
      "equipment": 333,
      "machinery": 55,
      "vehicles":12
    },
    {
      "month": "JUL",
      "equipment": 233,
      "machinery": 31,
      "vehicles":12
    },
    {
      "month": "AUG",
      "equipment": 144,
      "machinery": 55,
      "vehicles":12
    },
    {
      "month": "SEPT",
      "equipment": 33,
      "machinery": 64,
      "vehicles":12
    },
    {
      "month": "OCT",
      "equipment": 144,
      "machinery": 22,
      "vehicles":12
    },
    {
      "month": "NOV",
      "equipment": 54,
      "machinery": 12,
      "vehicles":12
    },
    {
      "month": "DEC",
      "equipment": 244,
      "machinery": 55,
      "vehicles":12
    },
 
   
  ]

          //  <Bar dataKey="equipment" fill="#4f8ef7" />
          //             <Bar dataKey="machinery" fill="#ff9f1c" />
          //             <Bar dataKey="vehicles" fill="#34c759" />
  return (
  <>
    <ResponsiveContainer width="100%" height="90%" >
                    <p className="text-gray-900 font-bold mb-5">Monthly Renewals</p>
      <AreaChart width={730} height={250} data={data}
        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
        <defs>
          <linearGradient id="equipment" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#4f8ef7" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#4f8ef7" stopOpacity={0} />
          </linearGradient>
          <linearGradient id="machinery" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#ff9f1c" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#ff9f1c" stopOpacity={0} />
          </linearGradient>
          <linearGradient id="vehicles" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#34c759" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#34c759" stopOpacity={0} />
          </linearGradient>
        </defs>
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <Area type="monotone" dataKey="equipment" stroke="#4f8ef7" fillOpacity={1} fill="url(#equipment)" />
        <Area type="monotone" dataKey="machinery" stroke="#ff9f1c" fillOpacity={1} fill="url(#machinery)" />
        <Area type="monotone" dataKey="vehicles" stroke="#34c759" fillOpacity={1} fill="url(#vehicles)" />
      </AreaChart>
    </ResponsiveContainer>
  </>
);
} 
export default AreaChartPlot;