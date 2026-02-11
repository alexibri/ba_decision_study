CREATE TABLE User (
    user_ID number(10),
    user_emailAdress VARCHAR(20),

    CONSTRAINT pk_user_ID      PRIMARY KEY (user_ID),
);

CREATE TABLE Study(
    study_ID number(10),
    study_name VARCHAR(30),
    condition_ID number(10),
    study_createdAt DATE,

    CONSTRAINT pk_study_ID      PRIMARY KEY (study_ID),
    CONSTRAINT fk_study_condition_ID            FOREIGN KEY (condition_ID)     REFERENCES Condition(condition_ID),
);

CREATE TABLE Condition(
    condition_ID number(10),
    condition_name VARCHAR(30),
    study_ID number(10),

    CONSTRAINT pk_condition_ID      PRIMARY KEY (condition_ID)
)

CREATE TABLE Session(
    session_ID number(10),
    session_startAt DATE,
    session_endAt DATE,

    CONSTRAINT pk_session_ID      PRIMARY KEY (session_ID)
);

CREATE TABLE Screen(
    screen_ID number(10),
    screen_name VARCHAR(30),
    screen_orderIndex number(10),
    study_ID number(10),

    CONSTRAINT pk_screen_ID      PRIMARY KEY (screen_ID)
)

CREATE TABLE Button(
    button_ID number(10),
    button_orderIndex number(10),
    screen_ID number(10),

    CONSTRAINT pk_button_ID      PRIMARY KEY (button_ID)
)

CREATE TABLE Response(
    response_ID number(10),
    response_type VARCHAR(30),
    response_rtMs number(30),
    response_submittedAt DATE,
    response_selectedChoice VARCHAR(30),
    response_metadata JSON,
    session_ID number(10),
    screen_ID number(10),
    button_ID number(10),

    CONSTRAINT pk_response_ID      PRIMARY KEY (response_ID)
)


-- Table 2  - init 1
CREATE TABLE Schiedsrichter (
    SchiedsrichterID    	VARCHAR2(10)        NOT NULL,
    Land                    VARCHAR2(40)        NOT NULL,
    Typ                     VARCHAR2(25)        NOT NULL,
    arbeitserlaubnis        number(4),
    CONSTRAINT pk_schiedsrichterid      PRIMARY KEY (SchiedsrichterID)
);

-- Table 11 - init 2
CREATE TABLE Gruppe(
    GruppenID   CHAR(1)         NOT NULL,
    CONSTRAINT  pk_gruppe       PRIMARY KEY (GruppenID)
);


-- Table 10 - init 3
CREATE TABLE Kader (
    kaderName           VARCHAR2(40)        NOT NULL,
    trainerID           NUMBER(10)          NOT NULL,
    gruppenID           CHAR(1)         NOT NULL,
    CONSTRAINT pk_kader_name                PRIMARY KEY (kaderName),
    CONSTRAINT fk1_gru_gruppenID            FOREIGN KEY (gruppenID)     REFERENCES Gruppe(GruppenID),
    CONSTRAINT ak_tra_trainerID             UNIQUE (trainerID)  
);

-- Table 4 - init 4
CREATE TABLE Schiedsrichterteam(
    SchiedsrichterteamID        VARCHAR2(10)        NOT NULL,
    hauptS_ID                   VARCHAR2(10)        NOT NULL, 
    assiS1_ID                   VARCHAR2(10)        NOT NULL,
    assiS2_ID                   VARCHAR2(10)        NOT NULL,
    CONSTRAINT pk_schiedsrichterteam    PRIMARY KEY (schiedsrichterteamID),
    CONSTRAINT fk_hauptS                FOREIGN KEY (hauptS_ID) REFERENCES Schiedsrichter(SchiedsrichterID),
    CONSTRAINT fk_assiS1                FOREIGN KEY (assiS1_ID) REFERENCES Schiedsrichter(SchiedsrichterID),
    CONSTRAINT fk_assiS2                FOREIGN KEY (assiS2_ID) REFERENCES Schiedsrichter(SchiedsrichterID),
    CONSTRAINT unique_hauptS    UNIQUE (hauptS_ID),
    CONSTRAINT unique_assiS1    UNIQUE (assiS1_ID),
    CONSTRAINT unique_assiS2    UNIQUE (assiS2_ID)
);
