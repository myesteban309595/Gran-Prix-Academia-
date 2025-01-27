import { Card, CardBody, CardSubtitle, CardTitle } from "reactstrap";
import Chart from "react-apexcharts";

const StudentProgressChart = () => {
  const options = {
    chart: {
      toolbar: {
        show: false,
      },
      stacked: false,
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      width: 4,
      colors: ["transparent"],
    },
    legend: {
      show: true,
      position: 'top',
      horizontalAlign: 'center',
      fontSize: '14px',
      labels: {
        colors: '#333',
      },
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "40%",
        borderRadius: 4,
      },
    },
    colors: ["#28a745", "#17a2b8", "#ffc107"], // Colores relacionados con un ambiente profesional
    xaxis: {
      categories: [
        "Ene",  // Enero
        "Feb", 
        "Mar", 
        "Abr", 
        "May", 
        "Jun", 
        "Jul", 
        "Ago", 
        "Sep", 
        "Oct",  // Octubre agregado
        "Nov",  // Noviembre agregado
        "Dic",  // Diciembre agregado
      ],
      labels: {
        style: {
          colors: '#555',
          fontSize: '12px',
        },
      },
    },
    yaxis: {
      labels: {
        style: {
          colors: '#555',
        },
      },
    },
    responsive: [
      {
        breakpoint: 1024,
        options: {
          plotOptions: {
            bar: {
              columnWidth: "50%",
              borderRadius: 7,
            },
          },
        },
      },
    ],
  };

  const series = [
    {
      name: "Estudiantes 2024",
      data: [15, 30, 35, 20, 40, 45, 38, 25, 50, 55, 60, 70, 80], // Agregado enero 2025
    },
    {
      name: "Estudiantes 2023",
      data: [10, 25, 20, 50, 30, 40, 45, 35, 25, 60, 55, 65, 75], // Agregado enero 2025
    },
    {
      name: "Estudiantes 2025",
      data: [10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // Agregado enero 2025
    },
  ];

  return (
    <Card className="shadow-sm">
      <CardBody>
        <CardTitle tag="h5" className="text-center">Resumen de Progreso de Estudiantes</CardTitle>
        <CardSubtitle className="text-muted text-center mb-4" tag="h6">
          Reporte mensual de inscripción y rendimiento de estudiantes
        </CardSubtitle>
        <Chart options={options} series={series} type="bar" height="400" />
      </CardBody>
    </Card>
  );
};

export default StudentProgressChart;
