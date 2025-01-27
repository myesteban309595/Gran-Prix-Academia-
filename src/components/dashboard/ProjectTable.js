import React from "react";
import { Card, CardBody, CardTitle, CardSubtitle, Table } from "reactstrap";

const tableData = [
  {
    avatar: "https://media.licdn.com/dms/image/v2/C5603AQENzQ-AOXekmg/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1516583327418?e=2147483647&v=beta&t=MoiNWaJtDjczcQ5WeeMmq4vDIZfUc4VgS-l9BshmKO0", // URL de imagen de ejemplo
    name: "Carlos Martínez",
    email: "c.martinez@academiac.com",
    course: "Curso de Conducción Básico",
    status: "En progreso",
    weeks: "6",
    cost: "COP 1800000",
  },
  {
    avatar: "https://media.licdn.com/dms/image/D4E03AQFviNa4lYn0mg/profile-displayphoto-shrink_200_200/0/1714012143356?e=2147483647&v=beta&t=TU6VoJSC6bnwzRXx-uaCPDcs4li5SoXHW-TnAIC0Hfg", // URL de imagen de ejemplo
    name: "Ana López",
    email: "a.lopez@academiac.com",
    course: "Curso de Conducción Avanzado",
    status: "Aprobado",
    weeks: "8",
    cost: "COP 2500000",
  },
  {
    avatar: "https://media.licdn.com/dms/image/v2/C4E03AQEcvFkNW6A2zA/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1641924215270?e=2147483647&v=beta&t=P0SVCVfYmVsJALL3EBUC4mqjTCtGmFUH23QkjMYtXAQ", // URL de imagen de ejemplo
    name: "José Pérez",
    email: "j.perez@academiac.com",
    course: "Curso de Rehabilitación de Conductores",
    status: "Reprogramado",
    weeks: "10",
    cost: "COP 1200000",
  },
  {
    avatar: "https://media.licdn.com/dms/image/v2/C4D03AQF5B2MSjVSPRQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1649653824138?e=2147483647&v=beta&t=5YQ76mLfA85J7zgPvrzXGLPUlfGpTWnBU0AVk-brPE8", // URL de imagen de ejemplo
    name: "Luis García",
    email: "l.garcia@academiac.com",
    course: "Curso de Conducción Básico",
    status: "En progreso",
    weeks: "6",
    cost: "COP 1800000",
  },
  {
    avatar: "https://media.licdn.com/dms/image/v2/C5603AQFQKfwDzWgwMA/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1667873853604?e=2147483647&v=beta&t=LXmGbCEAJS5wjk3v-U5WVKi4PYqAMdZS3VnwS09AMjg", // URL de imagen de ejemplo
    name: "Marta Fernández",
    email: "m.fernandez@academiac.com",
    course: "Curso de Conducción Básico",
    status: "Aprobado",
    weeks: "7",
    cost: "COP 2000000",
  },
];

const ProjectTables = () => {
  return (
    <div>
      <Card className="shadow-sm">
        <CardBody>
          <CardTitle tag="h5" className="text-center">Listado de Estudiantes y Cursos</CardTitle>
          <CardSubtitle className="mb-2 text-muted text-center" tag="h6">
            Resumen del progreso de los estudiantes en los cursos de conducción
          </CardSubtitle>

          <Table className="no-wrap mt-3 align-middle" responsive borderless>
            <thead className="table-light">
              <tr>
                <th>Instructor</th>
                <th>Curso</th>
                <th>Estado</th>
                <th>Duración (semanas)</th>
                <th>Costo</th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((tdata, index) => (
                <tr key={index} className="border-top">
                  <td>
                    <div className="d-flex align-items-center p-2">
                      <img
                        src={tdata.avatar}
                        className="rounded-circle"
                        alt="avatar"
                        width="45"
                        height="45"
                      />
                      <div className="ms-3">
                        <h6 className="mb-0">{tdata.name}</h6>
                        <span className="text-muted">{tdata.email}</span>
                      </div>
                    </div>
                  </td>
                  <td>{tdata.course}</td>
                  <td>
                    {tdata.status === "En progreso" ? (
                      <span className="p-2 bg-info rounded-circle d-inline-block ms-3"></span>
                    ) : tdata.status === "Reprogramado" ? (
                      <span className="p-2 bg-warning rounded-circle d-inline-block ms-3"></span>
                    ) : (
                      <span className="p-2 bg-success rounded-circle d-inline-block ms-3"></span>
                    )}
                  </td>
                  <td>{tdata.weeks}</td>
                  <td>{tdata.cost}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </CardBody>
      </Card>
    </div>
  );
};

export default ProjectTables;
