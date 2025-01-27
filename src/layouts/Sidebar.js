import { Button, Nav, NavItem } from "reactstrap";
import { Link, useLocation } from "react-router-dom";

const navigation = [
  {
    title: "Teoría Conduccion",
    href: "/starte",
    icon: "bi bi-book",
  },
  {
    title: "Simulaciones",
    href: "/simulador",
    icon: "bi bi-pencil-square",
  },
  {
    title: "Prácticas de manejo",
    href: "/practicas",
    icon: "bi bi-pencil-square",
  },
  {
    title: "Exámenes teóricos",
    href: "/examen-teorico",
    icon: "bi bi-pencil-square",
  },
  {
    title: "Exámenes prácticos",
    href: "/examen-practico",
    icon: "bi bi-check-circle",
  },
  {
    title: "Calendario de clase",
    href: "/calendario",
    icon: "bi bi-calendar",
  },
  {
    title: "Instructores",
    href: "/instructores",
    icon: "bi bi-person-lines-fill",
  },
  {
    title: "Certificados",
    href: "/certificados",
    icon: "bi bi-award",
  },
  {
    title: "Progreso",
    href: "/progreso",
    icon: "bi bi-bar-chart",
  },
  {
    title: "Preguntas Frecuentes",
    href: "/faq",
    icon: "bi bi-question-circle",
  },
 ]

const Sidebar = () => {
  const showMobilemenu = () => {
    document.getElementById("sidebarArea").classList.toggle("showSidebar");
  };
  let location = useLocation();

  return (
    <div>
      <div className="d-flex align-items-center"></div>
      <div
        className="profilebg"
        style={{
          background: `url('https://image.slidesdocs.com/responsive-images/background/empty-cement-road-amidst-stunning-mountain-scenery-a-3d-rendering-for-car-displays-powerpoint-background_99614bd010__960_540.jpg') no-repeat center center`,
          backgroundSize: 'cover', // Asegura que la imagen cubra todo el fondo
          height: '100%', // Asegura que el fondo tenga altura
        }}
                >
        <div className="p-3 d-flex">
        <img
         src="https://avatars.githubusercontent.com/u/58303931?v=4"
         alt="user"
         width="50"
         className="rounded-circle"
         />
          <Button
            color="white"
            className="ms-auto text-white d-lg-none"
            onClick={() => showMobilemenu()}
          >
            <i className="bi bi-x"></i>
          </Button>
        </div>
        <div className="bg-dark text-white p-2 opacity-75">Santiago Tokora</div>
      </div>
      <div className="p-2 mt-2">
        <Nav vertical className="sidebarNav">
          {navigation.map((navi, index) => (
            <NavItem key={index} className="sidenav-bg">
              <Link
                to={navi.href}
                className={
                  location.pathname === navi.href
                    ? "active nav-link py-3"
                    : "nav-link text-secondary py-3"
                }
              >
                <i className={navi.icon}></i>
                <span className="ms-3 d-inline-block">{navi.title}</span>
              </Link>
            </NavItem>
          ))}
          <Button
            color="danger"
            tag="a"
            target="_blank"
            className="mt-3"
            href="https://www.uxpin.com/404"
          >
            Descargar Certificado
          </Button>
        </Nav>
      </div>
    </div>
  );
};

export default Sidebar;
