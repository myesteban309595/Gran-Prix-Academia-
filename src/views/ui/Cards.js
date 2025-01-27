import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  Row,
  Col,
} from "reactstrap";

// Datos de los blogs con imágenes externas
const BlogData = [
  {
    image: "https://curiosfera-historia.com/wp-content/uploads/Historia-del-carn%C3%A9-de-conducir-1.jpg",
    title: "Historia de la Conducción",
    description: "Conoce cómo la conducción ha evolucionado a lo largo del tiempo y la importancia de la seguridad vial.",
    btnbg: "primary",
  },
  {
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSo_XZnPR-NkOcwihUMFYI5gHRnqQRZWLNzKg&s",
    title: "Cursos de Conducción",
    description: "Descubre los cursos que ofrecemos para convertirte en un conductor seguro y certificado.",
    btnbg: "primary",
  },
  {
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQnYe8w4PIFHYRKNWNuIWHVPJWs1-U4t-2dQ&s",
    title: "Obtención de Licencia",
    description: "Información sobre el proceso para obtener tu licencia de conducción de forma fácil y rápida.",
    btnbg: "primary",
  },
  {
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSC15xO3DOdamFJ5ZIjCgsBrSHBwq735IeHuw&s",
    title: "Conducción Defensiva",
    description: "Aprende técnicas de conducción defensiva para prevenir accidentes y manejar de manera más segura.",
    btnbg: "primary",
  },
];

const Cards = () => {
  return (
    <div>
      {/* Título general */}
      <h5 className="mb-3 text-center" style={{ fontWeight: "600", fontSize: "24px", color: "#333" }}>Blog Informativo</h5>
      
      <Row>
        {BlogData.map((blg, index) => (
          <Col sm="6" lg="6" xl="3" key={index}>
            <Card className="shadow-sm" style={{ height: "100%", borderRadius: "8px", overflow: "hidden" }}>
              <CardImg
                alt={blg.title}
                src={blg.image}
                top
                width="100%"
                style={{
                  objectFit: "cover",
                  height: "200px",
                  borderTopLeftRadius: "8px",
                  borderTopRightRadius: "8px",
                }} // Imagen ajustada al tamaño de la tarjeta
              />
              <CardBody
                style={{
                  padding: "20px",
                  backgroundColor: "#fff",
                  textAlign: "center",
                  borderBottomLeftRadius: "8px",
                  borderBottomRightRadius: "8px",
                  display: "flex",  // Habilitar flexbox
                  flexDirection: "column",  // Para alinear el contenido en columna
                  justifyContent: "space-between",  // Asegura que el contenido se distribuya
                }}
              >
                <div>
                  <CardTitle
                    tag="h5"
                    style={{
                      fontWeight: "600",
                      fontSize: "18px",
                      color: "#2c3e50",
                      marginBottom: "15px",
                    }}
                  >
                    {blg.title}
                  </CardTitle>
                  <CardSubtitle
                    className="mb-3 text-muted"
                    tag="h6"
                    style={{
                      fontSize: "14px",
                      color: "#7f8c8d",
                      fontStyle: "italic",
                    }}
                  >
                    {/* Subtítulo opcional */}
                  </CardSubtitle>
                  <CardText
                    style={{
                      fontSize: "14px",
                      color: "#34495e",
                      lineHeight: "1.6",
                      marginBottom: "20px",
                      textAlign: "justify",
                    }}
                  >
                    {blg.description}
                  </CardText>
                </div>
                <Button
                  color={blg.btnbg}
                  style={{
                    width: "100%",
                    backgroundColor: "#3498db",
                    borderColor: "#3498db",
                    fontWeight: "500",
                    padding: "10px",
                    borderRadius: "5px",
                    textTransform: "uppercase",
                    fontSize: "14px",
                    boxShadow: "none",
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

export default Cards;
