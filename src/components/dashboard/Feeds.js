import React from "react";
import {
  Card,
  CardBody,
  CardTitle,
  ListGroup,
  CardSubtitle,
  ListGroupItem,
  Button,
} from "reactstrap";

const FeedData = [
  {
    title: "Nueva inscripción de estudiante",
    icon: "bi bi-person-plus",
    color: "success",
    date: "Hace 5 minutos",
  },
  {
    title: "Nuevo examen de manejo programado",
    icon: "bi bi-clipboard-check",
    color: "info",
    date: "Hace 10 minutos",
  },
  {
    title: "Clase de conducción reprogramada",
    icon: "bi bi-arrow-repeat",
    color: "warning",
    date: "Hace 15 minutos",
  },
  {
    title: "Estudiante aprobado en examen práctico",
    icon: "bi bi-check-circle",
    color: "primary",
    date: "Hace 20 minutos",
  },
  {
    title: "Sistema de vehículos actualizado",
    icon: "bi bi-car-front",
    color: "dark",
    date: "Hace 25 minutos",
  },
  {
    title: "Incidencia con el instructor",
    icon: "bi bi-exclamation-circle",
    color: "danger",
    date: "Hace 30 minutos",
  },
];

const Feeds = () => {
  return (
    <Card className="shadow-sm">
      <CardBody>
        <CardTitle tag="h5" className="text-center">Últimas Notificaciones</CardTitle>
        <CardSubtitle className="mb-3 text-muted text-center" tag="h6">
          Mantente actualizado con las últimas noticias de la academia
        </CardSubtitle>
        <ListGroup flush>
          {FeedData.map((feed, index) => (
            <ListGroupItem
              key={index}
              action
              href="/"
              tag="a"
              className="d-flex align-items-center p-3 border-0 hover-feed-item"
            >
              <Button
                className="rounded-circle me-3"
                size="sm"
                color={feed.color}
              >
                <i className={feed.icon}></i>
              </Button>
              <div className="flex-grow-1">
                <div className="feed-title">{feed.title}</div>
                <small className="text-muted text-small">{feed.date}</small>
              </div>
            </ListGroupItem>
          ))}
        </ListGroup>
      </CardBody>
    </Card>
  );
};

export default Feeds;
