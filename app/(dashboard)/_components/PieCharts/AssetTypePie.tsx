import { PieChart, Pie, Label, Legend, Tooltip, ResponsiveContainer, LabelList } from 'recharts';

// #region Sample data
const data = [
  { name: 'Equipment', value: 60, fill: '#0088FE' },
  { name: 'Vehicles', value: 30, fill: '#00C49F' },
  { name: 'Machinery', value: 30, fill: '#FFBB28' },

];

// #endregion
const MyPie = () => (
  <Pie data={data} dataKey="value" nameKey="name" outerRadius="80%" innerRadius="60%" isAnimationActive={false}>
      <LabelList dataKey={"value"} position="outside" offset={12}  fill="black" />
  </Pie>
);

export default function AssetTypePie() {
  return (
    <>
    <ResponsiveContainer width="100%" height="90%" >
                 <p className="text-gray-900 font-bold">Assets Types</p>

    
      <PieChart width={730} height={250}>
         <Legend layout='vertical' verticalAlign="top" align='left' height={36}/>
        <MyPie />
        <Tooltip/>
        <Label position="center" fill="#666">
          Assets
        </Label>


      </PieChart>

    </ResponsiveContainer>

  </>
  );

}
