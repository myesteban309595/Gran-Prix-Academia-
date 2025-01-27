import { Col, Row, Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button } from "reactstrap";
import SalesChart from "../components/dashboard/SalesChart";
import Feeds from "../components/dashboard/Feeds";
import ProjectTables from "../components/dashboard/ProjectTable";

const BlogData = [
  {
    image: "https://curiosfera-historia.com/wp-content/uploads/Historia-del-carn%C3%A9-de-conducir-1.jpg", // Imagen para curso básico de conducción
    title: "Curso de Conducción Básico",
    subtitle: "Aprende lo esencial para tu seguridad vial",
    description:
      "Este curso te proporcionará los conocimientos fundamentales para convertirte en un conductor seguro. Ideal para aquellos que están comenzando su viaje en la conducción.",
    btnbg: "primary",
  },
  {
    image: "https://schoolcenter.com.co/wp-content/uploads/2023/01/INCONO-TIENDA-VIRTUAL-COMBO-cursos-de-conduccion-para-motocicleta-y-carro-servicio-publico.png", // Imagen para curso avanzado
    title: "Curso de Conducción Avanzada",
    subtitle: "Perfecciona tus habilidades al volante",
    description:
      "En este curso avanzado, te enseñamos a manejar en situaciones complejas y a mejorar tu control del vehículo en diversas condiciones de tráfico y clima.",
    btnbg: "primary",
  },
  {
    image: "https://us.as.com/autos/wp-content/uploads/2024/02/pixelcut-export-19-1264x734.jpg", // Imagen para proceso de obtención de licencia
    title: "Proceso para Obtener tu Licencia de Conducir",
    subtitle: "¡Sigue estos pasos para obtener tu licencia!",
    description:
      "Te guiamos a través del proceso completo para obtener tu licencia de conducir. Desde los exámenes teóricos hasta la prueba práctica, te ayudamos en cada paso.",
    btnbg: "primary",
  },
  {
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSC15xO3DOdamFJ5ZIjCgsBrSHBwq735IeHuw&s", // Imagen para conducción defensiva
    title: "Conducción Defensiva y Seguridad Vial",
    subtitle: "Aprende a prevenir accidentes y mejorar tu seguridad",
    description:
      "La seguridad vial es nuestra prioridad. Este curso de conducción defensiva te enseñará técnicas para evitar accidentes y manejar de manera más segura y responsable.",
    btnbg: "primary",
  },
];

const Starter = () => {
  return (
    <div>
      {/* Sales & Feed */}
      <Row>
        <Col sm="6" lg="6" xl="7" xxl="8">
          <SalesChart />
        </Col>
        <Col sm="6" lg="6" xl="5" xxl="4">
          <Feeds />
        </Col>
      </Row>

      {/* Project Table */}
      <Row>
        <Col lg="12">
          <ProjectTables />
        </Col>
      </Row>

      {/* Blog Cards */}
      <Row>
        {BlogData.map((blg, index) => (
          <Col sm="6" lg="6" xl="3" key={index}>
            <Card className="shadow-sm d-flex flex-column" style={{ minHeight: "400px" }}>
              <CardImg
                alt={blg.title}
                src={blg.image}
                top
                width="100%"
                style={{
                  objectFit: "cover",
                  height: "200px",
                  borderRadius: "5px",
                }}
              />
              <CardBody className="d-flex flex-column" style={{ paddingBottom: "20px" }}>
                <CardTitle
                  tag="h5"
                  style={{
                    fontSize: "16px",
                    fontWeight: "600",
                    color: "#333",
                    marginBottom: "10px",
                  }}
                >
                  {blg.title}
                </CardTitle>
                <CardSubtitle
                  className="text-muted"
                  style={{
                    fontSize: "14px",
                    marginBottom: "15px",
                  }}
                >
                  {blg.subtitle}
                </CardSubtitle>
                <CardText
                  style={{
                    fontSize: "13px",
                    lineHeight: "1.6",
                    color: "#555",
                    marginBottom: "auto",
                  }}
                >
                  {blg.description}
                </CardText>
                <Button
                  color={blg.btnbg}
                  style={{
                    marginTop: "auto",
                    fontSize: "14px",
                    padding: "10px 20px",
                    borderRadius: "5px",
                  }}
                >
                  Ver más
                </Button>
              </CardBody>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Starter;
