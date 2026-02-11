CREATE TABLE Participant (
    participant_ID number(10),
    participant_emailAdress VARCHAR(20),

    CONSTRAINT pk_participant_ID      PRIMARY KEY (participant_ID),
);

CREATE TABLE Study(
    study_ID number(10),
    study_name VARCHAR(30),
    study_createdAt DATE,

    CONSTRAINT pk_study_ID      PRIMARY KEY (study_ID),
   
);

CREATE TABLE DesignStrategy(
    designStrategy_ID number(10),
    designStrategy_name VARCHAR(30),
    study_ID number(10),

    CONSTRAINT pk_designStrategy_ID      PRIMARY KEY (designStrategy_ID),
    CONSTRAINT fk_designStrategy_study_ID            FOREIGN KEY (study_ID)     REFERENCES Study(study_ID)
) 

CREATE TABLE Session(
    session_ID number(10),
    session_startAt DATE,
    session_endAt DATE,
    study_ID number(10),
    participant_ID number(10),
    designStrategy_ID number(10),

    CONSTRAINT pk_session_ID      PRIMARY KEY (session_ID),
    CONSTRAINT fk_session_study_ID            FOREIGN KEY (study_ID)     REFERENCES Study(study_ID),
    CONSTRAINT fk_session_participant_ID            FOREIGN KEY (participant_ID)     REFERENCES Study(study_ID),
    CONSTRAINT fk_session_designStrategy_ID            FOREIGN KEY (designStrategy_ID)     REFERENCES DesignStrategy(designStrategy_ID)
    
);

CREATE TABLE Screen(
    screen_ID number(10),
    screen_name VARCHAR(30),
    screen_orderIndex number(10),
    study_ID number(10),

    CONSTRAINT pk_screen_ID      PRIMARY KEY (screen_ID),
    CONSTRAINT fk_screen_study_ID            FOREIGN KEY (study_ID)     REFERENCES Study(study_ID)
)

CREATE TABLE Button(
    button_ID number(10),
    button_orderIndex number(10),
    screen_ID number(10),

    CONSTRAINT pk_button_ID      PRIMARY KEY (button_ID)
    CONSTRAINT fk_button_screen_ID            FOREIGN KEY (screen_ID)     REFERENCES Screen(screen_ID)
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

    CONSTRAINT pk_response_ID      PRIMARY KEY (response_ID),
    CONSTRAINT fk_response_session_ID            FOREIGN KEY (session_ID)     REFERENCES Session(session_ID),
    CONSTRAINT fk_response_screen_ID            FOREIGN KEY (sreen_ID)     REFERENCES Screen(screen_ID),
    CONSTRAINT fk_response_button_ID            FOREIGN KEY (button_ID)     REFERENCES Button(button_ID),
)
