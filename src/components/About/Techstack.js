import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiNodejs,
  DiPython,
  DiJava,
} from "react-icons/di";
import {
  SiTypescript,
  SiExpress,
  SiSpringboot,
  SiFastify,
  SiNestjs,
  SiPostgresql,
  SiMysql,
  SiMongodb,
  SiRedis,
  SiElasticsearch,
  SiApachekafka,
  SiAmazonaws,
  SiGooglecloud,
  SiDocker,
  SiKubernetes,
  SiRedhatopenshift,
  SiKibana,
  SiJaeger,
} from "react-icons/si";
import { TbPlugConnected, TbSql } from "react-icons/tb";
import { skills } from "../../data/resume";

// Keyed by the technology names in src/data/resume.js.
// A technology without an entry here is shown as a text tile.
const ICONS = {
  JavaScript: DiJavascript1,
  TypeScript: SiTypescript,
  Java: DiJava,
  Python: DiPython,
  "C/C++": CgCPlusPlus,
  SQL: TbSql,
  "Node.js": DiNodejs,
  "Express.js": SiExpress,
  "Spring Boot": SiSpringboot,
  Fastify: SiFastify,
  NestJS: SiNestjs,
  WebSockets: TbPlugConnected,
  PostgreSQL: SiPostgresql,
  MySQL: SiMysql,
  MongoDB: SiMongodb,
  Redis: SiRedis,
  Elasticsearch: SiElasticsearch,
  "Apache Kafka": SiApachekafka,
  AWS: SiAmazonaws,
  GCP: SiGooglecloud,
  Docker: SiDocker,
  Kubernetes: SiKubernetes,
  OpenShift: SiRedhatopenshift,
  Kibana: SiKibana,
  Jaeger: SiJaeger,
};

// Categories shown under "Tools I use"; every other category is in the skillset grid.
export const TOOL_CATEGORIES = ["Cloud & DevOps", "Observability"];

export function technologiesIn(predicate) {
  return skills
    .filter((s) => predicate(s.category))
    .flatMap((s) => s.technologies || []);
}

export function TechGrid({ names }) {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {names.map((name) => {
        const Icon = ICONS[name];
        return (
          <Col xs={4} md={2} className="tech-icons" key={name}>
            {Icon ? (
              <>
                <Icon aria-hidden="true" />
                <span className="tech-icon-label">{name}</span>
              </>
            ) : (
              <span className="tech-icon-text">{name}</span>
            )}
          </Col>
        );
      })}
    </Row>
  );
}

function Techstack() {
  return (
    <TechGrid names={technologiesIn((c) => !TOOL_CATEGORIES.includes(c))} />
  );
}

export default Techstack;
