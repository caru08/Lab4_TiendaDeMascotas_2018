CREATE DATABASE IF NOT EXISTS empresa;
USE empresa;

DROP TABLE IF EXISTS servicioWeb;
DROP TABLE IF EXISTS usuarios;


CREATE TABLE usuarios(
    id int(255) auto_increment not null,
    name varchar(255) not null,
    email varchar(50),
    role varchar(50),
    sex varchar(50),
    password varchar(255) not null,
    CONSTRAINT pk_usuarios PRIMARY KEY (id),
    CONSTRAINT email_unique UNIQUE (email)
)ENGINE=InnoDb;

CREATE TABLE servicioWeb(
    id int(255) auto_increment not null,
    nombre varchar(255) not null,
    espacio int(255) not null,
    precio int(255) not null,
    idUsuario int(255) not null,
    CONSTRAINT pk_servicioWeb PRIMARY KEY (id),
    FOREIGN KEY (idUsuario) REFERENCES usuarios(id)
)ENGINE=InnoDb;

#CREATE TABLE mascotas(
#    id int(255) auto_increment not null,
#    nroFicha varchar(255) not null,
 #   nombre varchar(50),
  #  raza varchar(50),
   # color varchar(255) not null,
  #  edad varchar(255) not null,
  #  tipo varchar(255) not null,
  #  CONSTRAINT pk_mascotas PRIMARY KEY (id)    
#)ENGINE=InnoDb;

#CREATE TABLE turnos(
 #   id int(255) auto_increment not null,
  #  idMascota int(255) not null,
   # idUsuario int(255) not null,
   # fecha varchar(255) not null,
   # CONSTRAINT pk_turnos PRIMARY KEY (id),
   # FOREIGN KEY (idMascota) REFERENCES mascotas(id),
   # FOREIGN KEY (idUsuario) REFERENCES usuarios(id)
#)ENGINE=InnoDb;

INSERT INTO usuarios VALUES (null, 'Carlos', 'carlos@email.com','profesional', '', '81dc9bdb52d04dc20036dbd8313ed055');
INSERT INTO usuarios VALUES (null, 'German', 'german@email.com','normal', '', '81dc9bdb52d04dc20036dbd8313ed055');
INSERT INTO usuarios VALUES (null, 'Carina', 'carina@email.com','free','', '81dc9bdb52d04dc20036dbd8313ed055');
