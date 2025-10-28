import { PieChart, Pie, Label, Legend, Tooltip, ResponsiveContainer } from 'recharts';

// #region Sample data
const data = [
  { name: 'Equipment', value: 400, fill: '#0088FE' },
  { name: 'Vehicles', value: 300, fill: '#00C49F' },
  { name: 'Machinery', value: 300, fill: '#FFBB28' },

];

// #endregion
const MyPie = () => (
  <Pie data={data} dataKey="value" nameKey="name" outerRadius="80%" innerRadius="60%" isAnimationActive={false} />
);

export default function AssetTypePie() {
  return (
    <>
    <ResponsiveContainer width="100%" height="90%">

    
      <PieChart width={730} height={250}>
         <Legend layout='vertical' verticalAlign="middle" align='left' height={36}/>
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
