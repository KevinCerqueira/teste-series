CREATE SCHEMA IF NOT EXISTS heroku_6b813a9a5dace8a DEFAULT CHARACTER SET utf8;

USE heroku_6b813a9a5dace8a;

CREATE TABLE IF NOT EXISTS status (
  idstatus INT NOT NULL AUTO_INCREMENT,
  descricao VARCHAR(15) NOT NULL,
  PRIMARY KEY (idstatus)
);

CREATE TABLE IF NOT EXISTS serie (
  idserie INT NOT NULL AUTO_INCREMENT,
  nomeserie VARCHAR(100) NOT NULL,
  anolancamento YEAR(4) NOT NULL,
  numtemporadas INT NOT NULL,
  sinopse VARCHAR(500) NOT NULL,
  categoria VARCHAR(10) NOT NULL,
  status INT NOT NULL,
  PRIMARY KEY (idserie),
  INDEX fk_serie_status_idx (status ASC),
  CONSTRAINT fk_serie_status FOREIGN KEY (status) REFERENCES status (idstatus) ON DELETE NO ACTION ON UPDATE NO ACTION
);