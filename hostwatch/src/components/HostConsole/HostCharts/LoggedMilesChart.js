import { XAxis, YAxis, Legend, Tooltip, Bar } from "recharts";
import { BarChart } from "recharts";


const LoggedMilesChart = () => {
    const data = [{name: "july.", days: 12}, {name: "august.", days: 22}, {name: "september.", days: 14}]

    return (
        <BarChart data={data} height={420} width={700} >
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="days" fill="#F76C6C" label={{ fill: 'black', fontSize: 20 }} unit=" days booked" barSize={60}/>
        </BarChart>
    )
};

export default LoggedMilesChart