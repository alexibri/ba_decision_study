CREATE TABLE participant (
    participant_ID BIGSERIAL,
    participant_emailAdress VARCHAR(100),

    CONSTRAINT pk_participant_ID      PRIMARY KEY (participant_ID)
);

CREATE TABLE study(
    study_ID BIGSERIAL,
    study_name VARCHAR(100) NOT NULL,
    study_createdAt TIMESTAMPTZ NOT NULL DEFAULT now(),

    CONSTRAINT pk_study_ID      PRIMARY KEY (study_ID)
);

CREATE TABLE DesignStrategy(
    designStrategy_ID BIGSERIAL,
    designStrategy_name VARCHAR(100) NOT NULL,
    study_ID BIGINT NOT NULL,

    CONSTRAINT pk_designStrategy_ID      PRIMARY KEY (designStrategy_ID),
    CONSTRAINT fk_designStrategy_study_ID            FOREIGN KEY (study_ID)     REFERENCES Study(study_ID)  ON DELETE CASCADE
) ;

CREATE TABLE StudySession(
    studySession_ID BIGSERIAL,
    studySession_startAt TIMESTAMPTZ NOT NULL DEFAULT now(),
    studySession_endAt TIMESTAMPTZ,
    participant_ID BIGINT NOT NULL ,
    designStrategy_ID BIGINT NOT NULL ,

    CONSTRAINT pk_studySession_ID      PRIMARY KEY (studySession_ID),
    CONSTRAINT fk_studySession_participant_ID            FOREIGN KEY (participant_ID)     REFERENCES Participant(participant_ID) ON DELETE CASCADE,
    CONSTRAINT fk_studySession_designStrategy_ID            FOREIGN KEY (designStrategy_ID)     REFERENCES DesignStrategy(designStrategy_ID) ON DELETE RESTRICT
);

CREATE TABLE Screen(
    screen_ID BIGSERIAL,
    screen_name VARCHAR(30) NOT NULL,
    screen_orderIndex INT NOT NULL,
    study_ID BIGINT NOT NULL,

    CONSTRAINT pk_screen_ID      PRIMARY KEY (screen_ID),
    CONSTRAINT fk_screen_study_ID            FOREIGN KEY (study_ID)     REFERENCES Study(study_ID)  ON DELETE CASCADE
);

CREATE TABLE Button(
    button_ID BIGSERIAL,
    button_key VARCHAR(100) NOT NULL,
    button_orderIndex INT,
    screen_ID BIGINT NOT NULL,

    CONSTRAINT pk_button_ID      PRIMARY KEY (button_ID),
    CONSTRAINT fk_button_screen_ID         FOREIGN KEY (screen_ID)     REFERENCES Screen(screen_ID) ON DELETE CASCADE
);

CREATE TABLE Response(
    response_ID BIGSERIAL,
    response_type VARCHAR(50) NOT NULL,
    response_rtMs INT,
    response_submittedAt TIMESTAMPTZ NOT NULL DEFAULT now(),
    response_selectedChoice VARCHAR(100),
    response_metadata JSONB,
    studySession_ID BIGINT NOT NULL,
    screen_ID BIGINT NOT NULL,
    button_ID BIGINT NOT NULL,

    CONSTRAINT pk_response_ID      PRIMARY KEY (response_ID),
    CONSTRAINT fk_response_studySession_ID            FOREIGN KEY (studySession_ID)     REFERENCES StudySession(studySession_ID) ON DELETE CASCADE,
    CONSTRAINT fk_response_screen_ID            FOREIGN KEY (screen_ID)     REFERENCES Screen(screen_ID),
    CONSTRAINT fk_response_button_ID            FOREIGN KEY (button_ID)     REFERENCES Button(button_ID)
);
