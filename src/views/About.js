import { Row, Col, Card, CardBody, CardTitle, Button } from "reactstrap";

const About = () => {
  return (
    <Row>
      <Col>
        {/* --------------------------------------------------------------------------------*/}
        {/* Card-1 - Información general sobre la academia de conducción */}
        {/* --------------------------------------------------------------------------------*/}
        <Card>
          <CardTitle tag="h6" className="border-bottom p-3 mb-0">
            <i className="bi bi-car-front me-2"></i>
            Acerca de Nuestra Academia de Conducción
          </CardTitle>
          <CardBody className="p-4 text-center">
            <Row>
              <Col lg="8" className="mx-auto">
                <h2 className="mt-4">Bienvenido a Gran Prix Academia de Conducción</h2>
                <h5 className="mb-4">
                  La mejor academia para obtener tu licencia de conducir. Con
                  instructores certificados, vehículos modernos y cursos
                  personalizables.
                </h5>
                <p>
                  En Academia de Conducción Pro, nos enorgullece ofrecer una
                  formación de calidad para todos nuestros estudiantes. Ya sea
                  que estés buscando obtener tu licencia por primera vez o mejorar
                  tus habilidades, nuestro equipo de expertos te guiará en cada
                  paso del proceso.
                </p>
                <img
                  src="https://grandprixacademia.com/wp-content/uploads/2020/08/logo_principal_1.png"
                  alt="Academia de Conducción"
                  className="img-fluid mt-3"
                />
                <br />
                <Button
                  className="mt-3"
                  color="primary"
                  href="https://www.ejemplo.com/inscripcion"
                  target="_blank"
                >
                  ¡Inscríbete Ahora!
                </Button>
              </Col>
            </Row>
          </CardBody>
        </Card>

        {/* --------------------------------------------------------------------------------*/}
        {/* Card-2 - Nuestros Instructores */}
        {/* --------------------------------------------------------------------------------*/}
        <Card className="mt-4">
          <CardTitle tag="h6" className="border-bottom p-3 mb-0 ">
            <i className="bi bi-person-bounding-box me-2"></i>
            Nuestros Instructores
          </CardTitle>
          <CardBody className="p-4">
            <Row className="text-center">
              {/* Instructor 1 */}
              <Col lg="4" className="mb-4">
                <Card className="h-100">
                  <CardBody>
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLqIoLO6ahbYrroSHhIIu1A2781zjIb-1qrg&s"
                      alt="Instructor 1"
                      className="img-fluid rounded-circle mb-3"
                    />
                    <h5>Juan Martínez</h5>
                    <p>Instructor de Conducción</p>
                    <p>
                      Con más de 10 años de experiencia, Juan es un experto en
                      enseñanza práctica y te guiará para que obtengas tu licencia sin
                      preocupaciones.
                    </p>
                  </CardBody>
                </Card>
              </Col>

              {/* Instructor 2 */}
              <Col lg="4" className="mb-4">
                <Card className="h-100">
                  <CardBody>
                    <img
                      src="https://media.licdn.com/dms/image/v2/D5603AQFsY9YahX_aBg/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1730229762104?e=2147483647&v=beta&t=-GXoggu_0Umkyl1qqClP2AfNiK9fnKDQu5zKBE344R8"
                      alt="Instructor 2"
                      className="img-fluid rounded-circle mb-3"
                    />
                    <h5>María González</h5>
                    <p>Instructora de Conducción</p>
                    <p>
                      María es una apasionada de la seguridad vial. Tiene un enfoque
                      único en la formación de conductores seguros y responsables.
                    </p>
                  </CardBody>
                </Card>
              </Col>

              {/* Instructor 3 */}
              <Col lg="4" className="mb-4">
                <Card className="h-100">
                  <CardBody>
                    <img
                      src="https://media.licdn.com/dms/image/v2/C4E03AQEefuyCuTeEFg/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1517232914674?e=2147483647&v=beta&t=e1H0nMiTMGAEvydLr-EimAitTSGKI_dcn6UKDnlEia4"
                      alt="Instructor 3"
                      className="img-fluid rounded-circle mb-3"
                    />
                    <h5>Carlos Ramírez</h5>
                    <p>Instructor de Conducción</p>
                    <p>
                      Con un enfoque técnico y profesional, Carlos se asegura de que
                      sus estudiantes comprendan las complejidades del manejo en
                      diversas condiciones.
                    </p>
                  </CardBody>
                </Card>
              </Col>

              {/* Instructor 4 */}
              <Col lg="4" className="mb-4">
                <Card className="h-100">
                  <CardBody>
                    <img
                      src="https://media.licdn.com/dms/image/v2/C5103AQE9NGSXE40g0g/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1516837304342?e=2147483647&v=beta&t=XS_72Xtk0I729SGsxK6f7sI6WSCYLnRKvKIDeUl9uDU"
                      alt="Instructor 4"
                      className="img-fluid rounded-circle mb-3"
                    />
                    <h5>Lucía Fernández</h5>
                    <p>Instructora de Conducción</p>
                    <p>
                      Lucía se especializa en la conducción defensiva. Sus clases están
                      orientadas a mejorar la capacidad de reacción y evitar accidentes.
                    </p>
                  </CardBody>
                </Card>
              </Col>

              {/* Instructor 5 */}
              <Col lg="4" className="mb-4">
                <Card className="h-100">
                  <CardBody>
                    <img
                      src="https://d2gjqh9j26unp0.cloudfront.net/profilepic/eb8e815f7177c6084565d837cc197cc4"
                      alt="Instructor 5"
                      className="img-fluid rounded-circle mb-3"
                    />
                    <h5>Pedro Gómez</h5>
                    <p>Instructor de Conducción</p>
                    <p>
                      Pedro tiene un enfoque práctico y se asegura de que sus
                      estudiantes aprendan a manejar con seguridad en cualquier tipo de
                      carretera.
                    </p>
                  </CardBody>
                </Card>
              </Col>

              {/* Instructor 6 */}
              <Col lg="4" className="mb-4">
                <Card className="h-100">
                  <CardBody>
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxz1-UvuRFQpS9LCexRtR1y789caY0cDAr8s-BjaLZEHsijVZ40hpdsg2hfhm0hCK7Dpg&usqp=CAU"
                      alt="Instructor 5"
                      className="img-fluid rounded-circle mb-3"
                    />
                    <h5>Carlos Jimenez</h5>
                    <p>Instructor de Conducción</p>
                    <p>
                      Pedro tiene un enfoque práctico y se asegura de que sus
                      estudiantes aprendan a manejar con seguridad en cualquier tipo de
                      carretera.
                    </p>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </CardBody>
        </Card>

        {/* --------------------------------------------------------------------------------*/}
        {/* Card-3 - Cursos Disponibles */}
        {/* --------------------------------------------------------------------------------*/}
        <Card className="mt-4">
          <CardTitle tag="h6" className="border-bottom p-3 mb-0">
            <i className="bi bi-clipboard-check me-2"></i>
            Cursos Disponibles
          </CardTitle>
          <CardBody className="p-4 text-center">
            <Row>
              <Col lg="4">
                <Card className="mb-3">
                  <CardBody>
                    <h5>Curso Básico</h5>
                    <p>
                      Ideal para principiantes. Aprenderás las normas de tránsito,
                      control del vehículo y conducción en vías urbanas.
                    </p>
                    <Button color="secondary" href="#">Más Información</Button>
                  </CardBody>
                </Card>
              </Col>
              <Col lg="4">
                <Card className="mb-3">
                  <CardBody>
                    <h5>Curso Avanzado</h5>
                    <p>
                      Para conductores con experiencia. Incluye manejo en
                      condiciones especiales como lluvia, niebla y carreteras
                      rápidas.
                    </p>
                    <Button color="secondary" href="#">Más Información</Button>
                  </CardBody>
                </Card>
              </Col>
              <Col lg="4">
                <Card className="mb-3">
                  <CardBody>
                    <h5>Curso de Refuerzo</h5>
                    <p>
                      ¿Ya tienes tu licencia pero te sientes inseguro al conducir?
                      Este curso te ayudará a mejorar tus habilidades y aumentar tu
                      confianza.
                    </p>
                    <Button color="secondary" href="#">Más Información</Button>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </CardBody>
        </Card>

        {/* --------------------------------------------------------------------------------*/}
        {/* Card-4 - Testimonios */}
        {/* --------------------------------------------------------------------------------*/}
        <Card className="mt-4">
          <CardTitle tag="h6" className="border-bottom p-3 mb-0">
            <i className="bi bi-chat-left-quote me-2"></i>
            Testimonios de Nuestros Estudiantes
          </CardTitle>
          <CardBody className="p-4 text-center">
            <Row>
              <Col lg="4">
                <Card className="mb-3">
                  <CardBody>
                    <p>"La mejor experiencia de aprendizaje que he tenido. Los
                    instructores son pacientes y muy profesionales. Gracias a
                    ellos, obtuve mi licencia de conducir sin problemas."</p>
                    <footer>- Juan Pérez</footer>
                  </CardBody>
                </Card>
              </Col>
              <Col lg="4">
                <Card className="mb-3">
                  <CardBody>
                    <p>"Me sentí muy seguro durante todo el proceso. Los cursos
                    están muy bien estructurados y el apoyo es excelente."</p>
                    <footer>- María González</footer>
                  </CardBody>
                </Card>
              </Col>
              <Col lg="4">
                <Card className="mb-3">
                  <CardBody>
                    <p>"Un lugar donde realmente aprendes a conducir. ¡100%
                    recomendado!"</p>
                    <footer>- Carlos Ramírez</footer>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </CardBody>
        </Card>

        {/* --------------------------------------------------------------------------------*/}
        {/* Card-5 - Contacto */}
        {/* --------------------------------------------------------------------------------*/}
        <Card className="mt-4">
          <CardTitle tag="h6" className="border-bottom p-3 mb-0 ">
            <i className="bi bi-envelope me-2"></i>
            Contacta con Nosotros
          </CardTitle>
          <CardBody className="p-4 text-center">
            <h4>¿Tienes dudas o preguntas?</h4>
            <p>Contacta con nosotros para más información o para agendar tu
            clase práctica.</p>
            <Button color="primary" href="mailto:info@academiacondicion.com">
              Enviar Correo
            </Button>
          </CardBody>
        </Card>
      </Col>
    </Row>
  );
};

export default About;
