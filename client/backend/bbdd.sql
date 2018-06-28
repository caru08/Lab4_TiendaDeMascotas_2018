CREATE DATABASE IF NOT EXISTS tienda_mascotas;
USE tienda_mascotas;

DROP TABLE IF EXISTS usuarios;
CREATE TABLE usuarios(
    id int(255) auto_increment not null,
    name varchar(255) not null,
    email varchar(50),
    role varchar(50),
    password varchar(255) not null,
    CONSTRAINT pk_usuarios PRIMARY KEY (id),
    CONSTRAINT email_unique UNIQUE (email)
)ENGINE=InnoDb;

DROP TABLE IF EXISTS mascotas;
CREATE TABLE mascotas(
    id int(255) auto_increment not null,
    nroFicha varchar(255) not null,
    nombre varchar(50),
    raza varchar(50),
    color varchar(255) not null,
    edad varchar(255) not null,
    tipo varchar(255) not null,
    CONSTRAINT pk_mascotas PRIMARY KEY (id)    
)ENGINE=InnoDb;

INSERT INTO usuarios VALUES (null, 'admin', 'admin@email.com', 'admin', '81dc9bdb52d04dc20036dbd8313ed055');
