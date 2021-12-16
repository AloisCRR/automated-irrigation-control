# Proyecto de investigación

Sistema inteligente para la optimización y automatización del control de irrigación en cultivos utilizando tecnologías IoT.

## Características

- Comunicación inalámbrica a través de la banda 2.4 GHz utilizando NRF24L01.
- Emparejamiento automático de nodos sensores a nodo central (gateway).
- Envío/Recepción de datos a través de MQTT.
- Almacenamiento de datos a través de Telegraf hacia InfluxDB.
- Visualización de métricas utilizando Grafana.

## Ejecutar la presentación localmente

El proyecto completo estará disponible para ejecutar localmente pronto...

- Instalar [Node.js (16+)](https://nodejs.org/es/)

- Clonar el proyecto

  ```bash
  git clone git@github.com:AloisCRR/automated-irrigation-control.git
  ```

- Instalar dependencias

  ```bash
  cd automated-irrigation-control && npm i
  ```

- Correr la presentación

  ```bash
  npm run dev
  ```

## Arquitectura

Esta es la aquitectura base planeada, es de alto nivel y aún necesita mejoras.

![Arquitectura](/Diagrams/Architecture.svg)

## Diseño conceptual

Diseño a nivel de campo de la implementación del sistema.

![Diseño conceptual](/Diagrams/conceptual.svg)

## Roadmap

- [x] Arquitectura base.
- [x] Conexión inalámbrica entre nodos y gateway.
- [x] Implementación de MQTT como protocolo de transporte de datos.
- [x] Visualización de datos en local utilizando Grafana.
- [ ] Depliegue de la infraestructura.
- [ ] Seguridad.
- [ ] API para consumir datos desde el cliente (Web, Mobile, etc...).
- [ ] Dashboard o panel de control central de la plataforma para el usuario.
