import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Tooltip } from "recharts";
import { getReadings } from "../../utils/utils";

const PagesToRead = () => {
  const colors = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "red",];


  const getData = getReadings()

  const [bookName, totalPages]=getData
  console.log(bookName, totalPages)
  console.log(getData)
   

  const data = [
    {
      name: "The Great Gatsby",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "To kill a mocking bird",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "1984",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "The Alchemist",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "Pride  prejudice",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    
  ];

  const getPath = (x, y, width, height) => {
    return `M${x},${y + height}C${x + width / 3},${y + height} ${
      x + width / 2
    },${y + height / 3}
  ${x + width / 2}, ${y}
  C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${
      x + width
    }, ${y + height}
  Z`;
  };

  const TriangleBar = (props) => {
    // eslint-disable-next-line react/prop-types
    const { fill, x, y, width, height } = props;

    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
  };
  return (
    <div style={{ width: '100%', height: 500 }} className="mt-28 w-full">
      
        <ResponsiveContainer >
      <BarChart
        
        data={data}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="bookName" stroke="colors" />
        <YAxis  dataKey=""/>
        <Tooltip/>
        <Bar
          dataKey='uv'
          fill="#8884d8"
          shape={<TriangleBar  />}
          label={{ position: "top" }}
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={colors[index % 20]} />
          ))}
        </Bar>
      </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PagesToRead;
