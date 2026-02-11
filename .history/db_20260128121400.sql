CREATE TABLE Participant (
    participant_ID number(10),
    participant_emailAdress VARCHAR(100),

    CONSTRAINT pk_participant_ID      PRIMARY KEY (participant_ID),
);

CREATE TABLE Study(
    study_ID number(10),
    study_name VARCHAR(100) NOT NULL,
    study_createdAt TIMESTAMP NOT NULL DEFAULT now(),

    CONSTRAINT pk_study_ID      PRIMARY KEY (study_ID),
);

CREATE TABLE DesignStrategy(
    designStrategy_ID number(10),
    designStrategy_name VARCHAR(100) NOT NULL,
    study_ID number(10) NOT NULL REFERENCES Study(study_ID),

    CONSTRAINT pk_designStrategy_ID      PRIMARY KEY (designStrategy_ID),
    CONSTRAINT fk_designStrategy_study_ID            FOREIGN KEY (study_ID)     REFERENCES Study(study_ID)
) 

CREATE TABLE StudySession(
    studySession_ID number(10),
    studySession_startAt TIMESTAMP,
    studySession_endAt TIMESTAMP,
    study_ID number(10),
    participant_ID number(10),
    designStrategy_ID number(10),

    CONSTRAINT pk_studySession_ID      PRIMARY KEY (studySession_ID),
    CONSTRAINT fk_studySession_study_ID            FOREIGN KEY (study_ID)     REFERENCES Study(study_ID),
    CONSTRAINT fk_studySession_participant_ID            FOREIGN KEY (participant_ID)     REFERENCES Participant(participant_ID),
    CONSTRAINT fk_studySession_designStrategy_ID            FOREIGN KEY (designStrategy_ID)     REFERENCES DesignStrategy(designStrategy_ID)
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

    CONSTRAINT pk_button_ID      PRIMARY KEY (button_ID),
    CONSTRAINT fk_button_screen_ID            FOREIGN KEY (screen_ID)     REFERENCES Screen(screen_ID)
)

CREATE TABLE Response(
    response_ID number(10),
    response_type VARCHAR(30),
    response_rtMs FLOAT,
    response_submittedAt DATE,
    response_selectedChoice VARCHAR(30),
    response_metadata JSONB,
    studySession_ID number(10),
    screen_ID number(10),
    button_ID number(10),

    CONSTRAINT pk_response_ID      PRIMARY KEY (response_ID),
    CONSTRAINT fk_response_studySession_ID            FOREIGN KEY (studySession_ID)     REFERENCES studySession(studySession_ID),
    CONSTRAINT fk_response_screen_ID            FOREIGN KEY (screen_ID)     REFERENCES Screen(screen_ID),
    CONSTRAINT fk_response_button_ID            FOREIGN KEY (button_ID)     REFERENCES Button(button_ID),
)
