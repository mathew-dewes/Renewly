import { Pie, PieChart, ResponsiveContainer } from 'recharts';

// #region Sample data
const data = [
  { name: 'Group A', value: 400 },
  { name: 'Group B', value: 300 },
  { name: 'Group C', value: 300 },
  { name: 'Group D', value: 200 },
  { name: 'Group E', value: 278 },
  { name: 'Group F', value: 189 },
];

// #endregion
export default function RenewalHealthBar({ isAnimationActive = true }: { isAnimationActive?: boolean }) {
  return (
    <>
    <ResponsiveContainer  width="100%" height="90%">
                           <p className="text-gray-900 font-bold">Assets Types</p>
<PieChart width={730} height={250}>
    
      <Pie
        dataKey="value"
        startAngle={180}
        endAngle={0}
        data={data}
        cx="50%"
        cy="100%"
        outerRadius="120%"
        fill="#8884d8"
        label
        isAnimationActive={isAnimationActive}
      />
    </PieChart>
    </ResponsiveContainer>
    </>
    
  );
}
